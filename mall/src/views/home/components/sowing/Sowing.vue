<template>
  <div id="sowing">
    <swiper id="swiper"
            :options="swiperOption"
            ref="mySwiper">
      <swiper-slide v-for="sowing in sowing_list"
                    :key="sowing.public_id">
        <img :src="sowing.icon_url"
             :alt="sowing.public_name">
      </swiper-slide>

      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Sowing',
  props: {
    sowing_list: Array
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        speed: 600
      }
    };
  }
}
</script>

<style lang="less" scoped>
#sowing {
  width: 95%;
  padding: 1.1rem 0.18rem;
}

#swiper {
  border-radius: 0.25rem;
}

#swiper img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

#swiper /deep/ .swiper-pagination-bullet-active {
  background-color: #75a342;
}

#swiper /deep/ .swiper-pagination-bullet {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0;
}
</style>