<template>
  <div class="position-relative servicesbox">
    <div class="swiper swiper4 py-3">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="bg-white rounded-10 border-top-main-8 shadow-sm p-4"> 
              <input type="radio" name="session" class="form-check-input cursor-pointer">
              <p class="mt-3 text-center fw-bold text-center fs-18">بسته ۱ جلسه مشاوره آنلاین<br> روانشناسی</p>
              <p class="fw-bold fs-20 mt-5 pt-4 text-center text-dark">
                1 جلسه <span class="text-main font-bold">30</span> دقیقه - <span class="text-main font-bold">1200,000</span> تومان
              </p>
              <div class="rounded-2 p-4 bg-main4 mt-5 d-flex align-items-center gap-3">
                <img alt="img" :src="require('../../assets/img/workdload 1 (2).png')" class="d-block w-40 h-40">
                <p class="text-dark mb-0 font-bold fs-14">تست افسردگی</p>
              </div>
              <input type="submit" class="bg-main text-white fw-bold fs-14 w-100 h-48 rounded-8 border-0 d-flex align-items-center justify-content-center mt-4 mx-auto" value="خرید بسته">
            </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-white rounded-10 border-top-main-8 shadow-sm p-4"> 
              <input type="radio" name="session" class="form-check-input cursor-pointer">
              <p class="mt-3 text-center fw-bold text-center fs-18">بسته ۱ جلسه مشاوره آنلاین<br> روانشناسی</p>
              <p class="fw-bold fs-20 mt-5 pt-4 text-center text-dark">
                1 جلسه <span class="text-main font-bold">30</span> دقیقه - <span class="text-main font-bold">1200,000</span> تومان
              </p>
              <div class="rounded-2 p-4 bg-main4 mt-5 d-flex align-items-center gap-3">
                <img alt="img" :src="require('../../assets/img/workdload 1 (2).png')" class="d-block w-40 h-40">
                <p class="text-dark mb-0 font-bold fs-14">تست افسردگی</p>
              </div>
              <input type="submit" class="bg-main text-white fw-bold fs-14 w-100 h-48 rounded-8 border-0 d-flex align-items-center justify-content-center mt-4 mx-auto" value="خرید بسته">
            </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-white rounded-10 border-top-main-8 shadow-sm p-4"> 
              <input type="radio" name="session" class="form-check-input cursor-pointer">
              <p class="mt-3 text-center fw-bold text-center fs-18">بسته ۱ جلسه مشاوره آنلاین<br> روانشناسی</p>
              <p class="fw-bold fs-20 mt-5 pt-4 text-center text-dark">
                1 جلسه <span class="text-main font-bold">30</span> دقیقه - <span class="text-main font-bold">1200,000</span> تومان
              </p>
              <div class="rounded-2 p-4 bg-main4 mt-5 d-flex align-items-center gap-3">
                <img alt="img" :src="require('../../assets/img/workdload 1 (2).png')" class="d-block w-40 h-40">
                <p class="text-dark mb-0 font-bold fs-14">تست افسردگی</p>
              </div>
              <input type="submit" class="bg-main text-white fw-bold fs-14 w-100 h-48 rounded-8 border-0 d-flex align-items-center justify-content-center mt-4 mx-auto" value="خرید بسته">
            </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-white rounded-10 border-top-main-8 shadow-sm p-4"> 
              <input type="radio" name="session" class="form-check-input cursor-pointer">
              <p class="mt-3 text-center fw-bold text-center fs-18">بسته ۱ جلسه مشاوره آنلاین<br> روانشناسی</p>
              <p class="fw-bold fs-20 mt-5 pt-4 text-center text-dark">
                1 جلسه <span class="text-main font-bold">30</span> دقیقه - <span class="text-main font-bold">1200,000</span> تومان
              </p>
              <div class="rounded-2 p-4 bg-main4 mt-5 d-flex align-items-center gap-3">
                <img alt="img" :src="require('../../assets/img/workdload 1 (2).png')" class="d-block w-40 h-40">
                <p class="text-dark mb-0 font-bold fs-14">تست افسردگی</p>
              </div>
              <input type="submit" class="bg-main text-white fw-bold fs-14 w-100 h-48 rounded-8 border-0 d-flex align-items-center justify-content-center mt-4 mx-auto" value="خرید بسته">
            </div>
        </div>
      </div>
    </div>
    <div class="swiper-button-next bg-dark after-white"></div>
    <div class="swiper-button-prev bg-dark after-white"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

export default {
  name: "swiper3-component",

  mounted() {
    new Swiper(".swiper4", {
      loop: true,
      spaceBetween: 27,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  },
};
</script>

<style></style>