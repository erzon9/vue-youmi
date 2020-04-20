<template>
  <div class="goods-footer" id="goods-footer">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { mapState, mapMutations } from 'vuex';
import * as Types from '../../store/mutation-types';
export default {
  props: {
    goods: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapState(['goodsObj']),
  },
  methods: {
    ...mapMutations([Types.ADD_GOODS_NUM]),
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton(e) {
      let target = e.target;
      let text = target.textContent;
      if (text === '加入购物车') {
        this.ADD_GOODS_NUM({name: this.goods.id});
        Toast('添加商品成功');
      } else if (text === '立即购买') {
        console.log('222');
      }
    },
  },
};
</script>

<style lang='less'>

#goods-footer {
  .van-goods-action {
    position: static;
    width: 100%;
    background-color: #ffffff;
  }
}
</style>