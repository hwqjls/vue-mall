<template>
  <div id="searchHead">
    <div class="searchBox"
         @click="goSearch">
      <div class="iconSearchWrapper">
        <svg-icon iconClass="search"></svg-icon>
      </div>
      <span class="searchPrompt">输入商品名称</span>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'SearchHead',
  methods: {
    goSearch () {
      Toast({
        message: '未实现',
        duration: 800
      })
    }
  }
}
</script>

<style lang="less" scoped>
#searchHead {
  display: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0.2rem 0.205rem;
  border-bottom: solid 1px #e6e6e6;
  background-color: #fff;
  font-size: 0.32rem;
  .searchBox {
    position: relative;
    display: block;
    height: .58rem;
    line-height: .58rem;
    border-radius: 0.7rem;
    background: #f2f2f2;
    .iconSearchWrapper {
      position: absolute;
      left: 0.5rem;
      width: 0.7rem;
      height: 0.7rem;
    }
    .searchPrompt {
      padding-left: 1rem;
      color: #b5b5b5;
    }
  }
}
</style>