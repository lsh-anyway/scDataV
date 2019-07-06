<template>
  <div class="panel">
    <div class="bg"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Panel extends Vue {}
</script>

<style lang="scss" scoped>
.panel {
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
    background: linear-gradient(#091b4d, #0f0f23);
    border-top: 2px solid #1f3564;
    border-bottom: 2px solid #1f3564;
    opacity: 0.4;
    z-index: -1;
  }
}
</style>
