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
      </div>
      <div class="mt-4 px-sm-4 px-3 position-relative">
        <div
          class="bg-white rounded-1 d-flex align-items-center gap-5 fw-bold px-3 py-2 mb-2"
        >
          <div class="d-flex align-items-center gap-1">
            <p class="mb-0 text-muted fw-light">نام و نام خانوادگی:</p>
            <p class="mb-0">مهسا امیری</p>
          </div>
          <div class="d-flex align-items-center gap-1">
            <p class="mb-0 text-muted fw-light">شماره پرونده:</p>
            <p class="mb-0">123432</p>
          </div>
          <div class="d-flex align-items-center gap-1">
            <p class="mb-0 text-muted fw-light">تاریخ مراجعه:</p>
            <p class="mb-0">1402/09/12</p>
          </div>
          <div class="d-flex align-items-center gap-1">
            <p class="mb-0 text-muted fw-light">ساعت مراجعه:</p>
            <p class="mb-0">18:10 عصر</p>
          </div>
        </div>
        <div class="bg-white rounded-1 fw-bold p-3 mb-2">
          <p class="text-main font-bold">تاریخچه بیماری/مشکل فعلي</p>
          <div class="d-flex align-items-center gap-5 fw-bold">
            <div class="d-flex align-items-center gap-1">
              <p class="mb-0 text-muted fw-light">زمان شروع بیماری:</p>
              <p class="mb-0">4 ماه قبل</p>
            </div>
            <div class="d-flex align-items-center gap-1">
              <p class="mb-0 text-muted fw-light">نحوه شروع بیماری:</p>
              <p class="mb-0">قبول نشدن در کنکور</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-1 fw-bold p-3 mb-2">
          <p class="text-main font-bold">علایم شروع بیماری</p>
          <p class="mb-0 text-muted fw-light">
            فعالیت بیش از حد-پر حرفی-اختلال در تمرکز- حرف زدن با خود-کمبود انرژی
            - احساس گناه
          </p>
        </div>
        <div class="bg-white rounded-1 fw-bold p-3 mb-2">
          <p class="text-main font-bold">تاریخچه تکاملی</p>
          <p class="mb-0 text-muted fw-light">
            فعالیت بیش از حد-پر حرفی-اختلال در تمرکز- حرف زدن با خود-کمبود انرژی
            - احساس گناه
          </p>
        </div>
        <div
          class="bg-white rounded-1 fw-bold p-3 mb-2 d-flex align-items-center gap-5"
        >
          <p class="mb-0 text-main font-bold">سابقه مصرف سیگار،مواد، الکل</p>
          <div class="d-flex align-items-center gap-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.359375"
                y="0.136475"
                width="24"
                height="24"
                rx="4"
                fill="#75BF7A"
              />
            </svg>
            <p class="mb-0 fs-14 text-muted">خیر</p>
          </div>
        </div>
        <div
          class="bg-white rounded-1 fw-bold p-3 mb-2 d-flex align-items-center gap-5"
        >
          <p class="mb-0 text-main font-bold">سابقه بیماری جسمی</p>
          <div class="d-flex align-items-center gap-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.359375"
                y="0.136475"
                width="24"
                height="24"
                rx="4"
                fill="#75BF7A"
              />
            </svg>
            <p class="mb-0 fs-14 text-muted">خیر</p>
          </div>
        </div>
        <div class="bg-white p-3 d-flex justify-content-between gap-3 mb-3">
          <div>
            <p class="fw-bold fs-18">نسخه الکترونیکی بیمار</p>
            <div class="d-flex flex-wrap align-items-center gap-5 fw-bold">
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">نام دارو:</p>
                <p class="mb-0">yrtew</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">دستور مصرف:</p>
                <p class="mb-0">هر روز 1 عدد</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">میزان مصرف:</p>
                <p class="mb-0">1 ماه</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">شیوه مصرف:</p>
                <p class="mb-0">خوراکی</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">تاریخ موثر:</p>
                <p class="mb-0">1402/09/12</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">مقدار مصرف:</p>
                <p class="mb-0">3</p>
              </div>
            </div>
          </div>
          <div class="w-50">
            <div class="d-flex align-items-center justify-content-center gap-5">
              <img
                alt="img"
                :src="require('../assets/img/Frame 1597883972.png')"
                class="img-fluid"
              />
            </div>
            <a
              class="bg-second mx-auto text-white fw-bold fs-14 rounded-8 mt-4 d-flex align-items-center justify-content-center w-202 h-48"
              >ایجاد نسخه جدید</a
            >
          </div>
        </div>
        <div class="bg-white p-3 d-flex justify-content-between gap-3 mb-3">
          <div>
            <p class="fw-bold fs-18">گزارشات جلسات</p>
            <div class="d-flex flex-wrap align-items-center gap-5 fw-bold">
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">نام دارو:</p>
                <p class="mb-0">yrtew</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">دستور مصرف:</p>
                <p class="mb-0">هر روز 1 عدد</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">میزان مصرف:</p>
                <p class="mb-0">1 ماه</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">شیوه مصرف:</p>
                <p class="mb-0">خوراکی</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">تاریخ موثر:</p>
                <p class="mb-0">1402/09/12</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <p class="mb-0 text-muted fw-light">مقدار مصرف:</p>
                <p class="mb-0">3</p>
              </div>
            </div>
          </div>
          <div class="w-50">
            <div class="d-flex align-items-center justify-content-center gap-5">
              <img
                alt="img"
                :src="require('../assets/img/Frame 1597883972.png')"
                class="img-fluid opacity-0"
              />
            </div>
            <a
              class="bg-second mx-auto text-white fw-bold fs-14 rounded-8 mt-4 d-flex align-items-center justify-content-center w-202 h-48"
              >ایجاد گزارش جدید</a
            >
          </div>
        </div>
        <div class="bg-white p-3 pb-5">
          <p class="fw-bold fs-18">فعالیت های بیمار</p>
          <textarea
            rows="5"
            class="rounded-1 border-dashed-2 fs-14 w-100 p-3 outline-none"
            placeholder="لطفا فعالیت های مرتبط با بیمار نوشته شود"
          ></textarea>
          <div
            class="mt-5 d-flex align-items-center justify-content-center gap-5 fs-14 fw-bold text-muted"
          >
            <p class="mb-0">نیاز به ارجاع بیمار وجود دارد؟</p>
            <label class="cursor-pointer d-flex align-items-center gap-2"
              ><input
                type="checkbox"
                class="form-check-input form-select-lg bg-transparent cursor-pointer"
              />
              <p class="mb-0 mt-1">ارجاع بیمار</p></label
            >
          </div>
          <form
            class="border mt-4 max-w-581 h-48 mx-auto d-flex align-items-center gap-2 rounded-8 ps-4 pe-3 py-2 bg-white"
          >
            <svg
              class="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 21C7.25329 21 3 16.7467 3 11.5C3 6.25329 7.25329 2 12.5 2C17.7467 2 22 6.25329 22 11.5C22 16.7467 17.7467 21 12.5 21Z"
                stroke="#717171"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 22L4 20"
                stroke="#717171"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input class="outline-none w-100 h-100 border-0 bg-transparent" />
          </form>
          <div class="row g-4 mx-0 mt-4">
            <div class="col-lg-4">
              <div class="border rounded-1 overflow-hidden">
                <p
                  class="mb-0 bg-main text-white text-center py-2 fs-14 fw-bold"
                >
                  روانپزشک
                </p>
                <div class="p-3">
                  <select
                    class="bg-transparent rounded-1 w-100 border p-2 fs-12 fw-bold"
                  >
                    <option>تحصص</option>
                    <option>تحصص</option>
                    <option>تحصص</option>
                  </select>
                  <div class="mt-3">
                    <label
                      class="d-flex align-items-center gap-2 cursor-pointer mb-4"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input form-select-lg bg-transparent cursor-pointer"
                      />
                      <img
                        alt="img"
                        :src="require('../assets/img/image 66.png')"
                        class="img-fluid w-30 h-30 rounded-circle d-block"
                      />
                      <p class="mb-0 fs-12 text-muted">دکتر ثنا محمدی</p>
                    </label>
                    <label
                      class="d-flex align-items-center gap-2 cursor-pointer mb-4"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input form-select-lg bg-transparent cursor-pointer"
                      />
                      <img
                        alt="img"
                        :src="require('../assets/img/image 66.png')"
                        class="img-fluid w-30 h-30 rounded-circle d-block"
                      />
                      <p class="mb-0 fs-12 text-muted">دکتر ثنا محمدی</p>
                    </label>
                    <label
                      class="d-flex align-items-center gap-2 cursor-pointer mb-4"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input form-select-lg bg-transparent cursor-pointer"
                      />
                      <img
                        alt="img"
                        :src="require('../assets/img/image 66.png')"
                        class="img-fluid w-30 h-30 rounded-circle d-block"
                      />
                      <p class="mb-0 fs-12 text-muted">دکتر ثنا محمدی</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="border rounded-1 overflow-hidden">
                <p
                  class="mb-0 bg-main text-white text-center py-2 fs-14 fw-bold"
                >
                  روانشناس
                </p>
                <div class="p-3">
                  <select
                    class="bg-transparent rounded-1 w-100 border p-2 fs-12 fw-bold"
                  >
                    <option>تحصص</option>
                    <option>تحصص</option>
                    <option>تحصص</option>
                  </select>
                  <div class="mt-3">
                    <label
                      class="d-flex align-items-center gap-2 cursor-pointer mb-4"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input form-select-lg bg-transparent cursor-pointer"
                      />
                      <img
                        alt="img"
                        :src="require('../assets/img/image 66.png')"
                        class="img-fluid w-30 h-30 rounded-circle d-block"
                      />
                      <p class="mb-0 fs-12 text-muted">دکتر ثنا محمدی</p>
                    </label>
                    <label
                      class="d-flex align-items-center gap-2 cursor-pointer mb-4"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input form-select-lg bg-transparent cursor-pointer"
                      />
                      <img
                        alt="img"
                        :src="require('../assets/img/image 66.png')"
                        class="img-fluid w-30 h-30 rounded-circle d-block"
                      />
                      <p class="mb-0 fs-12 text-muted">دکتر ثنا محمدی</p>
                    </label>
                    <label
                      class="d-flex align-items-center gap-2 cursor-pointer mb-4"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input form-select-lg bg-transparent cursor-pointer"
                      />
                      <img
                        alt="img"
                        :src="require('../assets/img/image 66.png')"
                        class="img-fluid w-30 h-30 rounded-circle d-block"
                      />
                      <p class="mb-0 fs-12 text-muted">دکتر ثنا محمدی</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="border rounded-1 overflow-hidden">
                <p
                  class="mb-0 bg-main text-white text-center py-2 fs-14 fw-bold"
                >
                  گفتار درمان
                </p>
                <div class="p-3">
                  <select
                    class="bg-transparent rounded-1 w-100 border p-2 fs-12 fw-bold"
                  >
                    <option>تحصص</option>
                    <option>تحصص</option>
                    <option>تحصص</option>
                  </select>
                  <div class="mt-3">
                    <label
                      class="d-flex align-items-center gap-2 cursor-pointer mb-4"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input form-select-lg bg-transparent cursor-pointer"
                      />
                      <img
                        alt="img"
                        :src="require('../assets/img/image 66.png')"
                        class="img-fluid w-30 h-30 rounded-circle d-block"
                      />
                      <p class="mb-0 fs-12 text-muted">دکتر ثنا محمدی</p>
                    </label>
                    <label
                      class="d-flex align-items-center gap-2 cursor-pointer mb-4"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input form-select-lg bg-transparent cursor-pointer"
                      />
                      <img
                        alt="img"
                        :src="require('../assets/img/image 66.png')"
                        class="img-fluid w-30 h-30 rounded-circle d-block"
                      />
                      <p class="mb-0 fs-12 text-muted">دکتر ثنا محمدی</p>
                    </label>
                    <label
                      class="d-flex align-items-center gap-2 cursor-pointer mb-4"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input form-select-lg bg-transparent cursor-pointer"
                      />
                      <img
                        alt="img"
                        :src="require('../assets/img/image 66.png')"
                        class="img-fluid w-30 h-30 rounded-circle d-block"
                      />
                      <p class="mb-0 fs-12 text-muted">دکتر ثنا محمدی</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="bg-main me-auto h-48 w-271 w-lg-120 d-flex align-items-center justify-content-center flex-shrink-0 border-0 rounded-8 text-center text-white fw-bold fs-14 mt-5 ms-3">تایید ارجاع</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside/Aside.vue";
export default {
  components: { Aside },
  name: "userInfo2-component",
};
</script>

<style>
</style>