<template>
  <div id="tip">
    <div class="tipBox">
      <img src="../../../../images/icon/transport.png" />
      <span class="tipText">最快30分钟内送达</span>
    </div>
    <div class="tipBox">
      <img src="../../../../images/icon/money.png" />
      <span class="tipText">0元起送,0元配送费</span>
    </div>
    <div class="tipBox">
      <img src="../../../../images/icon/seal.png" />
      <span class="tipText">安心退</span>
    </div>
    <div @click="goToVip">
      <img class="adImg"
           :src="home_ad" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tip',
  props: {
    home_ad: String
  },
  methods: {
    goToVip () {
      this.$router.push({ name: 'myVip' });
    }
  }
}
</script>

<style lang="less" scoped>
#tip {
  margin-top: -1rem;
  font-size: 0.2rem;
}

.tipBox {
  float: left;
  width: 33%;
  text-align: center;
}

.tipBox img {
  width: 0.32rem;
  height: 0.32rem;
  margin-right: 0.08rem;
  vertical-align: middle;
}

.tipText {
  color: #45c763;
}

.adImg {
  width: 100%;
  height: 2rem;
  margin: 0.1rem 0 -0.02rem;
}
</style>