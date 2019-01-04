// createdBy: zoushuang@xiaomi.com
// createdTime: 2018-12-20
// 使用：
// <fixed-bottom-panel>
//   <slot></slot>
// </fixed-bottom-panel>
<template>
  <div class="panel_fixed_bottom">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'panelFixedBottom',
  mounted () {
    this.changePosition()
    window.addEventListener('resize', this.changePosition)
  },
  updated () {
    this.changePosition()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.changePosition)
  },
  methods: {
    changePosition () {
      let timer
      clearTimeout(timer)
      timer = setTimeout(() => {
        let docEl = document.documentElement
        if (docEl.offsetHeight > docEl.clientHeight) {
          this.$el.style.position = 'static'
        } else {
          this.$el.style.position = 'fixed'
        }
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel_fixed_bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  z-index: 100;
}
</style>
