<template>
  <div>
    <label class="notes">
      <span class="name">{{this.fieldName }}</span>
      <input type="text" :placeholder="this.placeholder" v-model.trim="value">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class extends Vue {
  value = '';

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder? = '在这里输入备注';

  @Watch('value')
  onValueChange(value: string, oldValue: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>