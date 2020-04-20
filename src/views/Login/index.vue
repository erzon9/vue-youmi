<template>
  <div class="login-page">
    <div class="login-title">
      欢迎登录
    </div>
    <div class="login-wrap">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
         
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名'}, { validator: nameValidator, message: '没有通过验证' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
         
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码'}, {validator: pwdValidator, message: '密码格式不正确'}]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登录/注册</van-button>
        </div>
      </van-form>
      <button @click="handleIsLogin">是否登录</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(['loginAction', 'isLoginAction']),
    async onSubmit(values) {
      console.log("submit", values);
      try {
        await this.loginAction({data: {username: this.username, password: this.password}});
        let from = this.$route.query.from || '/';
        console.log(from);
        this.$router.replace(from);
      } catch (error) {
        console.log(error.message);
      }
      
    },
    async handleIsLogin() {
      await this.isLoginAction();
    },
    nameValidator(val) {
      return /\w{3,}/.test(val);
    },
    pwdValidator(val) {
      return /\w{2}/.test(val);
    }
  }
};
</script>

<style lang='less'>
.login-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding: 100px 10px;
  .login-title {
    font-size: 24px;
    letter-spacing: 10px;
    color: #666666;
    text-align: center;
  }
  .login-wrap {
    margin-top: 30px;
    .van-button {
      background-color: #d1a96e;
      border: none;
    }
  }
}
</style>