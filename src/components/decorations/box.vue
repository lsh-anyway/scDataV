<template>
  <div class="box">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Box extends Vue {}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // background: linear-gradient(#091b4d, #0f0f23);
  background: RGBA(29, 22, 52, 0.5);
  border-top: 2px solid #1f3564;
  border-bottom: 2px solid #1f3564;
  filter: blur(2px);
  // opacity: 0.6;
  z-index: -1;
}
</style>
