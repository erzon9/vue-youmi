<template>
  <div class="classify-main-right">
    <CommonAds :src='ad'></CommonAds>
    <CommonGoodsArea 
      v-for='(item, k) in classify_obj' 
      :list='item'
      :key='k'>
      {{k}}
      </CommonGoodsArea>
  </div>
</template>

<script>
import CommonAds from '../../components/CommonAds';
import CommonGoodsArea from '../../components/CommonGoodsArea';

export default {
  props: [
    'classify_obj',
    'ad'
  ],
  components: {
    CommonAds,
    CommonGoodsArea,
  },
  data() {
    return {
     
    }
  }
}
</script>

<style lang='less'>
.classify-main-right {
  padding: 10px 0;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>