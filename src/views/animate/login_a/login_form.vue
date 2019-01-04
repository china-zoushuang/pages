<template>
  <div class="login_form">
    <div class="logo">
      dribbble
    </div>
    <div class="desc">
      <b>Sign in</b> to join <br>
      dribbble community
    </div>
    <div class="form">
      <div
        class="form__input"
        :class="{'form__input--focus': focusInput === 'email'}">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          @focus="focusInput = 'email'"
          @blur="focusInput = ''">
      </div>
      <div
        class="form__input"
        :class="{'form__input--focus': focusInput === 'password'}">
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          @focus="focusInput = 'password'"
          @blur="focusInput = ''">
      </div>
      <div class="form__btns">
        <button
          type="button"
          :disabled="!email || !password"
          @click="handleLogin">
          Sign in
        </button>
      </div>
    </div>
    <panel-fixed-bottom>
      <div class="notice">
        Don't have an account?
        <a href="javascript:;">Create one</a>
      </div>
    </panel-fixed-bottom>
  </div>
</template>
<script>
import PanelFixedBottom from '@/components/panel_fixed_bottom'
export default {
  components: {
    PanelFixedBottom
  },
  data () {
    return {
      email: '',
      password: '',
      focusInput: ''
    }
  },
  methods: {
    handleLogin () {
      this.$emit('login')
    }
  }
}
</script>

<style lang="scss" scoped>
.login_form {

  .logo {
    padding: 140px 100px 0 100px;
    font-family: 'Leckerli+One';
    line-height: 52px;
    font-size: 52px;
    animation: bounceInLeft 1s;
  }

  .desc {
    padding: 80px 100px 0 100px;
    font-size: 40px;
    line-height: 52px;
    color: #D8D8D8;
    animation: bounceInLeft 1.2s;

    b {
      color: #717171;
    }
  }

  .form {
    padding: 80px 100px 0 100px;

    .form__input {
      position: relative;
      margin-bottom: 42px;
      border-bottom: 2px solid #D1D0D4;

      &:first-child {
        animation: bounceInLeft 1.4s;
      }

      &:nth-child(2) {
        animation: bounceInLeft 1.6s;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        display: block;
        width: 0;
        height: 2px;
        background-color: #F85F88;
        transition: width .5s;
      }

      input {
        width: 100%;
        padding: 20px 0;
        font-size: 32px;
      }
    }

    .form__input--focus {

      &::after {
        width: 100%;
      }
    }

    .form__btns {
      display: flex;
      justify-content: space-around;
      padding-top: 58px;
      animation: bounceInUp 1.2s;

      button {
        width: 220px;
        height: 90px;
        background-color: #F85F88;
        border-radius: 45px;
        font-size: 34px;
        color: #fff;

        &:disabled {
          background-color: #FDB0C5;
        }
      }
    }
  }

  .notice {
    padding: 100px;
    font-size: 25px;
    color: #E0DFE0;
    animation: bounceInLeft .8s;

    a {
      color: #bbb;
    }
  }
}
</style>
