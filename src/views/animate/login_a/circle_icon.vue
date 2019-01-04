<template>
  <div
    class="loading_icon"
    :class="{'loading_icon--active': active, 'loading_icon--animation': canvasDone}">
    <canvas id="loading_circle" class="loading_icon__canvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      required: true,
      type: Boolean
    }
  },
  data () {
    return {
      canvasDone: false
    }
  },
  watch: {
    active: function (newVal, oldVal) {
      if (newVal) {
        let _this = this
        setTimeout(function () {
          _this.loadCanvas()
        }, 500)
      }
    }
  },
  methods: {
    loadCanvas: function () {
      const icon = document.querySelector('.loading_icon')
      const canvas = document.getElementById('loading_circle')
      const context = canvas.getContext('2d')
      let radius = icon.offsetWidth / 2
      let _this = this
      let angle = -(1 / 2 * Math.PI)
      let timer = setInterval(function () {
        if (angle < 2 * Math.PI) {
          angle += 0.1
          _this.drawCircle(context, angle, radius)
        } else {
          clearInterval(timer)
          _this.drawLine(context, radius)
        }
      }, 0)
    },
    // 画圆圈
    drawCircle: function (ctx, angle, radius) {
      ctx.beginPath()
      ctx.lineWidth = 20
      ctx.arc(radius, radius, radius, -(1 / 2 * Math.PI), angle)
      ctx.strokeStyle = '#C82567'
      ctx.stroke()
    },
    // 画曲线
    drawLine: function (ctx, radius) {
      ctx.beginPath()
      ctx.lineWidth = 10
      ctx.moveTo(0, radius)
      ctx.quadraticCurveTo(radius, 30, radius * 2, 0)
      ctx.moveTo(0, radius * 2)
      ctx.quadraticCurveTo(radius, 20, radius * 2, radius)
      ctx.moveTo(0, 0)
      ctx.lineTo(radius * 2, radius * 2)
      ctx.stroke()
      this.canvasDone = true
      let _this = this
      setTimeout(() => {
        _this.$emit('showUserInfo')
      }, 800)
    }
  }
}
</script>

<style lang="scss" scoped>
.loading_icon {
  position: absolute;
  top: 878px;
  left: 50%;
  z-index: -1;
  width: 220px;
  height: 90px;
  background-color: #F85F88;
  border-radius: 45px;
  overflow: hidden;
  transform: translateX(-50%);
  transition: all .5s;
  opacity: 0;

  .loading_icon__canvas {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity .6s;
  }
}

.loading_icon--active {
  width: 90px;
  opacity: 1;
}

.loading_icon--animation {
  top: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 2.5s;

  .loading_icon__canvas {
    opacity: 0;
  }
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    background-color: #F85F88;
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg) scale(0);
    background-color: #8D4385;
  }
}
</style>
