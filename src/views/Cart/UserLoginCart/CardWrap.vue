<template>
  <div class="card-wrap">
    <van-swipe-cell :before-close="handleBeforeClose">
      <van-card :num="initNum" :price="price" :desc="desc" :title="title" :thumb="img">
        <template #footer>
          <van-button size="mini" @click="add">+1</van-button>
          <van-button size="mini" @click="minus">-1</van-button>
        </template>
      </van-card>
      <template #right>
        <van-button @click="handleDelBtn" class="del-card-btn" type="danger" text="删除" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import * as types from "../../../store/mutation-types";
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    initNum: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 1999.0
    },
    desc: {
      type: String,
      default: "默认描述"
    },
    title: {
      type: String,
      default: "默认标题"
    },
    img: {
      type: String,
      default: "https://img.yzcdn.cn/vant/ipad.jpeg"
    }
  },
  data() {
    return {
      num: this.initNum
    };
  },
  methods: {
    ...mapMutations([types.ADD_ONE_GOODS, types.MINUS_ONE_GOODS, types.DELETE_GOODS]),
    add() {
      this[types.ADD_ONE_GOODS]({ id: this.id });
    },
    minus() {
      this[types.MINUS_ONE_GOODS]({ id: this.id });
    },
    handleDelBtn() {
      this.$dialog({
        title: "危险操作",
        message: `你正在删除 ${this.title}，确定么？`,
        showCancelButton: true
      }).then(() => {
        this[types.DELETE_GOODS]({id: this.id});
      }).catch((e) => {
        console.log(e);
        console.log('点击取消');
      });
    },
    handleBeforeClose(e) {
      // console.log(e);
    }
  }
};
</script>

<style lang='less'>
.card-wrap {
  height: 127px;
  padding: 0 10px;
  margin: 10px 0;

  .del-card-btn {
    height: 100%;
  }
}
</style>