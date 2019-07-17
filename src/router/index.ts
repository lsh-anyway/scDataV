import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: '首页',
      // route level code-splitting
      // this generates a separate chunk (index.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "index" */ '../views/index.vue'),
    },
    {
      path: '/DataSource',
      name: '数据源管理',
      component: () => import(/* webpackChunkName: "index" */ '../views/DataSource/index.vue'),
    },
    {
      path: '/ChartPanel/index',
      name: '图表管理',
      component: () => import(/* webpackChunkName: "index" */ '../views/ChartPanel/index.vue'),
    },
    {
      path: '/ChartPanel/edit',
      name: '图表编辑',
      component: () => import(/* webpackChunkName: "index" */ '../views/ChartPanel/edit.vue'),
    },
    {
      path: '/DashBoard/index',
      name: '仪表盘管理',
      component: () => import(/* webpackChunkName: "index" */ '../views/DashBoard/index.vue'),
    },
    {
      path: '/DashBoard/edit',
      name: '仪表盘编辑',
      component: () => import(/* webpackChunkName: "index" */ '../views/DashBoard/edit.vue'),
    },
  ],
});
