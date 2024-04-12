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
      </div>
      <div class="px-sm-4 px-3 position-relative">
        <div
          class="tabs px-4 d-flex align-items-center justify-content-between text-secondary text-center font-bold bg-white h-48 max-w-673 rounded-1 mx-auto mt-4"
        >
          <div :class="{ 'active': activeTab === 'editUserInfo' }" @click="activeTab='editUserInfo'"
            class="h-100 d-flex align-items-center justify-content-center flex-grow-1 cursor-pointer"
          >
            تغییر اطلاعات کابری
          </div>
          <div :class="{ 'active': activeTab === 'describeForm' }" @click="activeTab='describeForm'"
            class="h-100 d-flex align-items-center justify-content-center flex-grow-1 cursor-pointer"
          >
            فرم شرح حال
          </div>
        </div>
        <div class="my-5 pb-5 max-w-885 mx-auto">
          <form v-show="activeTab === 'editUserInfo'" class="row g-4 mx-0 fs-12 fw-bold">
            <div class="col-lg-4">
              <input
                class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                placeholder="شماره پرونده"
              />
            </div>
            <div class="col-lg-4">
              <input
                class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                placeholder="تاریخ مراجعه"
              />
            </div>
            <div class="col-lg-4">
              <input
                class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                placeholder="ساعت مراجعه"
              />
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">علت مراجعه و شکایات اصلی</label>
              <textarea
                rows="4"
                class="bg-white w-100 outline-none p-3 rounded-1 border mt-3"
                placeholder="توضیحات"
              ></textarea>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">تاریخچه بیماری/مشکل فعلي</label>
              <div class="row g-4 mx-0 fs-12 fw-bold mt-0">
                <div class="col-lg-4 col-sm-6">
                  <input
                    class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                    placeholder="زمان شروع بیماری"
                  />
                </div>
                <div class="col-lg-4 col-sm-6">
                  <input
                    class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                    placeholder="نحوه شروع بیماری"
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">علایم شروع بیماری</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">در صورت وجود حملات تشنج</label>
              <div class="row g-4 mx-0 fs-12 fw-bold mt-0">
                <div class="col-lg-4">
                  <input
                    class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                    placeholder="تاریخ آخرین حمله"
                  />
                </div>
                <div class="col-lg-4">
                  <input
                    class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                    placeholder="تعداد حملات در ماه"
                  />
                </div>
              </div>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">وجود بیهوشی پس از حملات</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">بی اختیاری ادرار</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">بروز حملات در زمان و مکان خاص</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">حركت تونيك كلونيك اندام ها</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">گاز گرفتگی دهان</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">تاریخچه تکاملی</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
                <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خودزنی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">کمبود انرژی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس گناه</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس بی ارزشی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خودزنی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">کمبود انرژی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس گناه</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس بی ارزشی</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">اختلال کارکرد در حوزه های</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
                <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خودزنی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">کمبود انرژی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس گناه</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس بی ارزشی</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">علائم تشخیص ها و درمان های قبلی</label>
              <textarea
                rows="4"
                class="bg-white w-100 outline-none p-3 rounded-1 border mt-3"
                placeholder="توضیحات"
              ></textarea>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">سابقه مصرف مواد، سیگار و الکل</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
                <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">بله</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خیر</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">سابقه بیماری جسمی</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
                <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">بله</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خیر</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">تاریخچه خانوادگی</label>
              <textarea
                rows="4"
                class="bg-white w-100 outline-none p-3 rounded-1 border mt-3"
                placeholder="توضیحات"
              ></textarea>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">عوامل احتمال ساز بیماری</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
                <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خودزنی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">کمبود انرژی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس گناه</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس بی ارزشی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خودزنی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">کمبود انرژی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس گناه</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس بی ارزشی</p>
                </label>
               </div>
              </div>
            </div>
          </form>
          <form v-show="activeTab === 'describeForm'" class="row g-4 mx-0 fs-12 fw-bold">
            <div class="col-lg-4">
              <input
                class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                placeholder="شماره فرم"
              />
            </div>
            <div class="col-lg-4">
              <input
                class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                placeholder="تاریخ مراجعه"
              />
            </div>
            <div class="col-lg-4">
              <input
                class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                placeholder="ساعت مراجعه"
              />
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">علت مراجعه و شکایات اصلی</label>
              <textarea
                rows="4"
                class="bg-white w-100 outline-none p-3 rounded-1 border mt-3"
                placeholder="توضیحات"
              ></textarea>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">تاریخچه بیماری/مشکل فعلي</label>
              <div class="row g-4 mx-0 fs-12 fw-bold mt-0">
                <div class="col-lg-4 col-sm-6">
                  <input
                    class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                    placeholder="زمان شروع بیماری"
                  />
                </div>
                <div class="col-lg-4 col-sm-6">
                  <input
                    class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                    placeholder="نحوه شروع بیماری"
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">علایم شروع بیماری</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">فعاليت بيش از حد</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">در صورت وجود حملات تشنج</label>
              <div class="row g-4 mx-0 fs-12 fw-bold mt-0">
                <div class="col-lg-4">
                  <input
                    class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                    placeholder="تاریخ آخرین حمله"
                  />
                </div>
                <div class="col-lg-4">
                  <input
                    class="bg-white w-100 h-48 px-3 rounded-1 outline-none border"
                    placeholder="تعداد حملات در ماه"
                  />
                </div>
              </div>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">وجود بیهوشی پس از حملات</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">بی اختیاری ادرار</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">بروز حملات در زمان و مکان خاص</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">حركت تونيك كلونيك اندام ها</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">گاز گرفتگی دهان</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">تاریخچه تکاملی</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
                <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خودزنی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">کمبود انرژی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس گناه</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس بی ارزشی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خودزنی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">کمبود انرژی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس گناه</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس بی ارزشی</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">اختلال کارکرد در حوزه های</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
                <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خودزنی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">کمبود انرژی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس گناه</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس بی ارزشی</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">علائم تشخیص ها و درمان های قبلی</label>
              <textarea
                rows="4"
                class="bg-white w-100 outline-none p-3 rounded-1 border mt-3"
                placeholder="توضیحات"
              ></textarea>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">سابقه مصرف مواد، سیگار و الکل</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
                <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">بله</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خیر</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">سابقه بیماری جسمی</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
                <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">بله</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خیر</p>
                </label>
               </div>
              </div>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">تاریخچه خانوادگی</label>
              <textarea
                rows="4"
                class="bg-white w-100 outline-none p-3 rounded-1 border mt-3"
                placeholder="توضیحات"
              ></textarea>
            </div>
            <div class="col-12">
              <label class="fw-bold fs-16">عوامل احتمال ساز بیماری</label>
              <div class="row mx-0 g-2 text-secondary mt-1"> 
                <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خودزنی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">کمبود انرژی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس گناه</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس بی ارزشی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">خودزنی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">کمبود انرژی</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس گناه</p>
                </label>
               </div>
               <div class="col-lg-3 col-sm-4 col-6"> 
                <label class="cursor-pointer d-flex align-items-center gap-2">
                 <input type="checkbox" class="form-check-input form-select-lg bg-transparent cursor-pointer">
                 <p class="mb-0 mt-1">احساس بی ارزشی</p>
                </label>
               </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside/Aside.vue";
import { ref } from 'vue';
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';
export default {
  components: { Aside, HamburgerIcon },
  name: "UserInfo-component",
  setup(){
    const activeTab=ref('editUserInfo');

    return{activeTab}
  }
};
</script>

<style>
</style>