<template>
  <div class="table-bar" ref="list">
      <table-bar-item v-for="(item, index) in formatData"
                      v-bind="item"
                      :key="index"
                      :rank="index+1"
                      :proportion="proportion(item.value)"
                      :transition="transitionIndex === index"></table-bar-item>
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
      const length = Math.floor((height - 40) / 45);
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

  public resize() {
    this.calcItemLen();
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
  widows: 100%;
  color: #fff;
  box-sizing: border-box;
  padding: 20px;
}
</style>
