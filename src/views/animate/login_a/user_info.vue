<template>
  <div class="user_info">
    <div class="top">
      <strong>Hello dribbble</strong>
      <p>I'm ready to play</p>
    </div>
    <div class="center"></div>
    <div class="bottom">
      <p>Thank you</p>
      <strong>Le Renard Rouge!</strong>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;

  .top {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 48px;
    animation: bounceInDown 1s;

    strong {
      color: #646464;
    }

    p {
      color: #C9CED6;
    }
  }

  .center {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    background: url('~@/assets/images/DonaldDuck.jpg') center center / auto 100% no-repeat;
    animation: zoomIn 1s;
  }

  .bottom {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 32px;
    animation: bounceInUp 1s;

    strong {
      font-weight: bold;
      color: #B9BDC9;
    }

    p {
      color: #C9CED6;
    }
  }
}
</style>
