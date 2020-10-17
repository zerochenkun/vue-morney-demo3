<template>
  <layout>
    <div>
      <Icon name="left"></Icon>
      <span>编辑标签</span>
    </div>
    <FormItem field-name="标签名" placeholder="请输入标签名"></FormItem>
  </layout>
</template>

<script>
import Vue from "vue";
import {Component} from 'vue-property-decorator';
import {tagListModel} from "@/Models/tagListModel";
import FormItem from "@/components/Money/FormItem";
@Component({
  components: {FormItem}
})
export default class EditLabels extends Vue {
  created() {
    const id = this.$route.params.id
    tagListModel.fetch()
    const tags = tagListModel.data
    const tag = tags.filter(t => t.id === id)[0]
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404')
    }
  }
}
</script>

<style scoped>

</style>