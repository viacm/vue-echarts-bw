/*
 * @Description: '产品中心'页面所有路由
 * @Author: 任录
 * @Date: 2019-07-22 16:50:00
 * @LastEditTime: 2019-07-26 16:48:59
*/

export default [
  {
    path: 'conclusion',
    component: resolve => require(['@/views/conclusion/'], resolve),
    name: 'conclusion',

  },
  {
    path: 'conclusion/search_knowledge',
    component: resolve => require(['@/views/conclusion/search_knowledge'], resolve),
    name: 'conclusion_detail1',

  },
  {
    path: 'conclusion/fault_diagnosis',
    component: resolve => require(['@/views/conclusion/fault_diagnosis'], resolve),
    name: 'conclusion_detail2',
  },
  {
    path: 'conclusion/parts_kg',
    component: resolve => require(['@/views/conclusion/parts_kg'], resolve),
    name: 'conclusion_detail3',
  },
  {
    path: 'conclusion/reason_kg',
    component: resolve => require(['@/views/conclusion/reason_kg'], resolve),
    name: 'conclusion_detail4',
  },
  {
    path: 'conclusion/1',
    component: resolve => require(['@/views/conclusion/fault_knowledge'], resolve),
    name: 'conclusion_detail5',
  },
  {
    path: 'conclusion/2',
    component: resolve => require(['@/views/conclusion/history_fault'], resolve),
    name: 'conclusion_detail6',
  },
  {
    path: 'conclusion/3',
    component: resolve => require(['@/views/conclusion/standard_file'], resolve),
    name: 'conclusion_detail7',
  },
  {
    path: 'conclusion/4',
    component: resolve => require(['@/views/conclusion/history_fault_self'], resolve),
    name: 'conclusion_detail8',
  },

]
