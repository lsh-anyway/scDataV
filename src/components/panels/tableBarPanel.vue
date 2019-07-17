<template>
  <panel :layout="layout"></panel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import tableBarData from '@/mock/tableBarData';
import { LayoutItem } from '@/@types/interface.d';

@Component
export default class TableBarPanel extends Vue {
  public title = '文章阅读量排名';

  public data = tableBarData.data;

  public layout: LayoutItem[] = [
    {
      x: 0,
      y: 0,
      w: 24,
      h: 12,
      component: 'scTableBar',
      i: '1',
      prop: {
        title: '文章阅读量排名',
        data: tableBarData.data,
      },
    },
  ];
}
</script>
