<template>
  <div class="title">
    {{title}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  public title!: string;
}
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 36px;
  text-align: center;
  line-height: 2;
  background-image: url("~@/assets/TB1Pg3pPXXXXXcxXpXXXXXXXXXX-1920-1080.gif");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
