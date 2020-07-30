<template>
  <div id="home">
    <!-- 骨架屏幕  数据未加载时显示占位-->
    <Skeleton v-show="isShowLoading" />
    <div v-if="!isShowLoading">
      <div class="head">
        <Header></Header>
        <!-- 轮播图 -->
        <Sowing :sowing_list="sowing_list"></Sowing>
        <Tip :home_ad="home_ad"></Tip>
      </div>
      <Nav :nav_list="nav_list"></Nav>
      <VipTip></VipTip>
      <FlashBuy :flash_sale_product_list="flash_sale_product_list"></FlashBuy>
      <SpecialZone :specialZone="specialZone"></SpecialZone>
      <v-top />
    </div>
  </div>
</template>

<script>
import { getHomeData } from './../../serve/api/index.js'
import { mapMutations, mapState } from 'vuex'

import Skeleton from './components/skeleton/Skeleton'
import Header from './components/header/Header'
import Sowing from './components/sowing/Sowing'
import Tip from './components/tip/Tip'
import Nav from './components/nav/Nav'
import VipTip from './components/myVip/VipTip'
import FlashBuy from './components/flash/FlashBuy'
import SpecialZone from './components/special/SpecialZone'

export default {
  name: 'Home',
  components: {
    Skeleton,
    Header,
    Sowing,
    Tip,
    Nav,
    VipTip,
    FlashBuy,
    SpecialZone
  },
  data () {
    return {
      isShowLoading: true, // 是否加载骨架屏
      sowing_list: [], //轮播图数组
      home_ad: '',  //首页广告,
      nav_list: [], //导航列表
      flash_sale_product_list: [], //限时抢购
      specialZone: {}, // 特色专区数据
    };
  },
  mounted () {
    this._initData()
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['ADD_GOODS', 'ADD_TO_CART']),
    async _initData () {
      const res = await getHomeData()
      if (res.success) {
        const data = res.data
        this.sowing_list = data.list[0].icon_list
        this.home_ad = data.home_ad.image_url
        this.nav_list = data.list[2].icon_list
        this.flash_sale_product_list = data.list[3].product_list
        this.specialZone = data.special_zone
        this.isShowLoading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  background-color: "#f5f5f5";
  padding-bottom: 3rem;
  .head {
    width: 100%;
    background-image: url("http://518taole.7-orange.cn/backImage.png");
  }
}
</style>