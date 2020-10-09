<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected:selectTags.indexOf(tag) >= 0}" @click="toggle(tag)">{{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() readonly dataSource: string[] | undefined;
  selectTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectTags.indexOf(tag);
    if (index>= 0) {
      this.selectTags.splice(index,1)
    } else {
      this.selectTags.push(tag);
    }
    this.$emit("update:value",this.selectTags)
  }
  createTag(){
    const name = window.prompt("请输入标签名")
    if(!name){
      window.alert("请填写标签名后再点击确定")
    } else if(this.dataSource){
      this.$emit("update:dataSource",[...this.dataSource,name])
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {

  display: flex;
  font-size: 14px;
  padding: 16px;
  felx-grow: 1;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>