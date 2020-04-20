<template>
  <div class="not-login-cart">
    <div class="header">
      <van-icon name="arrow-left"  @click='handleBack'/>
      <span>购物车</span>
      <i></i>
    </div>
    <div class="main">
      <div class="cart-wrap">
        <van-icon name="shopping-cart-o" />
      </div>
      <span>登陆后才可以看到商品欧~</span>
      <div class="btn-login" @click='handleLogin'>立即登录</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      this.$router.push('/login');
    },
    handleBack() {
      this.$router.back();
    }
  }
}
</script>

<style lang='less' scoped>
.not-login-cart {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    height: 88px;
    background: url(https://m.xiaomiyoupin.com/youpin/static/m/res/images/common/bg_page_header.png) no-repeat;
    color: #ffffff;

  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: #dddddd;

    .cart-wrap {
      height: 90px;
      width: 90px;
      border: 1px solid #f6f6f6;
      border-radius: 50%;
      font-size: 40px;
      line-height: 90px;
      text-align: center;
      color:#f6f6f6;
    }

    span {
      font-size: 13px;
      margin-top: 10px;
    }

    .btn-login {
      height: 34px;
      width: 114px;
      margin-top: 10px;
      border-radius: 17px;
      border: 1px solid rgb(187, 158, 114);
      line-height: 34px;
      text-align: center;
      font-size: 13px;
      color:rgb(187, 158, 114);
    }
  }
} 
</style>