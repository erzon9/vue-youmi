<template>
  <div class="home-header">
    <van-icon class="logo" :name="logo" />
    <div class='search-box'>
      <van-icon class="fangdajing" name="search" />
      <input type="text" class="search">
    </div>
    
  </div>
</template>

<script>
import logo from '@/assets/youpin.png';

export default {
  data() {
    return {
      logo,
    }
  }
}
</script>

<style lang='less' scoped>
.home-header {
  height: 52px;
  background-color: #845d32;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;


  .logo { 
    display: block;

    img {
      width: auto;
      height: 28px;
    }
   
  }
  .search-box {
    position: relative;
    height: 30px;
    width: 300px;

    .fangdajing {
      position: absolute;
      height: 30px;
      width: 30px;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      color: #cccccc;
    }

    .search {
      display: box;
      box-sizing: border-box;
      padding-left: 30px;
      height: 30px;
      width: 300px;
      border-radius: 15px;
      border: none;
      outline: none;
      font-size: 14px;
      color: #999999;
    }
  }
 
}
</style>