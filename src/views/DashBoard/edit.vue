<template>
  <div class="DashBoardEdit">
    <el-card>
      <el-page-header @back="goBack"
                      :content="header">
      </el-page-header>
      <span style="float: right;">
        <el-dropdown trigger="click"
                     style="margin-right: 10px"
                     @command="addChartCommand">
          <el-button type="primary"
                     size="small">
            添加图表<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="chart">添加图表</el-dropdown-item>
            <el-dropdown-item command="text">添加文字</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button size="small"
                   type="primary"
                   @click="showDecorationsList = true">添加装饰</el-button>
        <el-button size="small"
                   type="primary">保存</el-button>
      </span>
    </el-card>
    <div class="content">
      <EditPanel ref="editPanel"
                 :panel="editData.panel"
                 :background="editData.background"
                 :decorationsLayout="editData.decorationsLayout"
                 :chartLayout="editData.chartLayout"
                 :editItem="editItem"
                 @decorationsEdit="decorationsEdit"
                 @chartEdit="chartEdit"></EditPanel>
      <EditForm :data.sync="editData"
                :editItem.sync="editItem"
                @resize="resizeItem"
                @deleteItem="deleteItem"></EditForm>
    </div>
    <el-dialog title="图表列表"
               :visible.sync="showChartList">
      <ChartList @add="addChart"></ChartList>
      <span slot="footer">
        <el-button @click="showChartList = false">关闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="装饰列表"
               :visible.sync="showDecorationsList">
      <DecorationsList @add="addDecorations"></DecorationsList>
      <span slot="footer">
        <el-button @click="showDecorationsList = false">关闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="添加文字"
               :visible.sync="showAddText">
      <el-form :model="addTextForm"
               ref="addTextForm"
               label-width="80px">
        <el-form-item label="组件名称">
          <el-input v-model="addTextForm.name"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="addTextForm.text"
                    placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="字体颜色">
          <el-color-picker v-model="addTextForm.style.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="字体大小">
          <el-input v-model="addTextForm.style.fontSize"></el-input>
        </el-form-item>
        <el-form-item label="行高">
          <el-input-number v-model="addTextForm.style.lineHeight"></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary"
                   @click="addText">确定</el-button>
        <el-button @click="showAddText = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import EditPanel from './components/edit-panel.vue';
import EditForm from './components/edit-form.vue';
import ChartList from './components/edit-chart-list.vue';
import DecorationsList from './components/edit-decorations-list.vue';

const backgroundImage = require('@/assets/bg.png');
// const dashboard = namespace('/dashboard');

@Component({
  components: {
    EditPanel,
    EditForm,
    ChartList,
    DecorationsList,
  },
})
export default class DashBoardEdit extends Vue {
  $refs: any;

  private header: string;

  private editData: any;

  private editItem: any;

  private addTextForm: any;

  private showChartList: boolean;

  private showDecorationsList: boolean;

  private showAddText: boolean;

  constructor() {
    super();
    this.header = '创建dashboard';
    this.editData = {
      background: backgroundImage,
      // background: '',
      panel: 'chart',
      decorationsLayout: [
        {
          x: 10,
          y: 2,
          w: 29,
          h: 4,
          i: '1',
          component: 'titleDecoration',
          name: 'titleDecoration',
        },
        {
          x: 1,
          y: 6,
          w: 6,
          h: 36,
          i: '2',
          component: 'box',
          name: 'box',
        },
        {
          x: 7,
          y: 6,
          w: 19,
          h: 36,
          i: '3',
          component: 'box',
          name: 'box',
        },
        {
          x: 26,
          y: 6,
          w: 7,
          h: 18,
          i: '4',
          component: 'box',
          name: 'box',
        },
        {
          x: 33,
          y: 6,
          w: 7,
          h: 18,
          i: '5',
          component: 'box',
          name: 'box',
        },
        {
          x: 40,
          y: 6,
          w: 7,
          h: 18,
          i: '6',
          component: 'box',
          name: 'box',
        },
        {
          x: 26,
          y: 24,
          w: 7,
          h: 18,
          i: '7',
          component: 'box',
          name: 'box',
        },
        {
          x: 33,
          y: 24,
          w: 7,
          h: 18,
          i: '8',
          component: 'box',
          name: 'box',
        },
        {
          x: 40,
          y: 24,
          w: 7,
          h: 18,
          i: '9',
          component: 'box',
          name: 'box',
        },
      ],
      chartLayout: [
        {
          x: 17,
          y: 0,
          w: 15,
          h: 4,
          i: '1',
          name: '标题',
          type: 'text',
          text: '罗湖区新媒体宣传综合管理平台',
          style: { color: '#fff', fontSize: '36px', lineHeight: 2 },
        },
        {
          x: 26,
          y: 9,
          w: 7,
          h: 15,
          i: '2',
          name: '柱状图',
          type: 'chart',
          component: 'chart',
          prop: { id: 2 },
        },
      ],
    };
    this.editItem = null;
    this.showChartList = false;
    this.showDecorationsList = false;
    this.showAddText = false;
    this.addTextForm = {
      name: '',
      text: '',
      style: {
        color: '',
        fontSize: '',
        lineHeight: '',
      },
    };
  }

  public addChartCommand(type: any) {
    if (type === 'chart') {
      this.showChartList = true;
    } else if (type === 'text') {
      this.showAddText = true;
    }
  }

  public addText() {
    this.editData.chartLayout.splice(0, 0, {
      x: 0,
      y: 0,
      w: 10,
      h: 10,
      i: Date.now(),
      type: 'text',
      ...this.addTextForm,
    });
    this.addTextForm = {
      name: '',
      text: '',
      style: {
        color: '',
        fontSize: '',
        lineHeight: '',
      },
    };
    this.showAddText = false;
  }

  public addChart(data: any) {
    this.editData.chartLayout.splice(0, 0, {
      x: 0,
      y: 0,
      w: 10,
      h: 10,
      i: Date.now(),
      type: 'chart',
      name: data.name,
      component: 'chart',
      prop: { id: data.id },
    });
  }

  public addDecorations(data: any) {
    this.editData.decorationsLayout.splice(0, 0, {
      x: 0,
      y: 0,
      w: 10,
      h: 10,
      i: Date.now(),
      name: data.name,
      component: data.component,
    });
  }

  public resizeItem() {
    this.$nextTick(() => {
      this.$refs.editPanel.$refs[this.editItem.type].handleResize(
        this.editItem.i,
      );
    });
  }

  public deleteItem(index: number) {
    const { editItem } = this;
    this.editItem = null;
    this.editData[`${editItem.type}Layout`].splice(index, 1);
    this.$message({
      type: 'success',
      message: '删除成功!',
    });
  }

  public decorationsEdit(data: any) {
    this.editItem = {
      type: 'decorations',
      i: data.i,
    };
  }

  public chartEdit(data: any) {
    this.editItem = {
      type: 'chart',
      i: data.i,
    };
  }

  public goBack() {
    console.log('goBack');
  }
}
</script>


<style lang="scss" scoped>
.DashBoardEdit {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .el-page-header {
    display: inline-flex;
  }
  .content {
    flex: 1;
    display: flex;
    padding: 10px;
    .edit-form {
      flex: 1 0 300px;
      margin-left: 10px;
    }
  }
}
</style>
