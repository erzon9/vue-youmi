<template>
  <ul class="classify-main-left" @click='handleClick'> 
    <li 
      class="classify-item" 
      v-for="(item, index) in list" 
      :data-idx="index"
      :key='item.id'>
      <span :class="active===index?'active':''">{{item.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      list: [
        {id: 754, title: "有品推荐"},
        {id: 185, title: "加用电器"},
        {id: 780, title: "居家餐厨"},
        {id: 617, title: "电视影音"},
        {id: 559, title: "家具家装"},
        {id: 234, title: "智能家庭"},
        {id: 108, title: "手机电脑"},
        {id: 637, title: "数码周边"},
        {id: 302, title: "日用文创"},
        {id: 904, title: "服装配饰"},
        {id: 332, title: "鞋靴箱包"},
        {id: 906, title: "美妆个护"},
        {id: 182, title: "运动户外"},
        {id: 934, title: "出行车品"},
        {id: 226, title: "健康保健"},
        {id: 411, title: "美食酒饮"},
        {id: 487, title: "母婴亲子"},
        {id: 671, title: "宠物生活"},
        {id: 312, title: "有品海购"},
        {id: 261, title: "DLAB"},
        {id: 759, title: "品牌墙"}
      ]
    }
  },
  methods: {
    handleClick(e) {
      let target = e.target;
      let tagName = target.tagName;
      let idx;
      if (tagName === 'SPAN') {
        target = target.parentElement;
        // console.log(target);
      } else if (tagName !== 'LI') {
        return ;
      }
      idx = parseInt(target.dataset.idx);
      if (this.active === idx) return;
      this.active = idx;
      this.$emit('change', idx);
    }
  }
}
</script>

<style lang='less' >
.classify-main-left {
  width: 93px;
  box-sizing: border-box;
  height: 100%;
  background-color: #ffffff;
  overflow: scroll;

  .classify-item {
    margin: 0 auto;
    width: 75px;
    height: 50px;
    font-size: 13px;
    position: relative;

    span {
      position: absolute;
      top: 50%;
      margin-top: -12px;
      height: 24px;
      width: 100%;
      text-align: center;
      line-height: 24px;

      &.active {
        background-color: red;
        border-radius: 12px;
        color: #ffffff;
      }
    }
  }
}
</style>