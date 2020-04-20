<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions(['isLoginAction']),
  },
  async mounted() {
    try {
      await this.isLoginAction();
    } catch (error) {
      console.log(error.message);
    }
    
  }
}
</script>
<style lang="less">

html, body, #app {
  height: 100%;
}
</style>
