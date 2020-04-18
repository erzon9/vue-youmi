<template>
  <router-link tag="div" to='/login' class='user-header'>
    <div class="img-wrap">
      <img class="img-user" src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_default_head.png" alt="">
      <span>请登录</span>
    </div>
    
    <van-icon name="arrow"></van-icon>
  </router-link>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.user-header {
  height: 100px;
  background: url(https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_bg_top.png);
  background-size: 100% 100%;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .img-wrap {
    display: flex;
    justify-items: center;
    .img-user {
      height: 60px;
      width: 60px;
      margin-right: 20px;
    }
    span {
      font-size: 14px;
      line-height: 60px;
      color: #ffffff;
    }
  }

  .van-icon {
    font-size: 20px;
    color: #dfdfd0;
  }
  
}
</style>