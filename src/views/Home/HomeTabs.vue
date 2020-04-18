<template>
  <div class="home-tabs" id="home-tabs">
    <van-tabs v-model="active" swipeable>
      <van-tab class="tabs-item" v-for="item in list" :title="item" :key='item'>
        <div class="goods-wrap">
          <router-link to='/goods/123' tag="div" class="goods-item">
            <div class="img-wrap">
              <img src="https://img.youpin.mi-img.com/800_pic/b02501a9918b5964d78344df90ec3504.png@base@tag=imgScale&h=342&w=342" alt="">
              <div class="goods-tips">
                特价
              </div>
            </div>
            <div class="goods-info">
              <span class="title">素士鼻毛修剪器</span>
              <span class="desc">只剃毛发不伤皮肤</span>
              <span class="price">￥59 <i class="old-price">￥68</i></span>
            </div>
          </router-link>

          <div class="goods-item">
            <div class="img-wrap">
              <img src="https://img.youpin.mi-img.com/800_pic/b02501a9918b5964d78344df90ec3504.png@base@tag=imgScale&h=342&w=342" alt="">
              <div class="goods-tips">
                特价
              </div>
            </div>
            <div class="goods-info">
              <span class="title">素士鼻毛修剪器</span>
              <span class="desc">只剃毛发不伤皮肤</span>
              <span class="price">￥59 <i class="old-price">￥68</i></span>
            </div>
          </div>

           <div class="goods-item">
            <div class="img-wrap">
              <img src="https://img.youpin.mi-img.com/800_pic/b02501a9918b5964d78344df90ec3504.png@base@tag=imgScale&h=342&w=342" alt="">
              <div class="goods-tips">
                特价
              </div>
            </div>
            <div class="goods-info">
              <span class="title">素士鼻毛修剪器</span>
              <span class="desc">只剃毛发不伤皮肤</span>
              <span class="price">￥59 <i class="old-price">￥68</i></span>
            </div>
          </div>

           <div class="goods-item">
            <div class="img-wrap">
              <img src="https://img.youpin.mi-img.com/800_pic/b02501a9918b5964d78344df90ec3504.png@base@tag=imgScale&h=342&w=342" alt="">
              <div class="goods-tips">
                特价
              </div>
            </div>
            <div class="goods-info">
              <span class="title">素士鼻毛修剪器</span>
              <span class="desc">只剃毛发不伤皮肤</span>
              <span class="price">￥59 <i class="old-price">￥68</i></span>
            </div>
          </div>
        </div>
      
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      list: ['推荐', '智能', '电器', '生活', '时尚', '特惠']
    }
  }
}
</script>

<style lang='less'>
#home-tabs {
  .van-tabs__nav {
    background-color: transparent;

    .van-tab--active {
      font-size: 20px;
      color: #c30d23;
    }
  }

  .goods-wrap {
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .goods-item {
      width: 170px;
      height: 250px;
      background: #ffffff;
      margin-bottom: 5px;

      .img-wrap {
        position: relative;
        height: 170px;
        width: 170px;
        background-color: #ffffff;

        img {
          height: 100%;
          width: 100%;
        }

        .goods-tips {
          position: absolute;
          left: 0;
          bottom: 0;
          font-size: 11px;
          line-height: 16px;
          height: 16px;
          padding: 0 2px;
          color: #ffffff;
          background-color: #d96b6c;
        }
      }

      .goods-info {
        padding-left: 8px;
        margin-top: 4px;

        .title {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333333;
          font-size: 15px;
          line-height: 20px;
        }

        .desc {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #999999;
          font-size: 13px;
          line-height: 18px;
          margin: 2px 0;
        }

        .price {
          display: block;
          color: #e30d0d;
          font-size: 17px;
          line-height: 22px;
          margin-top: 4px;

          .old-price {
            color: #999999;
            font-size: 14px;
            line-height: 18px;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>