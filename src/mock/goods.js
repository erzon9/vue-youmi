import Mock from 'mockjs';

Mock.mock('/api/goods_detail', function() {
  return {
    goods: {
      id: 'apple1234567654455',
      title: 'Apple/苹果 10.2 英寸 iPad 金色 无线局域网机型 128G WLAN版/iPadOS系统/Retina显示屏/MW792CH/A',
      price: '2999',
      desc: '视网膜显示屏，内置摄像头，触控ID，便于携带',
      imgs: [
        'https://img.youpin.mi-img.com/shopmain/b682246a6f48263832ee8e14a449bbd7.jpg?w=1080&h=1080&w=1080&h=1270&crop=a_0_95_1080_1080',
        'https://img.youpin.mi-img.com/shopmain/6177a1f9e428d9bf90766c0bee8ce5bc.jpg?w=1080&h=1080&w=1080&h=1270&crop=a_0_95_1080_1080',
        'https://img.youpin.mi-img.com/shopmain/c2fcda066bb78a94906ffa9e6edbcc6a.jpg?w=1080&h=1080&w=1080&h=1270&crop=a_0_95_1080_1080',
        'https://img.youpin.mi-img.com/shopmain/b757d9324b8ac5a59e5b1e63a6b380df.jpg?w=1080&h=1080&w=1080&h=1270&crop=a_0_95_1080_1080',
        'https://img.youpin.mi-img.com/shopmain/58fff676391a86e9afd14f9e79704060.jpg?w=1080&h=1080&w=1080&h=1270&crop=a_0_95_1080_1080',
      ],
      detail: {
        color: ['golden', 'silver', 'grey'],
        version: [ '无线局域网机型 32G', '无线局域网机型 128 G' ],
      }
    }
  }
});
