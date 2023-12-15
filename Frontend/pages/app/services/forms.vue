<template>
  <v-layout container column align-center justify-center>
    <div>
      <v-card-title
        >Form Preview
        <v-spacer></v-spacer>
        <v-btn class="ml-1" color="primary" @click="getPrint()">Print</v-btn>
        <v-btn class="ml-1" :to="`/app/services/editForm?id=${$route.query.id}`" color="secondary" outlined>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn class="ml-1" :to="`/app/services/editor?id=${$route.query.id}`" color="secondary" outlined>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-card-title>
      <div class="d-flex flex-wrap align-center" style="gap:10px">
        Show:
        <v-checkbox v-model="show.logo" label="Logo"></v-checkbox>
        <v-checkbox v-model="show.company" label="Company Name"></v-checkbox>
        <v-checkbox v-model="show.address" label="Address"></v-checkbox>
        <v-checkbox v-model="show.sign" label="Customer Sign."></v-checkbox>
      </div>
      <div
        style="border: 0.5px solid grey; border-radius: 10px"
        :style="$vuetify.breakpoint.mdAndUp ? 'width:200mm' : 'width:100%'"
        id="printable"
      >
        <v-container>
          <div style="text-align:center;" v-if="$auth.user && $auth.user.company">
            <img style="width:260px" v-if="show.logo && $auth.user.company.logo_url" :src="`${$config.media_url}/${$auth.user.company.logo_url}`"/>
            <h2 style="margin:4px" v-if="show.company">{{ $auth.user.company.name }}</h2>
            <p style="margin:4px" v-if="show.address">{{$auth.user.company.address_1}}<br>
              {{$auth.user.company.city}} {{ $auth.user.company.state }} - {{$auth.user.company.pincode }} <span>• Phone:{{ $auth.user.company.phone }}</span>
            </p>
          </div>
          <div :key="version" class="d-flex flex-wrap">
            <div
              style="border: 0.5px solid grey; padding: 10px 40px 10px 10px; width:max-content; max-width:40%"
              v-if="service && service.customer"
            >
            <p>Customer Name: {{ service.customer.id }}</p>
              <p>Customer Name: {{ service.customer.name }}</p>
              <p v-if="service.customer.user_detail.company_name">Company: {{ service.customer.user_detail.company_name }}</p>
              <p>Phone: {{ service.customer.phone }}</p>
              <p>E-Mail: {{ service.customer.email }}</p>
              <div v-if="service.customer.user_detail">
                <p>Address: {{ service.customer.user_detail.address_1 }}</p>
                <p>{{ service.customer.user_detail.address_2 }}</p>
                <p>{{ service.customer.user_detail.city }} {{ service.customer.user_detail.state }} {{ service.customer.user_detail.country }}</p>
                <p>{{ service.customer.user_detail.pincode }}</p>
              </div>
              <div v-if="service.zone">
                <p class="font-weight-bold">Zone: {{service.zone.zone}}</p>
                <p>{{service.zone.address}}</p>
              </div>
              
            </div>
            <!-- :class="{'col-md-6':del.size=='md','col-md-12':del.size=='lg'}" -->
            <div
              style="height: 100%; display: inline-block; flex-direction: row"
              :class="{ cmd6: del.size == 'md', cmd12: del.size == 'lg' }"
              v-for="(del, deli) in formData"
              :key="deli"
            >
              <!-- For Heading -->
              <h2 style="margin:10px;text-align:center;" v-if="del.title == 'heading'">
                {{ del.value }}
              </h2>
              <!-- For Table -->
              <formTable
                class="ma-1"
                v-else-if="del.title == 'table'"
                v-model="del.value"
              />
              <!-- For Spacer -->
              <div v-else-if="del.title == 'spacer'" class="ma-auto" />
              <p
                class="body-1 ma-1"
                v-else-if="del.title == 'text'"
                v-text="del.value"
              />
              <div style="padding:4px" v-else-if="del.title == 'checkbox'">
                <v-icon>{{
                  del.value
                    ? "mdi-checkbox-marked-outline"
                    : "mdi-checkbox-blank-outline"
                }}</v-icon>
                {{ del.name }}
              </div>
              <div style="padding:4px" v-else-if="del.title == 'textarea'">
                <p class="title">{{ del.name }}</p>
                <p class="body-1">{{ del.value }}</p>
              </div>

              <v-list-item v-else-if="del.title == 'textbox'">
                <v-list-item-content style="padding:4px">
                  <v-list-item-subtitle v-if="del.name">{{ del.name }}</v-list-item-subtitle>
                  <v-list-item-title>{{ del.value }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <img
                v-else-if="del.title == 'image upload'"
                :src="`${$config.media_url}/${del.value}`"
                style="width: 100%"
              />
              <div
                v-else-if="del.title == 'logo'"
                :style="`background:#fff url(${$config.media_url}/${del.value}) no-repeat center center;min-height:80px;background-size:contain !important;`"
              ></div>
              <hr v-else-if="del.title == 'Line'" />
            </div>
          </div>
          <hr style="margin-top: 5px; margin-bottom: 5px" />
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div v-if="service && service.time_location">
              <v-icon>mdi-clock-outline</v-icon>
              <div v-if="service.time_location.start">
                Work Start@
                {{ $luxon(service.time_location.start.time, "med") }} <br/> <a target="_blank" :href="`https://maps.google.com/?q=${service.time_location.start.coordinates.latitude},${service.time_location.start.coordinates.longitude}`">Start Location: Lat:{{ service.time_location.start.coordinates.latitude }} Long:{{ service.time_location.start.coordinates.longitude }}</a><br/>
                <v-icon>mdi-clock</v-icon>
              </div>
              <div v-if="service.time_location.end">
                Work Stop@ {{ $luxon(service.time_location.end.time, "med") }} <br/> <a target="_blank" :href="`https://maps.google.com/?q=${service.time_location.end.coordinates.latitude},${service.time_location.end.coordinates.longitude}`"> Finish Location: Lat:{{ service.time_location.end.coordinates.latitude }} Long:{{ service.time_location.end.coordinates.longitude }}</a>
              </div>
                <div><strong>Activity Remarks:</strong> {{ service.remarks }}</div>
            </div>
            <div style="display:flex;flex-direction:column" v-if="show.sign">
              <img v-if="service.signature"
              style="width:100px;height:100px;object-fit:contain;"
              :src="`${$config.media_url}/${service.signature}`"/>
              Customer Signature
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  layout: "appDesktop",
  data() {
    return {
      version: 1,
      formData: {},
      service: {},
      show:{
        logo:true,
        company:true,
        address:true,
        sign:true
      }
    };
  },
  beforeMount() {
    this.fetchService();
  },
  methods: {
    getPrint() {
      // Get HTML to print from element
      const prtHtml = document.getElementById("printable").innerHTML;

      // Get all stylesheets HTML
      let stylesHtml = "";
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML;
      }

      // Open the print window
      const WinPrint = window.open(
        "",
        "",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );
      WinPrint.document.write(`<!DOCTYPE html>
<html><head>${stylesHtml}<style>
</style></head>
  <body><div>${prtHtml}</div></body></html>`);
      WinPrint.onload=function(){
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      }
    },
    fetchService() {
      this.$axios.get("auth/services/" + this.$route.query.id).then((r) => {
        this.service = r.data;
        this.formData = r.data?.form?.data || [];
      });
    },
  },
  components: {
    FormTable: () => import("~/components/app/formTable"),
  },
};
</script>

<style scoped>
.cmd6 {
  width: 49%;
}
.cmd12 {
  width: 100% !important;
}
table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
}
thead tr {
  border: 1px solid black;
}
th {
  padding: 8px 12px;
  border: 1px solid black;
}
tbody tr td {
  border: 1px solid black;
}

tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

tbody tr:last-of-type {
  border-bottom: 2px solid var(--v-primary-base);
}
p{
  margin-bottom: 5px;
}
</style>