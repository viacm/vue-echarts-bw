/*
 * @Description: '产品中心'页面所有路由
 * @Author: 任录
 * @Date: 2019-07-22 16:50:00
 * @LastEditTime: 2019-07-26 16:48:59
*/

export default [
  {
    path: 'KG_view',
    component: resolve => require(['@/views/KG_view/'], resolve),
    name: 'KG_view',

  },
  {
    path: 'KG_view/index',
    component: resolve => require(['@/views/KG_view/index'], resolve),
    name: 'KG_view_detail1',
  },



]
