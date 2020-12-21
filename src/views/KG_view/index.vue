<template>
  <div class="d3-index">
    <div class="h1-title">
      <h1>设备运维知识图谱</h1>
    </div>
    <!-- 第一个布局 绘制知识图谱主图 -->
    <div class="div-main">
      <svg width="800" height="600" style="margin-right:80px;margin-bottom:-40px;" id="svg1">
      </svg>

      <!-- 绘制图例 -->
      <div class="indicator">
      </div>

      <!-- 绘制模式选择 -->
      <div class="mode">
        <span class="active" style="border-top-right-radius:0;border-bottom-right-radius:0;">节点</span>
        <span style="border-top-left-radius:0;border-bottom-left-radius:0;position:relative;left:-5px;">文字</span>
      </div>

      <!-- 绘制搜索框 -->
      <div class="d3-search">
        <input type="text" class="form-control">
      </div>

      <!-- 绘制右边显示结果 -->
      <div id="info">
        <h4></h4>
      </div>

    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'd3-index',
    data(){
      return {
        scenarios: [
          {
            id: 1,
            kind: 1,
            img: 'work01.jpg',
            title: '大型起重机'
          },
        ],
        copy_products: []
      }
    },
    mounted(){
      this.copy_scenarios = JSON.parse(JSON.stringify(this.scenarios));
      this.$emit('headFix', ['absolute',true]);
      window.addEventListener('scroll', this.handleScroll);
    },
  }

</script>

<style lang="scss" scoped>
  .d3-index{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #9dadc1;
      padding: 30px 40px;
      text-align: center;
      font-family: OpenSans-Light, PingFang SC, Hiragino Sans GB, Microsoft Yahei, Microsoft Jhenghei, sans-serif;
      .h1-title{
        color:#fff;
        font-size:32px;
        margin-bottom:0px;
        text-align:center;
        margin-left:40px;
      }
      .div-main{
        text-align: center;
        position:relative;
      }
  }

    .indicator {
      position: absolute;
      left: 60px;
      bottom: 20px;
      text-align: left;
      color: #f2f2f2;
      font-size: 12px;
    }

    .indicator>div {
      margin-bottom: 4px;
    }

    .indicator span {
      display: inline-block;
      width: 30px;
      height: 14px;
      position: relative;
      top: 2px;
      margin-right: 8px;
    }
    /*设置节点及边的样式*/
    .links line {
      stroke: rgb(240, 240, 240);
      stroke-opactity: 0.2;
    }
    .links line.inactive {
      /*display: none !important;*/
      stroke-opacity: 0.3;
    }
    .nodes circle {
      stroke: #fff;
      stroke-width: 1.5px;
    }
    .nodes circle:hover {
      cursor: pointer;
    }
    .nodes circle.inactive {
      /* display: none !important; */
      opacity: 0.3;
    }
    .texts text {
      display: none;
    }
    .texts text:hover {
      cursor: pointer;
    }
    .texts text.inactive {
      /* display: none !important; */
      opacity: 0.3;
    }
    /*mode选项样式*/
    .mode {
      position: absolute;
      top: 160px;
      left: 60px;
    }

    .mode span {
      display: inline-block;
      border: 1px solid #fff;
      color: #fff;
      padding: 6px 10px;
      border-radius: 4px;
      font-size: 14px;
      transition: color, background-color .3s;
      -o-transition: color, background-color .3s;
      -ms-transition: color, background-color .3s;
      -moz-transition: color, background-color .3s;
      -webkit-transition: color, background-color .3s;
    }

    .mode span.active, .mode span:hover {
      background-color: #fff;
      color: #333;
      cursor: pointer;
    }

    /*悬浮节点的info样式*/
    .info {
      position: absolute;
      bottom: 40px;
      right: 30px;
      text-align: right;
      width: 270px;
    }
    .info p {
      color: #fff;
      font-size: 12px;
      margin-top: 0;
      margin-bottom: 5px;
    }
    .info p span {
      color: #888;
      margin-right: 10px;
    }
    .info h4 {
      color: #fff;
    }
    /*搜索框样式*/
    .d3-search{
      input {
        position: absolute;
        top: 220px;
        left: 60px;
        color: #fff;
        border: none;
        outline: none;
        box-shadow: none;
        width: 200px;
        background-color: #666;
      }
    }
</style>
