<template>
  <div>
    <el-form :model="form"
             ref="form"
             label-width="80px"
             label-position="top">
      <el-form-item label="数据源">
        <el-select v-model="form.resource"
                   placeholder="请选择数据源">
          <el-option v-for="item in resourceOptions"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="字段">

      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class dataForm extends Vue {
  private form = {
    resource: '',
  };

  private resourceOptions = []
}
</script>
