<template>
  <div class="wrapper">
    <div class="locationWrapper"
         ref="location">
      <router-link to="/dashboard/map"
                   tag="span"
                   class="address">
        <van-icon class="iconLoc"
                  name="location-o" />
        <span class="searchTip">请选择位置</span>
        <van-icon class="iconDown"
                  name="arrow-down" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

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
  height: 1.04rem;
  padding: 0.1rem;
  line-height: 1.04rem;
  border-top: solid 1px #eee;
  font-size: 0.32rem;
  color: #000;
}

.locationWrapper {
  position: relative;
  width: 3rem;
  height: 0.78rem;
  border-radius: 0.5rem;
  background-color: #ededed;
  opacity: 0.6;
  box-sizing: border-box;
}

.locationWrapper .iconLoc {
  position: absolute;
  left: 0.2rem;
  top: 0.24rem;
}

.locationWrapper .searchTip {
  position: absolute;
  left: 0.62rem;
  top: -0.14rem;
}

.locationWrapper .iconDown {
  position: absolute;
  left: 2.4rem;
  top: 0.24rem;
}
</style>