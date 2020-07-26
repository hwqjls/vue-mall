<template>
  <div id="flashFood">
    <div class="flashItemWrapper">
      <ul class="itemWrapper"
          ref="ulWrapper">
        <li class="itemInCovers"
            v-for="(product,index) in flash_sale_product_list"
            :key="index"
            ref="productItem"
            @click="goToGoodsDetail(product)">
          <img v-lazy="product.small_image"
               class="itemImage">
          <span class="title">{{product.name}}</span>
          <div class="price">
            <p class="nowPrice">{{product.price | moneyFormat}}</p>
            <p class="originPrice">{{product.origin_price | moneyFormat}}</p>
            <div class="buyCar"
                 @click.stop="addToCart(product,index)">
              <svg-icon iconClass="car"
                        style="width:.5rem;height:.5rem"></svg-icon>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { Toast } from 'vant'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'FlashFood',
  props: {
    flash_sale_product_list: Array
  },
  data () {
    return {
      dropImage: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      let contentWrapperWidth = 0;
      let el = this.$refs.productItem;
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth;
      }
      this.$refs.ulWrapper.style.width = contentWrapperWidth + 'px';
    })
    if (!this.scroll) {
      this.scroll = new BScroll('.flashItemWrapper', {
        probeType: 2,
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
      })
    } else {
      this.scroll.refresh();
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    goToGoodsDetail (product) {

    },
    addToCart (product, index) {
      this.ADD_TO_CART(product);
      if (this.userInfo.token) {
        this.dropImage = product.small_image;
      }
    }
  }
}
</script>

<style lang="less" scoped>
#flashFood {
  .flashItemWrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    .itemWrapper {
      display: flex;
      justify-content: flex-start;
      .itemInCovers {
        flex: 0 0 2rem;
        align-items: center;
        padding-right: 0.12rem;
        .itemImage {
          width: 100%;
          border-radius: 50%;
          // 等比缩小图片来适应元素的尺寸
          background-size: contain;
          background-image: url("../../../../images/placeholderImg/product-img-load.png");
        }

        .title {
          display: inline-block;
          height: 0.6rem;
          font-size: 0.24rem;
          overflow: hidden;
          word-break: break-all;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .price {
          position: relative;
          padding-left: 0.18rem;
          .nowPrice {
            color: #f37078;
            font-size: 0.32rem;
          }
          .originPrice {
            font-size: 0.24rem;
            color: #999999;
            text-decoration: line-through;
          }
          .buyCar {
            position: absolute;
            right: 0.16rem;
            top: -0.5rem;
            width: 0.5rem;
            height: 0.5rem;
          }
        }
      }
    }
  }
}
</style>