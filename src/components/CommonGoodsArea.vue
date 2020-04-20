<template>
  <div class="goods-area">
    <div class="area-header">
      <slot>默认</slot>
    </div>
    <div class="area-content">
      <CommonGoodsWrap 
        :style="{width: '33.3%'}"
        v-for='item in list' 
        :key='item.id'
        v-bind='item'>
      </CommonGoodsWrap>
    </div>
  </div>
</template>

<script>
import CommonGoodsWrap from './CommonGoodsWrap';
export default {
  props: ['list'],
  components: {
    CommonGoodsWrap,
  }
}
</script>

<style lang='less' scoped>
.goods-area {
  width: 262px;
  // height: 118px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 10px;

  .area-header {
    font-size: 13px;
    font-weight: 700;
  }

  .area-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
</style>