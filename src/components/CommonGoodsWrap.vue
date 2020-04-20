<template>
  <router-link tag="div" :to='url' class="goods-wrap">
    <img class="goods-pic" :src="img" alt="">
    <span class="goods-title">{{title}}</span>
    
    <img class="tag-img" :src="tag_img" alt="">
  </router-link>
</template>

<script>
export default {
  props: ['title', 'url', 'id', 'img', 'tag_img']
}
</script>

<style lang='less' scoped>
.goods-wrap {
  width: 77px;
  height: 107px;
  padding-top: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  position: relative;
  margin-top: 10px;

  .goods-pic {
    display: block;
    margin: 0 auto;
    height: 76px;
    width: 76px;
  }
  .goods-title {
    display: block;
    font-size: 11px;
    margin-top: 5px;
    text-align: center;
    padding:0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tag-img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
  }
}
</style>