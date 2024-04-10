<template>
   <main class="max-w-581 mx-auto my-5 py-5 questions px-4">
    <div class="">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">جنسیت خود را تعیین کنید</h3>
      <div class="h-68 border rounded-4 p-2 bg-white">
        <label class="fs-10 text-gray">جنسیت</label>
        <select class="w-100 bg-transparent border-0">
          <option>زن</option>
          <option>مرد</option>
          <option>سایر موارد</option>
        </select>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 pt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">سن خود را تعیین کنید</h3>
      <div class="h-68 border rounded-4 p-2 bg-white">
        <label class="fs-10 text-gray">سن</label>
        <select class="w-100 bg-transparent border-0">
          <option>18-24</option>
          <option>24-35</option>
          <option>35-45</option>
        </select>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 pt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">هویت جنسی شما</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">معمولی (عادی)</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">گی</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">لزبین</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">همجنسگرا (دگرباش )</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">علاقه‌ای به پاسخ ندارم</p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">وضعیت ارتباطی</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">مجرد</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">در ارتباط</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">متاهل</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">طلاق</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">بیوه</p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">قبلا از خدمات مشاوره استفاده کرده اید؟</h3>
      <div class="h-68 border rounded-4 p-2 bg-white">
        <label class="fs-10 text-gray">خدمات مشاوره</label>
        <select class="w-100 bg-transparent border-0">
          <option>بله</option>
          <option>خیر</option>
        </select>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 pt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">چه چیزی منجر به درخواست مشاوره شده است؟</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">احساس افسردگی می‌کنم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">احساس اضطراب و درهم شکستگی می‌کنم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">وضعیت خلقی من با عملکرد شغلی و تحصیلی من در تداخل است</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">در حفظ یا ایجاد ارتباط دارای چالش هستم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">معنا و هدفی درزندگیم نمی‌توانم پیدا کنم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">غصه می‌خورم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">ضربه روحی تجربه کرده‌ام</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">اعتماد به نفس پایینی دارم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">میخواهم حالم را بهتر کنم اما نقطه شروع را نمی‌دانم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">معنا و هدفی درزندگیم نمی‌توانم پیدا کنم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">میخواهم حالم را بهتر کنم اما نقطه شروع را نمی‌دانم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">از طرف خانواده به دوست یا پزشکم به من توصیه مشاوره شده است</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">برای کشف و شناخت خودم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">سایر موارد</p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">از درمانگر چه انتظاری دارد؟</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">به من گوش کند</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">گذشته من را کشف کند</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">مهارت‌های جدید به من یاد بدهد</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">باورهای من را به چالش بکشاند</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">تکالیفی برای انجام در خانه به من بدهد</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">در تنظیم اهدافم به من کمک کند</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">سایر موارد</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">نمی‌دانم</p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">آخرین مرتبه‌ای که به خودکشی فکر کرده‌ای چه زمانی بود؟</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">هرگز</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">در طی یک سال گذشته</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">در طی سه ماه گذشته</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">در طی یک ماه گذشته</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">در طی دو هفته گذشته</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">طی چند روز گذشته</p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">در حال حاضر تجربه اضطراب، حملات پانیک (وحشت زدگی) یا هرگونه
        فوبیایی (ترس) داشته‌ای؟</h3>
      <div class="h-68 border rounded-4 p-2 bg-white">
        <label class="fs-10 text-gray">فوبیا (ترس)</label>
        <select class="w-100 bg-transparent border-0">
          <option>بله</option>
          <option>خیر</option>
        </select>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 pt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">در حال حاضر دارویی مصرف می‌کنی؟</h3>
      <div class="h-68 border rounded-4 p-2 bg-white">
        <label class="fs-10 text-gray">مصرف دارو</label>
        <select class="w-100 bg-transparent border-0">
          <option>بله</option>
          <option>خیر</option>
        </select>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 pt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">حال حاضر هرگونه درد مزمن را تجربه می‌کنی؟</h3>
      <div class="h-68 border rounded-4 p-2 bg-white">
        <label class="fs-10 text-gray">درد مزمن</label>
        <select class="w-100 bg-transparent border-0">
          <option>بله</option>
          <option>خیر</option>
        </select>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 pt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">عادات خواب کنونی خودت را چگونه ارزیابی می‌کنی؟</h3>
      <div class="h-68 border rounded-4 p-2 bg-white">
        <label class="fs-10 text-gray">عادات خواب</label>
        <select class="w-100 bg-transparent border-0">
          <option>بله</option>
          <option>خیر</option>
        </select>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 pt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">کدام یک از منابع زیر می‌تواند برای تو مفید باشد؟</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">گروه‌های حمایتی</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">مجلات درمانی</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">پیگیری اهداف و عادات</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">وبینارهای آموزشی</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">دیگر موارد</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">نمیدانم</p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">از چه طریقی علاقمند به ارتباط با درمانگر خودت هستی؟</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">عمدتاً از طریق پیام</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">عمدتاً از طریق جلسات تلفنی یا ویدیویی</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">مطمئن نیستم (بعداً تصمیم می‌گیرم)</p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">ترجیح شما در انتخاب درمانگر چیست؟</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">درمانگر مرد</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">درمانگر زن</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">درمانگر از جامعه دگرباشان</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            درمانگر غیر مذهبی
          </p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">علاقمند به مشاوره به چه زبانی هستید؟</h3>
      <div class="h-68 border rounded-4 p-2 bg-white">
        <label class="fs-10 text-gray">زبان مشاوره</label>
        <select class="w-100 bg-transparent border-0">
          <option>انگلیسی</option>
          <option>فارسی</option>
        </select>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 pt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">خودتان را در کدام دسته قرار میدهید؟</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">دانش آموز هستم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">دارای معلولیت هستم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">بیکار هستم</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            شاغل هستم اما درآمدم پایین است
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            دارای بیمه پایه هستم
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            دارای بیمه تکمیلی هستم
          </p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">درمانگری با تجربیات در حوزه‌های ذیل را ترجیح می‌دهم :</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">اختلالات تغذیه</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">اختلالات خواب</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">فرزند پروری</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            انگیزش اعتماد به نفس و عزت نفس
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مدیریت چشم
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مشکلات شغلی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            اختلال دو قطبی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مواجهه با تغییرات زندگی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            تر کوچینگ مدیریتی و حرفه‌ای
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            تمرکز حافظه و دقت
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            افسردگی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            استرس و اضطراب
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            ترک اعتیاد
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مشکلات مرتبط با دگرباشان
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مشکلات ارتباطی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            تعارضات خانوادگی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            تروماها و سو استفاده
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مواجهه با واکنش لوگ
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مسائل مرتبط با دلبستگی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            وسواس
          </p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex next align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="d-none">
      <h3 class="text-center fs-20 font-bold mb-4 pb-2">دیگر حوزه‌های ترجیحی برای مشاوره :</h3>
      <div class="border rounded-8 overflow-hidden">
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">مشکلات ارتباطی</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">هدف زندگی</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">گوشه‌گیری و تنهایی</p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            عشق به خود
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            اضطراب و ترس اجتماعی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            احساس گناه و شرم
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            استرس پس از ضربه
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مشکلات وابستگی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            فروپاشی عاطفی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            تصور از بدن
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            اختلالات خلقی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            بحران میانسالی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مشکلات سالمندی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            اختلال پانیک و حملات پانیک
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مشکل کنترل
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مشکل کنترل
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            فراموشی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مشکلات و استرس‌های مراقبت از دیگران
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            زایمان و تولد نوزاد
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            طلاق و جدایی
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            احساس اجبار
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مشکلات محیط کار
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            درد مزمن و معلولیت
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مسائل زنان
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            مسائل مردان
          </p>
        </label>
        <label class="d-flex align-items-center cursor-pointer p-3 border-bottom gap-2 fs-sm-14">
          <input type="checkbox" class="form-check-input cursor-pointer flex-shrink-0">
          <p class="mb-0 fw-bold text-dark">
            خودشیفتگی
          </p>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5 gap-3">
        <a
          class="d-flex align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
          <p class="mb-0 font-bold">بعدی</p>
        </a>
        <a
          class="d-flex prev align-items-center justify-content-center hover-main2 gap-3 rounded-8 text-muted h-48 w-159 border">
          <p class="mb-0 font-bold">قبلی</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 10.4848V13.5152L5.81818 13.5152L14.1515 21.8485L12 24L0 12L12 0L14.1515 2.15152L5.81818 10.4848L24 10.4848Z"
              fill="#979797" />
          </svg>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Questions-component",
};
</script>

<style>
</style>