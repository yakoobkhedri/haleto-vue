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
          <svg
            id="hamIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-list d-md-none cursor-pointer flex-shrink-0"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
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
      <div class="mt-4 px-4 position-relative">
        <dashboard-steps></dashboard-steps>
        <div class="mt-5 pt-4">
          <div class="mb-5"> 
            <h6 class="font-bold mb-3">بیمه سلامت</h6>
            <form class="flex-column flex-sm-row d-flex align-items-center justify-content-between gap-xl-3 gap-2">
              <input
                class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                placeholder="نام کاربری"
              />
              <div
                class="bg-white w-100 d-flex align-items-center gap-3 h-48 px-3 rounded-1 border"
              >
                <input
                  class="bg-white w-100 h-100 px-1 rounded-1 outline-none border-0"
                  placeholder="رمز عبور"
                />
                <svg class="cursor-pointer"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4997 17.3204C15.1618 17.3204 15.7666 17.2461 16.3182 17.1177L15.0883 15.8507C14.8972 15.8658 14.7033 15.8781 14.4997 15.8781C10.754 15.8781 9.30297 13.1046 8.95158 12.2725C9.21544 11.6659 9.5718 11.1066 10.0072 10.616L9.02858 9.60789C7.952 10.81 7.54391 12.0208 7.53621 12.0446C7.48793 12.1927 7.48793 12.353 7.53621 12.5011C7.55091 12.5487 9.15668 17.3204 14.4997 17.3204ZM14.4997 7.22456C13.2138 7.22456 12.1575 7.51012 11.2769 7.93198L8.69469 5.27246L7.70491 6.29214L20.3046 19.2725L21.2944 18.2528L18.9711 15.8594C20.8009 14.4524 21.454 12.5313 21.4638 12.5011C21.5121 12.353 21.5121 12.1927 21.4638 12.0446C21.4484 11.9963 19.8426 7.22456 14.4997 7.22456ZM17.98 14.8382L16.384 13.1941C16.517 12.9128 16.5996 12.6035 16.5996 12.2725C16.5996 11.0891 15.6483 10.1091 14.4997 10.1091C14.1784 10.1091 13.8781 10.1942 13.6058 10.3319L12.3402 9.0281C13.0349 8.78249 13.7652 8.66032 14.4997 8.66682C18.2453 8.66682 19.6963 11.4403 20.0477 12.2725C19.8363 12.7715 19.2315 13.9613 17.98 14.8382Z"
                    fill="#8A8A8A"
                  />
                </svg>
              </div>
              <input type="submit" value="بررسی" class="bg-main h-48 w-271 w-lg-120 d-block flex-shrink-0 me-xl-5 border-0 rounded-8 text-center text-white fw-bold fs-14">
            </form>
          </div>
          <div class="mb-5"> 
            <h6 class="font-bold mb-3">بیمه تامین اجتماعی</h6>
            <form class="flex-column flex-sm-row d-flex align-items-center justify-content-between gap-xl-3 gap-2">
              <input
                class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                placeholder="نام کاربری"
              />
              <div
                class="bg-white w-100 d-flex align-items-center gap-3 h-48 px-3 rounded-1 border"
              >
                <input
                  class="bg-white w-100 h-100 px-1 rounded-1 outline-none border-0"
                  placeholder="رمز عبور"
                />
                <svg class="cursor-pointer"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4997 17.3204C15.1618 17.3204 15.7666 17.2461 16.3182 17.1177L15.0883 15.8507C14.8972 15.8658 14.7033 15.8781 14.4997 15.8781C10.754 15.8781 9.30297 13.1046 8.95158 12.2725C9.21544 11.6659 9.5718 11.1066 10.0072 10.616L9.02858 9.60789C7.952 10.81 7.54391 12.0208 7.53621 12.0446C7.48793 12.1927 7.48793 12.353 7.53621 12.5011C7.55091 12.5487 9.15668 17.3204 14.4997 17.3204ZM14.4997 7.22456C13.2138 7.22456 12.1575 7.51012 11.2769 7.93198L8.69469 5.27246L7.70491 6.29214L20.3046 19.2725L21.2944 18.2528L18.9711 15.8594C20.8009 14.4524 21.454 12.5313 21.4638 12.5011C21.5121 12.353 21.5121 12.1927 21.4638 12.0446C21.4484 11.9963 19.8426 7.22456 14.4997 7.22456ZM17.98 14.8382L16.384 13.1941C16.517 12.9128 16.5996 12.6035 16.5996 12.2725C16.5996 11.0891 15.6483 10.1091 14.4997 10.1091C14.1784 10.1091 13.8781 10.1942 13.6058 10.3319L12.3402 9.0281C13.0349 8.78249 13.7652 8.66032 14.4997 8.66682C18.2453 8.66682 19.6963 11.4403 20.0477 12.2725C19.8363 12.7715 19.2315 13.9613 17.98 14.8382Z"
                    fill="#8A8A8A"
                  />
                </svg>
              </div>
              <input type="submit" value="بررسی" class="bg-main h-48 w-271 w-lg-120 d-block flex-shrink-0 me-xl-5 border-0 rounded-8 text-center text-white fw-bold fs-14">
            </form>
          </div>
          <div class="mb-5"> 
            <h6 class="font-bold mb-3">بیمه خدمات درمانی</h6>
            <form class="flex-column flex-sm-row d-flex align-items-center justify-content-between gap-xl-3 gap-2">
              <input
                class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                placeholder="نام کاربری"
              />
              <div
                class="bg-white w-100 d-flex align-items-center gap-3 h-48 px-3 rounded-1 border"
              >
                <input
                  class="bg-white w-100 h-100 px-1 rounded-1 outline-none border-0"
                  placeholder="رمز عبور"
                />
                <svg class="cursor-pointer"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4997 17.3204C15.1618 17.3204 15.7666 17.2461 16.3182 17.1177L15.0883 15.8507C14.8972 15.8658 14.7033 15.8781 14.4997 15.8781C10.754 15.8781 9.30297 13.1046 8.95158 12.2725C9.21544 11.6659 9.5718 11.1066 10.0072 10.616L9.02858 9.60789C7.952 10.81 7.54391 12.0208 7.53621 12.0446C7.48793 12.1927 7.48793 12.353 7.53621 12.5011C7.55091 12.5487 9.15668 17.3204 14.4997 17.3204ZM14.4997 7.22456C13.2138 7.22456 12.1575 7.51012 11.2769 7.93198L8.69469 5.27246L7.70491 6.29214L20.3046 19.2725L21.2944 18.2528L18.9711 15.8594C20.8009 14.4524 21.454 12.5313 21.4638 12.5011C21.5121 12.353 21.5121 12.1927 21.4638 12.0446C21.4484 11.9963 19.8426 7.22456 14.4997 7.22456ZM17.98 14.8382L16.384 13.1941C16.517 12.9128 16.5996 12.6035 16.5996 12.2725C16.5996 11.0891 15.6483 10.1091 14.4997 10.1091C14.1784 10.1091 13.8781 10.1942 13.6058 10.3319L12.3402 9.0281C13.0349 8.78249 13.7652 8.66032 14.4997 8.66682C18.2453 8.66682 19.6963 11.4403 20.0477 12.2725C19.8363 12.7715 19.2315 13.9613 17.98 14.8382Z"
                    fill="#8A8A8A"
                  />
                </svg>
              </div>
              <input type="submit" value="بررسی" class="bg-main h-48 w-271 w-lg-120 d-block flex-shrink-0 me-xl-5 border-0 rounded-8 text-center text-white fw-bold fs-14">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside/Aside.vue";
import DashboardSteps from "@/components/Dashboard/Dashboard-steps.vue";
export default {
  components: { Aside,DashboardSteps },
  name: "Bimeh-component",
};
</script>

<style>
</style>