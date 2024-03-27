<template>
  <main>

    <aos-vue>

         <!-- pannel -->
    <section class="bg-main3 py-5">
        <div class="container">
         <div class="row g-4 align-items-center mx-0">
         <div class="col-xxl-4 col-lg-6">
            <div class="w-385 w-sm-auto h-385 h-sm-auto p-4 p-sm-0 rounded-circle bg-main2 d-flex align-items-center justify-content-center mx-auto mx-lg-0">
             <img alt="img" :src="require('../assets/img/image 48.png')" class="img-fluid rounded-circle w-287 h-287 h-sm-auto d-block" data-aos="flip-up">
            </div>
         </div>
         <div class="col-xxl-8 col-lg-6 text-center text-lg-end" data-aos="fade-up">
            <h5 class="text-main font-bold mb-3">دکتر سمیرا فتحی</h5>
            <p class="text-dark fw-bold">دکتری تخصصی روان­شناسی بالینی</p>
            <p class="text-dark fw-bold"> شماره پروانه نظام روانشناسی و مشاوره: 2345</p>
            <div class="d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap gap-4">
              <div class="d-flex align-items-center gap-2">
               <p class="mb-0 fs-14 fw-bold text-dark">%20</p>
               <div class="w-32 h-32 rounded-circle d-flex align-items-center justify-content-center border cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_91_267)">
                    <path d="M13.7498 2.5C12.2998 2.5 10.9082 3.175 9.99984 4.24167C9.0915 3.175 7.69984 2.5 6.24984 2.5C3.68317 2.5 1.6665 4.51667 1.6665 7.08333C1.6665 10.2333 4.49984 12.8 8.7915 16.7L9.99984 17.7917L11.2082 16.6917C15.4998 12.8 18.3332 10.2333 18.3332 7.08333C18.3332 4.51667 16.3165 2.5 13.7498 2.5ZM10.0832 15.4583L9.99984 15.5417L9.9165 15.4583C5.94984 11.8667 3.33317 9.49167 3.33317 7.08333C3.33317 5.41667 4.58317 4.16667 6.24984 4.16667C7.53317 4.16667 8.78317 4.99167 9.22484 6.13333H10.7832C11.2165 4.99167 12.4665 4.16667 13.7498 4.16667C15.4165 4.16667 16.6665 5.41667 16.6665 7.08333C16.6665 9.49167 14.0498 11.8667 10.0832 15.4583Z" fill="#B3AAAA"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_91_267">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
               </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                  <p class="mb-0 fs-14 fw-bold text-dark">4.5</p>
                  <div class="d-flex align-items-center gap-2">
                      <svg class="cursor-pointer" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.0319 13.1377L4.66522 19.0557C4.6229 19.2349 4.63561 19.4227 4.70168 19.5945C4.76775 19.7664 4.88411 19.9143 5.03557 20.0191C5.18703 20.1238 5.36655 20.1804 5.55068 20.1814C5.7348 20.1825 5.91498 20.1281 6.06767 20.0252L11.062 16.6956L16.0564 20.0252C16.2126 20.1289 16.3968 20.1823 16.5843 20.1782C16.7718 20.1741 16.9536 20.1127 17.1051 20.0022C17.2567 19.8917 17.3707 19.7375 17.432 19.5602C17.4933 19.383 17.4988 19.1912 17.4478 19.0107L15.7702 13.1404L19.9307 9.39628C20.064 9.27629 20.1592 9.11988 20.2045 8.94638C20.2498 8.77289 20.2432 8.58992 20.1856 8.4201C20.1281 8.25029 20.022 8.10107 19.8805 7.99091C19.739 7.88075 19.5683 7.81448 19.3896 7.80029L14.1604 7.38386L11.8976 2.37485C11.8255 2.21356 11.7082 2.0766 11.5599 1.98049C11.4116 1.88439 11.2387 1.83325 11.062 1.83325C10.8853 1.83325 10.7124 1.88439 10.5641 1.98049C10.4159 2.0766 10.2986 2.21356 10.2264 2.37485L7.9636 7.38386L2.73445 7.79937C2.55875 7.81329 2.39079 7.87753 2.25065 7.98441C2.11052 8.09128 2.00414 8.23627 1.94424 8.40202C1.88435 8.56777 1.87347 8.74727 1.91292 8.91904C1.95237 9.09081 2.04047 9.24758 2.16668 9.37059L6.0319 13.1377ZM8.64877 9.16972C8.81249 9.15682 8.96973 9.10012 9.104 9.00555C9.23826 8.91098 9.34462 8.78203 9.41191 8.63222L11.062 4.98071L12.7121 8.63222C12.7794 8.78203 12.8858 8.91098 13.02 9.00555C13.1543 9.10012 13.3115 9.15682 13.4753 9.16972L17.1185 9.45865L14.1182 12.159C13.8577 12.3938 13.7541 12.7552 13.8495 13.0927L14.9988 17.1148L11.572 14.83C11.4216 14.729 11.2445 14.6751 11.0634 14.6751C10.8822 14.6751 10.7052 14.729 10.5548 14.83L6.9739 17.2175L7.937 13.0478C7.97231 12.8944 7.96757 12.7346 7.92323 12.5836C7.8789 12.4326 7.79646 12.2955 7.68384 12.1856L4.89728 9.46874L8.64877 9.16972Z" fill="#F3CD03"/>
                      </svg>
                      <svg class="cursor-pointer" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.1706 8.41927C20.113 8.24946 20.0068 8.10025 19.8653 7.99006C19.7239 7.87987 19.5532 7.81353 19.3744 7.79922L14.1453 7.38371L11.8825 2.3747C11.8104 2.21337 11.6932 2.07634 11.545 1.98016C11.3968 1.88397 11.2239 1.83274 11.0472 1.83264C10.8705 1.83254 10.6975 1.88359 10.5492 1.97961C10.4009 2.07563 10.2835 2.21253 10.2113 2.37378L7.94846 7.38371L2.71931 7.79922C2.54362 7.81314 2.37566 7.87738 2.23552 7.98425C2.09538 8.09113 1.989 8.23612 1.9291 8.40187C1.86921 8.56762 1.85834 8.74712 1.89778 8.91889C1.93723 9.09066 2.02533 9.24743 2.15154 9.37044L6.01585 13.1375L4.64917 19.0555C4.60767 19.2347 4.62097 19.4221 4.68734 19.5936C4.75372 19.7651 4.8701 19.9127 5.02138 20.0172C5.17267 20.1217 5.35188 20.1783 5.53575 20.1797C5.71963 20.1811 5.89968 20.1272 6.05254 20.025L11.0469 16.6955L16.0412 20.025C16.1975 20.1288 16.3817 20.1822 16.5692 20.1781C16.7567 20.1739 16.9384 20.1125 17.09 20.002C17.2415 19.8916 17.3556 19.7373 17.4169 19.5601C17.4781 19.3828 17.4836 19.1911 17.4327 19.0106L15.755 13.1403L19.9156 9.39612C20.188 9.15031 20.288 8.7669 20.1706 8.41927Z" fill="#F3CD03"/>
                      </svg>
                      <svg class="cursor-pointer" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.1706 8.41927C20.113 8.24946 20.0068 8.10025 19.8653 7.99006C19.7239 7.87987 19.5532 7.81353 19.3744 7.79922L14.1453 7.38371L11.8825 2.3747C11.8104 2.21337 11.6932 2.07634 11.545 1.98016C11.3968 1.88397 11.2239 1.83274 11.0472 1.83264C10.8705 1.83254 10.6975 1.88359 10.5492 1.97961C10.4009 2.07563 10.2835 2.21253 10.2113 2.37378L7.94846 7.38371L2.71931 7.79922C2.54362 7.81314 2.37566 7.87738 2.23552 7.98425C2.09538 8.09113 1.989 8.23612 1.9291 8.40187C1.86921 8.56762 1.85834 8.74712 1.89778 8.91889C1.93723 9.09066 2.02533 9.24743 2.15154 9.37044L6.01585 13.1375L4.64917 19.0555C4.60767 19.2347 4.62097 19.4221 4.68734 19.5936C4.75372 19.7651 4.8701 19.9127 5.02138 20.0172C5.17267 20.1217 5.35188 20.1783 5.53575 20.1797C5.71963 20.1811 5.89968 20.1272 6.05254 20.025L11.0469 16.6955L16.0412 20.025C16.1975 20.1288 16.3817 20.1822 16.5692 20.1781C16.7567 20.1739 16.9384 20.1125 17.09 20.002C17.2415 19.8916 17.3556 19.7373 17.4169 19.5601C17.4781 19.3828 17.4836 19.1911 17.4327 19.0106L15.755 13.1403L19.9156 9.39612C20.188 9.15031 20.288 8.7669 20.1706 8.41927Z" fill="#F3CD03"/>
                      </svg>
                      <svg class="cursor-pointer" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.1706 8.41927C20.113 8.24946 20.0068 8.10025 19.8653 7.99006C19.7239 7.87987 19.5532 7.81353 19.3744 7.79922L14.1453 7.38371L11.8825 2.3747C11.8104 2.21337 11.6932 2.07634 11.545 1.98016C11.3968 1.88397 11.2239 1.83274 11.0472 1.83264C10.8705 1.83254 10.6975 1.88359 10.5492 1.97961C10.4009 2.07563 10.2835 2.21253 10.2113 2.37378L7.94846 7.38371L2.71931 7.79922C2.54362 7.81314 2.37566 7.87738 2.23552 7.98425C2.09538 8.09113 1.989 8.23612 1.9291 8.40187C1.86921 8.56762 1.85834 8.74712 1.89778 8.91889C1.93723 9.09066 2.02533 9.24743 2.15154 9.37044L6.01585 13.1375L4.64917 19.0555C4.60767 19.2347 4.62097 19.4221 4.68734 19.5936C4.75372 19.7651 4.8701 19.9127 5.02138 20.0172C5.17267 20.1217 5.35188 20.1783 5.53575 20.1797C5.71963 20.1811 5.89968 20.1272 6.05254 20.025L11.0469 16.6955L16.0412 20.025C16.1975 20.1288 16.3817 20.1822 16.5692 20.1781C16.7567 20.1739 16.9384 20.1125 17.09 20.002C17.2415 19.8916 17.3556 19.7373 17.4169 19.5601C17.4781 19.3828 17.4836 19.1911 17.4327 19.0106L15.755 13.1403L19.9156 9.39612C20.188 9.15031 20.288 8.7669 20.1706 8.41927Z" fill="#F3CD03"/>
                      </svg>
                      <svg class="cursor-pointer" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.1706 8.41927C20.113 8.24946 20.0068 8.10025 19.8653 7.99006C19.7239 7.87987 19.5532 7.81353 19.3744 7.79922L14.1453 7.38371L11.8825 2.3747C11.8104 2.21337 11.6932 2.07634 11.545 1.98016C11.3968 1.88397 11.2239 1.83274 11.0472 1.83264C10.8705 1.83254 10.6975 1.88359 10.5492 1.97961C10.4009 2.07563 10.2835 2.21253 10.2113 2.37378L7.94846 7.38371L2.71931 7.79922C2.54362 7.81314 2.37566 7.87738 2.23552 7.98425C2.09538 8.09113 1.989 8.23612 1.9291 8.40187C1.86921 8.56762 1.85834 8.74712 1.89778 8.91889C1.93723 9.09066 2.02533 9.24743 2.15154 9.37044L6.01585 13.1375L4.64917 19.0555C4.60767 19.2347 4.62097 19.4221 4.68734 19.5936C4.75372 19.7651 4.8701 19.9127 5.02138 20.0172C5.17267 20.1217 5.35188 20.1783 5.53575 20.1797C5.71963 20.1811 5.89968 20.1272 6.05254 20.025L11.0469 16.6955L16.0412 20.025C16.1975 20.1288 16.3817 20.1822 16.5692 20.1781C16.7567 20.1739 16.9384 20.1125 17.09 20.002C17.2415 19.8916 17.3556 19.7373 17.4169 19.5601C17.4781 19.3828 17.4836 19.1911 17.4327 19.0106L15.755 13.1403L19.9156 9.39612C20.188 9.15031 20.288 8.7669 20.1706 8.41927Z" fill="#F3CD03"/>
                      </svg>
                  </div>
              </div>
            </div>
            <a class="d-flex align-items-center justify-content-center mx-auto mx-lg-0 fw-bold text-white bg-second w-174 h-48 rounded-8 mt-5">رزرو وقت مشاوره</a>
         </div>
         </div>
        </div>
    </section>

    <!-- details -->
    <section class="py-5">
        <div class="container">
          <div class="d-flex align-items-center gap-5 flex-column flex-md-row">
            <div class="bg-main rounded-10 p-4 d-flex align-items-center gap-2 max-w-296" data-aos="fade-up">
              <svg class="flex-shrink-0" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0002 4.75004C11.1301 4.75004 4.75016 11.13 4.75016 19C4.75016 26.8701 11.1301 33.25 19.0002 33.25C26.8702 33.25 33.2502 26.8701 33.2502 19C33.2502 11.13 26.8702 4.75004 19.0002 4.75004ZM1.5835 19C1.5835 9.38108 9.3812 1.58337 19.0002 1.58337C28.6191 1.58337 36.4168 9.38108 36.4168 19C36.4168 28.619 28.6191 36.4167 19.0002 36.4167C9.3812 36.4167 1.5835 28.619 1.5835 19Z" fill="#F8F8F8"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9998 7.91663C19.8743 7.91663 20.5832 8.62551 20.5832 9.49996V18.0214L26.0413 20.7504C26.8234 21.1415 27.1404 22.0926 26.7493 22.8747C26.3583 23.6568 25.4072 23.9739 24.6251 23.5828L18.2917 20.4161C17.7553 20.1479 17.4165 19.5997 17.4165 19V9.49996C17.4165 8.62551 18.1254 7.91663 18.9998 7.91663Z" fill="#F8F8F8"/>
              </svg>
              <p class="mb-0 fs-18 font-bold text-white">شنبه ساعت 13 الی 21</p>
             </div>
           <div class="bg-main rounded-10 p-4 d-flex align-items-center gap-2 max-w-296" data-aos="fade-up">
            <svg class="flex-shrink-0" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0002 4.75004C11.1301 4.75004 4.75016 11.13 4.75016 19C4.75016 26.8701 11.1301 33.25 19.0002 33.25C26.8702 33.25 33.2502 26.8701 33.2502 19C33.2502 11.13 26.8702 4.75004 19.0002 4.75004ZM1.5835 19C1.5835 9.38108 9.3812 1.58337 19.0002 1.58337C28.6191 1.58337 36.4168 9.38108 36.4168 19C36.4168 28.619 28.6191 36.4167 19.0002 36.4167C9.3812 36.4167 1.5835 28.619 1.5835 19Z" fill="#F8F8F8"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9998 7.91663C19.8743 7.91663 20.5832 8.62551 20.5832 9.49996V18.0214L26.0413 20.7504C26.8234 21.1415 27.1404 22.0926 26.7493 22.8747C26.3583 23.6568 25.4072 23.9739 24.6251 23.5828L18.2917 20.4161C17.7553 20.1479 17.4165 19.5997 17.4165 19V9.49996C17.4165 8.62551 18.1254 7.91663 18.9998 7.91663Z" fill="#F8F8F8"/>
            </svg>
            <p class="mb-0 fs-18 font-bold text-white">شنبه ساعت 13 الی 21</p>
           </div>
           <div class="bg-main rounded-10 p-4 d-flex align-items-center gap-2 max-w-340" data-aos="fade-down">
                <svg class="flex-shrink-0" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7999 5.97454C21.993 4.72387 18.8571 4.41404 15.8597 5.09125C12.8624 5.76846 10.1642 7.39644 8.16771 9.73237C6.17118 12.0683 4.98324 14.987 4.78105 18.0533C4.57887 21.1195 5.37327 24.169 7.04578 26.7469C8.7183 29.3247 11.1793 31.2929 14.0618 32.3578C16.9443 33.4227 20.0938 33.5274 23.0405 32.6561C25.9873 31.7848 28.5736 29.9843 30.4135 27.5231C32.2534 25.062 33.2484 22.0719 33.2502 18.999V17.5433C33.2502 16.6688 33.9591 15.9599 34.8335 15.9599C35.708 15.9599 36.4168 16.6688 36.4168 17.5433V18.9999C36.4147 22.7557 35.1985 26.4111 32.9497 29.4192C30.701 32.4273 27.54 34.6279 23.9384 35.6928C20.3368 36.7577 16.4874 36.6298 12.9644 35.3283C9.44134 34.0267 6.43344 31.6211 4.38925 28.4704C2.34507 25.3197 1.37413 21.5926 1.62125 17.8449C1.86837 14.0973 3.3203 10.53 5.7605 7.67492C8.2007 4.81989 11.4984 2.83015 15.1619 2.00244C18.8253 1.17474 22.6581 1.55342 26.0888 3.08202C26.8875 3.43792 27.2465 4.37395 26.8906 5.1727C26.5347 5.97145 25.5987 6.33045 24.7999 5.97454Z" fill="#F8F8F8"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.9522 5.21319C36.5708 5.83121 36.5713 6.83372 35.9533 7.45236L20.12 23.3015C19.8231 23.5987 19.4203 23.7657 19.0002 23.7658C18.5802 23.7659 18.1773 23.5991 17.8803 23.3021L13.1303 18.5521C12.5119 17.9338 12.5119 16.9312 13.1303 16.3129C13.7486 15.6946 14.7511 15.6946 15.3694 16.3129L18.9993 19.9428L33.713 5.21431C34.331 4.59567 35.3336 4.59517 35.9522 5.21319Z" fill="#F8F8F8"/>
                </svg>
              <p class="mb-0 fs-18 font-bold text-white">10 سال تجربه روانشناسی بالینی</p>
            </div>
          </div>
          <div class="mt-5">
            <h5 class="font-bold text-main" data-aos="fade-up">حوزه‌های تخصصی دکتر سمیرا فتحی</h5>
            <ul class="mb-0 pe-3 fw-bold text-dark lh-40" data-aos="fade-down">
             <li>
                 روان ­درمانی فردی
                 <ul class="pe-4">
                    <li>
                        اختلالات شخصیت
                    </li>
                    <li>
                        اختلالات خلقی
                    </li>
                    <li>
                        مدیریت هیجان
                    </li>
                    <li>
                        روابط بین فردی
                    </li>
                 </ul>
             </li>
            </ul>
            <h5 class="font-bold text-main mt-5" data-aos="fade-down">سوابق علمی دکتر سمیرا فتحی</h5>
            <ul class="mb-0 pe-3 fw-bold text-dark lh-40" data-aos="fade-up">
             <li>
                 دکتری تخصصی روانشناسی بالینی، دانشگاه علوم پزشکی ایران
             </li>
             <li>
                 کارشناسی ارشد روانشناسی بالینی، دانشگاه علوم پزشکی ایران
             </li>
            </ul>
            <h5 class="font-bold text-main mt-5" data-aos="fade-up">مسئولیت­ها و سوابق علمی و اجرایی سمیرا فتحی</h5>
            <ul class="mb-0 pe-3 fw-bold text-dark lh-40" data-aos="fade-down">
             <li>
                 عضو کمیته علمی کنگره جهانی درمان­های شناختی رفتاری 
                 (WCBCT) 
             </li>
             <li>
                 صاحب امتياز و مدير مسئول مركز مشاوره و خدمات روانشناختي سگال
             </li>
             <li>
                 مشاور علمي معاونت دانشجويي فرهنگی وزارت بهداشت
             </li>
             <li>
                 عضو شورای سیاستگذاری مشاوره دانشجویی در وزارت بهداشت 
             </li>
             <li>
                 عضو هيئت مديره انجمن روانشناسي ايران در دوره ها‌ي ششم و هفتم
             </li>
             <li>
                 مسئول کمیته شناختی رفتاری انجمن روانشناسی ایران
             </li>
            </ul>
          </div>
        </div>
    </section>

    <!-- why us -->
    <section class="py-5 mt-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-lg-4">
          <div class="flex-grow-1">
            <h5 data-aos="fade-down" class="fs-18 text-center text-dark fw-bold">
              چرا باید <span class="text-main">مشاوران</span> حالتو را انتخاب کنید؟
            </h5>
            <div class="mt-5" data-aos="fade-up">
              <div class="d-flex align-items-center gap-3 mb-4">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 13C25 6.375 19.625 1 13 1C6.375 1 1 6.375 1 13C1 19.625 6.375 25 13 25C19.625 25 25 19.625 25 13Z" fill="#6CB771" stroke="#31C65B" stroke-miterlimit="10"/>
                  <path d="M19 7.99982L10.6 17.9998L7 13.9998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               <p class="mb-0 text-dark fw-bold">مشاوران ملی و بین المللی</p>
              </div>
              <div class="d-flex align-items-center gap-3 mb-4">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 13C25 6.375 19.625 1 13 1C6.375 1 1 6.375 1 13C1 19.625 6.375 25 13 25C19.625 25 25 19.625 25 13Z" fill="#6CB771" stroke="#31C65B" stroke-miterlimit="10"/>
                  <path d="M19 7.99982L10.6 17.9998L7 13.9998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               <p class="mb-0 text-dark fw-bold">مشاوران 24 ساعته</p>
              </div>
              <div class="d-flex align-items-center gap-3 mb-4">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 13C25 6.375 19.625 1 13 1C6.375 1 1 6.375 1 13C1 19.625 6.375 25 13 25C19.625 25 25 19.625 25 13Z" fill="#6CB771" stroke="#31C65B" stroke-miterlimit="10"/>
                  <path d="M19 7.99982L10.6 17.9998L7 13.9998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               <p class="mb-0 text-dark fw-bold">مشاوران مهاجرت</p>
              </div>
              <div class="d-flex align-items-center gap-3">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 13C25 6.375 19.625 1 13 1C6.375 1 1 6.375 1 13C1 19.625 6.375 25 13 25C19.625 25 25 19.625 25 13Z" fill="#6CB771" stroke="#31C65B" stroke-miterlimit="10"/>
                  <path d="M19 7.99982L10.6 17.9998L7 13.9998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               <p class="mb-0 text-dark fw-bold">بهترین مشاوران و متخصص حرفه ای</p>
              </div>
            </div>
          </div>
          <!-- <img alt="img" :src="require('../assets/img/why.PNG')" class="img-fluid rounded-8 flex-grow-1 flex-lg-grow-0" data-aos="fade-down"> -->
        </div>
      </div>
    </section>

    <!-- blog -->
    <section class="mt-5 pt-5">
     <div class="container">
       <div class="rounded-12 overflow-hidden position-relative bg-main p-sm-5 p-4 px-5">
        <!-- shape -->
        <img alt="img" :src="require('../assets/img/random-shape-in-blue-png 2.png')" class="position-absolute end-0 top-0 -z-0">
        <div class="position-relative">
          <h4 class="text-white font-bold text-center fs-sm-18">مقالات و کتاب های تالیف شده دکترسمیرا فتحی</h4>
          <a class="text-white position-absolute start-0 font-bold top-0 d-none d-lg-block">مشاهده همه</a>
        </div>
         <!-- swiper -->
         <swiper-2></swiper-2>
         <!--  -->
         <a class="text-white font-bold text-center d-block mt-4 d-lg-none">مشاهده همه</a>
       </div>
     </div>
    </section>

    <!-- experts -->
    <section class="mt-5 py-5">
      <div class="container">
        <h5 data-aos="fade-down" class="fs-18 text-center text-dark fw-bold">
          سایر <span class="text-main">مشاورین</span> با تخصص های مشابه
        </h5>
        <div class="row g-5 mx-0 mt-5">
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="flip-down">
                 <img alt="img" :src="require('../assets/img/image 49.png')" class="img-fluid rounded-12 w-100 transition">
                 <p class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center">دکتر مونا محمدی</p>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="fade-down">
                 <img alt="img" :src="require('../assets/img/image 50.png')" class="img-fluid rounded-12 w-100 transition">
                 <p class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center">دکتر شهریار ملایی</p>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="fade-up">
                 <img alt="img" :src="require('../assets/img/image 51.png')" class="img-fluid rounded-12 w-100 transition">
                 <p class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center">دکتر امیر علی بیگی</p>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="fade-down">
                 <img alt="img" :src="require('../assets/img/image 49.png')" class="img-fluid rounded-12 w-100 transition">
                 <p class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center">دکتر مونا محمدی</p>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="flip-up">
                 <img alt="img" :src="require('../assets/img/image 50.png')" class="img-fluid rounded-12 w-100 transition">
                 <p class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center">دکتر شهریار ملایی</p>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="fade-up">
                 <img alt="img" :src="require('../assets/img/image 51.png')" class="img-fluid rounded-12 w-100 transition">
                 <p class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center">دکتر امیر علی بیگی</p>
              </a>
            </div>
        </div>
      </div>
    </section>

    </aos-vue>
    
  </main>
</template>

<script>
import Swiper2 from "../components/Swiper2.vue";

export default {
  components: { Swiper2 },
  name: "Cadr-component",
};
</script>

<style></style>