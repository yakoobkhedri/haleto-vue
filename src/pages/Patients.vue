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
        <form
          class="border my-5 position-relative max-w-790 mx-auto d-flex align-items-center gap-2 rounded-8 ps-4 pe-3 py-2 bg-white shadow"
        >
          <input
            class="outline-none w-100 h-100 border-0 fs-sm-14 bg-transparent"
            placeholder="نام یا کد ملی بیمار"
          /><svg
            class="cursor-pointer"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6673 28C9.67171 28 4.00065 22.3289 4.00065 15.3333C4.00065 8.33769 9.67171 2.66663 16.6673 2.66663C23.6629 2.66663 29.334 8.33769 29.334 15.3333C29.334 22.3289 23.6629 28 16.6673 28Z"
              stroke="#47B54F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2.66732 29.3333L5.33398 26.6666"
              stroke="#47B54F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </form>
        <a class="text-white me-auto fw-bold h-48 w-262 bg-main rounded-8 d-flex align-items-center justify-content-center">لیست تمامی بیماران</a>
        <div class="rounded-10 bg-white border my-2 shadow-sm">
          <div class="p-3 position-relative">
            <h6 class="fw-bold m-0 text-sm-center">لیست بیماران امروز</h6>
            <a
              class="text-orange fw-bold position-absolute start-0 top-0 bottom-0 my-auto d-flex align-items-center ms-4"
              >مشاهده همه</a
            >
          </div>
          <div class="table-responsive">
            <table class="table text-center">
              <thead class="table-light fs-lg-12">
                <tr>
                  <th scope="col"><p class="my-2">نام</p></th>
                  <th scope="col">
                    <p class="my-2">نام خانوادگی</p>
                  </th>
                  <th scope="col">
                    <p class="my-2">کد ملی</p>
                  </th>
                  <th scope="col"><p class="my-2">نوبت</p></th>
                  <th scope="col"><p class="my-2">نوع مشاوره</p></th>
                </tr>
              </thead>
              <tbody class="fs-14 fs-lg-10 text-muted font-bold">
                <tr>
                  <td><p class="my-3 text-muted">امیر</p></td>
                  <td><p class="my-3 text-muted">مرادی</p></td>
                  <td><p class="my-3 text-muted">546789198</p></td>
                  <td><p class="my-3 text-muted">آنلاین</p></td>
                  <td><p class="my-3 text-muted">زوج درمانی</p></td>
                </tr>
                <tr>
                  <td><p class="my-3 text-muted">امیر</p></td>
                  <td><p class="my-3 text-muted">مرادی</p></td>
                  <td><p class="my-3 text-muted">546789198</p></td>
                  <td><p class="my-3 text-muted">آنلاین</p></td>
                  <td><p class="my-3 text-muted">زوج درمانی</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="rounded-10 bg-white border shadow-sm">
          <div class="p-3 position-relative">
            <h6 class="fw-bold m-0 text-sm-center">لیست بیماران فردا</h6>
            <a
              class="text-orange fw-bold position-absolute start-0 top-0 bottom-0 my-auto d-flex align-items-center ms-4"
              >مشاهده همه</a
            >
          </div>
          <div class="table-responsive">
            <table class="table text-center">
              <thead class="table-light fs-lg-12">
                <tr>
                  <th scope="col"><p class="my-2">نام</p></th>
                  <th scope="col">
                    <p class="my-2">نام خانوادگی</p>
                  </th>
                  <th scope="col">
                    <p class="my-2">کد ملی</p>
                  </th>
                  <th scope="col"><p class="my-2">نوبت</p></th>
                  <th scope="col"><p class="my-2">نوع مشاوره</p></th>
                </tr>
              </thead>
              <tbody class="fs-14 fs-lg-10 text-muted font-bold">
                <tr>
                  <td><p class="my-3 text-muted">امیر</p></td>
                  <td><p class="my-3 text-muted">مرادی</p></td>
                  <td><p class="my-3 text-muted">546789198</p></td>
                  <td><p class="my-3 text-muted">آنلاین</p></td>
                  <td><p class="my-3 text-muted">زوج درمانی</p></td>
                </tr>
                <tr>
                  <td><p class="my-3 text-muted">امیر</p></td>
                  <td><p class="my-3 text-muted">مرادی</p></td>
                  <td><p class="my-3 text-muted">546789198</p></td>
                  <td><p class="my-3 text-muted">آنلاین</p></td>
                  <td><p class="my-3 text-muted">زوج درمانی</p></td>
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
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon.vue";
export default {
  components: { Aside, HamburgerIcon },
  name: "Patients-component",
};
</script>

<style>
</style>