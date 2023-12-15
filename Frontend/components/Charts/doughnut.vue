<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js'

export default {
  name: 'PlanetChart',
	props:['chartdata','options'],
  data() {
		return {}
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, {type:'doughnut', data: this.chartdata, options:this.options});
  }
}
</script>