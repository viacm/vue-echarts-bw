/*
 * @Description: '产品中心'页面所有路由
 * @Author: 任录
 * @Date: 2019-07-22 16:50:00
 * @LastEditTime: 2019-07-26 16:48:59
*/

export default [
  {
    path: 'function',
    component: resolve => require(['@/views/function/'], resolve),
    name: 'function',

  },
  {
    path: 'function/1',
    component: resolve => require(['@/views/function/search'], resolve),
    name: 'function_detail',

  },
  {
    path: 'function/2',
    component: resolve => require(['@/views/function/diagnosis'], resolve),
    name: 'function_detail',
  },

]
