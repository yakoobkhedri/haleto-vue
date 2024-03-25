<template>
  <div class="swiper swiper1 pb-252 position-relative top-117">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          alt="app"
          :src="require('../assets/img/iPhone 11 Pro.png')"
          class="img-fluid d-block mx-auto w-224"
          data-aos="flip-up"
        />
      </div>
      <div class="swiper-slide">
        <img
          alt="app"
          :src="require('../assets/img/iPhone 11 Pro.png')"
          class="img-fluid d-block mx-auto w-224"
          data-aos="flip-up"
        />
      </div>
      <div class="swiper-slide">
        <img
          alt="app"
          :src="require('../assets/img/iPhone 11 Pro.png')"
          class="img-fluid d-block mx-auto w-224"
          data-aos="flip-up"
        />
      </div>
      <div class="swiper-slide">
        <img
          alt="app"
          :src="require('../assets/img/iPhone 11 Pro.png')"
          class="img-fluid d-block mx-auto w-224"
          data-aos="flip-up"
        />
      </div>
    </div>
    <div class="swiper-pagination bottom-116"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import 'swiper/swiper-bundle.css';
import SwiperCore ,{Pagination} from 'swiper/core';

SwiperCore.use([Pagination]);

export default {
  name: "swiper1-component",

  mounted(){
    new Swiper('.swiper1',{
        loop:true,
        pagination:{
            el:'.swiper-pagination',
            type:'bullets'
        },
    })
  }
};
</script>

<style></style>