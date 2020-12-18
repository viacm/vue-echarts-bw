<template>
  <div class="search">
    <!-- 组件不能写到template的根节点上，即每个组件只有一个根节点，这里的div就是这个template的根节点 -->
    <!--  getindex是自定义事件 -->
    <div class="background">
      <img src="../../../static/img/head-view/second-bg.jpg" width="100%" height="100%">
    </div>
    <div class="title-search">
      <span>设备故障知识查询</span>
    </div>
    <div class="search-input-1">
      <!-- $event是实参，表示event对象 -->
      <!--
          输入搜索内容即时搜索，所以有一个keyup事件。
          按回车键有一个进入搜索内容页面，所以有一个keydown.enter事件
          按上下键可以选择列表条目
      -->
      <input type="text-1" placeholder="交流鼠笼式异步电机" v-model="keyword" @keyup="get($event)" @keydown.enter="search()" @keydown.down="selectDown()" @keydown.up.prevent="selectUp()">
      <!-- 这是一个小叉叉，点击它可清除输入框内容 -->
      <span class="search-reset-1" @click="clearInput()">&times;</span>
      <button class="search-btn-1" @click="search()"><router-link :to="'../conclusion/search_knowledge'">查询</router-link></button>
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

<style lang="scss" scoped>
  .title-search{
    position: relative;
    /*bottom: 550px;*/
    /*left: 400px;*/
    /*margin: auto;*/
    top: 180px;
    margin: 0px auto;
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    color:white;
    font-size: 60px;
  }
  .background {
    margin: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
  }
  a {
    color: #6a6565;
    text-decoration: none;
  }
  .search-input-1 {
    height: 60px;
    width: 820px;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    input {
      position: relative;
      top: 300px;
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      width: 700px;
      height: 60px;
      font-size: 22px;
      float: left;
      padding-left: 10px;
      padding-right: 10px;
      overflow: hidden;
    }
  }
  .search-btn-1 {
    position: relative;
    top: 300px;
    height: 60px;
    width: 120px;
    border: 1px solid #a7adaa;
    background-color: #eaf1ec;
    color: #6a6565;
    font-size: 18px;
    font-weight: bold;
    float: left;
    cursor: pointer;
  }
  /*.search-select-1 {*/
  /*li {*/
  /*  border: 1px solid #d4d4d4;*/
  /*  border-top: none;*/
  /*  border-bottom: none;*/
  /*  background-color: #fff;*/
  /*  width: 100%;*/
  /*}*/
  /*ul {*/
  /*  margin: 0;*/
  /*  text-align: left;*/
  /*}*/
  /*}*/
  input {
  &::-ms-clear {
     display: none;
   }
  }
  .search-reset-1 {
    width: 30px;
    height: 30px;
    position: absolute;
    display: block;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    font-size: 30px;
    right: 130px;
    top: 315px;
  }

</style>
