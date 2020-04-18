<template>
  <div class="goods-header" id='goods-header'>
    <van-nav-bar left-arrow @click-left="handleClickLeft" @click-right='handleClickRight'>
      <template #title>
        <van-tabs v-model="active">
          <van-tab v-for="item in list" :key='item' :title="item" :name='item'></van-tab>
          
        </van-tabs>
      </template>
      <template #right>
        <van-icon name="ellipsis"/>
      </template>
    </van-nav-bar>
    <div class="select" v-show='show'>
      <div class="tri"></div>
      <span class="go-index">
        <van-icon name="wap-home-o" /> 首页
      </span>
      <span class="my-fav">
        <van-icon name="like-o" /> 我的收藏
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: '商品',
      show: false,
      list: ['商品', '评价', '详情', '推荐']
    }
  },
  methods: {
    handleClickLeft() {
      // 点击左侧，返回
      this.$router.back();
    },
    handleClickRight() {
      this.show = !this.show;
    }
  }
}
</script>

<style lang='less'>
#goods-header {
  position: relative;
  .van-nav-bar {

    .van-icon {
      color: #bbbbbb;
    }

    .van-tabs {
      .van-tab {
        color: #845f3f;
      }

      .van-tabs__line {
        width: 34px;
        height: 1px;
        background-color: #845f3f;
      }
    }
  }

  .select {
    position: absolute;
    box-sizing: border-box;
    padding: 0 10px;
    right: 5px;
    top: 100%;
    z-index: 999;
    background-color: #efefef;;
    height: 110px;
    width: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #333333;
    border-radius: 8px;

    .tri {
      height: 0;
      width: 0;
      border-bottom: 18px solid #efefef;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      position: absolute;
      top: -18px;
      right: 10px;
    }

    span {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #dddddd;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .van-icon {
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }

 
}
</style>