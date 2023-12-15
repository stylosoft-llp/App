<template>
  <v-layout column>
    <div id="chatBody" class="px-2">
      <div class="d-flex flex-row justify-top">
        <v-textarea
          rows="3"
          auto-grow
          filled
          color="black"
          background-color="amber lighten-4"
          label="Your Message"
          class="ma-2"
          v-model="message"
        ><template v-slot:append>
        <v-btn large class="ma-2" color="primary darken-2" @click="sendMessage()"
          >Send</v-btn
        >
        </template>
        </v-textarea>
      </div>
      <v-card
        style="max-width: 60%"
        class="my-2 pa-2"
        :class="
          m.from === $auth.user.id
            ? 'ml-auto teal lighten-4'
            : 'mr-auto '
        "
        v-for="(m, mi) in messages"
        :key="mi"
      >
        <p v-html="multiline(m.body)"></p>
        <div class="d-flex font-italic body-2">
          <b>{{ m.from === $auth.user.id ? 'Me' : m.user_name }}</b>
          <v-spacer></v-spacer>
          <span class="">{{
            m.created_at && new Date(m.created_at).toDateString()
          }}</span>
        </div>
      </v-card>
    </div>
  </v-layout>
</template>

<script>
export default {
	props:['current_room'],
  data() {
    return {
      message: "",
      messages: [],
      currentUserId: 1234,
    };
  },
  mounted() {
    this.getMessages();
/*     this.$nuxt.$on("new-message", (e) => {
      let msg = e.message;
      if (e.message.user_id !== this.$auth.user.id) {
        let messages = this.messages;
        messages.unshift({
          message: msg.message,
          user_name: msg.user_name,
          created_at: msg.created_at,
        });
      this.$nextTick(() => {
        this.messages = messages;
      });
      }
    }); */
    setInterval(() => {
      this.getMessages();
    }, 5000);
  },
  methods: {
    getMessages() {
      this.$axios.get(`auth/conversations/${this.current_room}/messages`).then((res) => {
        this.$nextTick(() => {
          this.messages = res.data.data;
        });
      });
      //setTimeout(this.getMessages, 3000);
    },
    sendMessage() {
      this.$axios
        .post(`auth/conversations/${this.current_room}/messages`, {
          message: this.stringified,
        })
        .then(
          (res) => {
						let messages = this.messages;
            messages.unshift(res.data);
						this.messages = messages;
            this.message = "";
          },
          (err) => {}
        );
    },
    multiline(v) {
      return v?v.split("\n").join("<br/>"):"";
    },
  },
	computed:{
		stringified(){
			return JSON.parse(JSON.stringify(this.message));
		}
	}
};
</script>