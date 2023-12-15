<template>
  <v-layout column align-center class="py-2">
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-2 rounded-lg" color="#ffffff88" height="260">
          <p class="my-0 font-weight-bold">Statistics</p>
          <v-row dense>
            <v-col cols="6" md="6" v-for="(st, sti) in stats" :key="sti">
              <v-card
                v-if="colors[sti]"
                :to="colors[sti].link"
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
                      <v-icon :color="colors[sti].color">
                        {{
                        colors[sti].icon
                        }}
                      </v-icon>
                    </v-card>
                  </v-col>
                  <v-col cols="9">
                    <p class="white--text body-2 my-0">{{ sti }}</p>
                    <h2 class="white--text my-0">{{ st }}</h2>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="rounded-lg" color="#ffffff88" height="260">
          <v-container>
            <v-card-subtitle>Sales This Week</v-card-subtitle>
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
          <v-card-title>Licenses</v-card-title>
          <Polar v-if="packages" :chartdata="packages" :options="{ responsive: true, width: 400, height: 300 }" />
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="#ffffff88" class="pa-2 rounded-lg">
          <v-card-title>Users</v-card-title>
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
  layout: "superDesktop",
  data: () => ({
    labels: [],
    deleting: false,
    time: "",
    analytics: [],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "sun"],
    values: [0, 0, 10, 0, 0, 0, 10],
    stats: [],
    colors: {
      Products: { color: "green darken-1", icon: "mdi-hexagon",link:"#" },
      Queries: { color: "indigo darken-1", icon: "mdi-account-hard-hat",link:"/superadmin/queries" },
      Packages: { color: "red darken-1", icon: "mdi-cube", link:"/superadmin/packages" },
      Customers: { color: "orange darken-1", icon: "mdi-account-tie", link:"/superadmin/users" },
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
    packages: null,
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
      this.$axios.get("super/sales").then((res) => {
        this.labels=res.data.days;
        this.values=res.data.sales;
      });
      this.$axios.get("super/stats").then((res) => {
        this.stats = res.data;
      });
      this.$axios.get("super/packagestats").then((res) => {
        let packages = {
          labels: ["Starter", "Plus", "Pro"],
          datasets: [
            {
              backgroundColor: ["#32cd32", "#FFBF00", "red"],
              data:res.data.data
            },
          ],
        };
        this.packages = packages;
      });
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