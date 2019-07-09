<template>
  <div class="card">
    <div class="bg"></div>
    <div class="title">{{title}}</div>
    <div class="main">
      <span class="prefix">{{prefix}}</span>
      <span class="content">{{content}}</span>
      <span class="suffix">{{suffix}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop()
  public title: any;

  @Prop()
  public prefix: any;

  @Prop()
  public content: any;

  @Prop()
  public suffix: any;
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 12px;
  color: #fff;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: RGBA(0, 123, 255, 0.1);
    // opacity: 0.4;
    z-index: -1;
    filter: blur(2px);
  }
  .title {
    font-size: 14px;
    font-weight: lighter;
    color: #1397ff;
    margin-bottom: 14px;
  }
  .main {
    display: flex;
    align-items: center;
    font-size: 24px;
    .prefix {
      margin-right: 10px;
    }
    .content {
      color: #ff4e00;
      font-weight: normal;
    }
    .suffix {
      color: #1397ff;
    }
  }
}
</style>
