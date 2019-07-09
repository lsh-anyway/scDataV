<template>
  <div class="table-bar">
    <div class="title">{{title}}</div>
    <div class="table-bar-list" ref="list">
      <table-bar-item v-for="(item, index) in formatData"
                      v-bind="item"
                      :key="index"
                      :rank="index+1"
                      :proportion="proportion(item.value)"
                      :transition="transitionIndex === index"></table-bar-item>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import tableBarItem from './table-bar-item.vue';

@Component({
  components: {
    tableBarItem,
  },
})
export default class TableBar extends Vue {
  public $refs: any

  @Prop({
    type: String,
    required: true,
  })
  public title!: string;

  @Prop({
    type: Array,
    required: true,
  })
  public data!: any[];

  public visibleData!: any[];

  public transitionIndex: number;

  public transitionTimer: any;

  constructor() {
    super();
    this.transitionIndex = 0;
    this.transitionTimer = null;
    this.visibleData = [];
  }

  public get formatData() {
    return this.visibleData.sort((a, b) => b.value - a.value);
  }

  @Watch('data', {
    immediate: true,
    deep: true,
  })
  public calcItemLen() {
    this.$nextTick(() => {
      const height = this.$refs.list && this.$refs.list.clientHeight;
      const length = Math.floor(height / 45);
      this.visibleData = this.data.slice(0, length - 1);
    });
  }

  @Watch('visibleData', {
    immediate: true,
    deep: true,
  })
  public generateTransition(val: any) {
    const { length } = val;
    if (this.transitionTimer) {
      clearInterval(this.transitionTimer);
    }
    this.transitionTimer = setInterval(() => {
      if (this.transitionIndex < length) {
        this.transitionIndex++;
      } else {
        this.transitionIndex = 0;
      }
    }, 600);
  }

  public destroyed() {
    if (this.transitionTimer) {
      clearInterval(this.transitionTimer);
    }
  }

  public deactivated() {
    if (this.transitionTimer) {
      clearInterval(this.transitionTimer);
    }
  }

  public proportion(val: any) {
    return val / this.formatData[0].value * 100;
  }
}
</script>

<style lang="scss" scoped>
.table-bar {
  height: 100%;
  color: #fff;
  .title {
    font-size: 18px;
    margin-bottom: 24px;
  }
  .table-bar-list {
    position: relative;
    height: calc(100% - 42px);
  }
}
</style>
