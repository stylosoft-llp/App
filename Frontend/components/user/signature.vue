<template>
	<v-dialog :value="value" max-width="400px" @input="$emit('input',$event)">
		<v-card>
			<v-card-title>Signature</v-card-title>
				<vueSignature ref="signature" :w="'100%'" :h="'300px'"></vueSignature>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn outlined @click="$emit('input',false)">Cancel</v-btn>
				<v-btn color="secondary" @click="$refs.signature.clear()">Clear</v-btn>
				<v-btn color="primary" @click="saveSignature()">Save</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import vueSignature from "vue-signature"
export default {
	props:['value'],
	components:{
		vueSignature
	},
	methods:{
		saveSignature(){
			/* Buffer Convert */
			var jpeg = this.$refs.signature.save('image/jpeg');
			/**  
			 * Data URI TO BLOB 🔺 DO NOT TOUCH 
			 * @return blob */
        const splitDataURI = jpeg.split(',')
        const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])

        const ia = new Uint8Array(byteString.length)
        for (let i = 0; i < byteString.length; i++)
            ia[i] = byteString.charCodeAt(i)
        let blob = new Blob([ia], { type: 'jpeg' })
			/* Add To Form */
			let formData = new FormData();
			formData.append('image', blob);
			formData.append("path", '/signatures');
			this.$axios.post('auth/images', formData,{
          headers: { "Content-type": "multipart/form-data" },
        }).then(r => {
				this.$emit('saveSignature',r.data.image);
				this.$toast.success('Signature Saved');
				this.$emit('input',false);
			});
		}
	}
}
</script>

<style>

</style>