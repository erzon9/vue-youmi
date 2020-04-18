<template>
  <div class="home-page">
    <HomeHeader></HomeHeader>
    <div class="home-main" @scroll.passive="throttleScroll" ref='home_main'>
      <HomeSwiper :swiper='swiper'></HomeSwiper>
      
      <div class="home-content" >
        <HomeAds></HomeAds>
        <HomeRecomd class="recomd-one" title='推荐榜' moreurl='/more' :list='recomdGoods'>
          <template v-slot:default='slotProps'>
            <div class="recomd-item">
              <img :src="slotProps.image" alt="">
              <span>{{slotProps.text}}</span>
            </div>
          </template>
        </HomeRecomd>
        <HomeTabs @tab-change='handleTabChange' :goods='goods'></HomeTabs>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader';
import HomeSwiper from './HomeSwiper';
import HomeAds from './HomeAds';
import HomeRecomd from './HomeRecomd';
import HomeTabs from './HomeTabs';

import {mapState, mapActions} from 'vuex';
import _ from 'lodash';
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeAds,
    HomeRecomd,
    HomeTabs,
  },
  data() {
    return {
      scrollHeight: 0,
      mainHeight: 0,
      list: [
        {
          id: '001',
          image: 'https://img.youpin.mi-img.com/shopmain/727e6767d6c1650411390a0f0615b33b.png@base@tag=imgScale&h=186&w=186',
          text: '智能单杆晾衣杆'
        },
        {
          id: '002',
          image: 'https://img.youpin.mi-img.com/shopmain/727e6767d6c1650411390a0f0615b33b.png@base@tag=imgScale&h=186&w=186',
          text: '智能单杆晾衣杆'
        },
        {
          id: '003',
          image: 'https://img.youpin.mi-img.com/shopmain/727e6767d6c1650411390a0f0615b33b.png@base@tag=imgScale&h=186&w=186',
          text: '智能单杆晾衣杆'
        },
        {
          id: '004',
          image: 'https://img.youpin.mi-img.com/shopmain/727e6767d6c1650411390a0f0615b33b.png@base@tag=imgScale&h=186&w=186',
          text: '智能单杆晾衣杆'
        },
          {
          id: '005',
          image: 'https://img.youpin.mi-img.com/shopmain/727e6767d6c1650411390a0f0615b33b.png@base@tag=imgScale&h=186&w=186',
          text: '智能单杆晾衣杆'
        },
          {
          id: '006',
          image: 'https://img.youpin.mi-img.com/shopmain/727e6767d6c1650411390a0f0615b33b.png@base@tag=imgScale&h=186&w=186',
          text: '智能单杆晾衣杆'
        },
          {
          id: '007',
          image: 'https://img.youpin.mi-img.com/shopmain/727e6767d6c1650411390a0f0615b33b.png@base@tag=imgScale&h=186&w=186',
          text: '智能单杆晾衣杆'
        },
          {
          id: '008',
          image: 'https://img.youpin.mi-img.com/shopmain/727e6767d6c1650411390a0f0615b33b.png@base@tag=imgScale&h=186&w=186',
          text: '智能单杆晾衣杆'
        },
          {
          id: '009',
          image: 'https://img.youpin.mi-img.com/shopmain/727e6767d6c1650411390a0f0615b33b.png@base@tag=imgScale&h=186&w=186',
          text: '智能单杆晾衣杆'
        },
      ]
    }
  },
  computed: {
    ...mapState('home', ['swiper', 'recomdGoods', 'goods']),
  },
  methods: {
    ...mapActions('home', ['getSwiperAction', 'getRecomdGoodsAction', 'getGoodsAction', 'getGoodsAgainAction']),
    async handleTabChange(index) {
      await this.getGoodsAgainAction();
    },
    throttleScroll: () => {},
  },
  async mounted(){
    await this.getSwiperAction();
    await this.getRecomdGoodsAction();
    await this.getGoodsAction();
    // console.log(this.goods);
    let self = this;
    this.throttleScroll =  _.throttle((e) => {
        let currentScrollTop = this.$refs.home_main.scrollTop;
        if (this.scrollHeight - currentScrollTop < (300 + this.mainHeight)) {
          // 获取更多的内容
          self.getGoodsAction();
        }
        // console.log(self);
      }, 200)
    this.scrollHeight = this.$refs.home_main.scrollHeight;
    this.mainHeight = this.$refs.home_main.clientHeight;
  },
  updated() {
    this.scrollHeight = this.$refs.home_main.scrollHeight;
    this.mainHeight = this.$refs.home_main.clientHeight;
  }
}
</script>

<style lang='less' scoped>
.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-main {
    flex: 1;
    background-color: #F4F4F4;
    overflow: scroll;
  }
  .home-content {
    padding: 8px 10px;

    .recomd-one {
      .recomd-item {
        height: 125px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        img {
          height: 93px;
          width: 93px;
        }

        span {
          font-size: 11px;
          color: #333333;
        }
      }
    }
  }
}

</style>