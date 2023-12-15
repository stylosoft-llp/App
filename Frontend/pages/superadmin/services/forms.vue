<template>
		<v-layout container column align-center justify-center>
      <div>

			<v-card-title>Form Preview  
				<v-spacer></v-spacer>
				<v-btn class="ml-1" color="primary" @click="getPrint()">Print</v-btn>
        <v-btn class="ml-1" @click="$router.back()" color="secondary" outlined>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
			</v-card-title>
		<div style="border:0.5px solid grey" id="printable">
			<v-container>
			<div :key="version" class="d-flex flex-wrap">
      <!-- :class="{'col-md-6':del.size=='md','col-md-12':del.size=='lg'}" -->
      <div
        style="height: 100%;display: inline-block;flex-direction: row;"
        :class="{ 'cmd6': del.size == 'md', 'cmd12': del.size == 'lg' }"
        v-for="(del, deli) in formData"
        :key="deli"
      >
        <!-- For Heading -->
        <h1 v-if="del.title == 'heading'" align="center">{{ del.value }}</h1>
        <!-- For Table -->
        <formTable v-else-if="del.title == 'table'" v-model="del.value" />
        <!-- For Spacer -->
        <div v-else-if="del.title == 'spacer'" class="ma-auto" />
        <p class="body-1" v-else-if="del.title == 'text'" v-text="del.value" />
        <div v-else-if="del.title == 'checkbox'">
          <v-btn depressed>
            {{del.value ? '✔':'✘'}} {{del.name}}
          </v-btn>
        </div>
        <div
          v-else-if="del.title == 'textarea'"
        >
				<p class="title">{{del.name}}</p>
				<p class="body-1">{{del.value}}</p>
				</div>
        <v-list-item v-else-if="del.title == 'textbox'"
        >
				<v-list-item-content>
				<v-list-item-subtitle>{{del.name}}</v-list-item-subtitle>
				<v-list-item-title>{{del.value}}</v-list-item-title>
				</v-list-item-content>
				</v-list-item>
        <div
          v-else-if="del.title == 'image upload'"
          style="
            background-color: #e9eef0;
            background-image: url('/image-placeholder.jpg');
            background-size: contain;
            background-position: center center;
            height: 300px;
          "
          class="d-flex align-center justify-center"
        >
        </div>
      </div>
    </div>
	</v-container>
		</div>
      </div>
		</v-layout>
</template>

<script>
export default {
  layout:'appDesktop',
	data(){
		return{
			version:1,
			formData:{},
		}
	},
	beforeMount(){
		this.fetchService();
	},
	methods:{
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
      const WinPrint = window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );
      WinPrint.document.write(`<!DOCTYPE html>
<html><head>${stylesHtml}<style>
</style></head>
  <body><div>${prtHtml}</div></body></html>`);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    },
		fetchService(){
			this.$axios.get('auth/services/'+this.$route.query.id)
			.then((r)=>{
				this.service = r.data;
				this.formData = r.data?.form?.data || [];
			})
		},
	},
	components:{
		FormTable: () => import("~/components/executive/formTable"),
	}
}
</script>

<style scoped>
.cmd6{
  width:49%;
}
.cmd12{
  width: 100% !important;
}
table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
}
thead tr {
  border:1px solid black;
}
th{
    padding: 8px 12px;
  border:1px solid black;
}
tbody tr td {
  border:1px solid black;
}

tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

tbody tr:last-of-type {
    border-bottom: 2px solid var(--v-primary-base);
}
</style>