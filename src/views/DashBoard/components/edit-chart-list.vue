<template>
  <div class="edit-chart-list">
    <scTable :data="data"
             :schema="schema"></scTable>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AddCell from './edit-add-cell.vue';

@Component
export default class ChartList extends Vue {
  private data: any

  private schema: any

  constructor() {
    super();
    this.data = [];
    this.schema = [
      {
        label: '名称',
        prop: 'name',
      },
      {
        label: 'id',
        prop: 'id',
      },
      {
        label: '操作',
        component: AddCell,
        listeners: {
          add: this.add,
        },
      },
    ];
  }

  public mounted() {
    this.$http.post(this.$api.chart.index).then((res) => {
      this.data = res.data.data;
    });
  }

  public add(data: any) {
    this.$emit('add', data);
  }
}
</script>

<style lang="scss" scoped>
</style>
