<template>
  <section class="animate">
    <div class="animate__content">
      <ul class="animate-content__list">
        <li
          v-for="(item, index) in contentList"
          :key="index"
          class="animate-content-list__item"
          @click.prevent="handleCheckDetail(item.name)">
          <div class="animate-content-list-item__top">
            <i
              :data-gif="require(`@/assets/images/${item.name}.gif`)"
              :data-jpg="require(`@/assets/images/${item.name}.jpg`)"
              @mouseover="setItemGif"
              @mouseleave="setItemJpg"
            ></i>
          </div>
          <div class="animate-content-list-item__center"></div>
          <div class="animate-content-list-item__bottom"></div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'animateHome',
  data () {
    return {
      contentList: [
        {
          name: 'login_a'
        }
      ]
    }
  },
  mounted () {
    this.initItemBackgroundImage()
  },
  methods: {
    handleCheckDetail (url) {
      this.$router.push(`/animate/${url}`)
    },
    initItemBackgroundImage () {
      let contentList = document.querySelectorAll('.animate-content-list-item__top i')
      Array.prototype.forEach.call(contentList, item => {
        let imgUrl = item.attributes['data-jpg'].value
        item.style.backgroundImage = `url(${imgUrl})`
      })
    },
    setItemGif (event) {
      let imgUrl = event.target.attributes['data-gif'].value
      event.target.style.backgroundImage = `url(${imgUrl})`
    },
    setItemJpg (event) {
      let imgUrl = event.target.attributes['data-jpg'].value
      event.target.style.backgroundImage = `url(${imgUrl})`
    }
  }
}
</script>

<style lang="scss" scoped>
.animate {
  width: 100vw;
  height: 100vh;
  background-color: #F8F8F8;
  overflow: scroll;

  .animate__content {

    .animate-content__list {
      display: flex;
      flex-wrap: wrap;
      padding: 80px;

      .animate-content-list__item {
        margin: 0 30px 30px 0;
        background-color: #fff;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, .1);
        border-radius: 8px;
        overflow: hidden;

        .animate-content-list-item__top {
          position: relative;
          width: 400px;
          height: 350px;
          background-image: url('~@/assets/images/login_a.jpg');
          background-position: center center;
          background-size: 80% auto;
          background-repeat: no-repeat;
          transition: all .6s;

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, .3);
          }

          &:hover {
            background-size: 90% auto;
            cursor: pointer;
          }

          i {
            position: relative;
            z-index: 1;
            display: block;
            width: 100%;
            height: 100%;
            background-position: center center;
            background-size: auto 100%;
            background-repeat: no-repeat;
          }
        }

        .animate-content-list-item__center {

        }

        .animate-content-list-item__bottom {

        }
      }
    }
  }
}
</style>
