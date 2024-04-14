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
      <div class="mt-4 px-sm-4 px-3 position-relative">
        <dashboard-steps></dashboard-steps>
        <div class="mt-4 pt-2">
          <div class="mb-5">
            <form class="gx-5 gy-3 row mx-0">
              <div class="px-0 px-md-2 px-xl-4 col-12 mb-4">
                <div
                  class="d-flex flex-column flex-sm-row align-items-center gap-4"
                >
                  <img
                    alt="img"
                    :src="require('../assets/img/Bitmap.png')"
                    class="w-80 h-80 d-block rounded-3"
                  />
                  <a
                    class="fs-14 fw-bold text-secondary border bg-white rounded-8 py-3 px-5"
                    >تغییر عکس پروفایل</a
                  >
                  <a
                    class="fs-14 fw-bold text-secondary border bg-white rounded-8 py-3 px-5"
                    >حذف عکس پروفایل</a
                  >
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">نام</label>
                  <input
                    class="bg-transparent w-100 outline-none border-0 fs-12 fw-bold mb-1 d-block"
                    placeholder="امیر"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">نام خانوادگی</label>
                  <input
                    class="bg-transparent w-100 outline-none border-0 fs-12 fw-bold mb-1 d-block"
                    placeholder="احمدی"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">شماره موبایل</label>
                  <input
                    class="bg-transparent w-100 outline-none border-0 fs-12 fw-bold mb-1 d-block"
                    placeholder="09128765431"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">کد ملی</label>
                  <input
                    class="bg-transparent w-100 outline-none border-0 fs-12 fw-bold mb-1 d-block"
                    placeholder="2840172429"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">جنسیت</label>
                  <select
                    class="bg-transparent border-0 w-100 fs-12 fw-bold mb-1 d-block"
                  >
                    <option>مرد</option>
                    <option>زن</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold px-3"
                    >تاریخ تولد</label
                  >
                  <date-picker v-model="date"></date-picker>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">ایمیل</label>
                  <input
                    class="bg-transparent w-100 outline-none border-0 fs-12 fw-bold mb-1 d-block"
                    placeholder="amirahmadi@gmail.com"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold"
                    >میزان سابقه درمانگر</label
                  >
                  <input
                    class="bg-transparent w-100 outline-none border-0 fs-12 fw-bold mb-1 d-block"
                    placeholder="میزان سابقه درمانگر"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">مدرک تحصیلی</label>
                  <select
                    class="bg-transparent border-0 w-100 fs-12 fw-bold mb-1 d-block"
                  >
                    <option>لیسانس</option>
                    <option>دکترا</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">مقطع تحصیلی</label>
                  <select
                    class="bg-transparent border-0 w-100 fs-12 fw-bold mb-1 d-block"
                  >
                    <option>لیسانس</option>
                    <option>دکترا</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">گرایش تحصیلی</label>
                  <input
                    class="bg-transparent w-100 outline-none border-0 fs-12 fw-bold mb-1 d-block"
                    placeholder="دندانپزشکی"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold"
                    >شماره نظام پزشکی</label
                  >
                  <input
                    class="bg-transparent w-100 outline-none border-0 fs-12 fw-bold mb-1 d-block"
                    placeholder="شماره نظام پزشکی"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">کشور</label>
                  <select
                    class="bg-transparent border-0 w-100 fs-12 fw-bold mb-1 d-block"
                  >
                    <option>ایران</option>
                    <option>عراق</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold">شهر</label>
                  <select
                    class="bg-transparent border-0 w-100 fs-12 fw-bold mb-1 d-block"
                  >
                    <option>تهران</option>
                    <option>قم</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold"
                    >اولویت اول تخصص</label
                  >
                  <select
                    class="bg-transparent border-0 w-100 fs-12 fw-bold mb-1 d-block"
                  >
                    <option>اول</option>
                    <option>دوم</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold"
                    >اولویت دوم تخصص</label
                  >
                  <select
                    class="bg-transparent border-0 w-100 fs-12 fw-bold mb-1 d-block"
                  >
                    <option>اول</option>
                    <option>دوم</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-white w-100 h-48 px-3 rounded-1 border">
                  <label class="text-muted fs-10 fw-bold"
                    >اولویت سوم تخصص</label
                  >
                  <select
                    class="bg-transparent border-0 w-100 fs-12 fw-bold mb-1 d-block"
                  >
                    <option>اول</option>
                    <option>دوم</option>
                  </select>
                </div>
              </div>
              <div class="col-12">
                <div class="rounded-8 border border-secondary py-4 px-3">
                  <h6 class="font-bold">شرایط عضویت</h6>
                  <label
                    class="d-inline-flex align-items-center gap-2 cursor-pointer"
                  >
                    <input type="checkbox" class="form-check-input" />
                    <p class="mb-0 mt-1 text-main fs-14 font-bold">
                      قوانین و مقررات
                    </p>
                  </label>
                  <ol class="mt-2 mb-0 pe-4 fw-bold text-secondary lh-lg">
                    <li>حداقل کارشناسی ارشد</li>
                    <li>حداقل دو سال سابقه مشاوره قابل پیگیری</li>
                    <li>
                      عضویت در سازمان نظام روانشناسی و مشاوره و یا سازمان
                      بهزیستی به همراه شماره عضویت
                    </li>
                    <li>
                      آپلود عکس پروفایل (فرمت های مجاز :jpeg,png,jpg | حداکثر
                      500 کیلوبایت)
                    </li>
                    <li>
                      مدارک تحصیلی (حداکثر 4 فایل) (فرمت های مجاز :jpeg,png,jpg
                      | حداکثر 1 مگابایت)
                    </li>
                    <li>
                      آپلود عکس کارت نظام روانشناسی یا سازمان بهزیستی (فرمت های
                      مجاز :jpeg,png,jpg | حداکثر 500 کیلوبایت)
                    </li>
                  </ol>
                </div>
              </div>
              <div class="col-12 mt-5">
                <div class="d-flex flex-column flex-sm-row align-items-center gap-4">
                  <div class="flex-grow-1">
                    <p class="text-main fon-bold fs-12 text-center mb-3">
                      آپلود عکس پروفایل (فرمت های مجاز :jpeg,png,jpg | حداکثر
                      500 کیلوبایت)
                    </p>
                    <div
                      class="position-relative h-145 px-3 rounded-2 bg-white border-dashed d-flex align-items-center justify-content-center"
                    >
                      <input type="file" class="position-absolute opacity-0 w-100 h-100 top-0 end-0 bottom-0 start-0 cursor-pointer">
                      <div class="d-flex align-items-center gap-3">
                        <p class="mb-0 fs-12 font-bold text-secondary flex-grow-1 text-center">
                          برداشتن و کشیدن عکس یا انتخاب
                          <span class="text-main">عکس</span> از
                          <span class="text-main">فایل</span> مورد نظر
                        </p>
                        <svg class="flex-shrink-0"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5981 10.3809C24.1383 10.7724 25.9922 13.1093 25.9922 18.2251V18.3893C25.9922 24.0356 23.7347 26.2967 18.0973 26.2967H9.88709C4.24968 26.2967 1.99219 24.0356 1.99219 18.3893V18.2251C1.99219 13.1472 3.82088 10.8103 8.28541 10.3935"
                            stroke="#FEA603"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 18.0857V3.71094"
                            stroke="#FEA603"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.2233 6.52846L13.9983 2.29688L9.77344 6.52846"
                            stroke="#FEA603"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-main fon-bold fs-12 text-center mb-3">
                      آپلود عکس پروفایل (فرمت های مجاز :jpeg,png,jpg | حداکثر
                      500 کیلوبایت)
                    </p>
                    <div
                      class="position-relative h-145 px-3 rounded-2 bg-white border-dashed d-flex align-items-center justify-content-center"
                    >
                      <input type="file" class="position-absolute opacity-0 w-100 h-100 top-0 end-0 bottom-0 start-0 cursor-pointer">
                      <div class="d-flex align-items-center gap-3">
                        <p class="mb-0 fs-12 font-bold text-secondary flex-grow-1 text-center">
                          برداشتن و کشیدن عکس یا انتخاب
                          <span class="text-main">عکس</span> از
                          <span class="text-main">فایل</span> مورد نظر
                        </p>
                        <svg class="flex-shrink-0"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5981 10.3809C24.1383 10.7724 25.9922 13.1093 25.9922 18.2251V18.3893C25.9922 24.0356 23.7347 26.2967 18.0973 26.2967H9.88709C4.24968 26.2967 1.99219 24.0356 1.99219 18.3893V18.2251C1.99219 13.1472 3.82088 10.8103 8.28541 10.3935"
                            stroke="#FEA603"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 18.0857V3.71094"
                            stroke="#FEA603"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.2233 6.52846L13.9983 2.29688L9.77344 6.52846"
                            stroke="#FEA603"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-main fon-bold fs-12 text-center mb-3">
                      آپلود عکس پروفایل (فرمت های مجاز :jpeg,png,jpg | حداکثر
                      500 کیلوبایت)
                    </p>
                    <div
                      class="position-relative h-145 px-3 rounded-2 bg-white border-dashed d-flex align-items-center justify-content-center"
                    >
                      <input type="file" class="position-absolute opacity-0 w-100 h-100 top-0 end-0 bottom-0 start-0 cursor-pointer">
                      <div class="d-flex align-items-center gap-3">
                        <p class="mb-0 fs-12 font-bold text-secondary flex-grow-1 text-center">
                          برداشتن و کشیدن عکس یا انتخاب
                          <span class="text-main">عکس</span> از
                          <span class="text-main">فایل</span> مورد نظر
                        </p>
                        <svg class="flex-shrink-0"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5981 10.3809C24.1383 10.7724 25.9922 13.1093 25.9922 18.2251V18.3893C25.9922 24.0356 23.7347 26.2967 18.0973 26.2967H9.88709C4.24968 26.2967 1.99219 24.0356 1.99219 18.3893V18.2251C1.99219 13.1472 3.82088 10.8103 8.28541 10.3935"
                            stroke="#FEA603"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 18.0857V3.71094"
                            stroke="#FEA603"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.2233 6.52846L13.9983 2.29688L9.77344 6.52846"
                            stroke="#FEA603"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-5">
                <h6 class="font-bold mb-4">امنیت و تغییر رمز عبور</h6>
                <div class="row gx-5 gy-3 gy-lg-0 mx-0 fs-14 fw-bold">
                  <div class="col-lg-4 pe-0 ps-0 ps-lg-3">
                    <div
                      class="bg-white w-100 d-flex align-items-center gap-3 h-48 px-3 rounded-1 border mb-3"
                    >
                      <input
                        class="bg-white w-100 h-100 px-1 rounded-1 outline-none border-0"
                        placeholder="رمز عبور"
                      /><svg
                        class="cursor-pointer"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4997 17.3204C15.1618 17.3204 15.7666 17.2461 16.3182 17.1177L15.0883 15.8507C14.8972 15.8658 14.7033 15.8781 14.4997 15.8781C10.754 15.8781 9.30297 13.1046 8.95158 12.2725C9.21544 11.6659 9.5718 11.1066 10.0072 10.616L9.02858 9.60789C7.952 10.81 7.54391 12.0208 7.53621 12.0446C7.48793 12.1927 7.48793 12.353 7.53621 12.5011C7.55091 12.5487 9.15668 17.3204 14.4997 17.3204ZM14.4997 7.22456C13.2138 7.22456 12.1575 7.51012 11.2769 7.93198L8.69469 5.27246L7.70491 6.29214L20.3046 19.2725L21.2944 18.2528L18.9711 15.8594C20.8009 14.4524 21.454 12.5313 21.4638 12.5011C21.5121 12.353 21.5121 12.1927 21.4638 12.0446C21.4484 11.9963 19.8426 7.22456 14.4997 7.22456ZM17.98 14.8382L16.384 13.1941C16.517 12.9128 16.5996 12.6035 16.5996 12.2725C16.5996 11.0891 15.6483 10.1091 14.4997 10.1091C14.1784 10.1091 13.8781 10.1942 13.6058 10.3319L12.3402 9.0281C13.0349 8.78249 13.7652 8.66032 14.4997 8.66682C18.2453 8.66682 19.6963 11.4403 20.0477 12.2725C19.8363 12.7715 19.2315 13.9613 17.98 14.8382Z"
                          fill="#8A8A8A"
                        ></path>
                      </svg>
                    </div>
                    <input
                      class="bg-white w-100 h-48 px-3 rounded-1 outline-none border mb-3"
                      placeholder="تکرار رمز عبور"
                    />
                    <a
                      class="bg-white w-100 h-48 px-3 rounded-1 border d-flex align-items-center justify-content-center text-secondary"
                      >افزودن اثر انگشت</a
                    >
                  </div>
                  <div class="col-lg-8 ps-0 pe-0 pe-lg-3 text-center">
                    <div class="bg-white w-100 h-177 p-3 rounded-1 border">
                      <p>اثر انگشت خود را ثبت کنید</p>
                      <img
                        alt="img"
                        :src="require('../assets/img/image 68.png')"
                        class="d-block mx-auto my-3"
                      />
                      <p class="text-main">شما یک اثر انگشت تعریف شده دارید</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-5">
                <router-link
                  to="officeSetting"
                  class="bg-second me-auto h-48 w-191 w-lg-120 d-flex align-items-center justify-content-center flex-shrink-0 border-0 rounded-8 text-center text-white fw-bold fs-14"
                  >مرحله بعد</router-link
                >
              </div>
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
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon.vue";
import { ref } from "vue";
import DatePicker from "vue3-persian-datetime-picker";

export default {
  components: { Aside, DashboardSteps, HamburgerIcon, DatePicker },
  name: "ProfileInfo-component",
  setup() {
    const date = ref("");

    return { date };
  },
};
</script>

<style>
</style>