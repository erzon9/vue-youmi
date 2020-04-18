import Mock, {Random} from 'mockjs';
Random.cword(10, 40);

let swpierImgs = [
  'https://img.youpin.mi-img.com/youpinoper/334faeada79c5655c625f048d6d926b6.jpg@base@tag=imgScale&h=320&w=750',
  'https://img.youpin.mi-img.com/youpinoper/2ec432b756bddaec8e5093fcdb5e209d.jpg@base@tag=imgScale&h=320&w=750',
  'https://img.youpin.mi-img.com/youpinoper/36162937c10109d158c3d2781ef15597.jpg@base@tag=imgScale&h=320&w=750',
  'https://img.youpin.mi-img.com/youpinoper/c1a0065399636cc4b8534d54b34887d8.jpg@base@tag=imgScale&amp;h=320&amp;w=750',
];

let recomdGoodsImg = [
  'https://img.youpin.mi-img.com/shopmain/29726e46d92e4ff672d631e58143115c.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/e36d5c9f25003978650fa7f130364ed0.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/ef9ebaf6e688b2e57df73d2cc66fa080.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/81049239ed4632868527061848276166.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/49e12e9372b7a9e2a947bedb9f7470b6.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/4c06dbd5f332de511d3cd9e03f061d12.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/1f91fa6c6faee8892a7db0614eebbe13.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/2ea91c10dfed51ee70abc1ca732ade59.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/b0461b4aa942b3ef0b9f92c2aa4ea994.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/d5a758ba5435005535af5e8bc4011767.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/4a0a1890d034e2078446bff527f48577.png@base@tag=imgScale&h=186&w=186',
  'https://img.youpin.mi-img.com/shopmain/e61eed3040d7cb411fc9a789c65dd6dd.png@base@tag=imgScale&h=186&w=186',
]

let recomdGoodsName = [
  '水溶性比',
  '小仙遁鲜炖燕窝',
  '蓝牙双模键盘 85',
]

let goodsImg = [
  
  'https://img.youpin.mi-img.com/shopmain/e5cd32d39bb4d6cefb5bc205d17172ab.jpg@base@tag=imgScale&h=342&w=342',
  'https://img.youpin.mi-img.com/shopmain/0f45b399adf765b847e0fd6f07b31d0e.png@base@tag=imgScale&h=342&w=342',
  'https://img.youpin.mi-img.com/shopmain/a963d7d438c5a6769ddc4338e54af4e9.jpg@base@tag=imgScale&h=342&w=342',
  'https://img.youpin.mi-img.com/shopmain/16e8d71d8a1052e3e099cbd2a4679891.png@base@tag=imgScale&h=342&w=342',
  'https://img.youpin.mi-img.com/800_pic/6791f59c8717d2f1cf7fe2be71c7c393.png@base@tag=imgScale&h=342&w=342',
]

let goodsName = [
  '小米路由器',
  '水稻 崔村一颗 奖项',
  '多功能喷墨打印机',
  'asics 羽毛球鞋',
  '女士手提包饺子包'
]
Mock.mock('/api/swiper', {
  'list|4': [
    {
      'id|+1': 1,
      'image|+1': swpierImgs,
    }
  ]
});

Mock.mock('/api/recomd-goods', {
  'list|10': [{
    'id|+1': 1,
    'image|1': recomdGoodsImg,
    'title|1': recomdGoodsName,
  }]
});

Mock.mock('/api/goods', {
  'list|10': [{
    'id|+1': 10000,
    'image|1': goodsImg,
    'title|1': goodsName,
    'price|100-100000': 1,
    'old_price|1000-100000': 1,
    'desc': '@cword(10, 40)',
  }]
})