<template>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify :value="value" @input="$emit('input',$event)" :extensions="extensions"/>
</template>

<script>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Image,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from 'tiptap-vuetify'
export default {
  props:['value'],
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      Image,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    // starting editor's content
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `
  })
}
</script>
<style>
.tiptap-vuetify-editor{border:1px solid #aaa}
.tiptap-vuetify-editor__content img {
  max-width: 100% !important;
}
</style>