<template>
  <div class="simple-table">
    <div class="bg"></div>
    <div class="content">
      <div class="row"
           v-for="(item, index) in data"
           :key="index">
        <div class="label">{{item.label}}</div>
        <div class="value">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SimpleTable extends Vue {
  @Prop()
  public data!: any[];

  @Prop()
  public schema!: any[];
}
</script>

<style lang="scss" scoped>
.simple-table {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .bg {
    filter: blur(2px);
    border-left: 2px solid RGBA(0, 123, 255, 0.4);
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    line-height: 2;
    .row {
      display: flex;
      justify-content: space-between;
      color: #1397ff;
      .label {
        font-size: 14px;
      }
      .value {
        font-size: 18px;
      }
    }
  }
}
</style>
