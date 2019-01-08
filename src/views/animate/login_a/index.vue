<template>
  <section class="login_a">
    <login-form
      v-if="!isLogged && !loading"
      @login="loading = true"
    ></login-form>
    <circle-icon
      :active="loading"
      @showUserInfo="isLogged = true"
    ></circle-icon>
    <user-info v-if="isLogged"></user-info>
  </section>
</template>

<script>
import LoginForm from './login_form'
import UserInfo from './user_info'
import CircleIcon from './circle_icon'
export default {
  name: 'animateDetail',
  components: {
    LoginForm,
    UserInfo,
    CircleIcon
  },
  data () {
    return {
      isLogged: false,
      loading: false
    }
  }
}
</script>
