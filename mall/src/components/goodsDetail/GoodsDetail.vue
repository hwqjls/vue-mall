<template>
  <div id="goodsDetail">
    <van-nav-bar title="商品详情"
                 :fixed="true"
                 left-arrow
                 @click-left="onClickLeft" />
    <div class="goodsDetailWrapper">
      <div class="goodsImage">
        <img :src="goodsInfo.small_image" />
      </div>

      <div class="flash">
        <div class="flashLeft">
          <span>限时抢购</span>
          <i>抢购中</i>
        </div>
        <div class="flashRight">
          <span>距结束</span>
          <van-count-down :time="time">
            <template v-slot="timeData"
                      format="HH mm ss">
              <span class="item">{{ timeData.hours }}</span>
              <i>:</i>
              <span class="item">{{ timeData.minutes }}</span>
              <i>:</i>
              <span class="item">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsDetail',
  data () {
    return {
      time: 30 * 60 * 1000 * 100,
      goodsInfo: this.$route.query
    };
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less" scoped>
#goodsDetail {
  background-color: #f5f5f5;
  .goodsDetailWrapper {
    overflow: hidden;
    margin-top: 0.8rem;
    .goodsImage {
      width: 100%;
      img {
        width: 100%;
        height: 80%;
      }
    }

    .flash {
      display: flex;
      flex: 1;
      width: 100%;
      height: 0.68rem;
      line-height: 0.68rem;
      .flashLeft {
        width: 55%;
        height: 0.68rem;
        line-height: 0.68rem;
        background-color: #e25450;
        span {
          font-size: 0.32rem;
          color: #ffffff;
          padding-left: 0.32rem;
        }
        i {
          padding-left: 0.2rem;
          font-size: 0.2rem;
          color: #fff;
        }
      }
      .flashRight {
        width: 45%;
        height: 0.68rem;
        line-height: 0.68rem;
        padding-left: 0.2rem;
        background-color: #fcefe9;
        font-size: 0.24rem;
        color: #e25450;
      }
    }
  }
}
</style>