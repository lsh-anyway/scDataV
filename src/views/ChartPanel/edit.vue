<template>
  <div class="edit">
    <el-card>
      <el-page-header @back="goBack"
                      :content="header">
      </el-page-header>
      <span style="float: right;">
        <el-button size="mini"
                   type="primary">保存</el-button>
        <el-button size="mini"
                   type="primary"
                   icon="el-icon-download"></el-button>
      </span>
    </el-card>
    <div class="container">
      <el-card body-style="width: 200px;" class="data-card">
        <dataForm></dataForm>
      </el-card>
      <el-card class="chart-card">
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import dataForm from './components/dataForm.vue';

@Component({
  components: {
    dataForm,
  },
})
export default class ChartPanelEdit extends Vue {
  private header = '创建图表';

  public goBack() {
    console.log('go back');
  }
}
</script>

<style lang="scss" scoped>
.edit {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-page-header {
  display: inline-flex;
}
.container {
  flex: 1;
  display: flex;
  padding: 10px;
  .data-card {
    margin-right: 20px;
  }
  .chart-card {
    flex: 1;
  }
}
</style>
