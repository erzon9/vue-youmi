<template>
  <div class="cart-page">
    <UserLoginCart v-if="isLogin"></UserLoginCart>
    <UserNotLoginCart v-else></UserNotLoginCart>
  </div>
</template>

<script>
import UserLoginCart from './UserLoginCart';
import UserNotLoginCart from './UserNotLoginCart';
export default {
  components: {
    UserLoginCart,
    UserNotLoginCart
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style>

</style>