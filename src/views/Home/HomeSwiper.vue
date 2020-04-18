<template>
  <div class="home-swiper">
    <van-swipe  @change="handleSwiperChange">
      <van-swipe-item v-for="item in swiper" :key="item.id">
        <img v-lazy="item.image" />
      </van-swipe-item>
      <template #indicator>
        <ul class="custom-indicator">
          <li 
            v-for="(item, index) of swiper"
            :key='index'
            :data-idx="index"
            :class="active==index?'indicator-active':''"
            ></li>
        </ul>
      </template>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    swiper: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    handleSwiperChange(index) {
      this.active = index;
    }
  }
};
</script>

<style lang='less' scoped> 
.home-swiper {
  height: 160px;
  overflow: hidden;
  .van-swipe {
    height: 100%;
  }
  .van-swipe-item {
    // text-align: center;
    img {
      width: 100%;
    }
  }

  .custom-indicator {
    width: 200px;
    height: 14px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 17px;
    bottom: 20px;
    color: #ffffff;
    font-size: 8px;

    li {
      margin-left: 4px;

      &::before {
        content: '▂',
      }

      &.indicator-active::before {
        content: '▇'
      }
    }
  }
}
</style>