<template>
	<v-dialog max-width="800px" :value="value" @input="$emit('input',$event)">
		<v-card class="container">
			<v-card-title>Form Preview  
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="getPrint()">Print</v-btn>
			</v-card-title>
		<v-card id="printable">
			<v-container>
			<div :key="version" class="row">
      <!-- :class="{'col-md-6':del.size=='md','col-md-12':del.size=='lg'}" -->
      <div
        class="col cols-12"
        style="height: 100%"
        :class="{ 'col-md-6': del.size == 'md', 'col-md-12': del.size == 'lg' }"
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
        <v-checkbox
					readonly
          v-else-if="del.title == 'checkbox'"
          :value="del.value"
          :label="del.name"
        />
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
        <hr v-else-if="del.title=='Line'"/>
      </div>
    </div>
	</v-container>
		</v-card>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props:['value','formData'],
	data(){
		return{
			version:1
		}
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
<html><head>${stylesHtml}</head>
  <body><div>${prtHtml}</div></body></html>`);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    },
	},
	components:{
		FormTable: () => import("~/components/executive/formTable"),
	}
}
</script>

<style>

</style>