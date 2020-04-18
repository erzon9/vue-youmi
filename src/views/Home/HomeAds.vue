<template>
  <div class="home-adsss">  
    <div v-for="item in ads" class="adss-item" :key='item.id'>
      <img :src="item.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          id: '001',
          image: 'https://img.youpin.mi-img.com/youpinoper/a41441c9ae01fa7a25bd7c832ddadeed.png@base@tag=imgScale&h=187&w=348',

        }, {
          id: '002',
          image: 'https://img.youpin.mi-img.com/youpinoper/e442c5089c2fc82bd99565de8fa95e97.png@base@tag=imgScale&h=187&w=348'
        }, {
          id: '003',
          image: 'https://img.youpin.mi-img.com/youpinoper/ce84a9cd5b2dca541d44c1b183646e01.png@base@tag=imgScale&h=187&w=348'
        }, {
          id: '004',
          image: 'https://img.youpin.mi-img.com/youpinoper/53a8acc34351bab65e7bcb4db0a2e916.png@base@tag=imgScale&h=187&w=348'
        }
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.home-adsss {
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  width: 100%;
  justify-content: space-between;

  .adss-item {
    height: 93px;
    width: 175px;

    img {
      width: 100%;
    }
  }
}
</style>