<template>
  <div class="parts_kg">

    <div style="width:100%;height:35px;border:1px solid #000;color: #2c3e50;background: #2c3e50"> </div>
    <span style="position: absolute; top: 5px; left:5px; color:white; font-size: 20px;text-align: center;">设备故障知识查询</span>
    <div class="search-input">
      <input type="text" placeholder="电缆/接线" v-model="keyword" @keyup="get($event)" @keydown.enter="search()" @keydown.down="selectDown()" @keydown.up.prevent="selectUp()">
      <!-- 这是一个小叉叉，点击它可清除输入框内容 -->
      <span class="search-reset" @click="clearInput()">&times;</span>
      <button class="search-btn" @click="search()"> 查询 </button>
    </div>

    <div class="mytext">
      <span style="position: absolute; top: 216px; left:15%; color:black; font-size: 20px;text-align: center; background: white">设备运维知识图谱</span>
    </div>
    <div class="svg_device">
      <!--      <embed src="static/img/conclusion/设备.svg" width="100%" height="100%"-->
      <!--             type="image/svg"-->
      <!--             pluginspage="http://www.adobe.com/svg/viewer/install/" />-->
      <!--      <iframe src="../../../static/img/conclusion/设备.svg" width="800" height="720" align="middle">-->
      <!--      </iframe>-->
      <!--      <picture>-->
      <!--        <source srcset="../../../static/img/conclusion/设备.svg",type="image/svg+xml">-->
      <!--        <img src="../../../static/img/conclusion/设备.svg" style=" display: block;width: 330px;height: 240px">-->
      <!--      </picture>-->
      <embed src="../../../static/img/conclusion/部位.svg" style="display:block ;width:800px;height: 500px;background: #ffffff;"/>
    </div>

    <div class="parts" >

    </div>
    <div class="parts-title">
      <h2>电缆/接线</h2>
    </div>

    <div class="parts-device" >
      <div class="parts-device-title"><h3>所在设备名称</h3></div>
      <ul>
        <li>1. <router-link :to="'../conclusion/search_knowledge'">交流鼠笼式异步电动机</router-link></li>
        <li>2. 检测元件</li>
      </ul>
    </div>
    <div class="parts-fault">
      <div class="parts-fault-title"><h3>该设备可能发生的故障</h3></div>
      <ul>
        <li>1. 油库跳泵</li>
        <li>2. 导板故障</li>
        <li>3. 马达故障</li>
      </ul>
    </div>
    <div class="parts-reason">
      <div class="parts-reason-title"><h3>产生故障可能的原因</h3></div>
      <ul>
        <li>1. 紧固/接触不良（油库跳泵）</li>
        <li>2. 损坏（导板故障）</li>
        <li>3. <router-link :to="'../conclusion/reason_kg'">部件干涉（导板故障）</router-link></li>
        <li>4. 环境因素（马达故障）</li>
      </ul>
    </div>
    <div class="parts-phenomenon">
      <div class="parts-phenomenon-title"><h3>故障现象</h3></div>
      <ul>
        <li>1. 压力异常（油库跳泵）</li>
        <li>2. 阀关闭不严（导板故障）</li>
        <li>3. 电流异常（马达故障）</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data: function() {
      return {
        myData: [],//用来接收ajax得到的数据
        keyword: '',//v-model绑定的输入框的value
        now: -1,
        searchIndex: 0,
      }
    },
    mounted() {
      document.querySelector('body').setAttribute('style', 'background-color:#f0fcfa')
    },
    beforeDestroy() {
      document.querySelector('body').removeAttribute('style')
    },
    methods: {
      // &event是实参，表示event对象
      get: function(ev) {
        // 如果按得键是上或者下，就不进行ajax
        if (ev.keyCode == 38 || ev.keyCode == 40) {
          return;
        }
        this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
          this.myData = res.data.s;
        });
      },
      selectDown: function() {
        this.now++;
        //到达最后一个时，再按下就回到第一个
        if (this.now == this.myData.length) {
          this.now = 0;
        }
        this.keyword = this.myData[this.now];
      },
      selectUp: function() {
        this.now--;
        //同上
        if (this.now == -1) {
          this.now = this.myData.length - 1;
        }
        this.keyword = this.myData[this.now];
      },
      search: function() {
        //打开对应的搜索界面
        window.open(this.logoData[this.searchIndex].searchSrc + this.keyword);
      },
      selectHover: function(index) {
        this.now = index
      },
      selectClick: function(index) {
        this.keyword = this.myData[index];
        this.search();
      },
      clearInput: function() {
        this.keyword = '';
        this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
          this.myData = res.data.s;
        });
      },
      getIndex: function(index) {
        this.searchIndex = index;
      }
    }
  }
</script>

<style type="text/css">
  .parts{
    position: absolute;
    top:242px;
    left: 70%;
    width:20px;
    height:70px;
    background: black;
  }
  .parts-title{
    position: absolute;
    top:256px;
    left: 72%;
    text-align: left;
    line-height: 1.5;
    width:220px;
    height:70px;
  }
  .parts-device{
    position: absolute;
    top:316px;
    left: 70%;
    text-align: left;
    line-height: 1.5;
    width:270px;
    height:70px;
    background: #ffffff;
  }
  .parts-fault{
    position: absolute;
    top:396px;
    left: 70%;
    text-align: left;
    line-height: 1.5;
    width:270px;
    height:100px;
    background: #ffffff;
  }
  .parts-reason{
    position: absolute;
    top:506px;
    left: 70%;
    text-align: left;
    line-height: 1.5;
    width:270px;
    height:130px;
    background: #ffffff;
  }
  .parts-phenomenon{
    position: absolute;
    top:646px;
    left: 70%;
    text-align: left;
    line-height: 1.5;
    width:270px;
    height:100px;
    background: #ffffff;
  }
  .svg_device{
    position: relative;
    top:150px;
    margin: 0 15%;
    width:800px;
    height:500px;  /**宽高100%是为了图片铺满屏幕 */
  }
  .background{
    margin: 0px;
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
  }
  a {
    color: #6a6565;
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
  .search-input {
    height: 45px;
    width: 600px;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
  }

  .search-input input {
    position: relative;
    top: 40px;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    width: 500px;
    height: 45px;
    font-size: 18px;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
  }
  .search-btn {
    position: relative;
    top: 40px;
    height: 45px;
    width: 100px;
    border: 1px solid #a7adaa;
    background-color: #eaf1ec;
    color: #6a6565;
    font-size: 16px;
    font-weight: bold;
    float: left;
  }
  .search-btn {
    cursor: pointer
  }
  .search-select li {

    border: 1px solid #d4d4d4;
    border-top: none;
    border-bottom: none;
    background-color: #fff;
    width: 100%
  }

  input::-ms-clear {
    display: none
  }

  .search-reset {

    width: 21px;
    height: 21px;
    position: absolute;
    display: block;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    right: 110px;
    top: 52px;
  }
  .search-select ul{margin:0;text-align: left; }
</style>
