<template>
  <div class="login-cart">
    <div class="cart-header">
      <van-icon name="arrow-left" @click='handleBack'/>
      <span>购物车</span>
      <i></i>
    </div>
    <div class="cart-main">
      <CardWrap 
        v-for="item of goodsList" 
        :key="item.id" 
        :id='item.id'
        :initNum='item.num'
        :title="item.title"
        :desc='item.desc'
        :price='item.price'
        :img='item.img'></CardWrap>
    </div>
    <div class="cart-footer">
      <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
import CardWrap from './CardWrap';
import { mapState } from 'vuex';
export default {
  components: {
    CardWrap,
  },
  computed: {
    ...mapState(['goodsList']),
    totalPrice() {
      let total = 0;
      this.goodsList.forEach(item => {
        total += item.num * item.price;
      });
      return total * 100;
    }
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    onSubmit() {
      console.log('提交订单');
    }
  },
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style lang='less' >
.login-cart {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .cart-header {
    height: 50px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666666;
    font-size: 14px;

    .van-icon {
      display: inline-block;
      flex-basis: 0;
      height: 30px;
      width: 30px;
      line-height: 30px;
      text-align: center;
    }

    span {
      flex-basis: auto;
    }
  } 

  .cart-main {
    flex: 1;
    overflow: scroll;
    padding-bottom: 50px;
  }
}
</style>