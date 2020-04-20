<template>
  <div class="image-swiper">
    <van-swipe :show-indicators="false" :autoplay="0"  @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/ {{images.length}}</div>
      </template>
    </van-swipe>
    <div class="ad">
      <img src="https://img.youpin.mi-img.com/youpinoper/4ede1013b769c0bc9df291625f8ab1af.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      current: 0,
      
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
  mounted() {
    console.log(this.images);
  }
};
</script>

<style lang='less'>
.image-swiper {
  .van-swipe {
    width: 100%;

    img {
      width: 100%;
      vertical-align: top;
    }

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
      color: #ffffff;
    }
  }

  .ad {
    img {
      width: 100%;
    }
  }
}
</style>