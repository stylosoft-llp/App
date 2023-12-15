<template>
	<v-container>
	<div class="d-flex flex-wrap">
		<v-text-field dense label="Name" v-model="cat" outlined></v-text-field>
		<v-btn @click="saveCategory()" color="primary">Add</v-btn>
	</div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in categories"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
					<td>
						<v-btn
							@click="deleteCat(item.id)"
							color="error"
							icon small
						>
							<v-icon>
								mdi-delete
							</v-icon>
						</v-btn>
					</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
		</v-container>
</template>

<script>
export default {
	layout:'appDesktop',
	data:()=>({
		categories:[],
		cat:''
	}),
	mounted(){
		this.getCategories();
	},
	methods:{
		getCategories(){
			this.$axios.get('auth/categories').then(res=>
				this.categories = res.data
			)
			.catch(error=>{
				this.$toast.error("Failure")
			})
		},
		saveCategory(){
			this.$axios.post('auth/categories',{name:this.cat}).then((res)=>
			{
				this.$toast.success("Success");
				this.getCategories()
			}
			)
			.catch(error=>{
				this.$toast.error("Failed To Save")
			})
		},
		deleteCat(id){
			this.$axios.delete('auth/categories/'+id)
			.then((res)=>{
				this.$toast.info("deleted");
				this.getCategories()
			},(err)=>{
				this.$toast.error("Failed To Delete")
			})
		}
	}
}
</script>

<style>

</style>