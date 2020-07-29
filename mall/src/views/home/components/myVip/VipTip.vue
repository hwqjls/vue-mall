<template>
  <div id="vipTip"
       @click="gotoMyVip">
    <svg-icon iconClass="vip"
              class="icon" />
    <span class="title">加入会员·每年预计节省806元</span>
    <span class="subTitle">5折开卡></span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "VipTip",
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    gotoMyVip () {
      this.$router.push({ name: 'myVip' })
      // if (this.userInfo.token) {
      //   this.$router.push({ name: 'myVip' })
      // } else {
      //   this.$router.push('/login')
      // }
    }
  }
}
</script>

<style lang="less" scoped>
#vipTip {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 0.72rem;
  margin: 0.2rem auto;
  padding: 0.1rem 0.2rem;
  font-size: 0.2rem;
  border-radius: 0.1rem;
  background-color: #3bba63;
  box-sizing: border-box;
}

.icon {
  font-size: 0.36rem;
}

.title {
  margin-left: 0.12rem;
  color: white;
}
.subTitle {
  margin-left: auto;
  margin-right: 0.12rem;
  color: white;
}
</style>