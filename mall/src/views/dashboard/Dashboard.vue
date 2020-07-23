<template>
  <div id="dashboard">
    <van-tabbar v-model="active"
                :safe-area-inset-bottom="true"
                class="moveToCart"
                active-color="#75a342">
      <van-tabbar-item v-for="(item, index) in tabbars"
                       :key="index"
                       :id="index == 3 ? 'buycar' : ''"
                       @click="tab(index, item.name)"
                       :badge="item.name == 'cart' ? goodsNum : ''">
        <template slot="icon"
                  slot-scope="props">
          <img :src="props.active ? item.active : item.normal" />
        </template>
        <span :class="currIndex == index ? active : ''">
          {{item.title}}
        </span>
      </van-tabbar-item>
    </van-tabbar>

    <keep-alive>
      <transition name="router-slider" mode="out-in">
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </transition>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'DashBoard',
  data () {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: 'home',
          title: '首页',
          normal: require('@/images/tabbar/home_default.png'),
          active: require('@/images/tabbar/home_selected.png')
        },
        {
          name: 'category',
          title: '分类',
          normal: require('@/images/tabbar/category_default.png'),
          active: require('@/images/tabbar/category_selected.png')
        },
        {
          name: 'eat',
          title: '吃什么',
          normal: require('@/images/tabbar/eat_default.png'),
          active: require('@/images/tabbar/eat_selected.png')
        },
        {
          name: 'cart',
          title: '购物车',
          normal: require('@/images/tabbar/shoppingcart_default.png'),
          active: require('@/images/tabbar/shoppingcart_selected.png'),
          num: 5
        },
        {
          name: 'mine',
          title: '我的',
          normal: require('@/images/tabbar/mine_default.png'),
          active: require('@/images/tabbar/mine_selected.png')
        }
      ]
    };
  },
  created () {
    this.tabbarSelected(this.$route.name)
  },
  mounted () {
    this._initData()
  },
  beforeRouteUpdate (to, from, next) {
    this.tabbarSelected(to.name)
    next()
  },
  computed: {
    ...mapState(['shopCart', 'userInfo']),
    goodsNum () {
      let num = 0
      Object.values(this.shopCart).forEach((goods, index) => {
        num += goods.num
      })
      if (num > 0) {
        return num
      }
    }
  },
  methods: {
    ...mapMutations(['INIT_SHOP_CART', 'INIT_USER_INFO']),
    tab (index, name) {
      this.currIndex = index
      this.$router.push(name)
    },
    _initData () {
      this.INIT_SHOP_CART()
      this.INIT_USER_INFO()
    },
    tabbarSelected (item) {
      const mapType = {
        home: 0,
        category: 1,
        eat: 2,
        cart: 3,
        mine: 4
      }
      if (this.active !== mapType[item]) {
        this.active = mapType[item]
      }
    }
  }
}
</script>

<style lang="less" scoped>
/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}
.router-slider-enter,
.router-slider-leave-active {
  opacity: 0;
}
@keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.moveToCart {
  animation: mymove 0.5s ease-in-out;
}
</style>