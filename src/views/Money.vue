<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types xxx="hello props"/>
    <Notes/>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
  import NumberPad from '@/components/Money/NumberPad.vue'
  import Types from '@/components/Money/Types.vue'
  import Notes from '@/components/Money/Notes.vue'
  import Tags from '@/components/Money/Tags.vue';
  export default {
    name: 'Money',
    components: {Notes, Tags, Types, NumberPad},
  };
</script>

<style lang="scss">
  /*@import "~@/assets/style/reset.scss";*/
  /*@import "~@/assets/style/helper.scss";*/

  .layout-content {
    display: flex;
    flex-direction:column-reverse;
  }

</style>