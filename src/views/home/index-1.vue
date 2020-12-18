<template>
  <div>
<!--    <el-carousel trigger="click" height="20px" @change="loadAnimate">-->

<!--    </el-carousel>-->
    <div style="width:100%;height:35px;border:1px solid #000;color: #2c3e50;background: #2c3e50"> </div>
    <span style="position: absolute; top: 5px; left:5px; color:white; font-size: 20px;text-align: center;">设备故障诊断知识服务</span>

    <ul class="home-kind">
      <li v-for="(item,index) in kind" :key="index">
        <h3>{{ item.title }}<div></div></h3>
        <p>{{ item.info }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import { home } from '../../http/home';

  export default {
    name: "Home",
    data(){
      return {
        kind:[
          {
            title: '故障知识',

          },
          {
            title: '历史故障',

          },
          {
            title: '标准文件',

          }
        ],
      }
    },

  }
</script>
<style lang="scss" scoped>
  .home-kind {
    box-sizing: border-box;
    background-color: #EBEEF5;
    padding: 0 5%;
    display: flex;
    li {
      padding: 1%;
      text-align: center;
      position: relative ;
      box-sizing: border-box;
      width: 25%;
      h3{
        display: inline-block;
        div {
          margin-top: 1%;
          height: 2px;
          width: 40px;
          background-color: #0984E3;
        }
      }
      p {
        margin-top: 1.5%;
        font-size: 14px;
        color: gray;
      }
      h3>div {
        transition: width .5s;
      }
      &:hover {
        background-color: #ffffff;
        transition: background-color .5s;
        h3>div{
          width: 100%;
        }
      }
      &:not(:first-child)::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 80%;
        left: 0;
        background-color: #D6D6D6;
      }

    }
  }

  // 动画类
  .bounceInDown {
    animation: bounceInDown 1s linear;
  }
  .fadeInUp {
    animation: fadeInUp 1s linear;
  }
</style>
