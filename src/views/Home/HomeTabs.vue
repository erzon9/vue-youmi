<template>
  <div class="home-tabs" id="home-tabs">
    <van-tabs v-model="active" swipeable @change="handleTabsChange">
      <van-tab class="tabs-item" v-for="item in list" :title="item" :key='item'>
        <div class="goods-wrap">
          <router-link 
            to='/goods/123' 
            v-for="item in goods"  
            :key='item.id' tag="div" 
            class="goods-item">

            <div class="img-wrap">
              <img :src="item.image" alt="">
              <div class="goods-tips" v-if="parseInt(item.price) < 1000">
                特价
              </div>
            </div>
            <div class="goods-info">
              <span class="title">{{item.title}}</span>
              <span class="desc">{{item.desc}}</span>
              <span class="price">￥{{item.price}} <i class="old-price">￥{{item.old_price}}</i></span>
            </div>
          </router-link>
   
        </div>
      
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Array,
      default: () => [],
    }
    
  },
  data() {
    return {
      active: 0,
      list: ['推荐', '智能', '电器', '生活', '时尚', '特惠']
    }
  },
  methods: {
    handleTabsChange(index) {
     this.$emit('tab-change', index);
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
    padding: 5px 3px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

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