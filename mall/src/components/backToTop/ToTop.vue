<template>
  <transition name="moveR">
    <div class="scrollTop"
         v-show="showTop"
         @click="toTop">
      <svg-icon iconClass="backtotop"
                class="backtotop" />
    </div>
  </transition>
</template>

<script>
import SvgIcon from '../svgIcon/index'

export default {
  name: 'ToTop',
  components: {
    SvgIcon
  },
  data () {
    return {
      scrollTop: 0,
    };
  },
  computed: {
    showTop: function () {
      let value = this.scrollTop > 200 ? true : false
      return value;
    }
  },
  mounted () {
    window.addEventListener('scroll', this.throttler(this.getScrollTop, 300));
  },
  methods: {
    toTop () {
      var timer = setInterval(() => {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let speed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30);
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    },
    throttler (fn, time) { //节流
      let timeOut = null;

      return function () {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
          fn.apply(this, arguments)
        }, time)
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.getScrollTop)
  }
}
</script>

<style scoped>
.scrollTop {
  position: fixed;
  right: 0.2rem;
  bottom: 1.5rem;
  z-index: 99;
  cursor: pointer;
}
.backtotop {
  width: 0.8rem;
  height: 0.8rem;
}

.moveR-enter-active,
.moveR-leave-active {
  opacity: 1;
  transition: all 0.3s linear;
  transform: translateX(0);
}
.moveR-enter,
.moveR-leave {
  opacity: 0;
  transform: translateX(100%);
}
.moveR-leave-to {
  opacity: .5;
  transform: translateX(100%);
}
</style>