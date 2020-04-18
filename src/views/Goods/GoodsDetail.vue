<template>
  <div class="goods-detail">
    <div class="big-price">
      <span class="price">￥1499 <i class="old-price">￥1699</i></span>
      <span class="fav">
        <van-icon name="like-o" />
        <span>收藏</span>
      </span>
    </div>
    <div class="goods-info">
      <p class="info-title">火候不锈钢指甲刀</p>
      <p class="info-desc">品质优选 多功能 时尚 轻便</p>
    </div>
    <div class="goods-order">
      <van-cell class="order-selected" @click='handleClick' is-link>
        <template #title>
          <div class="goods-cell-title">
            <span class="order-tag">已选</span> 
            <div class="order-tag-desc">
              <span>请选择规格</span> 
            </div>
          </div>
        </template>
      </van-cell>
      <van-cell class="order-address" is-link >
         <template #title>
          <div class="goods-cell-title">
            <span class="order-tag">送至</span> 
            <div class="order-tag-desc">
              <span class='blod'>请选择地址</span> 
            </div>
          </div>
        </template>
      </van-cell>
      <van-cell class='order-serve' is-link>
         <template #title>
          <div class="goods-cell-title">
            <span class="order-tag">服务</span> 
            <div class="order-tag-desc">
              <span>满 99 包邮</span> 
              <span>有品三方</span> 
              <span>7 天无理由</span> 
              <span>油品配送</span> 
            </div>
          </div>
        </template>
      </van-cell>
      <van-popup v-model="show" round position="bottom" :style="{ height: '60%' }" />
    </div>
    <div class="goods-pingjia">
      <div class="pingjia-header">
        <div class="title-wrap">
          <span class="pingjia-title">用户评价（3252）</span>
          <span class="pingjia-lv">97% 满意 <van-icon name="arrow" /></span>
        </div>
        <div class="tag-wrap">
          <span class="pingjia-tag">有图（190）</span>
          <span class="pingjia-tag">追评（11）</span>
          <span class="pingjia-tag">好评（609）</span>
          <span class="pingjia-tag">做工一流（373）</span>
        </div>
      </div>
      <div class="pingjia-main">

      </div>
    </div>
    <div ref='container' class="goods-detail-main">
      <van-sticky :container="container" :offset-top="46">
        <div class="sticky-tab">
          <span class="active">商品详情</span>
          <span>常见问题</span>
        </div>
      </van-sticky>
      <div class="goods-detail-desc">
        <img src="https://img.youpin.mi-img.com/shopmain/a05d021457382d80dfee14f19df41eb4.jpg?w=864&h=1088" alt="">
        <img src="https://img.youpin.mi-img.com/shopmain/2658ad95f1ec20eb3b592e59ed227161.jpg?w=864&h=1168" alt="">
        <img src="https://img.youpin.mi-img.com/shopmain/98f6bb7773fdbf6316a50fae86b34667.jpg?w=864&h=1419" alt="">
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      show : false,
      container: null,
    }
  },
  mounted() {
    this.container = this.$refs.container;
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    }
  }
}
</script>

<style lang='less'>
.goods-detail {
  background-color: #f4f4f4;
  .big-price {
    background-color: #ffffff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      line-height: 38px;
      font-size: 25px;
      font-weight: 700;
      color: #b60909;

      .old-price {
        font-size: 13px;
        line-height: 16px;
        text-decoration: line-through;
        color: #999999;
        font-weight: normal;
      }
    }

    .fav {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 38px;
      width: 38px;
      border-radius: 50%;
      background-color: #f5f5f5;
      color: #999999;
      font-size: 18px;
    
      
      span {
        font-size: 10px;
        margin-top: 0px;
      }
    }

  }

  .goods-info {
    background-color: #ffffff;
    padding: 10px;
    .info-title {
      font-size: 17px;
      line-height: 24px;
      font-weight: 700;
    }

    .info-desc {
      
      font-size: 13px;
      line-height: 14px;
      margin: 10px 0 0 ;
    }
  }

  .goods-order {
    margin-top: 10px;
    .van-cell {
      .goods-cell-title {
        display: flex;
        align-items: center;

        .order-tag {
          font-size: 12px;
          color: #999999;
          line-height: 15px;
          height: 15px;
          margin-right: 10px;
        }
        .order-tag-desc {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          align-content: space-around;
          align-items: center;

          span {
            padding: 0 10px;
            font-size: 13px;
            .blod {
              font-weight: 700;
            }
          }
        }
      }

      .van-icon {
        align-self: center;
      }
    }
   
  }

  .goods-pingjia {
    margin-top: 10px;
    background-color: #ffffff;

    .pingjia-header {
      height: 60px;
      box-sizing: border-box;
      padding: 10px;
      
      .title-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .pingjia-title {
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
        }

        .pingjia-lv {
          font-size: 12px;
          color: #999999;
        }
      }

      .tag-wrap {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .pingjia-tag {
          height: 22px;
          border-radius: 12px;
          font-size: 11px;
          line-height: 22px;
          background-color: #f4e7ce;
          padding: 0 5px;
          margin: 8px 8px 0 0;
        }
      }
    }

    .pingjia-main {
      margin-top: 10px;
      height: 140px;
    }
  }

  .goods-detail-main {
    margin-top: 10px;
    height: 1000px;
    background-color: #ffffff;

    .sticky-tab {
      height: 40px;
      border-bottom: 1px solid #bfbfc0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0px 50px;
      background-color: #ffffff;

      span {
        font-size: 12px;
        color: #666666;

        &.active {
          color: #9f8257;
          font-weight: 700;
        }
      }
    }

    .goods-detail-desc {
      img {
        width: 100%;
      }
    }
  }


}
</style>