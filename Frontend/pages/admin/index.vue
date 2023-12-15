<template>
  <v-layout container column class="ma-0 py-2">
    <v-row>
      <v-col md="6">
        <v-card class="pa-2 rounded-lg" color="#ffffff88" height="260">
          <p class="my-0 font-weight-bold">Statistics</p>
          <v-row dense>
            <v-col md="6" v-for="(st, sti) in stats" :key="sti">
              <v-card
                v-if="colors[sti]"
                class="rounded-lg py-6"
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
                      <v-icon :color="colors[sti].color">{{
                        colors[sti].icon
                      }}</v-icon>
                    </v-card>
                  </v-col>
                  <v-col cols="9">
                    <p class="body-2 my-0">{{ sti }}</p>
                    <h2 class="my-0">{{ st }}</h2>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card class="rounded-lg" color="#ffffff88" height="260">
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
      <v-col md="6">
        <v-card color="#ffffff88" class="pa-2 rounded-lg">
          <v-card-title>Tasks List</v-card-title>
          <Polar
            :chartdata="chart2Data"
            :options="{ responsive: true, width: 400, height: 300 }"
          />
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card color="#ffffff88" class="pa-2 rounded-lg">
          <v-card-title>Tasks</v-card-title>
          <Doughnut
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
  layout: "adminDesktop",
  data: () => ({
    labels: [],
    deleting: false,
    time: "",
    analytics: [],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "sun"],
    values: [0, 0, 10, 0, 0, 0, 10],
    stats: [],
    colors: {
      Farmers: { color: "green darken-1", icon: "mdi-account-hard-hat" },
      Managers: { color: "indigo accent-4", icon: "mdi-account-tie" },
      Executives: {
        color: "deep-purple accent-3",
        icon: "mdi-account-wrench-outline",
      },
      Ponds: { color: "light-blue accent-3", icon: "mdi-waves" },
    },
    chartData: {
      labels: ["Active", "Inactive"],
      datasets: [
        {
          backgroundColor: ["blue", "#00acee"],
          data: [3, 1],
        },
      ],
    },
    chart2Data: {
      labels: ["Completed", "Pending", "Cancelled",'unassigned'],
      datasets: [
        {
          backgroundColor: ["#32cd32", "#FFBF00", "grey",'red'],
          data: [7, 2, 6,3],
        },
      ],
    },
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
        //this.labels=res.data.days;
        //this.values=res.data.sales;
      });
      this.$axios.get("admin/stats").then((res) => {
        this.stats = res.data;
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