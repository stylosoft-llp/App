<template>
	<table style="width:100%;min-width: none !important;" v-if="value">
		<thead>
			<tr>
			<th v-for="(hd,hdi) in value.header" :key="hdi">
				{{hd.val}}
			</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(vd,vdi) in value.data" :key="vdi">
				<td v-for="(vdc,vdci) in vd" :key="vdci">
					<div v-if="value.header[vdci].type!='checkbox'">{{vdc}}</div>
					<p v-else>
						<v-icon>
							{{value.data[vdi][vdci] == 'yes' ? 'mdi-checkbox-marked-outline' : 'mdi-checkbox-blank-outline'}}
						</v-icon>
					</p>
					</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	props:['value'],
	data:()=>({
		
	}),
	mounted(){
	}
};
</script>
<style scoped>
th, td {
  padding: 5px;
  text-align: left;
}
td, th {
	border: 0.5px solid grey;
}
</style>