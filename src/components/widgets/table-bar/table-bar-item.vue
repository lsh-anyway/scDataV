<template>
  <div class="table-bar-item">
    <div class="title">
      <span class="rank">NO.{{rank}}</span>
      <span class="name"
            ref="wrapper">
        <div class="inner"
             ref="inner"
             :class="wordsLoop">{{name}}</div>
      </span>
    </div>
    <div class="line"
         :style="lineWidth">
      <div class="light"
           :style="ligntTransition"></div>
    </div>
    <div class="line-segment"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TableBarItem extends Vue {
  public $refs: any;

  @Prop({
    type: Number,
    required: true,
  })
  public rank!: number;

  @Prop({
    type: String,
    required: true,
  })
  public name!: string;

  @Prop({
    type: Number,
    required: true,
  })
  public proportion!: number;

  @Prop({
    type: Boolean,
    required: true,
  })
  public transition!: boolean;

  public wordsLoop = '';

  public get lineWidth() {
    return {
      width: `${this.proportion}%`,
    };
  }

  public get ligntTransition() {
    return {
      transform: `translateX(${this.transition ? '-70px' : '220px'})`,
      background: this.transition
        ? ''
        : 'radial-gradient(rgb(40, 248, 255) 5%, rgba(0, 0, 0, 0) 80%)',
    };
  }

  public mounted() {
    setTimeout(() => {
      this.checkNameLength();
    }, 100);
  }

  public checkNameLength() {
    const wrapperWidth = this.$refs.wrapper.clientWidth;
    const innerWidth = this.$refs.inner.clientWidth;
    if (innerWidth > wrapperWidth) {
      this.wordsLoop = 'wordsLoop';
    } else {
      this.wordsLoop = '';
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes wordsLoop {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-100%);
  }
}

.table-bar-item {
  position: relative;
  .title {
    display: flex;
    align-items: center;
    height: 24px;
    .rank {
      font-size: 10px;
      color: #1397ff;
      padding-right: 14px;
    }
    .name {
      display: flex;
      vertical-align: bottom;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      .wordsLoop {
        animation: 5s wordsLoop linear infinite normal;
      }
    }
    margin-bottom: 12px;
  }
  .line {
    height: 4px;
    background: rgb(19, 112, 251);
    display: inline-block;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    left: 0px;
    .light {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 70px;
      height: 2px;
      transition: transform 600ms ease-in-out 0s;
    }
  }
  .line-segment {
    height: 2px;
    background: rgb(13, 57, 146);
    width: 100%;
    display: block;
    overflow: hidden;
    position: relative;
    margin-bottom: 12px;
  }
}
</style>
