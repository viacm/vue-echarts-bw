<template>
  <div class="function">
    <div class="background">
      <img src="../../../static/img/head-view/index-bg.jpg" width="100%" height="100%">
      <span style="position: absolute; bottom: 550px; left: 400px; color:white; font-size: 60px">工业互联网智能运维知识服务系统</span>
    </div>
    <ul class="functions">
      <transition-group enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
        <li v-for="(item,index) in functions" :key="index">
          <router-link :to="'/function/'+item.id">
            <img :src="'../../../static/img/product/'+ item.img" width="400px" height="260px" />
          </router-link>
          <div class="inner-text">
            <h4>{{ item.title }}</h4>
          </div>
        </li>
      </transition-group>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'function',
  data(){
    return {
      functions: [
        {
          id: 1,
          kind: 1,
          img: 'work07.jpg',
          title: '设备运维知识查询'
        },
        {
          id: 2,
          kind: 2,
          img: 'work08.jpg',
          title: '设备故障诊断决策'
        }
      ],
      copy_functions: []
    }
  },
  mounted(){
    this.copy_functions = JSON.parse(JSON.stringify(this.functions));
    this.$emit('headFix', ['absolute',true]);
    window.addEventListener('scroll', this.handleScroll);
  },


  }
</script>

<style lang="scss" scoped>

  .function {
    .background{
      margin: 0px;
      width:100%;
      height:100%;  /**宽高100%是为了图片铺满屏幕 */
      z-index:-1;
      position: absolute;
    }
    .functions>span{
      /*margin: 35vh auto;*/
      position: absolute;
      top:300px;
      left:300px;
      width: 70%;
      display: grid;
      grid-template-columns: repeat(2, 50%);
      row-gap: 3%;
      li {
        position: relative;
        overflow: hidden;
        img {
          transition: all .5s ease-out;
        }
        &:hover img {
          opacity: 0.8;
        }
        &:hover .inner-text{
          visibility: visible;
          top: 78.5%;
        }
        /* 内部文字 */
        .inner-text {
          position: absolute;
          left: 50%;
          right: 10%;
          top: 100%;
          transform: translateX(-50%);
          background: transparent;
          height: 20%;
          width: 400px;
          background-color: rgba(0,0,0,.5);
          color: #ffffff;
          visibility: hidden;
          transition: all .5s ease-out;
          h4 {
            margin-top: 5%;
          }
        }

      }
    }
  }
  // 动画
  @keyframes self-zoomIn {
    from {
      border: 0px solid transparent;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      border: 3px solid #ffffff;
    }

    80% {
      border: 3px solid #ffffff;
    }

    100% {
      border: 3px solid rgb(255, 255, 255);
    }
  }
</style>
