/**
 * 提示
 * createdBy: zoushuang@xiaomi.com
 * createdTime: 2018-10-18
 */
<template>
  <transition name="fade-in">
    <div
      class="toast"
      v-show="visible">
      {{ msg }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      visible: false,
      msg: this.msg
    }
  },
  mounted () {
    this.show()
  },
  methods: {
    show () {
      this.visible = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.visible = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10001;
  max-width: 60vw;
  max-height: 50vh;
  padding: 0 30px;
  background-color: rgba(0, 0, 0, .6);
  border-radius: 15px;
  line-height: 60px;
  font-size: 28px;
  color: #fff;
  word-wrap: break-word;
  overflow-y: scroll;
  transform: translate(-50%, -50%);
}
</style>
