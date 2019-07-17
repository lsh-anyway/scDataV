<template>
  <component ref="chart"
             :is="chartOption.component"
             v-bind="chartOption.prop"></component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Chart extends Vue {
  public $refs: any;

  @Prop({
    required: true,
  })
  public id!: string;

  public chartOption = {};

  public async mounted() {
    const res = await this.$http.post(this.$api.chart.show, {
      id: this.id,
    });
    this.chartOption = res.data.data;
  }

  public resize() {
    this.$refs.chart.resize();
  }
}
</script>

<style lang="scss" scoped>
</style>
