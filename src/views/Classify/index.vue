<template>
  <div class="classify-page">
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
    <div class="classify-main">
       <ClassifyMainLeft @change='handleLeftChange'></ClassifyMainLeft>
       <ClassifyMainRight :classify_obj='classifyObj' :ad='ad'></ClassifyMainRight>
    </div>
   
  </div>
</template>

<script>
import ClassifyMainLeft from './ClassifyMainLeft';
import ClassifyMainRight from './ClassifyMainRight';
import axios from 'axios';
export default {
  components: {
    ClassifyMainLeft,
    ClassifyMainRight,
  },
  data() {
    return {
      searchValue: '',
      classifyObj: {},
      ad: '',
    }
  },
  methods: {
    async handleLeftChange(index) {
      console.log(index);
      await this.fetchClassify();
    },
    async fetchClassify() {
      let rst = await axios.get('/classify');
      this.classifyObj = rst.data.obj;
      this.ad = rst.data.classify_ad;
    }
  },
  async mounted() {
    await this.fetchClassify();
  }
}
</script>

<style lang='less'>
.classify-page {
  display: flex;
  height: 100%;

  flex-direction: column;
  .classify-main {
    flex-grow: 1;
    overflow: hidden;
    background-color: #f6f6f6;
    display: flex;

    .classify-main-right {
      flex: 1;
      // background-color: orange;
    }
  }
}
</style>