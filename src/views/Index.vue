<template>
  <div class="app-layout">
    <div class="main">
      <router-view></router-view>
    </div>
    <van-tabbar class="btn-nav" v-model="active" active-color="#DFB455" inactive-color="#666666" route>
      <van-tabbar-item 
        v-for='item of tabbarList'
        :name='item.name' 
        :key='item.name' 
        :to="item.path"
        :badge="item.name === 'cart' ? badge : null"
        :icon="active === item.name ? item.icon.active: item.icon.inactive">
        <span style='color: '>{{item.text}}</span>
      </van-tabbar-item>
     
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 'home',
      badge: 5,
      tabbarList: [
        {
          name: 'home',
          text: '首页',
          path: '/home',
          icon: {
            active: 'wap-home',
            inactive: 'wap-home-o',
          }
        },  
        {
          name: 'classify',
          text: '分类',
          path: '/classify',
          icon: {
            active: 'coupon',
            inactive: 'coupon-o',
          }
        }, 
          {
          name: 'cart',
          text: '购物车',
          path: '/cart',
          icon: {
            active: 'cart',
            inactive: 'cart-o',
          }
        }, 
          {
          name: 'user',
          text: '我的',
          path: '/user',
          icon: {
            active: 'manager',
            inactive: 'manager-o',
          }
        }, 
      ],
    };
  },
  mounted() {
    // 改变激活的 tabbar
    let path = this.$route.path;
    this.active = path.slice(1);
  }
};
</script>
<style lang='less' scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main {
    flex-grow: 1;
  }

  .btn-nav {
    flex: 0; 
    position: static;
    padding: 8px 0;
    border-top: 1px solid #efefef;
  }
}
</style>