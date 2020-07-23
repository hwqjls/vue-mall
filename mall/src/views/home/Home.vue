<template>
  <div id="home">
    <!-- 骨架屏幕  数据未加载时显示占位-->
    <Skeleton v-show="isShowLoading" />
    <div v-if="!isShowLoading">
      <div class="head">
        <Header></Header>
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from './components/skeleton/Skeleton'
import Header from './components/header/Header'

export default {
  name: 'Home',
  components: {
    Skeleton,
    Header
  },
  data () {
    return {
      isShowLoading: false, // 是否加载骨架屏
    };
  }
}
</script>

<style lang="less" scoped>
#home {
  background-color: "#f5f5f5";
  padding-bottom: 3rem;
}
</style>