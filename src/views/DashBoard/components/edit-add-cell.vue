<template>
  <div class="edit-add-cell">
    <el-button size="mini"
               icon="el-icon-plus"
               @click="add"></el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AddCell extends Vue {
  @Prop()
  public data: any;

  public add() {
    this.$emit('add', this.data.row);
  }
}
</script>

<style lang="scss" scoped>
.edit-add-cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
