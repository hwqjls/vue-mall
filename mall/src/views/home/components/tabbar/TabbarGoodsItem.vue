<template>
  <div id="tabbarItem">
    <van-tabs v-model="active"
              animated
              swipeable
              sticky
              :border="false"
              :offset-top="47"
              ref="tabs"
              type="line"
              color="#28BE57"
              title-active-color="#28BE57"
              animated:yes>
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[0]}}</span>
        </div>
        <ProduceItem :product_lists="tabbar_all_product_list" />
      </van-tab>
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[1]}}</span>
        </div>
        <ProduceItem :product_lists="flash_sale_product_list" />
      </van-tab>
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[2]}}</span>
        </div>
        <ProduceItem :product_lists="tabbar_all_product_list" />
      </van-tab>
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[3]}}</span>
        </div>
        <ProduceItem :product_lists="flash_sale_product_list" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ProduceItem from './ProduceItem'
export default {
  name: 'TabbarItem',
  props: {
    tabbar_all_product_list: Array,
    flash_sale_product_list: Array
  },
  components: { ProduceItem },
  data () {
    return {
      active: 0,
      itemsTitle: ['全部', '晚餐', '人气', '心选'],
    };
  }
}
</script>

<style lang="less" scoped>
#tabbarItem {
  width: 100%;
  font-size: 0.28rem;
}
</style>
