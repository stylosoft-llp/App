<template>
  <v-select
    multiple
		v-bind="textfields"
    :items="items"
    :value="value.split(' ')"
    @input="$emit('input', $event.join(' '))"
  ></v-select>
</template>

<script>
export default {
  props: ["items", "value"],
  data: () => ({
    textfields: {
      outlined: true,
      dense: true,
    },
  }),
};
</script>

<style>
</style>