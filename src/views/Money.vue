<template>
  <Layout class-prefix="layout">
  {{recordList}}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
const model = require('@/model.js').model
console.log(model);

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createDate?: Date;
}
@Component({
  components: {Notes, Tags, Types, NumberPad},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '理财', '娱乐', '教育'];
  record: Record = {
    tags : [],
    notes :  '',
    type :  '-',//'-'表示支出 '+'表示收入
    amount : 0
  };
  recordList: Record[] = model.fetch()

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord(){
    const deepCloneRecord = JSON.parse(JSON.stringify(this.record))
    deepCloneRecord.createDate = new Date()
    this.recordList.push(deepCloneRecord)
  }

  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
}
</script>

<style lang="scss">

.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>