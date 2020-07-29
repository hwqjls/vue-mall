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
      <div class="flash"
           v-show="goodsInfo.isFlash">
        <div class="flashLeft">
          限时抢购
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
      <div class="productInfo">
        <div class="title">{{goodsInfo.name}}</div>
        <div class="subTitle">{{goodsInfo.spec}}</div>
        <div class="detailInfo">
          <span class="price">{{goodsInfo.price|moneyFormat}}</span>
          <span class="originPrice">{{goodsInfo.origin_price}}</span>
          <span class="totalSales">已售:{{goodsInfo.total_sales}}</span>
        </div>
        <van-divider />
        <div class="shippingInfo">
          <van-icon name="cluster-o" />
          此商品按500g/份计价,如实收少于500g将退还差价
        </div>
        <van-divider />
        <div class="shippingInfo">
          <van-icon name="clock-o" />
          最快29分钟内送达
        </div>
      </div>
      <div class="specifications">
        <div class="specificationsTitle">规格</div>
        <van-divider dashed />
        <div class="conditions">保存条件
          <span class="content">冷藏</span>
        </div>
        <van-divider dashed />
        <div class="conditions">保质期
          <span class="content">15天</span>
        </div>
      </div>
      <div class="showGoods">
        <img :src="goodsImage" />
      </div>

      <van-goods-action :safe-area-inset-bottom="true">
        <van-goods-action-icon icon="cart-o"
                               :info="goodsNum"
                               @click="onClickCar"
                               text="购物车" />
        <van-goods-action-button type="warning"
                                 text="加入购物车"
                                 @click="onClickAddToCar" />
      </van-goods-action>
    </div>

    <v-top />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'GoodsDetail',
  data () {
    return {
      time: 30 * 60 * 1000 * 100,
      isFlash: false,
      goodsInfo: this.$route.query,
      goodsImage: 'https:\/\/img.ddimg.mobi\/3f280ff77ab3d1571213379189.jpg?width=750&height=1869'
    };
  },
  computed: {
    ...mapState(['shopCart']),
    goodsNum () {
      let num = 0;
      Object.values(this.shopCart).forEach((goods) => {
        num += goods.num;
      })
      if (num > 0) {
        return num;
      }
    }
  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    onClickLeft () {
      this.$router.go(-1);
    },
    onClickAddToCar () {
      this.ADD_TO_CART(this.goodsInfo);
    },
    onClickCar () {
      this.$router.push({ name: 'cart' });
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
        padding-left: 0.32rem;
        background-color: #e25450;
        font-size: 0.32rem;
        color: #ffffff;

        i {
          padding-left: 0.2rem;
          font-size: 0.2rem;
          color: #fff;
        }
      }
      .flashRight {
        width: 45%;
        padding-left: 0.2rem;
        background-color: #fcefe9;
        font-size: 0.24rem;
        color: #e25450;
        .van-count-down {
          display: inline;
          margin: 0.1rem;
          .item {
            display: inline-block;
            width: 0.44rem;
            height: 0.44rem;
            text-align: center;
            color: #fff;
            background-color: #e25450;
          }
          i {
            color: #e25450;
            padding: 0 0.1rem;
          }
        }
      }
    }

    .productInfo {
      padding: 0.2rem;
      background-color: #fff;
      .title {
        padding: 0.1rem 0;
        font-size: 0.28rem;
      }
      .subTitle {
        padding: 0.1rem 0;
        font-size: 0.24rem;
        color: grey;
      }
      .detailInfo {
        height: 0.6rem;
        line-height: 0.6rem;
        .price {
          float: left;
          padding-right: 0.18rem;
          font-size: 0.28rem;
          color: tomato;
        }
        .originPrice {
          float: left;
          font-size: 0.24rem;
          color: grey;
          text-decoration: line-through;
        }
        .totalSales {
          float: right;
          font-size: 0.28rem;
          color: tomato;
        }
      }
    }

    .shippingInfo {
      font-size: 0.24rem;
      color: grey;
    }

    .specifications {
      margin-top: 0.4rem;
      padding: 0.2rem;
      background-color: #fff;
      .specificationsTitle {
        font-size: 0.4rem;
      }
      .conditions {
        font-size: 0.24rem;
        color: grey;
        .content {
          margin-left: 1rem;
        }
      }
    }

    .showGoods {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>