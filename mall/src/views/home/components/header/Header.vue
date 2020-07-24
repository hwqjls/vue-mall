<template>
  <div class="wrapper">
    <div class="locationWrapper"
         ref="location">
      <router-link :to="{name:'map', path: '/dashboard/map'}"
                   tag="span"
                   class="address">
        <van-icon class="iconLoc"
                  name="location-o" />
        <span class="locTip">请选择位置</span>
        <van-icon class="iconDown"
                  name="arrow-down" />
      </router-link>
    </div>

    <van-field v-model="search"
               class="searchWrapper"
               clearable
               left-icon="search"
               placeholder="输入商品名称" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      search: ''
    };
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 0.78rem;
  line-height: 0.78rem;
  padding: 0.1rem;
  border-top: solid 1px #eee;
  font-size: 0.32rem;
  color: #000;
}

.locationWrapper {
  position: relative;
  width: 3rem;
  border-radius: 0.5rem;
  background-color: #ededed;
  box-sizing: border-box;
  opacity: 0.8;
}

.locationWrapper .iconLoc {
  position: absolute;
  left: 0.2rem;
  top: 0.24rem;
}

.locationWrapper .locTip {
  position: absolute;
  left: 0.62rem;
  top: 0;
}

.locationWrapper .iconDown {
  position: absolute;
  left: 2.4rem;
  top: 0.24rem;
}

.searchWrapper {
  width: 4rem;
  margin-left: 0.2rem;
  background-color: #ededed;
  border-radius: 0.5rem;
  opacity: 0.8;
}
</style>