<template>
  <div>
    <p>Zone Search: <b>{{value.zone}}</b> {{value.address}} </p>
    <div class="d-flex flex-row">
        <v-autocomplete
          dense
          outlined
          @focus="searchZones()"
          clearable
          @input="$event?$emit('input',$event):$emit('input',{})"
          :loading="loadingZones"
          :search-input.sync="zone_search"
          label="Search Zone"
          item-text="zone"
          return-object
          prepend-inner-icon="mdi-magnify"
          :items="zones"
        >
        </v-autocomplete>
    </div>
  </div>
</template>

<script>
export default {
  props:{
  id:{default:null},
	value:{default:{}}
  },
  data: () => ({
    createDialog: false,
    assignee: {},
    zone_search: "",
    zones: [],
    loadingZones: false,
    show1: false,
  }),
  watch:{
    zone_search(){this.searchZones()}
  },
  methods: {
    searchZones() {
      if (this.zone_search?.length <= 2) {
        return;
      }
      this.loadingZones = true;
      this.$axios
        .get(`/auth/users/${this.id}/zones`, {
          params: {
            name: this.zone_search,
            is: this.permissions
          },
        })
        .then(
          (res) => {
            if(res.data && res.data.length){
              this.zones = res.data;
            }
            this.loadingZones = false;
          },
          (err) => {
            this.loadingZones = false;
          }
        );
    },
  },
};
</script>

<style>
</style>