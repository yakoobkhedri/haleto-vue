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
      <div class="mt-5 mb-5 pb-3 px-sm-4 px-3 position-relative">
        <form class="d-flex flex-column flex-sm-row flex-sm-100 flex-wrap align-items-center gap-4">
          <div
            class="bg-white h-48 w-276 w-sm-100 px-3 rounded-1 border d-flex align-items-center gap-2"
          >
            <date-picker v-model="date2"></date-picker>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.70833 7.7H3.93056V9.3H5.70833V7.7ZM9.26389 7.7H7.48611V9.3H9.26389V7.7ZM12.8194 7.7H11.0417V9.3H12.8194V7.7ZM14.5972 2.1H13.7083V0.5H11.9306V2.1H4.81944V0.5H3.04167V2.1H2.15278C1.16611 2.1 0.383889 2.82 0.383889 3.7L0.375 14.9C0.375 15.3243 0.562301 15.7313 0.895699 16.0314C1.2291 16.3314 1.68128 16.5 2.15278 16.5H14.5972C15.575 16.5 16.375 15.78 16.375 14.9V3.7C16.375 2.82 15.575 2.1 14.5972 2.1ZM14.5972 14.9H2.15278V6.1H14.5972V14.9Z"
                fill="#5F5E5E"
              />
            </svg>
          </div>
          <select class="bg-white h-48 w-276 w-sm-100 px-3 rounded-1 border">
            <option>نوع مشاوره</option>
            <option>نوع مشاوره</option>
          </select>
          <input
            type="submit"
            value="ارسال جهت بررسی"
            class="bg-main rounded-8 h-48 w-174 text-white border-0 shadow1"
          />
        </form>
        <div class="rounded-10 bg-white mt-5 border">
          <h6 class="fw-bold m-0 p-3">لیست جلسات من</h6>
          <div class="table-responsive">
            <table class="table text-center">
              <thead class="table-light fs-lg-12">
                <tr>
                  <th scope="col"><p class="my-2">تاریخ مراجعه</p></th>
                  <th scope="col">
                    <p class="my-2">نوبت</p>
                  </th>
                  <th scope="col">
                    <p class="my-2">نوع مشاوره</p>
                  </th>
                  <th scope="col"><p class="my-2">عملیات</p></th>
                </tr>
              </thead>
              <tbody class="fs-14 fs-lg-10 text-muted font-bold">
                <tr>
                  <td><p class="my-3 text-muted">تاریخ مراجعه: شنبه 20 اسفند ظهر2-3</p></td>
                  <td><p class="my-3 text-muted">نوبت: آنلاین</p></td>
                  <td><p class="my-3 text-muted">نوع مشاوره: زوج درمانی</p></td>
                  <td>
                    <div class="my-3">
                      <a class="text-white rounded-8 bg-second py-2 w-202 d-block mx-auto w-lg-130">مشاهده خلاصه جلسات</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><p class="my-3 text-muted">تاریخ مراجعه: شنبه 20 اسفند ظهر2-3</p></td>
                  <td><p class="my-3 text-muted">نوبت: آنلاین</p></td>
                  <td><p class="my-3 text-muted">نوع مشاوره: زوج درمانی</p></td>
                  <td>
                    <div class="my-3">
                      <a class="text-white rounded-8 bg-second py-2 w-202 d-block mx-auto w-lg-130">مشاهده نسخه الکترونیکی</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><p class="my-3 text-muted">تاریخ مراجعه: شنبه 20 اسفند ظهر2-3</p></td>
                  <td><p class="my-3 text-muted">نوبت: آنلاین</p></td>
                  <td><p class="my-3 text-muted">نوع مشاوره: زوج درمانی</p></td>
                  <td>
                    <div class="my-3">
                      <a class="text-white rounded-8 bg-second py-2 w-202 d-block mx-auto w-lg-130">مشاهده نسخه الکترونیکی</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside/Aside.vue";
import { ref } from "vue";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon.vue";
import DatePicker from "vue3-persian-datetime-picker";
export default {
  components: { Aside, HamburgerIcon, DatePicker },
  name: "MySessions-component",

  setup() {
    const date5 = ref("");

    return { date5 };
  },
};
</script>

<style>
</style>