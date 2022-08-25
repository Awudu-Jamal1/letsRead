<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/'

import 'swiper/swiper.min.css'
// import 'swiper/modules/navigation/navigation.min.css'
// import 'swiper/modules/pagination/pagination.min.css'
// import 'swiper/modules/scrollbar/scrollbar.min.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  }
}
</script>
