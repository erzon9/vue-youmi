<template>
  <div class="home-recomd">
    <div class="recomd-header">
      <div class="title">{{title}}</div> 
      <router-link class="more" :to='moreurl'>更多></router-link>
    </div>
    <div class="recomd-content">
      <van-swipe :loop="false" :width="100" :show-indicators='false'>
        <van-swipe-item 
          v-for="item in list" 
          :key="item.id">
          <slot :image='item.image' :text='item.title'></slot>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '热销榜'
    },
    moreurl: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 100,
    },
    list: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style lang='less' scoped>
.home-recomd {
  width: 100%;
  margin: 5px 0; 
  background-color: #ffffff;
  border-radius: 10px;
  padding-bottom: 10px;

  .recomd-header {
    height: 44px;
    display: flex;
    justify-content: space-between;
    line-height: 44px;
    padding: 0 10px;

    .title {
      font-size: 18px;
      font-weight: 700;
      color: #333333;
      
    }

    .more {
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>