<template>
  <div class="goods-page">
    <GoodsHeader></GoodsHeader>
    <div class="goods-main">
      <ImageSwiper></ImageSwiper>
      
      <GoodsDetail></GoodsDetail>

    </div>
    <GoodsFooter></GoodsFooter>
  </div>
</template>

<script>
import ImageSwiper from './ImageSwiper';
import GoodsHeader from './GoodsHeader';
import GoodsFooter from './GoodsFooter';
import GoodsDetail from './GoodsDetail';

export default {
  components: {
    GoodsHeader,
    ImageSwiper,
    GoodsFooter,
    GoodsDetail
  },
  mounted() {
    console.log(this.$route);
  }
}
</script>

<style lang='less'>
.goods-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  .goods-main {
    flex: 1;
    overflow: scroll;
  }
}
</style>