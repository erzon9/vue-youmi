<template>
  <div class="goods-page">
    <GoodsHeader></GoodsHeader>
    <div class="goods-main">
      <ImageSwiper id="shangpin" :images='goods.imgs'></ImageSwiper>
      
      <GoodsDetail :goods='goods'></GoodsDetail>

    </div>
    <GoodsFooter :goods='goods'></GoodsFooter>
  </div>
</template>

<script>
import ImageSwiper from './ImageSwiper';
import GoodsHeader from './GoodsHeader';
import GoodsFooter from './GoodsFooter';
import GoodsDetail from './GoodsDetail';
import axios from 'axios';

export default {
  components: {
    GoodsHeader,
    ImageSwiper,
    GoodsFooter,
    GoodsDetail
  },
  data() {
    return {
      goods: {}
    }
  },
  async mounted() {
    // 这里要根据传递归来的 商品名称，来服务器端获取商品信息，这里只是模拟，就不获取了
    let rst = await axios.get('/api/goods_detail');
    this.goods = rst.data.goods;
    console.log(this.goods);
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