
<template>
  <div>
    <div :key="version" class="row">
      <!-- :class="{'col-md-6':del.size=='md','col-md-12':del.size=='lg'}" -->
      <div
        class="col col-12"
        style="height: 100%;width:100%"
        :class="{ 'col-md-6': del.size == 'md', 'col-md-12': del.size == 'lg' }"
        v-for="(del, deli) in formData"
        :key="deli"
      >
        <!-- For Heading -->
        <h1 class="mt-1" v-if="del.title == 'heading'" >{{ del.value }}</h1>
        <!-- For Table -->
        <div v-else-if="del.title == 'table'" style="width:100%;overflow-x:scroll;">
          <formTable v-model="del.value" />
        </div>
        <!-- For Spacer -->
        <div v-else-if="del.title == 'spacer'" class="ma-auto" />
        <p class="body-1" v-else-if="del.title == 'text'" v-text="del.value" />
        <v-checkbox
          v-else-if="del.title == 'checkbox'"
          v-model="del.value"
          :label="del.name"
        />
        <v-textarea
          v-else-if="del.title == 'textarea'"
          v-model="del.value"
          :label="del.name"
        />
        <v-text-field
          outlined
          v-else-if="del.title == 'textbox'"
          v-model="del.value"
          :label="del.name"
        />
        <div v-else-if="del.title == 'image upload'">
        <image-upload
          :image="del.value"
          class="my-2"
          @uploaded="del.value=$event"
        />
        </div>
        <v-img v-else-if="del.title=='logo'"
        :src="`${$config.media_url}/${del.value}`"
        max-height="100" contain
         />
      </div>
    </div>
    <form-preview v-model="previewForm" v-if="previewForm" :formData="formData"/>
  </div>
</template>

<script>
import { VTextField } from "vuetify/lib";
import ImageUpload from '../native/imageUpload.vue';
export default {
  props: ["formData"],
  components: {
    VTextField,
    FormTable: () => import("~/components/executive/formTable"),
    FormPreview: () => import("~/components/executive/formPreview"),
    ImageUpload: ()=>import('~/components/native/imageUpload')
  },
  data: () => ({
    fieldTypes: {
      Text: VTextField,
      Number: VTextField,
    },
    previewForm:false,
    version: 1,
  }),
};
</script>

<style>
</style>