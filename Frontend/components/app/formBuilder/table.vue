<template>
	<table style="box-shadow: none;" v-if="value">
		<thead style="border-bottom:1px solid grey;">
			<th v-for="(hd,hdi) in value.header" :key="hdi">
				<td v-if="value.header[hdi]">
					<v-text-field v-model="value.header[hdi].val" append-icon="mdi-minus" solo hide-details dense @click:append="removeColumn(hdi)">
					</v-text-field>
					<br/>
					<v-select class="font-weight-regular text-capitalize" hide-details dense v-model="value.header[hdi].type" :items="['text','checkbox']">
					</v-select>
				</td>
			</th>
				<td>
					<v-icon @click="addColumn()">mdi-plus-circle</v-icon>
				</td>
		</thead>
		<tbody>
			<tr v-for="(vd,vdi) in value.data" :key="vdi">
				<td v-for="(vdc,vdci) in vd" :key="vdci">
					<v-checkbox hide-details v-if="value.header[vdci] && value.header[vdci].type=='checkbox'" v-model="value.data[vdi][vdci]" true-value="yes" false-value="no"></v-checkbox>
					<div v-else class="body-1" @input="value.data[vdi][vdci]=$event.target.innerText" :contenteditable="true">{{vdc}}</div>
					</td>
					<td @click="removeRow(vdi)">
						<v-icon>mdi-minus</v-icon>
					</td>
			</tr>
			<tr>
				<td class="d-flex justify-center">
					<v-icon @click="addRow()">mdi-plus-circle</v-icon>
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
	methods:{
		addRow(){
			this.value.data.push(this.value.header.map(()=>''))
		},
		removeRow(r){
			this.value.data.splice(r,1)
		},
		removeColumn(c){
			this.value.data.map((d,di)=>{d.splice(c,1)})
			this.value.header.splice(c,1)
		},
		addColumn(){
			this.value.header.push({type:'',val:'header'})
			this.value.data.forEach(d=>d.push(''))
		}
	}
};
</script>
<style scoped>
table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
}
thead tr {
    background-color: #009879;
    color: #ffffff;
}
th,td {
    padding: 8px 12px;
}
tbody tr {
    border-bottom: 1px solid #dddddd;
}

tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

tbody tr:last-of-type {
    border-bottom: 2px solid var(--v-primary-base);
}
</style>