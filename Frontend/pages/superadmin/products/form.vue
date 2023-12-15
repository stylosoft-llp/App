<template>
  <v-layout class="pa-2">
    <v-row>
      <v-col md="2.5">
        <draggable
					style="position:fixed;width:280px;top:80px"
          :list="source"
          :sort="false"
					:clone="cloneDog"
          :group="{ name: 'elements', pull: 'clone', put: false }"
					class="row dense ma-1"
					ghost-class="ghost"
        >
				<v-col class="col cols-12 col-md-6" style="padding:2px" v-for="(sel, seli) in source" :key="seli">
          <v-card outlined class="text-center pa-1">
            <v-icon large>{{sel.icon}}</v-icon>
						<div>{{sel.title}}</div>
          </v-card>
				</v-col>
          <!-- -->
        </draggable>
      </v-col>
      <v-col md="9">
			<v-card-title>
			Form Template
			<v-spacer></v-spacer>
			<v-btn @click="saveForm()" dark color="blue">Save Changes</v-btn>
		</v-card-title>
        <v-card flat color="#eee" class="pa-4">
          <draggable :list="destination" :key="version" :group="{put:true}" :sort="true"  class="row" handle=".handle">
						<!-- :class="{'col-md-6':del.size=='md','col-md-12':del.size=='lg'}" -->
            <v-card class="col cols-12" style="height:100%;" outlined  v-for="(del, deli) in destination" :key="deli" :class="{'col-md-6':del&&del.size=='md','col-md-12':del&&del.size=='lg'}">
							<div v-if="del">
							<!-- Adjustment Icons -->
							<div style="right:0;top:0;position:absolute;background-color:white;border-radius:5px;box-shadow:0 0 4px grey;padding:2px;margin:2px;">
							<v-btn small color="red" @click="destination.splice(deli,1)" icon> <v-icon>mdi-close-circle</v-icon> </v-btn>
							<v-btn small :color="del.size=='lg'?'blue':'grey'" @click="resizeEl(deli,'lg')" icon> <v-icon>mdi-arrow-left-right</v-icon> </v-btn>
							<v-btn small :color="del.size=='md'?'blue':'grey'" @click="resizeEl(deli,'md')" icon> <v-icon>mdi-fraction-one-half</v-icon> </v-btn>
							<v-icon class="handle">mdi-cursor-move</v-icon>
							</div>
							<!-- For Heading -->
							<v-text-field class="display-1" v-model="del.value" :contenteditable="true" v-if="del.title=='heading'"></v-text-field>
							<!-- For Table -->
							<FormTable v-else-if="del.title=='table'" v-model="del.value" />
							<!-- For Spacer -->
							<div v-else-if="del.title=='spacer'" class="ma-auto"/>
							<v-textarea v-else-if="del.title=='text'" v-model="del.value"/>
							<v-text-field style="margin-top:0" v-else-if="['checkbox','textarea','textbox'].includes(del.title)" v-model="del.name" :label="del.title" :hint="`Enter the name of the ${del.title} input`" >
								<template v-if="del.title=='checkbox'" v-slot:append-outer>
									<v-checkbox hide-details v-model="del.value"></v-checkbox>
								</template>
							</v-text-field>
							<div v-else-if="del.title=='image upload'" style="background-color:#e9eef0;background-image:url('/image-placeholder.jpg');background-size:contain;background-position:center center;height:300px;" class="d-flex align-center justify-center">
							<v-text-field class="mt-auto" style="max-width:400px;" v-model="del.name" label="Image label"></v-text-field>
							</div>
							</div>
            </v-card>
						
            <!-- -->
					<v-card slot="footer" class="item col-md-12 d-flex align-center justify-center" outlined style="border:1px dashed black;height:100px;background:transparent">
							Drag an item here from the left pane
					</v-card>
          </draggable>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
	layout:'superDesktop',
  data: () => ({
    destination: [],
    drag: false,
		version:1,
		source:[
			{icon:'mdi-format-header-increase',title:'heading',value:'heading'},
			{icon:'mdi-format-text',title:'text',value:'This is random text'},
			{icon:'mdi-dice-multiple',title:'logo'},
			{icon:'mdi-image',title:'image upload'},
			{icon:'mdi-keyboard-space',title:'spacer'},
			{icon:'mdi-checkbox-intermediate',title:'checkbox',name:'checkbox',value:true},
			{icon:'mdi-table',title:'table',value:{header:['col1','col2','col3'],data:[['1','2','3'],['4','5','6'],['7','8','9']]}},
			{icon:'mdi-form-textbox',title:'textbox'},
			{icon:'mdi-form-textarea',title:'textarea'},
		]
  }),
	components:{
		FormTable:()=>import('~/components/app/formBuilder/table')
	},
	computed:{
		id:{
			get(){
				return this.$route.query.pid;
			},
			set(v){
        this.$router.push({query: Object.assign({}, this.$route.query, { pid: v }),});
			}
		}
	},
	mounted(){
		this.loadForm();
	},
  methods: {
		log(e){
			console.log(e);
		},
		cloneDog({ title,value }) {
      return {
        title: title,
				value: value,
				size:'lg'
      };
    },
		resizeEl(deli,size){
			let el = this.destination[deli];
			el.size = size;
			this.$nuxt.$set(this.destination,deli,el);
		},

		saveForm(){
			this.$axios.put(`/auth/products/${this.id}/form-templates`,{data:this.destination, type: this.$route.query.type})
			.then((res)=>{
				this.$toast.success('Form Saved',{icon:'mdi-check-circle'});
				},(err)=>{
				this.$toast.error('Something Went Wrong',{icon:'mdi-information'});
			})
		},
	loadForm(){
			this.$axios.get(`/auth/products/${this.id}/form-templates?type=${this.$route.query.type}`)
			.then((res)=>{
				this.destination = res.data.data || [];
				},(err)=>{
				this.$toast.error('Cannot Load Saved Form',{icon:'mdi-information'});
			})
	},	
	},
};
</script>
<style>
.ghost{max-width:140px}
</style>