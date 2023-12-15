<template>
  <v-layout column align-center justify-center fill-height>
    <v-card width="100%">
      <v-card-text>
        <div class="d-flex flex-row my-2">
          <v-btn small color="primary" @click="$router.back()" outlined
            ><v-icon>mdi-arrow-left</v-icon></v-btn
          ><v-spacer></v-spacer>
          <h2 class="black--text">{{service.name||'Task Activity'}}</h2>
        </div>
        <v-container>
          <!-- 
            Activity Triggers
           -->
          <div v-if="service"  class="my-6">
            <div v-if="service.customer">
              <p class="font-weight-bold mb-1">Customer: {{service.customer.name}} • {{ service.customer?.user_detail?.company_name||'' }}</p>
            <div v-if="service.customer.user_detail">
              {{ service.customer.user_detail.address_1 }} {{ service.customer.user_detail.address_2 }}<br/>
              {{ service.customer.user_detail.city }} {{ service.customer.user_detail.state }} {{ service.customer.user_detail.country }} <br/>{{ service.customer.phone }}
            </div>
          </div>
          <p v-if="service.zone" class="font-weight-bold mb-1">Zone: {{service.zone.zone}}</p>
          <p v-if="service.zone">{{service.zone.address}}</p>
          <v-alert v-model="geoUndefined">Geolocation Unavailable</v-alert>
          <v-btn :loading="geoLocating" v-if="!service.time_location || !service.time_location.start" @click="addRecord()" color="primary">
           <v-icon left>mdi-clock-fast</v-icon> Start Activity</v-btn>
          <v-textarea outlined v-model="service.remarks" label="Activity Remarks" rows="2" class="my-2"/>
          <!-- 
            Activity Table
             -->
          <v-simple-table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Date/Time</th>
<!--                 <th>Location</th> -->
              </tr>
            </thead>
            <tbody v-if="service.time_location">
              <tr v-if="service.time_location.start">
                <td>Start</td>
                <td>{{service.time_location.start.time&&$luxon(service.time_location.start.time,'meds')}}</td>
                 <td v-if="service.time_location.start.coordinates"><a target="_blank" :href="`https://maps.google.com/?q=${service.time_location.start.coordinates.latitude},${service.time_location.start.coordinates.longitude}`">{{'Latitude: '+service.time_location.start.coordinates.latitude}} <br/> {{'Longitude: ' + service.time_location.start.coordinates.longitude}}</a></td>
              </tr>
              <tr v-if="service.time_location.end">
                <td>Finish</td>
                <td>{{service.time_location.end.time&&$luxon(service.time_location.end.time,'meds')}}</td>
                 <td><a target="_blank" :href="`https://maps.google.com/?q=${service.time_location.end.coordinates.latitude},${service.time_location.end.coordinates.longitude}`">{{service.time_location.end.coordinates && 'Latitude:'+service.time_location.end.coordinates.latitude}} <br/> {{'Longitude: ' + service.time_location.end.coordinates.longitude}}</a></td>
              </tr>
            </tbody>
            <div class="amber--text text--darken-3 font-weight-bold" v-else>No Time/Location Added</div>
          </v-simple-table>
          </div>

        <!-- 

              SERVICE FORM

        -->

          <v-card outlined :disabled="service.time_location && service.time_location.end"  class="container">
            <v-chip color="primary" style="top:-25px;" label>Form</v-chip>
        <serviceForm
          :formData="serviceFormData"
          @changeValue="changeValue($event)"
        />
          </v-card>
          <img v-if="service.signature"
          style="width:100px;height:100px;"
           :src="`${$config.media_url}/${service.signature}`"/>
           <br>
          <v-btn outlined @click="signatureToggle=true" color="primary"> <v-icon left>mdi-signature-freehand</v-icon>Add Signature</v-btn>
          <v-btn :loading="geoLocating" v-if="service.time_location && service.time_location.start && !service.time_location.end" @click="addRecord()" color="accent"> <v-icon left>mdi-check-bold</v-icon> Finish Activity</v-btn>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="updateService()"
          color="primary"
          class="spl-btn mx-auto"
          
          large
          :loading="loading"
          type="submit"
          block
        >
          Save Service</v-btn
        >
      </v-card-actions>
    </v-card>
    <!-- Signature -->
    <signature @saveSignature="service.signature=$event;updateService()" v-if="signatureToggle" v-model="signatureToggle"/>
  </v-layout>
</template>

<script>
export default {
  layout: "userDesktop",
  data: () => ({
    loading: false,
    service: {},
    serviceFormData: [],
    signatureToggle: false,
    geoUndefined:false,
    geoLocating:false
  }),
  components: {
    serviceForm: () => import("~/components/executive/serviceForm.vue"),
    signature: () => import("~/components/user/signature.vue"),
  },
  mounted() {
    if (this.$route.query.id) {
      this.fetchService();
    }
  },
  methods: {
    changeValue(e) {
      let sfd = this.serviceFormData;
      sfd[e[1]] = e[0];
      this.serviceFormData = sfd;
    },
    fetchService() {
      this.$axios.get("auth/services/" + this.$route.query.id).then((r) => {
        this.service = r.data;
        this.serviceFormData = r.data?.form?.data || [];
      });
    },
    updateService() {
      let id = this.$route.query.id || null;
      let service = this.service;
      service.form = this.serviceFormData;
      this.loading=true;
      this.$axios
        .put("auth/tasks/" + id, service)
        .then(
          (res) => {
            this.$toast.success("Service Saved", { icon: "mdi-check-circle" });
            if (!this.$route.query.id) {
              this.$router.replace({
                query: { ...this.$route.query, id: res.data.id },
              });
            }
          },
          (err) => {
            this.$toast.error("An Error Occured While Saving");
          }
        ).finally(()=>{
          this.loading=false;
        });
        
    },

    addRecord(v) {
      this.geoLocating=true;
      if (!navigator.geolocation) {
        geoUndefined=true;
        return;
      }
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const coordinates = {
          accuracy: coords.accuracy,
          latitude: coords.latitude,
          longitude: coords.longitude,
        };
        //let address = this.geoCode(coords.longitude, coords.latitude);
        let time = new Date().toISOString();
        let service = this.service;
        let time_location = service.time_location || {};
        if (time_location.start && time_location.start.time) {
          time_location.end = {
            time: time,
            coordinates: coordinates,
          };
          this.service.ticket_status='Validation';
          this.$toast.show('Activity Finished');
        } else {
          time_location.start = {
            time: time,
            coordinates: coordinates,
          };
          this.$toast.show('Activity Started');
        }
        this.service.time_location={...time_location};
        this.geoLocating=false;
        this.updateService();
      },(err)=>{
        this.$toast.error(err.message);
        this.geoLocating=false;
      });
    }, //geolocate()
    geoCode(longitude, latitude) {
      this.longitude = longitude;
      this.latitude = latitude;
      return;
      this.$axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=locality,place,region&access_token=pk.eyJ1Ijoib3duZWFyIiwiYSI6ImNqenljaGZwdjA1NzgzbnFoNXJucDN0cWkifQ.-tT0ZJBV0V0cVrncpFKimw`
        )
        .then(
          (res) => {
            let features = res.data.features;
            /*             let location = {
              address: features[0].place_name,
              city: features[1].text,
              state: features[2].text,
            }; */
            this.location = features[0].place_name;
            //this.$store.commit('setLocation',location);
            this.$emit("set-location", [this.coordinates, this.location]);
            this.manual = false;
          },
          (err) => {
            this.$emit("unable");
          }
        );
    }, //GEOCODE()
  },
};
</script>

<style>
</style>