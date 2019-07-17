<template>
  <div class="edit-form">
    <el-card class="dashboard-card">
      <el-form :model="form"
               ref="form"
               label-width="80px"
               size="mini">
        <el-form-item label="背景图片">
          <el-button @click="selectBg"
                     v-if="!form.background">选择背景图片</el-button>
          <EditImage v-else
                     fit="contain"
                     :src="form.background"
                     @unSelect="unSelectBgc"></EditImage>
        </el-form-item>
        <el-switch v-model="form.panel"
                   active-color="#409EFF"
                   inactive-color="#13ce66"
                   active-text="修改图表层"
                   inactive-text="修改装饰层"
                   active-value="chart"
                   inactive-value="decorations">
        </el-switch>
      </el-form>
    </el-card>
    <el-card class="item-card">
      <el-collapse accordion
                   v-model="activeLayout">
        <el-collapse-item title="图表层"
                          name="chart">
          <div style="padding: 10px">
            <el-collapse v-model="activeItem"
                         accordion>
              <el-collapse-item v-for="(layout, index) in form.chartLayout"
                                :key="layout.i"
                                :title="layout.name"
                                :name="layout.i">

                <el-form :model="form"
                         ref="form"
                         size="mini">
                  <el-form-item label="x">
                    <el-input-number v-model="layout.x">
                    </el-input-number>
                  </el-form-item>
                  <el-form-item label="y">
                    <el-input-number v-model="layout.y">
                    </el-input-number>
                  </el-form-item>
                  <el-form-item label="w">
                    <el-input-number v-model="layout.w"
                                     @change="$emit('resize')"></el-input-number>
                  </el-form-item>
                  <el-form-item label="h">
                    <el-input-number v-model="layout.h"
                                     @change="$emit('resize')"></el-input-number>
                  </el-form-item>
                  <template v-if="layout.type === 'text'">
                    <el-form-item label="内容">
                      <el-input v-model="layout.text" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="字体颜色">
                        <el-color-picker v-model="layout.style.color"></el-color-picker>
                    </el-form-item>
                    <el-form-item label="字体大小">
                      <el-input v-model="layout.style.fontSize"></el-input>
                    </el-form-item>
                    <el-form-item label="行高">
                      <el-input-number v-model="layout.style.lineHeight"></el-input-number>
                    </el-form-item>
                  </template>
                  <el-form-item>
                    <el-button plain
                               type="danger"
                               @click="deleteItem(index)"
                               size="mini">删除</el-button>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-collapse-item>
        <el-collapse-item title="装饰层"
                          name="decorations">
          <div style="padding: 10px">
            <el-collapse v-model="activeItem"
                         accordion>
              <el-collapse-item v-for="(layout, index) in form.decorationsLayout"
                                :key="layout.i"
                                :title="layout.name"
                                :name="layout.i">
                <el-form :model="form"
                         ref="form"
                         size="mini">
                  <el-form-item label="x">
                    <el-input-number v-model="layout.x">
                    </el-input-number>
                  </el-form-item>
                  <el-form-item label="y">
                    <el-input-number v-model="layout.y">
                    </el-input-number>
                  </el-form-item>
                  <el-form-item label="w">
                    <el-input-number v-model="layout.w"
                                     @change="$emit('resize')"></el-input-number>
                  </el-form-item>
                  <el-form-item label="h">
                    <el-input-number v-model="layout.h"
                                     @change="$emit('resize')"></el-input-number>
                  </el-form-item>
                  <el-form-item>
                    <el-button plain
                               type="danger"
                               @click="deleteItem(index)"
                               size="mini">删除</el-button>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-dialog title="选择背景图片"
               :visible.sync="selectingBg">
      <div class="image-list">
        <EditImage v-for="(src, index) in imageList"
                   :key="index"
                   :src="src"
                   type="selecting"
                   @select="selectBgc(src)"></EditImage>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Watch, Prop,
} from 'vue-property-decorator';
import EditImage from './edit-image.vue';

const backgroundImage = require('@/assets/bg.png');

@Component({
  components: {
    EditImage,
  },
})
export default class EditPanel extends Vue {
  @Prop()
  public data: any;

  @Prop()
  public editItem: any;

  public itemIndex: any = null;

  public activeLayout: any = null;

  public activeItem: any = null;

  public form: any = this.data;

  public selectingBg: boolean = false;

  public imageList: any[] = [backgroundImage];

  @Watch('data', {
    deep: true,
    immediate: true,
  })
  public onDataChange(val: true) {
    this.form = val;
  }

  @Watch('form', {
    deep: true,
  })
  public onFormChange(val: any) {
    this.$emit('update:data', val);
  }

  @Watch('editItem')
  public getIndex(val: any) {
    this.activeLayout = val.type;
    this.activeItem = val.i;
  }

  @Watch('activeLayout')
  @Watch('activeItem')
  public changeEditItem(val: any) {
    this.$emit('update:editItem', {
      type: this.activeLayout,
      i: this.activeItem,
    });
  }

  public selectBg() {
    this.selectingBg = true;
  }

  public unSelectBgc() {
    this.form.background = '';
  }

  public selectBgc(src: string) {
    this.form.background = src;
    this.selectingBg = false;
  }

  public deleteItem(i: any) {
    this.$confirm('此操作将删除该组件，是否继续', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
      .then(() => {
        this.$emit('deleteItem', i);
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        });
      });
  }
}
</script>

<style lang="scss" scoped>
.edit-form {
  display: flex;
  flex-direction: column;
  height: 100%;
  .dashboard-card {
    flex: 0 0 auto;
  }
  .item-card {
    flex: 1;
    margin-top: 10px;
    overflow: auto;
    .el-icon-remove-outline {
      color: #f56c6c;
      float: right;
      cursor: pointer;
    }
  }
  ::v-deep.el-switch__label {
    font-weight: normal;
    color: #666;
    &.is-active {
      color: #409eff;
    }
  }
  .image-list {
    display: flex;
    .edit-image {
      flex: 0 0 200px;
    }
  }
}
</style>
