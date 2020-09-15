<template>
  <div>
    <div>当前页面错误，请输入正确网址</div>
    <div>
      <router-link to="/money">返回首页</router-link>

<!--      <a href="/">返回首页 by 'a' </a>-->
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NotFound'
  };
</script>

<style lang="scss" scoped>

</style>