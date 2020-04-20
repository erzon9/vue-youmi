<template>
  <div class="common-ads">
    <img :src="src" alt="">
  </div>
</template>

<script>
export default {
  props: ['src']
}
</script>

<style lang='less' scoped>
.common-ads {
  height: 75px;
  width: 260px;
  border-radius: 8px;
  // overflow: hidden;
  background-color: blue;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>