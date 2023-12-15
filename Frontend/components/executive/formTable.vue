<template>
	<table style="width:100%" v-if="value">
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
					<div v-if="value.header[vdci].type!='checkbox'" @input="value.data[vdi][vdci]=$event.target.innerText" :contenteditable="true">{{vdc}}</div>
					<v-checkbox hide-details v-else v-model="value.data[vdi][vdci]" true-value="yes" false-value="no"></v-checkbox>
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