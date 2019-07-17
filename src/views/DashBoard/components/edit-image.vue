<template>
  <div class="edit-image"
       @mouseenter="showMask = true"
       @mouseleave="showMask = false">
    <el-image :src="src"
              fit="contain"></el-image>
    <div class="mask"
         v-show="showMask">
      <i class="el-icon-view"
         @click="preview"></i>
      <el-divider direction="vertical"></el-divider>
      <i class="el-icon-delete"
         v-if="type === 'selected'"
         @click="unSelect"></i>
      <i class="el-icon-check"
         v-if="type === 'selecting'"
         @click="select"></i>
    </div>
    <el-dialog :visible.sync="previewing"
               class="preview-dialog"
               append-to-body>
      <el-image :src="src"
                fit="contain"></el-image>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class EditImage extends Vue {
  @Prop()
  public src!: string;

  @Prop({
    default: () => 'selected',
  })
  public type!: string;

  public showMask: boolean = false;

  public previewing: boolean = false;

  public preview() {
    this.previewing = true;
  }

  public unSelect() {
    this.$emit('unSelect');
  }

  public select() {
    this.$emit('select');
  }
}
</script>

<style lang="scss" scoped>
.edit-image {
  display: inline-block;
  position: relative;
  line-height: 1;
  .el-image {
    vertical-align: bottom;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c0c4cc;
    font-size: 24px;
    i {
      cursor: pointer;
    }
  }
}
</style>

<style lang="scss">
.preview-dialog {
  .el-dialog {
    background-color: transparent;
    box-shadow: none;
    .el-dialog__headerbtn .el-dialog__close {
      color: #303133;
    }
  }
}
</style>
