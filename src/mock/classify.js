import Mock from 'mockjs';

let goodsImgs = [
  'https://img.youpin.mi-img.com/youpinoper/f4c00cbda4193221dc1f26870ef3f26f.png',
  'https://img.youpin.mi-img.com/800_pic/c2eafca2749ab1a90c10d915d27d3f27.png',
  'https://img.youpin.mi-img.com/shopmain/948766ce77da239d6b7f0d795f619541.png?w=800&h=800',
  'https://img.youpin.mi-img.com/800_pic/03a4a0afcbe194e75726fcfc2083d15e.png',
  'https://img.youpin.mi-img.com/800_pic/175b7df9c83aabfdb88678099f4ed2a9.png',
  'https://img.youpin.mi-img.com/youpinoper/f4c00cbda4193221dc1f26870ef3f26f.png',
  'https://img.youpin.mi-img.com/800_pic/821a24e4b0958eacbf6912bccfb68f3d.png',
]

let ads = [
  'https://img.youpin.mi-img.com/youpinoper/5640de9d08a8de11b1f808b7b12a9953.jpg',
  'https://img.youpin.mi-img.com/youpinoper/0343d7295d2c91ec57c21d682440cb49.jpg',
  'https://img.youpin.mi-img.com/youpinoper/d28dd3fa03fd33019d5dc0f773029128.jpg'
]

let goodsNames = [
  '吃喝到家',
  '电视机',
  '消毒防护',
  '安心出行',
  '亲子时光',
  '运动健康',
]

let goodsTagImgs = [
  'https://img.youpin.mi-img.com/editor1/0295fc6232b4042f95f9ada568438ce0.png?w=60&h=60',
  'https://img.youpin.mi-img.com/editor1/dab584635fdec171fe97bf1f836f8ecb.png?w=60&h=60',
  '',
]


Mock.mock('/classify', 'get',function(options){
  return Mock.mock({
    "obj|2-4": {
      "为你推荐|2-7": [
        {
          'id|+1': 1,
          'title|1': goodsNames,
          'tag_img|1': goodsTagImgs,
          'img|1': goodsImgs,
          'url': '/goods/123',
        }
      ],
      "精选专区|2-7": [
        {
          'id|+1': 1,
          'title|1': goodsNames,
          'tag_img|1': goodsTagImgs,
          'img|1': goodsImgs,
          'url': '/goods/123',
        }
      ],
      "专属定制|2-7": [
        {
          'id|+1': 1,
          'title|1': goodsNames,
          'tag_img|1': goodsTagImgs,
          'img|1': goodsImgs,
          'url': '/goods/123',
        }
      ],
      "电脑外设|2-7": [
        {
          'id|+1': 1,
          'title|1': goodsNames,
          'tag_img|1': goodsTagImgs,
          'img|1': goodsImgs,
          'url': '/goods/123',
        }
      ]
    },
    'classify_ad|1': ads,
  })
})