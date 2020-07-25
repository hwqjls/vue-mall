<template>
  <div id="nav">
    <van-grid :column-num="5"
              :border="false">
      <van-grid-item v-for="(nav,index) in nav_list"
                     :key="nav.cid"
                     :icon="nav.icon_url"
                     :text="nav.name"
                     @click="gotoCategory(index)">
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    nav_list: Array
  },
  methods: {
    gotoCategory () {
      this.$router.push({ name: 'category', params: { currentIndex: index } })
    }
  }
}
</script>

<style>
</style>