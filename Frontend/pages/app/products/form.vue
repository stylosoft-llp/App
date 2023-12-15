<template>
  <v-layout class="pa-2">
    <v-row>
      <v-col md="2">
        <draggable
          style="width:100%; top: 200px"
          :list="source"
          :sort="false"
          :clone="cloneDog"
          :group="{ name: 'elements', pull: 'clone', put: false }"
          class="row dense ma-1"
          ghost-class="ghost"
        >
          <v-col
            class="col cols-12 col-md-12"
            v-for="(sel, seli) in source"
            :key="seli"
          >
            <v-card
              @dblclick="addToDestination(sel)"
              class="text-center pa-2 d-flex flex-row align-center justify-space-between"
            >
              <v-icon large>{{ sel.icon }}</v-icon>
              <div style="text-transform:capitalize">{{ sel.title }}</div>
            </v-card>
          </v-col>
          <!-- -->
        </draggable>
      </v-col>
      <v-col md="10">
        <v-card-title>
          Form Template
          <v-spacer></v-spacer>
          <v-btn @click="saveForm()" dark color="blue">Save Changes</v-btn>
        </v-card-title>
        <v-card flat color="#eee" class="pa-4">
          <draggable
            :list="destination"
            :key="version"
            :group="{ put: true }"
            :sort="true"
            class="row"
            handle=".handle"
          >
            <!-- :class="{'col-md-6':del.size=='md','col-md-12':del.size=='lg'}" -->
            <v-card
              class="col cols-12"
              style="height: 100%"
              outlined
              v-for="(del, deli) in destination"
              :key="deli"
              :class="{
                'col-md-2': del && del.size == 'xxs',
                'col-md-3': del && del.size == 'xs',
                'col-md-4': del && del.size == 'sm',
                'col-md-6': del && del.size == 'md',
                'col-md-12': del && del.size == 'lg',
              }"
            >
            <div class="secondary--text" style="text-align: right;font-weight: bold;text-transform:capitalize;">{{ del.title }}</div>
              <div v-if="del">
                <!-- Adjustment Icons -->
                <div class="formTools d-flex">
                  <v-select  dense style="width:80px" hide-details v-model="del.size" :items="['lg','md','sm','xs','xxs']" append-icon="mdi-arrow-left-right-bold"/>
<!--                   <v-btn
                    small
                    :color="del.size == 'lg' ? 'blue' : 'grey'"
                    @click="resizeEl(deli, 'lg')"
                    icon
                  >
                    <v-icon>mdi-arrow-left-right</v-icon>
                  </v-btn> -->
<!--                   <v-btn
                    small
                    :color="del.size == 'md' ? 'blue' : 'grey'"
                    @click="resizeEl(deli, 'md')"
                    icon
                  >
                    <v-icon>mdi-fraction-one-half</v-icon>
                  </v-btn> -->
                  <v-btn
                    small
                    color="red"
                    @click="destination.splice(deli, 1)"
                    icon
                  >
                    <v-icon>mdi-close-circle</v-icon>
                  </v-btn>
                  <v-icon class="handle">mdi-cursor-move</v-icon>
                </div>
                <!-- For Heading -->
                <v-text-field
                  class="display-1 formHeading"
                  v-model="del.value"
                  :contenteditable="true"
                  v-if="del.title == 'heading'"
                  hint="Give a heading somewhere in the form"
                ></v-text-field>
                <!-- For Table -->
                <FormTable
                  v-else-if="del.title == 'table'"
                  v-model="del.value"
                />
                <!-- For Spacer -->
                <div v-else-if="del.title == 'spacer'" class="ma-auto" />
                <v-textarea
                  outlined rows="2"
                  hint="Provide some description in the form"
                  v-else-if="del.title == 'text'"
                  v-model="del.value"
                />
                <v-text-field
                  style="margin-top: 0"
                  v-else-if="
                    ['checkbox', 'textarea', 'textbox'].includes(del.title)
                  "
                  v-model="del.name"
                  :label="del.title"
                  :hint="`Enter the name of the ${del.title} input. This will ask input from user`"
                >
                  <template v-if="del.title == 'checkbox'" v-slot:append-outer>
                    <v-checkbox hide-details v-model="del.value"></v-checkbox>
                  </template>
                </v-text-field>
                <div
                  v-else-if="del.title == 'image upload'"
                  style="background-color: #e9eef0;background-image: url('/image-placeholder.jpg');background-size: contain;background-position: center center;height: 300px;"
                  class="d-flex align-center justify-center"
                >
                  <v-text-field
                    class="mt-auto"
                    style="max-width: 400px"
                    v-model="del.name"
                    label="Image label"
                  ></v-text-field>
                </div>
                <div
                  v-else-if="del.title == 'logo'"
                  :style="`background:#fff url(${$config.media_url}/${del.value}) no-repeat center center;max-height:100px;background-size:contain !important;`"
                ></div>
                <v-divider v-else-if="del.title=='Line'" class="my-2"></v-divider>
              </div>
            </v-card>

            <!-- -->
            <v-card
              slot="footer"
              class="item col-md-12 d-flex align-center justify-center"
              outlined
              style="border: 1px dashed black;height: 100px;background: transparent;
              "
            >
              Double Click/ Drag an item here from the left pane
            </v-card>
          </draggable>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  layout: "appDesktop",
  data: () => ({
    destination: [],
    drag: false,
    version: 1,
  }),
  components: {
    FormTable: () => import("~/components/app/formBuilder/table"),
  },
  computed: {
    id: {
      get() {
        return this.$route.query.pid;
      },
      set(v) {
        this.$router.push({
          query: Object.assign({}, this.$route.query, { pid: v }),
        });
      },
    },
    source() {
      let logo_url = this.$auth.user?.company?.logo_url;
      return [
        {
          icon: "mdi-format-header-increase",
          title: "heading",
          value: "heading",
        },
        {
          icon: "mdi-format-text",
          title: "text",
          value: "This is random text",
        },
        { icon: "mdi-dice-multiple", title: "logo", value: logo_url || "" },
        { icon: "mdi-image", title: "image upload", value:'' },
        { icon: "mdi-keyboard-space", title: "spacer", value:'' },
        {
          icon: "mdi-checkbox-intermediate",
          title: "checkbox",
          name: "checkbox",
          value: true,
        },
        {
          icon: "mdi-table",
          title: "table",
          value: {
            header: [{val:"col1",type:''}, {val:"col2",type:''}, {val:"col3",type:'checkbox'}],
            data: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
            ],
          },
        },
        { icon: "mdi-form-textbox", title: "textbox",value:'' },
        { icon: "mdi-form-textarea", title: "textarea", value:'' },
        { icon: "mdi-minus", title: "Line", value:'' },
      ];
    },
  },
  mounted() {
    this.loadForm();
  },
  methods: {
    log(e) {
      console.log(e);
    },
    cloneDog({ title, value }) {
      return {
        title: title,
        value: JSON.parse(JSON.stringify(value)),
        size: "lg",
      };
    },
    resizeEl(deli, size) {
      let el = this.destination[deli];
      el.size = size;
      this.$nuxt.$set(this.destination, deli, el);
    },

    saveForm() {
      this.$axios
        .put(`/auth/products/${this.id}/form-templates`, {
          data: this.destination,
          type: this.$route.query.type,
        })
        .then(
          (res) => {
            this.$toast.success("Form Saved", { icon: "mdi-check-circle" });
          },
          (err) => {
            this.$toast.error("Something Went Wrong", {
              icon: "mdi-information",
            });
          }
        );
    },
    loadForm() {
      this.$axios
        .get(
          `/auth/products/${this.id}/form-templates?type=${this.$route.query.type}`
        )
        .then(
          (res) => {
            this.destination = res.data.data || [];
          },
          (err) => {
            this.$toast.error("Cannot Load Saved Form", {
              icon: "mdi-information",
            });
          }
        );
    },
		addToDestination(sel) {
			let selection = JSON.parse(JSON.stringify(sel));
			delete selection.icon;
			selection.size = 'lg';
			this.destination.push(selection);
		},
  },
};
</script>
<style lang="scss">
.ghost {
  max-width: 140px;
}
.formHeading {
  &.v-input__slot::before {
    border: none;
  }
  &.v-input input {
    max-height: 40px;
  }
}
.formTools { 
  right: 0;
  top: 0;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 4px grey;
  padding: 2px;
  margin: 2px;
  z-index: 1;
  opacity: 0.1;
  &:hover{
    opacity: 1 !important;
  }
}
</style>