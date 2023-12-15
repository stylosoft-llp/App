<template>
  <div>
    <h3>Add/Edit Form</h3>
    <v-row v-if="newField">
      <v-col cols="5">
        <v-select
          label="Type"
          :items="['Text', 'Number', 'File Upload']"
          v-model="newField.field_type"
        ></v-select> </v-col
      ><v-col cols="5">
        <v-text-field label="Name" v-model="newField.field_name"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn @click="$emit('addField',newField)" color="primary"
          ><v-icon>mdi-plus</v-icon></v-btn
        >
      </v-col>
    </v-row>
    <v-simple-table v-if="productForm"> 
			<template v-slot:default>
				<thead>
					<tr>
					<th>Field Name</th>
					<th>Field Type</th>
					<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(fo,foi) in productForm" :key="foi">
						<td>{{fo.field_name}}</td>
						<td>{{fo.field_type}}</td>
						<td><v-btn color="error" @click="$emit('remove',foi)" icon> <v-icon>mdi-close</v-icon></v-btn></td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
  </div>
</template>

<script>
export default {
	props:['productForm'],
  data: () => ({
    newField: {
      field_type: "Text",
      field_name: "",
    },
  }),
};
</script>

<style>
</style>