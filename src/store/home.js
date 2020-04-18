import * as types from './mutation-types';
import { fetchSwiper, fetchRecomd, fetchGoods } from '@/api/home';

export default {
  namespaced: true,
  state: {
    swiper: [],
    recomdGoods: [],
    goods: [],
  },
  mutations: {
    [types.GET_HOME_SWIPER](state, payload) {
      state.swiper = payload.swiper;
    },
    [types.GET_HOME_RECOMD_GOODS](state, payload) {
      state.recomdGoods = payload.recomdGoods;
    },
    [types.GET_HOME_GOODS](state, payload) {
      state.goods = [...state.goods, ...payload.goods];
    },
    [types.GET_HOME_GOODS_AGAIN](state, payload) {
      state.goods = [...payload.goods];
    }
  },
  actions: {
    async getSwiperAction({commit}, payload) {
      let rst = await fetchSwiper();
      commit(types.GET_HOME_SWIPER, {swiper: rst.data.list});
    },
    async getRecomdGoodsAction({commit}) {
      let rst = await fetchRecomd();
      commit(types.GET_HOME_RECOMD_GOODS, {
        recomdGoods: rst.data.list,
      });
    },
    async getGoodsAction({commit}) {
      let rst = await fetchGoods();
      commit(types.GET_HOME_GOODS, {goods: rst.data.list});
    },
    async getGoodsAgainAction({commit}) {
      let rst = await fetchGoods();
      commit(types.GET_HOME_GOODS_AGAIN, {goods: rst.data.list});
    }
  }
}