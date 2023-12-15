<template>
  <v-layout column align-center class=" py-2">
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-2 rounded-lg" color="#ffffff88" :height="$vuetify.breakpoint.xl?'500':'260'">
          <p class="my-0 font-weight-bold">Statistics</p>
          <v-row dense style="height:100%">
            <v-col width="100%" height="100%" cols="6" md="6" v-for="(st, sti) in stats" :key="sti">
              <v-card
                v-if="colors[sti]"
                :to="'/app/'+sti"
                height="100%"
                class="rounded-lg py-6 white--text"
                :elevation="6"
                dark
                :color="colors[sti].color"
              >
                <v-row>
                  <v-col class="d-flex align-center justify-end" cols="3">
                    <v-card
                      outlined
                      style="box-shadow: 2px 2px 4px 0px #00000055"
                      light
                      class="pa-2"
                    >
                      <v-icon :color="colors[sti].color" :size="$vuetify.breakpoint.xl?'100':'24'">{{
                        colors[sti].icon
                      }}</v-icon>
                    </v-card>
                  </v-col>
                  <v-col cols="9" :class="$vuetify.breakpoint.xl &&'d-flex flex-column'">
                    <p :style="$vuetify.breakpoint.xl &&'font-size:40px !important;'" class="my-0">{{ sti }}</p>
                    <h2 :style="$vuetify.breakpoint.xl &&'font-size:60px;'" class="my-0">{{ st }}</h2>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="rounded-lg" color="#ffffff88" :height="$vuetify.breakpoint.xl?'500':'260'">
          <v-container>
            <v-card-subtitle> Tickets Of This Week </v-card-subtitle>
            <v-sparkline
              :labels="labels"
              color="blue"
              class="font-weight-bold"
              :value="values"
              :gradient="['red', 'purple', 'blue']"
              :smooth="10"
              :padding="20"
              :height="80"
              :line-width="2"
              stroke-linecap="round"
              gradient-direction="bottom"
              auto-draw
            ></v-sparkline>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="#ffffff88" class="pa-2 rounded-lg">
          <v-card-title>Tasks List</v-card-title>
          <Polar
            v-if="chart2Data"
            :chartdata="chart2Data"
            :options="{ responsive: true, width: 400, height: 300 }"
          />
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="#ffffff88" class="pa-2 rounded-lg">
          <v-card-title>Users</v-card-title>
          <Doughnut
            v-if="chartData"
            :chartdata="chartData"
            :options="{ responsive: true, width: 400, height: 300 }"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  transition: { name: "home" },
  layout: "appDesktop",
  data: () => ({
    labels: [],
    deleting: false,
    time: "",
    analytics: [],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "sun"],
    values: [0, 0, 0, 0, 0, 0, 0],
    stats: [],
    colors: {
      Products: { color: "green darken-1", icon: "mdi-account-hard-hat" },
      Services: { color: "indigo darken-1", icon: "mdi-account-tie" },
      Customers: { color: "red darken-1", icon: "mdi-account-tie" },
      Users: { color: "orange darken-1", icon: "mdi-account-tie" },

    },
    chartData: null,
    chart2Data: null,
  }),
  mounted() {
    setInterval(this.updateTime, 1);
    this.analyze();
  },

  components: {
    Doughnut: () => import("~/components/Charts/doughnut.vue"),
    Polar: () => import("~/components/Charts/polar.vue"),
  },
  methods: {
    updateTime() {
      var today = new Date();

      var time =
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds() +
        ":" +
        today
          .getMilliseconds()
          .toLocaleString("en-us", { minimumIntegerDigits: 3 });
      this.time = time;
    },
    analyze() {
      this.$axios.get("admin/analytics").then((res) => {
        this.labels=res.data.days;
        this.values=res.data.sales;
      });
      this.$axios.get("admin/tasks").then((res) => {
        let data = [res.data.Closed, res.data.Processing, res.data.Validation,res.data.Unassigned];
        console.log(data);
        let chart2Data = {
          labels: ["Closed", "Pending", "Validation",'Unassigned'],
          datasets: [
            {
              backgroundColor: ["#32cd32", "#FFBF00", "grey",'red'],
              data: data,
            },
          ],
        }
        this.chart2Data = chart2Data;
      });
      this.$axios.get("admin/stats").then((res) => {
        this.stats = res.data;
        let chartdata = {
          labels: ["Active", "Inactive"],
          datasets: [
            {
              backgroundColor: ["blue", "#00acee"],
              data: [3, 1],
            },
          ],
        };
        chartdata.datasets[0].data = [res.data['Active'],res.data['Inactive']];
        this.chartData=chartdata;
      });
    },
    removeOldShippings() {
      if (window.confirm("Confirm Deleting Shippings Older Than 90 Days?")) {
        this.deleting = true;
        this.$axios.post("auth/admin/destroy-old").then(
          (res) => {
            this.$toast.success("Deleted Successfully", {
              icon: "mdi-check-circle",
            });
            this.deleting = false;
          },
          (err) => {}
        );
      }
    },
  }, //methods
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: all 0.5s;
  transform: scale(1);
}
.home-enter,
.home-leave-active {
  all: 0;
  transform: scale(0.9);
}
</style>