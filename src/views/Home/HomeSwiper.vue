<template>
  <div class="home-swiper">
    <van-swipe  @change="handleSwiperChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
      <template #indicator>
        <ul class="custom-indicator">
          <li 
            v-for="(item, index) of images"
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
  
  data() {
    return {
      active: 1,
      images: [
        'https://img.youpin.mi-img.com/youpinoper/f15775e870e7d382260b11237eed8afa.jpg@base@tag=imgScale&h=320&w=750',
        'https://img.youpin.mi-img.com/youpinoper/cfbc28dd89895f1c0a15683f09f753ac.jpg@base@tag=imgScale&h=320&w=750',
        'https://img.youpin.mi-img.com/youpinoper/a6f51f0f2496ec75f93fa45d65568296.jpg@base@tag=imgScale&h=320&w=750',
      ],
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