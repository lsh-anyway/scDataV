<template>
  <el-table :data="data"
            border
            stripe>
    <template v-for="(col, index) in schema">
      <template v-if="col.component!==undefined">
        <el-table-column :prop="col.prop"
                         :key="index"
                         :label="col.label"
                         :width="col.width">
          <template slot-scope="scope">
            <component :is="col.component"
                       :data="scope"
                       v-on="col.listeners"></component>
          </template>
        </el-table-column>
      </template>
      <el-table-column v-else
                       :prop="col.prop"
                       :key="index"
                       :label="col.label"
                       :width="col.width">
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Table extends Vue {
  @Prop()
  private data!: any[];

  @Prop()
  private schema!: any[];
}
</script>
