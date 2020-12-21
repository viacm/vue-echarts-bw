<template>
  <div class="fault_diagnosis">
    <div
      style="
        width: 100%;
        height: 35px;
        border: 1px solid #000;
        color: #2c3e50;
        background: #2c3e50;
      "
    ></div>
    <span
      style="
        position: absolute;
        top: 5px;
        left: 5px;
        color: white;
        font-size: 20px;
        text-align: center;
      "
      >设备故障诊断知识服务</span
    >
    <div class="search-input-diagnosis-3">
      <input
        type="text"
        placeholder="2050热轧卷取运输链-H104的交流同步电动机发生堵转"
        v-model="keyword"
        @keyup="get($event)"
        @keydown.enter="search()"
        @keydown.down="selectDown()"
        @keydown.up.prevent="selectUp()"
      />
      <!-- 这是一个小叉叉，点击它可清除输入框内容 -->
      <span class="search-reset-diagnosis-3" @click="clearInput()">&times;</span>
      <button class="search-btn-diagnosis-3" @click="search()">故障诊断</button>
    </div>
    <ul class="home-kind">
      <li v-for="(item, index) in kind" :key="index">
        <div class="dropdown" v-if="item.title == '历史故障'">
          <router-link :to="'/conclusion/' + item.id">
            <h3>
              {{ item.title }}
              <div></div>
            </h3>
          </router-link>
          <div class="dropdown-content">
            <router-link :to="'/conclusion/4'">
              <h3>该设备</h3>
            </router-link>
            <router-link :to="'/conclusion/2'">
              <h3>同类设备</h3>
            </router-link>
          </div>
        </div>
        <div v-if="item.title != '历史故障'">
          <router-link :to="'/conclusion/' + item.id">
            <h3>
              {{ item.title }}
              <div></div>
            </h3>
          </router-link>
        </div>
      </li>
    </ul>
    <div class="knowledge-svg">
      <embed
        src="../../../static/img/conclusion/设备.svg"
        style="display: block; width: 800px; height: 500px; background: #ffffff"
      />
    </div>
    <div class="knowledge-device">
      <div class="knowledge-device-title"><h2>交流鼠笼式异步电机</h2></div>
      <div class="knowledge-device-parts"><h3>常见失效部位：</h3></div>
      <ul>
        <li>1. 定子</li>
        <li>2. 电缆/跳线</li>
      </ul>
      <div class="knowledge-device-fault"><h3>常见故障：</h3></div>
      <ul>
        <li>1. 辊马达故障</li>
        <li>2. 辊道电缆故障</li>
        <li>3. 马达故障</li>
        <li>4. 油库跳泵</li>
      </ul>
    </div>
    <div class="text-output"></div>
    <div class="knowledge-button">
      <button style="width: 120px; height: 25px"> <a href="../../../static/index.html" >故障诊断报告编制</a> </button>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data: function () {
    return {
      myData: [], //用来接收ajax得到的数据
      keyword: "", //v-model绑定的输入框的value
      now: -1,
      searchIndex: 0,
      kind: [
        {
          id: 1,
          title: "故障知识",
          //info: '让天下企业用“好”能源'
        },
        {
          id: 2,
          title: "历史故障",
          //info: '基于物联网、大数据、区块链等先进技术'
        },
        {
          id: 3,
          title: "标准文件",
          // info: '汇聚行业先进能效产品与技术'
        },
      ],
    };
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f0fcfa");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  methods: {
    // &event是实参，表示event对象
    get: function (ev) {
      // 如果按得键是上或者下，就不进行ajax
      if (ev.keyCode == 38 || ev.keyCode == 40) {
        return;
      }
      this.$http
        .jsonp(
          "https://sug.so.360.cn/suggest?word=" +
            this.keyword +
            "&encodein=utf-8&encodeout=utf-8"
        )
        .then(function (res) {
          this.myData = res.data.s;
        });
    },
    selectDown: function () {
      this.now++;
      //到达最后一个时，再按下就回到第一个
      if (this.now == this.myData.length) {
        this.now = 0;
      }
      this.keyword = this.myData[this.now];
    },
    selectUp: function () {
      this.now--;
      //同上
      if (this.now == -1) {
        this.now = this.myData.length - 1;
      }
      this.keyword = this.myData[this.now];
    },
    search: function () {
      //打开对应的搜索界面
      window.open(this.logoData[this.searchIndex].searchSrc + this.keyword);
    },
    selectHover: function (index) {
      this.now = index;
    },
    selectClick: function (index) {
      this.keyword = this.myData[index];
      this.search();
    },
    clearInput: function () {
      this.keyword = "";
      this.$http
        .jsonp(
          "https://sug.so.360.cn/suggest?word=" +
            this.keyword +
            "&encodein=utf-8&encodeout=utf-8"
        )
        .then(function (res) {
          this.myData = res.data.s;
        });
    },
    getIndex: function (index) {
      this.searchIndex = index;
    },
  },
};
</script>
<!--type="text/css-->
<style lang="scss" scoped>
/*a {*/
/*  color: #6a6565;*/
/*  text-decoration: none;*/
/*}*/
/*.search-input {*/
/*  height: 45px;*/
/*  width: 600px;*/
/*  margin: 0 auto;*/
/*  margin-top: 10px;*/
/*  position: relative;*/
/*}*/

/*.search-input input {*/
/*  position: relative;*/
/*  top: 40px;*/
/*  border: 1px solid #e4e4e4;*/
/*  box-sizing: border-box;*/
/*  width: 500px;*/
/*  height: 45px;*/
/*  font-size: 18px;*/
/*  float: left;*/
/*  padding-left: 10px;*/
/*  padding-right: 10px;*/
/*  overflow: hidden;*/
/*}*/
/*.search-btn {*/
/*  position: relative;*/
/*  top: 40px;*/
/*  height: 45px;*/
/*  width: 100px;*/
/*  border: 1px solid #a7adaa;*/
/*  background-color: #eaf1ec;*/
/*  color: #6a6565;*/
/*  font-size: 16px;*/
/*  font-weight: bold;*/
/*  float: left;*/
/*}*/
/*.search-btn {*/
/*  cursor: pointer*/
/*}*/
/*.search-select li {*/

/*  border: 1px solid #d4d4d4;*/
/*;*/
/*  border-top: none;*/
/*  border-bottom: none;*/
/*  background-color: #fff;*/
/*  width: 100%*/
/*}*/

/*input::-ms-clear {*/
/*  display: none*/
/*}*/

/*.search-reset {*/

/*  width: 21px;*/
/*  height: 21px;*/
/*  position: absolute;*/
/*  display: block;*/
/*  line-height: 21px;*/
/*  text-align: center;*/
/*  cursor: pointer;*/
/*  font-size: 20px;*/
/*  right: 110px;*/
/*  top: 52px;*/
/*}*/
/*.search-select ul{margin:0;text-align: left; }*/
.knowledge-svg {
  position: absolute;
  top: 290px;
  margin: 0 15%;
  width: 800px;
  height: 500px; /**宽高100%是为了图片铺满屏幕 */
}
.knowledge-device {
  position: absolute;
  top: 290px;
  left: 70%;
  width: 400px;
  height: 500px;
  line-height: 2;
  text-align: left;
  background: #ffffff;
}
.knowledge-button {
  position: absolute;
  top: 690px;
  /*right: 13%;*/
  width: 120px;
  height: 20px;
  margin: 0 auto;
  margin-left: 77%;
}
a {
  color: #6a6565;
  text-decoration: none;
}
.search-input-diagnosis-3 {
  height: 45px;
  width: 600px;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
  input {
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
}
.search-btn-diagnosis-3 {
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
  cursor: pointer;
}
.search-select-diagnosis-3 {
  li {
    border: 1px solid #d4d4d4;
    border-top: none;
    border-bottom: none;
    background-color: #fff;
    width: 100%;
  }
  ul {
    margin: 0;
    text-align: left;
  }
}
input {
  &::-ms-clear {
    display: none;
  }
}
.search-reset-diagnosis-3 {
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
.home-kind {
  box-sizing: border-box;
  background-color: #ebeef5;
  padding: 0 5%;
  margin: 80px 0;
  /*position: relative;*/
  /*top:50px;*/
  display: flex;
  li {
    padding: 1%;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    width: 33%;

    /* 控制title格式*/
    h3 {
      display: inline-block;
      /*文字下方下划线*/
      div {
        margin-top: 1%;
        height: 2px;
        width: 40px;
        background-color: #0984e3;
      }
    }
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      /*margin: 20px 0;*/
      background-color: #ffffff;
      width: 75px;
      text-align: center;
      line-height: 1.8;
      /*min-width: 160px;*/
      /*box-shadow: 0px 8px 16px 0px rgba(19, 18, 18, 0.2);*/
      padding: 10px 0px;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
    /*控制info格式*/
    p {
      margin-top: 1.5%;
      font-size: 14px;
      color: gray;
    }
    /*控制文字下方下划线长短*/
    h3 > div {
      transition: width 0.5s;
    }
    /*鼠标经过变色*/
    &:hover {
      background-color: #ffffff;
      transition: background-color 0.5s;
      h3 > div {
        width: 100%;
      }
    }
    /*控制中间灰色分割线*/
    &:not(:first-child)::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 90%;
      left: 0;
      margin: -13px 0;
      background-color: #d6d6d6;
    }
  }
}
</style>
