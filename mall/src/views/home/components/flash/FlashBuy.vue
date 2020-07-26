<template>
  <div id="flashBuy">
    <div class="title">
      限时抢购
    </div>
    <van-count-down :time="time">
      <template v-slot="timeData"
                format="HH mm ss">
        <span class="block">{{ timeData.hours }}</span>
        <span class="block">{{ timeData.minutes }}</span>
        <span class="block">{{ timeData.seconds }}</span>
      </template>
    </van-count-down>
    <div class="more"
         @click="moreClick">
      更多
    </div>
    <FlashFood :flash_sale_product_list="flash_sale_product_list" />
  </div>
</template>

<script>
import FlashFood from './FlashFood'
import { Toast } from 'vant'

export default {
  name: "FlashBuy",
  props: {
    flash_sale_product_list: Array
  },
  components: {
    FlashFood
  },
  data () {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },
  methods: {
    moreClick () {
      Toast({
        message: '更多',
        duration: 800
      })
    }
  }
}
</script>

<style lang="less" scoped>
#flashBuy {
  margin-top: 0.2rem;
  .title {
    float: left;
    margin-left: 0.1rem;
    padding-left: 0.1rem;
    border-left: 0.08rem solid #3cb963;
    font-size: 0.5rem;
  }
  .block {
    float: left;
    width: 22px;
    margin: 0.08rem;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: tomato;
  }
  .more {
    float: right;
    padding: 0.1rem 0.24rem 0 0;
    font-size: 0.28rem;
    color: #3cb963;
  }
}
</style>