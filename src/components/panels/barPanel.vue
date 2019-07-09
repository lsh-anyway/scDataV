<template>
  <panel>
    <scBar :data="chartData" :schema="schema" :mainAxis="mainAxis"></scBar>
  </panel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import barData from '@/mock/barData';

@Component
export default class BarPanel extends Vue {
  public chartData = barData.data;

  public mainAxis = 'yAxis'

  public schema = [{
    label: '日期',
    prop: 'date',
    formatter: '',
    isMainAxis: true,
  }, {
    label: '生命值',
    prop: 'a',
    formatter: '',
    isMainAxis: false,
    hasShadow: true,
  }]
}
</script>
