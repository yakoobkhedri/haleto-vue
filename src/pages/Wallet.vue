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
          class="w-174 h-48 bg-white rounded-8 border border-dark fw-bold d-flex align-items-center justify-content-center text-dark position-relative"
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
      <div class="mt-5 px-4 position-relative">
        <div
          class="rounded-20 p-4 position-relative overflow-hidden max-w-339 h-191 mx-auto bg-blue"
        >
          <!-- wave -->
          <img
            alt="shape"
            :src="require('../assets/img/waveElements.png')"
            class="position-absolute h-100 top-0 bottom-0 -z-0 start-0"
          />
          <!--  -->
          <p class="fs-12 text-white-50 mb-1">کیف پول حالتو</p>
          <p class="mb-0 fw-bold text-white">
            1200,000 <span class="fs-14 text-white-50">تومان</span>
          </p>
          <div class="mt-5 pt-2 me-3">
            <svg
              class="mt-auto d-block mt-5"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7557 22.2175C25.1442 19.8535 29.2243 19.4529 29.8645 21.3146C30.5062 23.1841 27.4701 26.6053 23.0772 28.9667C18.6887 31.3308 14.6087 31.7314 13.9684 29.8696C13.3282 28.0079 16.3673 24.5816 20.7557 22.2175ZM3.51707 16.223C10.4705 11.7132 17.6145 11.396 19.5046 15.5337C20.1551 16.9592 20.0979 18.7222 19.4631 20.6077C22.8867 18.108 26.9693 17.0802 30.7014 17.8948C30.2738 13.5516 28.1141 9.70728 24.4495 7.59154C17.8188 3.7633 8.76134 7.0376 4.22067 14.9023C3.962 15.3401 3.73141 15.7803 3.51707 16.223Z"
                fill="white"
                fill-opacity="0.58"
              />
            </svg>
          </div>
        </div>
        <div
          class="d-flex items-center justify-content-center gap-2 fw-bold mt-3"
        >
          <p class="mb-0">موجودی کیف پول شما</p>
          <p class="mb-0"><span class="text-main">120,000</span> تومان</p>
        </div>
        <div
          class="mt-5 d-flex flex-column flex-xl-row align-items-center justify-content-between gap-4"
        >
          <form
            class="w-50 bg-white w-xl-100 shadow-sm rounded-10 overflow-hidden py-4 px-3 px-sm-5"
          >
            <div class="d-flex align-items-center justify-content-center gap-2">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_395_2339)">
                  <rect
                    x="1.83398"
                    y="7.33093"
                    width="26.6667"
                    height="22.3333"
                    rx="3.5"
                    fill="#E9E6E2"
                    stroke="#717171"
                  />
                  <rect
                    x="17.834"
                    y="14.9976"
                    width="13.6667"
                    height="7"
                    rx="1.5"
                    fill="#E9E6E2"
                    stroke="#717171"
                  />
                  <path
                    d="M18.666 10.1642H23.666C24.7706 10.1642 25.666 11.0596 25.666 12.1642V12.1642"
                    stroke="#717171"
                    stroke-width="0.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.334 10.1642L16.334 10.1642"
                    stroke="#717171"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4.66602 15.1642L4.66602 22.8308C4.66602 25.04 6.45688 26.8309 8.66602 26.8309V26.8309"
                    stroke="#717171"
                    stroke-width="0.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10.334 26.8309H11.6673"
                    stroke="#717171"
                    stroke-width="0.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M25.666 24.4976H27.9993"
                    stroke="#717171"
                    stroke-width="0.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M22.334 24.4976H23.6673"
                    stroke="#717171"
                    stroke-width="0.5"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="22.1279"
                    cy="18.4976"
                    r="1.12207"
                    fill="#E9E6E2"
                    stroke="#717171"
                    stroke-width="0.5"
                  />
                  <path
                    d="M6.24403 7.66422L7.10039 6.31632C7.22243 6.16657 7.33867 6.02335 7.44987 5.88635C7.96074 5.25689 8.36507 4.75872 8.73539 4.36214C9.18596 3.87961 9.54825 3.59058 9.92976 3.42406C10.6943 3.09036 11.6882 3.17636 13.964 3.73809C14.0516 3.75972 14.1387 3.7797 14.2254 3.79805C14.643 3.88655 15.1013 3.97606 15.5867 4.07087C17.1091 4.36823 18.898 4.71764 20.5342 5.25094C21.6081 5.60095 22.5836 6.02087 23.3483 6.53723C23.8546 6.87915 24.2537 7.25311 24.5314 7.66422H11.5582H6.24403Z"
                    fill="#6CB771"
                    stroke="#717171"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_395_2339">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0 0.497559)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p class="mb-0 fw-bold">افزایش کیف پول</p>
            </div>
            <div
              class="mt-4 rounded-3 overflow-hidden border h-48 d-flex align-items-stretch text-center fw-bold max-w-313 mx-auto"
            >
              <input
                class="bg-transparent border-0 outline-none flex-grow-1 text-center w-100"
                value="200,000"
              />
              <p
                class="bg-gray mb-0 px-4 h-100 d-flex align-items-center border"
              >
                تومان
              </p>
            </div>
            <div class="max-w-340 mx-auto mt-4">
              <div class="row gx-sm-4 gy-2 mx-0 fs-14">
                <div class="col-md-4 col-sm-6 text-center">
                  <p
                    class="mb-0 border border-s py-2 px-3 text-warning fw-bold rounded-1 cursor-pointer"
                  >
                    100,000
                  </p>
                </div>
                <div class="col-md-4 col-sm-6 text-center">
                  <p
                    class="mb-0 border border-s py-2 px-3 text-warning fw-bold rounded-1 cursor-pointer"
                  >
                    500,000
                  </p>
                </div>
                <div class="col-md-4 col-sm-6 text-center">
                  <p
                    class="mb-0 border border-s py-2 px-3 text-warning fw-bold rounded-1 cursor-pointer"
                  >
                    200,000
                  </p>
                </div>
                <div class="col-md-4 col-sm-6 text-center">
                  <p
                    class="mb-0 border border-s py-2 px-3 text-warning fw-bold rounded-1 cursor-pointer"
                  >
                    400,000
                  </p>
                </div>
                <div class="col-md-4 col-sm-6 text-center">
                  <p
                    class="mb-0 border border-s py-2 px-3 text-warning fw-bold rounded-1 cursor-pointer"
                  >
                    350,000
                  </p>
                </div>
                <div class="col-md-4 col-sm-6 text-center">
                  <p
                    class="mb-0 border border-s py-2 px-3 text-warning fw-bold rounded-1 cursor-pointer"
                  >
                    300,000
                  </p>
                </div>
              </div>
            </div>
            <input
              type="submit"
              class="bg-main text-white fw-bold fs-14 w-191 w-sm-100 h-48 rounded-8 border-0 d-flex align-items-center justify-content-center mt-4 mx-auto"
              value="پرداخت"
            />
          </form>
          <div
            class="w-50 bg-white w-xl-100 shadow-sm rounded-10 overflow-hidden py-4 px-3 px-sm-5"
          >
            <div class="d-flex align-items-center justify-content-center gap-2">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="16.9738"
                  cy="31.8652"
                  rx="15.8547"
                  ry="0.786132"
                  fill="#C4C4C4"
                />
                <path
                  d="M2.48867 31.7654V12.8152H27.5298V31.7654H2.48867Z"
                  fill="#E9E6E2"
                  stroke="#75BF7A"
                  stroke-width="0.2"
                />
                <path
                  d="M12.4828 31.7654V12.8152H17.5301V31.7654H12.4828Z"
                  fill="#75BF7A"
                  stroke="#75BF7A"
                  stroke-width="0.2"
                />
                <path
                  d="M15.1985 5.38544C15.1985 5.38544 12.9208 -0.79784 9.29731 0.968813C5.67384 2.73547 5.82232 8.49567 10.6905 8.12118C15.5586 7.7467 15.1985 5.38544 15.1985 5.38544Z"
                  fill="#75BF7A"
                />
                <path
                  d="M15.6172 5.38544C15.6172 5.38544 17.898 -0.79784 21.5215 0.968813C25.145 2.73547 24.9965 8.49853 20.1283 8.11547C15.2602 7.7324 15.6172 5.38544 15.6172 5.38544Z"
                  fill="#75BF7A"
                />
                <path
                  d="M15.4063 7.59524C16.5875 7.59524 17.545 6.72877 17.545 5.65992C17.545 4.59108 16.5875 3.72461 15.4063 3.72461C14.2251 3.72461 13.2676 4.59108 13.2676 5.65992C13.2676 6.72877 14.2251 7.59524 15.4063 7.59524Z"
                  fill="#75BF7A"
                />
                <path
                  d="M27.5856 7.13208H2.42978C1.54521 7.13208 0.828125 7.78097 0.828125 8.58142V11.2657C0.828125 12.0662 1.54521 12.715 2.42978 12.715H27.5856C28.4702 12.715 29.1873 12.0662 29.1873 11.2657V8.58142C29.1873 7.78097 28.4702 7.13208 27.5856 7.13208Z"
                  fill="#A2DDA6"
                />
                <path
                  d="M17.632 7.13208H12.3848V12.715H17.632V7.13208Z"
                  fill="#75BF7A"
                />
              </svg>
              <p class="mb-0 fw-bold">معرفی دوستان</p>
            </div>
            <p
              class="mt-5 fs-14 text-center lh-lg text-secondary fw-bold px-3 px-sm-5"
            >
              دیگه نگران سلامتی عزیزانت نباش!<br />
              کد زیر را با دوستان و آشنایان خود به اشتراک بگذارید تا اولین
              درخواست خدمات آنلاین پزشکی‌شان را با پانزده هزارتومان تخفیف مهمان
              درمانکده باشند.
            </p>
            <div
              class="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 mt-5"
            >
              <a
                class="fs-14 w-sm-100 fw-bold h-48 rounded-8 text-dark border-dashed-2 d-flex align-items-center justify-content-center w-50"
                >RT34256</a
              >
              <a
                class="fs-14 w-sm-100 fw-bold bg-main h-48 rounded-8 text-white d-flex align-items-center justify-content-center w-50"
              >
                ارسال دعوت نامه</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/Aside/Aside.vue'
export default {
  components:{Aside},
  name: "Wallet-component",
};
</script>

<style>
</style>