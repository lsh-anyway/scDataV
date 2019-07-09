<template>
  <panel>
    <scTableBar :title="title" :data="data"></scTableBar>
  </panel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import tableBarData from '@/mock/tableBarData';

@Component
export default class TableBarPanel extends Vue {
  public title = '文章阅读量排名';

  public data = tableBarData.data;
}
</script>
