<template>
  <Layout>
    <div class="tags" >
      <router-link v-for="tag in tags" :key="tag.id" class="tag"
                    :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {tagListModel} from '@/Models/tagListModel';

tagListModel.fetch()

@Component
export default class Labels extends Vue {
  tags = tagListModel.data

  createTag(){
    const name = window.prompt("请输入标签名")
    if(name){
      const message = tagListModel.create(name)
      if (message === 'duplicated'){
        window.alert("标签名重复")
      }else if (message === 'success') {
        window.alert('添加成功');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tags{
    background: white;
    font-size: 16px;
    padding-left: 16px;
    > .tag {
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