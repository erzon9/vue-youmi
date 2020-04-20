import Mock from 'mockjs';

let user = {
  username: 'admin',
  avator: '@/assets/avator.jpg',
  sex: 0,
  age: '23',
  user_id: 'admin-123456',
}

Mock.mock('/api/login', 'post', function(options) {
  let {body} = options;
  body = JSON.parse(body);
  let {username, password} = body;
  if (username === 'admin' && password + '' === '123') {
    let token = `${username}-${Date.now()}-0`;
    return {
      code: 0,
      token: token,
      user,
      msg: '登录成功',
    }
  } else {
    return {
      code: 1,
      msg: '用户名或密码错误',
    }
  }
});

Mock.mock('/api/islogin', 'post' ,function(options) {
  let token = JSON.parse(options.body).token;
  console.log(options);
  let isValid = token.split('-').pop();
  if (isValid === '0') {
    let token = `${user.username}-${Date.now()}-1`;
    return {
      code: 0,
      user,
      token,
      msg: '用户已经登录',
    }
  } else {
    console.log('用户没有登录');
    return {
      code: 1,
      msg: '当前没有用户登录',
    }
  }
  
})