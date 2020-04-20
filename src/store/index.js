import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import * as Types from './mutation-types';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsObj: {},
    goodsList: [
      {
        id: '001',
        num: 1,
        price: 17,
        desc: '浓度可控金属铝材',
        title: '车载出风口高端款',
        img: 'https://img.youpin.mi-img.com/800_pic/7bd92acc6e7f0864d1a3a1b311d4f60a.png@base@tag=imgScale&h=342&w=342'
      }, 
      {
        id: '002',
        num: 1,
        price: 429,
        desc: '高清高倍，手机拍摄',
        title: '星特朗天文望远镜',
        img: 'https://img.youpin.mi-img.com/shopmain/2ecd3feab3438f3016d1eaad79162714.jpg@base@tag=imgScale&h=342&w=342'
      },
      {
        id: '003',
        num: 12,
        price: 369,
        desc: '语音播报 恒温热敷 3模式15力度 8天长续航',
        title: 'SKG颈椎按摩器4335',
        img: 'https://img.youpin.mi-img.com/shopmain/6a4605b8b5bb4d873baa1faf0ab3519f.png@base@tag=imgScale&h=342&w=342'
      },
      {
        id: '004',
        num: 1,
        price: 23,
        desc: '充电1h续航2个月',
        title: '映趣BlackS剃须刀',
        img: 'https://img.youpin.mi-img.com/shopmain/076ceb10e397f9aeff7c4caad4788584.png@base@tag=imgScale&h=342&w=342'
      },
      {
        id: '005',
        num: 1,
        price: 79,
        desc: '三轴增稳，折叠便携',
        title: '手机拍摄稳定器',
        img: 'https://img.youpin.mi-img.com/800_pic/f3694056a97e0ebbf881c57ac1d9836e.png@base@tag=imgScale&h=342&w=342'
      },
      {
        id: '006',
        num: 1,
        price: 9.9,
        desc: '水润热敷，温柔你的眼',
        title: 'MIJOY 蒸汽眼罩',
        img: 'https://img.youpin.mi-img.com/shopmain/a47e94afa4d8b2159f9ac6e9fa121285.png@base@tag=imgScale&h=342&w=342'
      }
    ],
  },
  mutations: {
    [Types.ADD_GOODS_NUM](state, payload) {
      let { name } = payload;
      let goodsObj = state.goodsObj;
      let goodsObjKeys = Object.keys(goodsObj);
      if (goodsObjKeys.includes(name)) {
        goodsObj[name] ++;
      } else {
        goodsObj[name] = 0;
        goodsObj[name] ++;
      }
    },
    [Types.MINUS_GOODS_NUM](state, payload) {
      let { name } = payload;
      let goodsObj = state.goodsObj;
      let goodsObjKeys = Object.keys(goodsObj);
      if (goodsObjKeys.includes(name) && goodsObj[name] > 0) {
        goodsObj[name] --;
      } 
    },
    [Types.ADD_ONE_GOODS](state, payload) {
      let goodsList = [...state.goodsList];
      let goods = goodsList.filter(item => item.id === payload.id)[0];
      
      goods.num ++;
      state.goodsList = goodsList;
    },
    [Types.MINUS_ONE_GOODS](state, payload) {
      let goodsList = state.goodsList;
      let goods = goodsList.filter(item => item.id === payload.id)[0];
      if (goods.num > 0) {
        goods.num --
      }
    },
    [Types.DELETE_GOODS](state, payload) {
      let goodsList = state.goodsList;
      let index = goodsList.findIndex(item => item.id === payload.id);
      goodsList.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
    home,
  }
})
