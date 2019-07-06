<template>
  <panel class="table-bar">
    <div class="title">{{title}}</div>
    <table-bar-item v-for="(item, index) in formatData"
                    v-bind="item"
                    :key="index"
                    :rank="index+1"
                    :proportion="proportion(item.value)"
                    :transition="transitionIndex === index"></table-bar-item>
  </panel>
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

  public transitionIndex: number;

  public transitionTimer: any;

  constructor() {
    super();
    this.transitionIndex = 0;
    this.transitionTimer = null;
  }

  public get formatData() {
    return this.data.sort((a, b) => b.value - a.value);
  }

  @Watch('data', {
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
.title {
  font-size: 18px;
  margin-bottom: 24px;
}
</style>
