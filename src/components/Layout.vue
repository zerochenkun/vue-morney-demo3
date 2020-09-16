<template>
  <div class="nav-wrapper">
    <p class="content">
      <slot></slot>
    </p>
    <Nav />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout'
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper{
    border:1px solid red;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content{
    flex-grow: 1;
  }
</style>