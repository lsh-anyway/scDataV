<template>
  <div class="titleDecoration"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class titleDecoration extends Vue {}
</script>

<style lang="scss" scoped>
.titleDecoration {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/TB1Pg3pPXXXXXcxXpXXXXXXXXXX-1920-1080.gif");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 48%;
}
</style>
