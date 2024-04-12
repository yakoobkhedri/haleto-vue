<template>
  <div class="d-flex">
    <Aside />
    <div
      class="flex-grow-1 py-5 bg-gray2 position-relative h-100vh overflow-auto hidden-scroll"
    >
      <!-- shape -->
      <img
        alt="img"
        :src="require('../assets/img/back.png')"
        class="position-absolute top-0 h-100 w-100 -z-0"
      />
      <!--  -->
      <div
        class="d-flex align-items-center justify-content-between flex-wrap gap-3 px-4"
      >
        <div class="d-flex align-items-center gap-2 position-relative">
          <!-- hamicon -->
          <hamburger-icon></hamburger-icon>
          <!--  -->
          <svg
            class="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M12.7331 22.7961C14.1223 22.7961 15.2843 21.8058 15.5512 20.495H9.91504C10.182 21.8058 11.3441 22.7961 12.7331 22.7961Z"
              fill="#75BF7A"
            />
            <path
              d="M18.1116 13.591C18.1085 13.591 18.1054 13.5917 18.1023 13.5917C15.1424 13.5917 12.7332 11.1832 12.7332 8.22259C12.7332 7.4087 12.9204 6.63933 13.2464 5.94749C13.0776 5.93148 12.9065 5.92151 12.7332 5.92151C9.76794 5.92151 7.36406 8.32525 7.36406 11.2906V13.4291C7.36406 14.947 6.69904 16.3799 5.53235 17.3662C5.14345 17.6984 4.97084 18.2276 5.11045 18.7439C5.27309 19.3444 5.86675 19.728 6.48963 19.728H18.973C19.6265 19.728 20.2424 19.3045 20.375 18.6641C20.4778 18.1686 20.3014 17.6738 19.9172 17.3509C18.8019 16.416 18.1568 15.0421 18.1116 13.591Z"
              fill="#75BF7A"
            />
            <path
              d="M21.9378 8.22263C21.9378 10.3407 20.2208 12.0577 18.1026 12.0577C15.9845 12.0577 14.2676 10.3407 14.2676 8.22263C14.2676 6.10455 15.9845 4.38745 18.1026 4.38745C20.2208 4.38745 21.9378 6.10455 21.9378 8.22263Z"
              fill="#F0AC3A"
            />
          </svg>
          <p class="fw-bold mb-0 fs-sm-14">
            آقای دکتر احمدی (مشاور/روانشناس)خوش آمدید
          </p>
        </div>
        <a
          class="w-174 h-48 bg-white border border-dark rounded-8 fw-bold d-flex align-items-center justify-content-center text-dark position-relative"
        >
          پنل کاربری
        </a>
      </div>
      <div class="px-4 position-relative">
        <form
          class="d-flex align-items-center rounded-8 bg-white h-48 mt-3 px-3 gap-2 max-w-408"
        >
          <svg
            class="flex-shrink-0 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 21C7.25329 21 3 16.7467 3 11.5C3 6.25329 7.25329 2 12.5 2C17.7467 2 22 6.25329 22 11.5C22 16.7467 17.7467 21 12.5 21Z"
              stroke="#AEB6CF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 22L4 20"
              stroke="#AEB6CF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input class="bg-transparent border-0 flex-grow-1 outline-none" />
        </form>
      </div>
      <div class="mt-5 position-relative">
         <form class="row g-lg-5 g-4">
           <div class="col-xl-4 col-md-6">
            <div class="bg-white rounded-10 border-top-main-8 shadow-sm p-4"> 
              <input type="radio" name="session" class="form-check-input cursor-pointer">
              <p class="mt-3 text-center fw-bold text-center fs-18">بسته ۱ جلسه مشاوره آنلاین<br> روانشناسی</p>
              <p class="fw-bold fs-20 mt-5 pt-4 text-center text-main">1200,000 تومان</p>
              <input type="submit" class="bg-main text-white fw-bold fs-14 w-191 w-md-100 h-48 rounded-8 border-0 d-flex align-items-center justify-content-center mt-4 mx-auto" value="خرید بسته">
            </div>
           </div>
           <div class="col-xl-4 col-md-6">
            <div class="bg-white rounded-10 border-top-blue-8 shadow-sm p-4"> 
              <input type="radio" name="session" class="form-check-input cursor-pointer">
              <p class="mt-3 text-center fw-bold text-center fs-18">بسته 5 جلسه مشاوره آنلاین<br> روانشناسی</p>
              <p class="fw-bold fs-20 mt-5 pt-4 text-center text-blue2">1200,000 تومان</p>
              <input type="submit" class="bg-blue2 text-white fw-bold fs-14 w-191 w-md-100 h-48 rounded-8 border-0 d-flex align-items-center justify-content-center mt-4 mx-auto" value="خرید بسته">
            </div>
           </div>
           <div class="col-xl-4 col-md-6">
            <div class="bg-white rounded-10 border-top-blue2-8 shadow-sm p-4"> 
              <input type="radio" name="session" class="form-check-input cursor-pointer">
              <p class="mt-3 text-center fw-bold text-center fs-18">بسته 9 جلسه مشاوره آنلاین<br> روانشناسی</p>
              <p class="fw-bold fs-20 mt-5 pt-4 text-center text-blue3">1200,000 تومان</p>
              <input type="submit" class="bg-blue3 text-white fw-bold fs-14 w-191 w-md-100 h-48 rounded-8 border-0 d-flex align-items-center justify-content-center mt-4 mx-auto" value="خرید بسته">
            </div>
           </div>
         </form>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/Aside/Aside.vue'
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';
export default {
  components:{Aside, HamburgerIcon},
  name: "Session-component",
};
</script>

<style>
</style>