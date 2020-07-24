<template>
  <div id="toTop">
    <transition name="moveR">
      <div class="scrollTop"
           v-show="showTop"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ToTop',
  data () {
    return {

    };
  },
  computed: {
    showTop: function () {

    }
  },
  mounted () {

  },
  methods: {
    
  }
}
</script>

<style>
</style>