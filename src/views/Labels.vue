<template>
  <Layout>
    <ul class="tags" >
      <li>
        <span>衣</span>
        <Icon name="right"></Icon>
      </li>
      <li>
        <span>食</span>
        <Icon name="right"></Icon>
      </li>
      <li>
        <span>住</span>
        <Icon name="right"></Icon>
      </li>
      <li>
        <span>行</span>
        <Icon name="right"></Icon>
      </li>
    </ul>
    <div class="createTag-wrapper">
      <button class="createTag">新建标签</button>
    </div>
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';

export default class Labels extends Vue {
}
</script>

<style lang="scss" scoped>
  .tags{
    background: white;
    font-size: 16px;
    padding-left: 16px;
    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 44px;
      border-bottom: 1px solid #e6e6e6;
      > svg{
        width: 18px;
        height: 18px;
        color:#666;
        margin-right: 16px;
      }
    }
  }

  .createTag {
    background:  #767676;
    color: white;
    border:none;
    border-radius:4px;
    height: 40px;
    padding:0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 28px;
    }
  }
</style>