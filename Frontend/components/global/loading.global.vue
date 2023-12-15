<template>
<div style="margin:auto; width:100%;" :style="`padding:${padding};`" class="fill-height text-center">
		<v-progress-circular color="primary" :size="50" :width="5" indeterminate></v-progress-circular>
		</div>
</template>
<script>
export default{
	name:'Loading',
	props:['padding']
}
</script>