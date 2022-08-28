<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="MySwiper border"
  >
    <swiper-slide class="swiper-slide" v-for="(book, i) in books" :key="i" v>
      <img
        thumbnail
        fluid
        :src="book.img_Url"
        alt="Image 1"
        :title="book.title"
        class="img-thumbnail"
    
      />
    
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
  props: ["books"],
};
</script>

<style scoped>
.swiper-slide img{
  height:200px ;
  margin-bottom:50px;
}

  @media (max-width: 768px){
    .swiper-slide img{
      height:100px;
    
;
    }  }
</style>
