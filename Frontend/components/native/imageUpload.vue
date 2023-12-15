<template>
	<div>
		<v-img v-if="image" max-width="200px" contain :src="`${$config.media_url}/${image}`" />
    <div v-else class="mt-6"></div>
		<v-btn style="margin:-20px 0 0 5px;border:2px solid #eee !important;" small color="black" dark @click="$refs['imageUpload'].click()" >Add/Change Image</v-btn>
		<input type="file" hidden ref="imageUpload" id="Image" label="image" @input="uploadImage($event)" />
	</div>
</template>

<script>
export default {
	props:{
		image:{required:true,default:null},
		folder: {required:false,default:'images'}
	},
	methods:{
		uploadImage(e){
			let image = e.target.files[0];
      e.target.value = "";
      if (image === null) {
        return;
      }
      let formdata = new FormData();
      formdata.append("image", image);
      formdata.append("path", this.folder);
      //formdata.append("delete", this.school_logo);
      this.$axios
        .post(`auth/images`, formdata, {
          headers: { "Content-type": "multipart/form-data" },
        })
        .then(
          res => {
            this.cover_image = res.data.image;
						this.$emit('uploaded',res.data.image);
          },
          err => {}
        );
		}
	}
}
</script>

<style>

</style>