<template>
  <div>
    <canvas id="polar-chart"></canvas>
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
    const ctx = document.getElementById('polar-chart');
    new Chart(ctx, {type:'polarArea', data: this.chartdata, options:this.options});
  }
}
</script>