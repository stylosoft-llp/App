<template>
  <v-dialog :value="value" max-width="400px" @input="$emit('input',$event)">
    <v-card>
      <v-card-title>Activity History</v-card-title>
      <v-card-text>
        <div v-for="(h,hi) in history" :key="hi">
          <v-divider class="my-2"></v-divider>
          <p class="font-weight-bold">{{h.user&&h.user.name}} ({{h.created_at}})</p>
          <tr v-for="(c,ci) in h.changes" :key="ci">
            <td class="font-weight-medium">{{ci|properForm}}&emsp;</td>
            <td>{{ci=='expected_date'?$luxon(c): c}}</td>
          </tr>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outlined color="primary" @click="$emit('input',false)">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["value", "service_id"],
  data: () => ({
    history: [],
  }),
  mounted() {
    this.fetchHistory();
  },
  filters: {
    properForm(value) {
      return value.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    },
  },
  methods: {
    async fetchHistory() {
      await this.$axios
        .get(`/auth/services/${this.service_id}/history`)
        .then(async(res) => {
          let history = [];
            res.data.forEach(async (h) => {
              if (h.changes) {
								history.push(h)
              }
            })
          this.history = history;
        });
    },
    async getAssignedUser(v) {
      return await this.$axios.get(`/auth/users/${v}`).then(
        (res) => {
          return res.data.name;
        },
        (err) => {
          return v;
        }
      );
    },
  },
};
</script>

<style>
</style>