<template>
  <div class="solution">
    <figure>
      <figcaption>
        <h1>解决方案</h1><br>
        <p>助力企业转型升级</p>
      </figcaption>
      <img src="../../../static/img/head-view/about-header-bg.jpg" width="100%" height="800px">
    </figure>

    <ul class="category" :class="{fix: fix}">
      <li v-for="(item,index) in category" :key="index">
        <div class="outcircle" :style="{backgroundColor: item.color}" @click="selected(item)">
          {{ item.title }}
          <div class="incircle" :class="{active: active == item.title}"></div>
        </div>
      </li>
    </ul>
    <ul class="products">
      <transition-group enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
        <li v-for="(item,index) in products" :key="index">
          <router-link :to="'/product/'+item.id">
            <img :src="'../../../static/img/product/'+ item.img" width="250px" height="250px" />
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

}
</script>
<style lang="scss" scoped>

</style>
