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
  data() {
    return {
      current: 0,
      images: [
        "https://img.youpin.mi-img.com/goods/de9f589ebecf014e2bec6b7f0b4a5dbb.jpg?_s=ks3&w=1080&h=1270&crop=a_0_95_1080_1080",
        "https://img.youpin.mi-img.com/goods/11ac46028c077639d48f6c63d455543d.jpg?_s=ks3&w=1080&h=1270&crop=a_0_95_1080_1080",
        "https://img.youpin.mi-img.com/goods/d69fbfdbcf215acb94309ca42f251ad2.jpg?_s=ks3&w=1080&h=1270&crop=a_0_95_1080_1080",
        "https://img.youpin.mi-img.com/goods/9c35797985f3485af44dc066c72b9d90.jpg?_s=ks3&w=1080&h=1270&crop=a_0_95_1080_1080"
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
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