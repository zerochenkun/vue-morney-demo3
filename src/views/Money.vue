<template>
  <Layout class-prefix="layout">
    {{tags }}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import {recordListModel} from '@/Models/recordListModel';
import {tagListModel} from '@/Models/tagListModel';

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: {FormItem, Tags, Types, NumberPad},
})
export default class Money extends Vue {
  tags = tagList;
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',//'-'表示支出 '+'表示收入
    amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const record2 = recordListModel.deepClone(this.record);
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">

.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>