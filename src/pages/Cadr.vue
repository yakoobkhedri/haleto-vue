<template>
  <Header-2 />

  <main>
    <aos-vue>
      <!-- pannel -->
      <section class="bg-main3 py-5">
        <div class="container">
          <div class="row g-4 align-items-center mx-0">
            <div class="col-xxl-4 col-lg-6">
              <div
                class="w-385 w-sm-auto h-385 h-sm-auto p-4 p-sm-0 rounded-circle bg-main2 d-flex align-items-center justify-content-center mx-auto mx-lg-0"
              >
                <img
                  alt="img"
                  :src="require('../assets/img/image 48.png')"
                  class="img-fluid rounded-circle w-287 h-287 h-sm-auto d-block"
                  data-aos="flip-up"
                />
              </div>
            </div>
            <div
              class="col-xxl-8 col-lg-6 text-center text-lg-end"
              data-aos="fade-up"
            >
              <h5 class="text-main font-bold mb-3">دکتر سمیرا فتحی</h5>
              <p class="text-dark fw-bold">دکتری تخصصی روان­شناسی بالینی</p>
              <p class="text-dark fw-bold">
                شماره پروانه نظام روانشناسی و مشاوره: 2345
              </p>
              <div
                class="d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap gap-4"
              >
                <div class="d-flex align-items-center gap-2">
                  <p class="mb-0 fs-14 fw-bold text-dark">%20</p>
                  <div
                    class="w-32 h-32 rounded-circle d-flex align-items-center justify-content-center border cursor-pointer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_91_267)">
                        <path
                          d="M13.7498 2.5C12.2998 2.5 10.9082 3.175 9.99984 4.24167C9.0915 3.175 7.69984 2.5 6.24984 2.5C3.68317 2.5 1.6665 4.51667 1.6665 7.08333C1.6665 10.2333 4.49984 12.8 8.7915 16.7L9.99984 17.7917L11.2082 16.6917C15.4998 12.8 18.3332 10.2333 18.3332 7.08333C18.3332 4.51667 16.3165 2.5 13.7498 2.5ZM10.0832 15.4583L9.99984 15.5417L9.9165 15.4583C5.94984 11.8667 3.33317 9.49167 3.33317 7.08333C3.33317 5.41667 4.58317 4.16667 6.24984 4.16667C7.53317 4.16667 8.78317 4.99167 9.22484 6.13333H10.7832C11.2165 4.99167 12.4665 4.16667 13.7498 4.16667C15.4165 4.16667 16.6665 5.41667 16.6665 7.08333C16.6665 9.49167 14.0498 11.8667 10.0832 15.4583Z"
                          fill="#B3AAAA"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_91_267">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <p class="mb-0 fs-14 fw-bold text-dark">4.5</p>
                  <div class="d-flex align-items-center gap-2">
                    <svg
                      class="cursor-pointer"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.0319 13.1377L4.66522 19.0557C4.6229 19.2349 4.63561 19.4227 4.70168 19.5945C4.76775 19.7664 4.88411 19.9143 5.03557 20.0191C5.18703 20.1238 5.36655 20.1804 5.55068 20.1814C5.7348 20.1825 5.91498 20.1281 6.06767 20.0252L11.062 16.6956L16.0564 20.0252C16.2126 20.1289 16.3968 20.1823 16.5843 20.1782C16.7718 20.1741 16.9536 20.1127 17.1051 20.0022C17.2567 19.8917 17.3707 19.7375 17.432 19.5602C17.4933 19.383 17.4988 19.1912 17.4478 19.0107L15.7702 13.1404L19.9307 9.39628C20.064 9.27629 20.1592 9.11988 20.2045 8.94638C20.2498 8.77289 20.2432 8.58992 20.1856 8.4201C20.1281 8.25029 20.022 8.10107 19.8805 7.99091C19.739 7.88075 19.5683 7.81448 19.3896 7.80029L14.1604 7.38386L11.8976 2.37485C11.8255 2.21356 11.7082 2.0766 11.5599 1.98049C11.4116 1.88439 11.2387 1.83325 11.062 1.83325C10.8853 1.83325 10.7124 1.88439 10.5641 1.98049C10.4159 2.0766 10.2986 2.21356 10.2264 2.37485L7.9636 7.38386L2.73445 7.79937C2.55875 7.81329 2.39079 7.87753 2.25065 7.98441C2.11052 8.09128 2.00414 8.23627 1.94424 8.40202C1.88435 8.56777 1.87347 8.74727 1.91292 8.91904C1.95237 9.09081 2.04047 9.24758 2.16668 9.37059L6.0319 13.1377ZM8.64877 9.16972C8.81249 9.15682 8.96973 9.10012 9.104 9.00555C9.23826 8.91098 9.34462 8.78203 9.41191 8.63222L11.062 4.98071L12.7121 8.63222C12.7794 8.78203 12.8858 8.91098 13.02 9.00555C13.1543 9.10012 13.3115 9.15682 13.4753 9.16972L17.1185 9.45865L14.1182 12.159C13.8577 12.3938 13.7541 12.7552 13.8495 13.0927L14.9988 17.1148L11.572 14.83C11.4216 14.729 11.2445 14.6751 11.0634 14.6751C10.8822 14.6751 10.7052 14.729 10.5548 14.83L6.9739 17.2175L7.937 13.0478C7.97231 12.8944 7.96757 12.7346 7.92323 12.5836C7.8789 12.4326 7.79646 12.2955 7.68384 12.1856L4.89728 9.46874L8.64877 9.16972Z"
                        fill="#F3CD03"
                      />
                    </svg>
                    <svg
                      class="cursor-pointer"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1706 8.41927C20.113 8.24946 20.0068 8.10025 19.8653 7.99006C19.7239 7.87987 19.5532 7.81353 19.3744 7.79922L14.1453 7.38371L11.8825 2.3747C11.8104 2.21337 11.6932 2.07634 11.545 1.98016C11.3968 1.88397 11.2239 1.83274 11.0472 1.83264C10.8705 1.83254 10.6975 1.88359 10.5492 1.97961C10.4009 2.07563 10.2835 2.21253 10.2113 2.37378L7.94846 7.38371L2.71931 7.79922C2.54362 7.81314 2.37566 7.87738 2.23552 7.98425C2.09538 8.09113 1.989 8.23612 1.9291 8.40187C1.86921 8.56762 1.85834 8.74712 1.89778 8.91889C1.93723 9.09066 2.02533 9.24743 2.15154 9.37044L6.01585 13.1375L4.64917 19.0555C4.60767 19.2347 4.62097 19.4221 4.68734 19.5936C4.75372 19.7651 4.8701 19.9127 5.02138 20.0172C5.17267 20.1217 5.35188 20.1783 5.53575 20.1797C5.71963 20.1811 5.89968 20.1272 6.05254 20.025L11.0469 16.6955L16.0412 20.025C16.1975 20.1288 16.3817 20.1822 16.5692 20.1781C16.7567 20.1739 16.9384 20.1125 17.09 20.002C17.2415 19.8916 17.3556 19.7373 17.4169 19.5601C17.4781 19.3828 17.4836 19.1911 17.4327 19.0106L15.755 13.1403L19.9156 9.39612C20.188 9.15031 20.288 8.7669 20.1706 8.41927Z"
                        fill="#F3CD03"
                      />
                    </svg>
                    <svg
                      class="cursor-pointer"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1706 8.41927C20.113 8.24946 20.0068 8.10025 19.8653 7.99006C19.7239 7.87987 19.5532 7.81353 19.3744 7.79922L14.1453 7.38371L11.8825 2.3747C11.8104 2.21337 11.6932 2.07634 11.545 1.98016C11.3968 1.88397 11.2239 1.83274 11.0472 1.83264C10.8705 1.83254 10.6975 1.88359 10.5492 1.97961C10.4009 2.07563 10.2835 2.21253 10.2113 2.37378L7.94846 7.38371L2.71931 7.79922C2.54362 7.81314 2.37566 7.87738 2.23552 7.98425C2.09538 8.09113 1.989 8.23612 1.9291 8.40187C1.86921 8.56762 1.85834 8.74712 1.89778 8.91889C1.93723 9.09066 2.02533 9.24743 2.15154 9.37044L6.01585 13.1375L4.64917 19.0555C4.60767 19.2347 4.62097 19.4221 4.68734 19.5936C4.75372 19.7651 4.8701 19.9127 5.02138 20.0172C5.17267 20.1217 5.35188 20.1783 5.53575 20.1797C5.71963 20.1811 5.89968 20.1272 6.05254 20.025L11.0469 16.6955L16.0412 20.025C16.1975 20.1288 16.3817 20.1822 16.5692 20.1781C16.7567 20.1739 16.9384 20.1125 17.09 20.002C17.2415 19.8916 17.3556 19.7373 17.4169 19.5601C17.4781 19.3828 17.4836 19.1911 17.4327 19.0106L15.755 13.1403L19.9156 9.39612C20.188 9.15031 20.288 8.7669 20.1706 8.41927Z"
                        fill="#F3CD03"
                      />
                    </svg>
                    <svg
                      class="cursor-pointer"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1706 8.41927C20.113 8.24946 20.0068 8.10025 19.8653 7.99006C19.7239 7.87987 19.5532 7.81353 19.3744 7.79922L14.1453 7.38371L11.8825 2.3747C11.8104 2.21337 11.6932 2.07634 11.545 1.98016C11.3968 1.88397 11.2239 1.83274 11.0472 1.83264C10.8705 1.83254 10.6975 1.88359 10.5492 1.97961C10.4009 2.07563 10.2835 2.21253 10.2113 2.37378L7.94846 7.38371L2.71931 7.79922C2.54362 7.81314 2.37566 7.87738 2.23552 7.98425C2.09538 8.09113 1.989 8.23612 1.9291 8.40187C1.86921 8.56762 1.85834 8.74712 1.89778 8.91889C1.93723 9.09066 2.02533 9.24743 2.15154 9.37044L6.01585 13.1375L4.64917 19.0555C4.60767 19.2347 4.62097 19.4221 4.68734 19.5936C4.75372 19.7651 4.8701 19.9127 5.02138 20.0172C5.17267 20.1217 5.35188 20.1783 5.53575 20.1797C5.71963 20.1811 5.89968 20.1272 6.05254 20.025L11.0469 16.6955L16.0412 20.025C16.1975 20.1288 16.3817 20.1822 16.5692 20.1781C16.7567 20.1739 16.9384 20.1125 17.09 20.002C17.2415 19.8916 17.3556 19.7373 17.4169 19.5601C17.4781 19.3828 17.4836 19.1911 17.4327 19.0106L15.755 13.1403L19.9156 9.39612C20.188 9.15031 20.288 8.7669 20.1706 8.41927Z"
                        fill="#F3CD03"
                      />
                    </svg>
                    <svg
                      class="cursor-pointer"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1706 8.41927C20.113 8.24946 20.0068 8.10025 19.8653 7.99006C19.7239 7.87987 19.5532 7.81353 19.3744 7.79922L14.1453 7.38371L11.8825 2.3747C11.8104 2.21337 11.6932 2.07634 11.545 1.98016C11.3968 1.88397 11.2239 1.83274 11.0472 1.83264C10.8705 1.83254 10.6975 1.88359 10.5492 1.97961C10.4009 2.07563 10.2835 2.21253 10.2113 2.37378L7.94846 7.38371L2.71931 7.79922C2.54362 7.81314 2.37566 7.87738 2.23552 7.98425C2.09538 8.09113 1.989 8.23612 1.9291 8.40187C1.86921 8.56762 1.85834 8.74712 1.89778 8.91889C1.93723 9.09066 2.02533 9.24743 2.15154 9.37044L6.01585 13.1375L4.64917 19.0555C4.60767 19.2347 4.62097 19.4221 4.68734 19.5936C4.75372 19.7651 4.8701 19.9127 5.02138 20.0172C5.17267 20.1217 5.35188 20.1783 5.53575 20.1797C5.71963 20.1811 5.89968 20.1272 6.05254 20.025L11.0469 16.6955L16.0412 20.025C16.1975 20.1288 16.3817 20.1822 16.5692 20.1781C16.7567 20.1739 16.9384 20.1125 17.09 20.002C17.2415 19.8916 17.3556 19.7373 17.4169 19.5601C17.4781 19.3828 17.4836 19.1911 17.4327 19.0106L15.755 13.1403L19.9156 9.39612C20.188 9.15031 20.288 8.7669 20.1706 8.41927Z"
                        fill="#F3CD03"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <a
                class="d-flex align-items-center justify-content-center mx-auto mx-lg-0 fw-bold text-white bg-main w-174 h-48 rounded-8 mt-4"
                >رزرو وقت مشاوره</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- details -->
      <section class="py-5">
        <div class="container">
          <div
            class="d-flex align-items-start justify-content-between gap-5 flex-column flex-lg-row"
          >
            <div class="rounded-20 shadow-sm bg-white py-3 w-50 w-lg-100 px-4">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2"
              >
                <p class="fw-bold fs-20 text-orange mb-0">نوبت ویزیت حضوری</p>
                <p class="mb-0 fs-14 bg-gray rounded-2 py-2 px-4 fw-bold">
                  یک جلسه 120,000 تومان
                </p>
              </div>
              <div class="d-flex align-items-center gap-2 fw-bold mt-4">
                <svg class="flex-shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9147 1.76861C7.09715 1.75236 3.16211 5.55672 3.00484 10.3187L3 10.6143C3.08008 12.9484 3.88018 15.1734 5.2894 17.0065L5.62036 17.4352C6.96548 19.1328 8.56399 20.6228 10.3589 21.851L10.791 22.1397L10.8541 22.1889C11.4693 22.6276 12.2999 22.6276 12.9151 22.1889L12.9805 22.1355L12.955 22.1541C14.384 21.2356 15.7016 20.1557 16.8814 18.9359C19.2731 16.423 20.7146 13.6074 20.769 10.7478L20.7692 10.6417C20.7855 5.84781 16.9644 1.93006 12.1815 1.77342L11.9147 1.76861Z"
                    fill="#232524"
                  />
                  <path
                    d="M11.9091 3.36499C15.8402 3.37836 19.0318 6.50276 19.1503 10.3937L19.1537 10.7367C19.1082 13.1282 17.8494 15.5923 15.7199 17.8346C14.6341 18.9597 13.4167 19.9597 12.0963 20.8103L12.0083 20.8761C11.9372 20.9375 11.8317 20.9375 11.7606 20.8761L11.6751 20.8119C9.70805 19.5344 7.98166 17.9215 6.57487 16.0469C5.44173 14.5696 4.77025 12.8032 4.63509 10.9606L4.61523 10.5911C4.62859 6.67124 7.75981 3.48661 11.6592 3.36835L11.9091 3.36499Z"
                    fill="white"
                  />
                  <path
                    d="M11.8842 6.55652C9.65378 6.55652 7.8457 8.34302 7.8457 10.5468C7.8457 12.7505 9.65378 14.537 11.8842 14.537C14.1145 14.537 15.9226 12.7505 15.9226 10.5468C15.9226 8.34302 14.1145 6.55652 11.8842 6.55652Z"
                    fill="#232524"
                  />
                  <path
                    d="M11.884 8.15295C13.2222 8.15295 14.3071 9.22485 14.3071 10.5471C14.3071 11.8694 13.2222 12.9413 11.884 12.9413C10.5458 12.9413 9.46094 11.8694 9.46094 10.5471C9.46094 9.22485 10.5458 8.15295 11.884 8.15295Z"
                    fill="white"
                  />
                </svg>
                <p class="mb-0">
                  تهران ، فلکه دوم صادقیه خیابان بهشتی ساختمان الف طبقه2
                </p>
              </div>
              <svg
                class="mx-auto d-block mt-4"
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="46.5"
                  cy="46.5"
                  r="46.5"
                  fill="url(#paint0_linear_341_1190)"
                />
                <g filter="url(#filter0_i_341_1190)">
                  <g filter="url(#filter1_i_341_1190)">
                    <rect
                      x="26.5723"
                      y="14.0909"
                      width="3.22078"
                      height="39.4545"
                      rx="1.61039"
                      transform="rotate(-30 26.5723 14.0909)"
                      fill="url(#paint1_linear_341_1190)"
                    />
                  </g>
                  <g filter="url(#filter2_i_341_1190)">
                    <rect
                      x="48.3125"
                      y="44.6882"
                      width="3.22078"
                      height="29.3896"
                      rx="1.61039"
                      transform="rotate(90 48.3125 44.6882)"
                      fill="url(#paint2_linear_341_1190)"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_i_341_1190"
                    x="18.9238"
                    y="13.0697"
                    width="29.5762"
                    height="38.8394"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_341_1190"
                    />
                  </filter>
                  <filter
                    id="filter1_i_341_1190"
                    x="27.1621"
                    y="13.0697"
                    width="21.3379"
                    height="38.6007"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_341_1190"
                    />
                  </filter>
                  <filter
                    id="filter2_i_341_1190"
                    x="18.9238"
                    y="44.6882"
                    width="29.3887"
                    height="7.22083"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_341_1190"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_341_1190"
                    x1="9.66234"
                    y1="10.6688"
                    x2="77.7013"
                    y2="75.0844"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="0.885417" stop-color="#FFF39F" />
                    <stop offset="1" stop-color="#FFF295" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_341_1190"
                    x1="28.1827"
                    y1="14.0909"
                    x2="28.1827"
                    y2="53.5455"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7C7C7C" />
                    <stop offset="1" stop-color="#C0C0C0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_341_1190"
                    x1="49.9229"
                    y1="44.6882"
                    x2="49.9229"
                    y2="74.0778"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7C7C7C" />
                    <stop offset="1" stop-color="#C0C0C0" />
                  </linearGradient>
                </defs>
              </svg>
              <div
                class="d-flex align-items-center justify-content-center gap-1 fs-14 mt-3"
              >
                <p class="font-bold mb-0">اولین نوبت خالی:</p>
                <p class="text-secondary mb-0">شنبه 21 بهمن</p>
              </div>
              <a
                class="rounded-8 p-3 bg-second mt-5 fw-bold text-white d-block text-center"
                >دریافت نوبت</a
              >
            </div>
            <div class="rounded-20 shadow-sm bg-white py-3 w-50 w-lg-100 px-4">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2"
              >
                <p class="fw-bold fs-20 text-main mb-0">نوبت مشاوره آنلاین</p>
                <p class="mb-0 fs-14 bg-gray rounded-2 py-2 px-4 fw-bold">
                  یک جلسه 120,000 تومان
                </p>
              </div>
              <div class="d-flex align-items-center gap-2 mt-4 fw-bold">
                <svg class="flex-shrink-0"
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.47044 1.89384L6.49706 1.89547C7.02095 1.93655 7.47597 2.18286 7.89133 2.56682C8.68068 3.29619 10.3757 5.42458 10.5036 6.00381C10.6453 6.64999 10.4938 7.06968 10.0424 7.81209L9.93299 7.99506C9.72584 8.35301 9.69417 8.50081 9.75831 8.67005C10.7439 10.9522 12.4259 12.5432 14.8106 13.4647C15.0364 13.5421 15.2069 13.4977 15.6842 13.2387L15.9332 13.1054C16.6042 12.7573 17.0294 12.6472 17.6565 12.7708C18.2666 12.8917 20.5176 14.4964 21.2873 15.2422C21.6926 15.6348 21.9535 16.066 21.999 16.5943C22.0469 17.8784 20.3908 19.6863 19.3805 20.2299C18.2317 21.0075 16.7737 20.9946 15.139 20.2747C10.8641 18.5918 4.325 12.4448 2.58238 8.40536L2.47807 8.17941C1.81637 6.68317 1.83071 5.39051 2.58898 4.41597C3.28088 3.33193 5.14635 1.83591 6.47044 1.89384ZM6.38949 3.27742L6.30133 3.2817C5.62173 3.36711 4.25889 4.47715 3.80504 5.18318L3.72663 5.29357C3.33565 5.89625 3.38096 6.72391 3.92531 7.85716L4.02934 8.08754C5.78486 11.8151 11.8632 17.4859 15.7282 19.0081L15.9411 19.0977C17.0594 19.5462 17.9059 19.5262 18.5912 19.0665L18.6419 19.0356C18.854 18.8962 19.343 18.4758 19.7197 18.0646C20.2488 17.487 20.5485 16.9578 20.5388 16.6761C20.5282 16.5555 20.4299 16.3931 20.2406 16.2097C19.6684 15.6552 17.5872 14.1717 17.3572 14.1261C17.1398 14.0832 16.9612 14.1408 16.4731 14.4065L16.2275 14.537C15.5083 14.904 15.0013 15.0026 14.285 14.7566C11.509 13.6846 9.53819 11.8204 8.39315 9.16759C8.12193 8.4583 8.26793 7.95647 8.73958 7.17875L8.85195 6.9917C9.06622 6.62569 9.11156 6.4704 9.07119 6.28619C9.02285 6.06739 7.45576 4.0996 6.86895 3.55738C6.67463 3.37775 6.50389 3.28533 6.3761 3.27531L6.38949 3.27742Z"
                    fill="#232524"
                  />
                </svg>
                <p class="mb-0">اولین مشاوره تلفنی: 45 دقیقه مکالمه</p>
              </div>
              <svg
                class="mx-auto d-block mt-4"
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="46.5"
                  cy="46.5"
                  r="46.5"
                  fill="url(#paint0_linear_341_1215)"
                />
                <g filter="url(#filter0_i_341_1215)">
                  <g filter="url(#filter1_i_341_1215)">
                    <rect
                      x="26.5723"
                      y="14.0909"
                      width="3.22078"
                      height="39.4545"
                      rx="1.61039"
                      transform="rotate(-30 26.5723 14.0909)"
                      fill="url(#paint1_linear_341_1215)"
                    />
                  </g>
                  <g filter="url(#filter2_i_341_1215)">
                    <rect
                      x="48.3125"
                      y="44.6882"
                      width="3.22078"
                      height="29.3896"
                      rx="1.61039"
                      transform="rotate(90 48.3125 44.6882)"
                      fill="url(#paint2_linear_341_1215)"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_i_341_1215"
                    x="18.9238"
                    y="13.0697"
                    width="29.5762"
                    height="38.8394"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_341_1215"
                    />
                  </filter>
                  <filter
                    id="filter1_i_341_1215"
                    x="27.1621"
                    y="13.0697"
                    width="21.3379"
                    height="38.6007"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_341_1215"
                    />
                  </filter>
                  <filter
                    id="filter2_i_341_1215"
                    x="18.9238"
                    y="44.6882"
                    width="29.3887"
                    height="7.22083"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_341_1215"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_341_1215"
                    x1="9.66234"
                    y1="10.6688"
                    x2="77.7013"
                    y2="75.0844"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="0.885417" stop-color="#AFE3B3" />
                    <stop offset="1" stop-color="#B2F0B6" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_341_1215"
                    x1="28.1827"
                    y1="14.0909"
                    x2="28.1827"
                    y2="53.5455"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7C7C7C" />
                    <stop offset="1" stop-color="#C0C0C0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_341_1215"
                    x1="49.9229"
                    y1="44.6882"
                    x2="49.9229"
                    y2="74.0778"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7C7C7C" />
                    <stop offset="1" stop-color="#C0C0C0" />
                  </linearGradient>
                </defs>
              </svg>
              <div
                class="d-flex align-items-center justify-content-center gap-1 fs-14 mt-3"
              >
                <p class="font-bold mb-0">اولین نوبت خالی:</p>
                <p class="text-secondary mb-0">شنبه 21 بهمن</p>
              </div>
              <a
                class="rounded-8 p-3 bg-main mt-5 fw-bold text-white d-block text-center"
                >دریافت مشاوره</a
              >
            </div>
          </div>
          <div class="mt-5">
            <h5 class="font-bold text-main" data-aos="fade-up">
              حوزه‌های تخصصی دکتر سمیرا فتحی
            </h5>
            <ul class="mb-0 pe-3 fw-bold text-dark lh-40" data-aos="fade-down">
              <li>
                روان ­درمانی فردی
                <ul class="pe-4">
                  <li>اختلالات شخصیت</li>
                  <li>اختلالات خلقی</li>
                  <li>مدیریت هیجان</li>
                  <li>روابط بین فردی</li>
                </ul>
              </li>
            </ul>
            <h5 class="font-bold text-main mt-5" data-aos="fade-down">
              سوابق علمی دکتر سمیرا فتحی
            </h5>
            <ul class="mb-0 pe-3 fw-bold text-dark lh-40" data-aos="fade-up">
              <li>دکتری تخصصی روانشناسی بالینی، دانشگاه علوم پزشکی ایران</li>
              <li>کارشناسی ارشد روانشناسی بالینی، دانشگاه علوم پزشکی ایران</li>
            </ul>
            <h5 class="font-bold text-main mt-5" data-aos="fade-up">
              مسئولیت­ها و سوابق علمی و اجرایی سمیرا فتحی
            </h5>
            <ul class="mb-0 pe-3 fw-bold text-dark lh-40" data-aos="fade-down">
              <li>
                عضو کمیته علمی کنگره جهانی درمان­های شناختی رفتاری (WCBCT)
              </li>
              <li>
                صاحب امتياز و مدير مسئول مركز مشاوره و خدمات روانشناختي سگال
              </li>
              <li>مشاور علمي معاونت دانشجويي فرهنگی وزارت بهداشت</li>
              <li>عضو شورای سیاستگذاری مشاوره دانشجویی در وزارت بهداشت</li>
              <li>
                عضو هيئت مديره انجمن روانشناسي ايران در دوره ها‌ي ششم و هفتم
              </li>
              <li>مسئول کمیته شناختی رفتاری انجمن روانشناسی ایران</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- why us -->
      <section class="py-5 mt-5">
        <div class="container">
          <div
            class="d-flex align-items-center justify-content-between flex-wrap gap-5"
          >
            <div class="flex-grow-1">
              <h5
                data-aos="fade-down"
                class="fs-18 text-dark fw-bold"
              >
                چرا باید <span class="text-main">مشاوران</span> حالتو را انتخاب
                کنید؟
              </h5>
              <div class="mt-5" data-aos="fade-up">
                <div class="d-flex align-items-center gap-3 mb-4">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 13C25 6.375 19.625 1 13 1C6.375 1 1 6.375 1 13C1 19.625 6.375 25 13 25C19.625 25 25 19.625 25 13Z"
                      fill="#6CB771"
                      stroke="#31C65B"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M19 7.99982L10.6 17.9998L7 13.9998"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="mb-0 text-dark fw-bold">مشاوران ملی و بین المللی</p>
                </div>
                <div class="d-flex align-items-center gap-3 mb-4">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 13C25 6.375 19.625 1 13 1C6.375 1 1 6.375 1 13C1 19.625 6.375 25 13 25C19.625 25 25 19.625 25 13Z"
                      fill="#6CB771"
                      stroke="#31C65B"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M19 7.99982L10.6 17.9998L7 13.9998"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="mb-0 text-dark fw-bold">مشاوران 24 ساعته</p>
                </div>
                <div class="d-flex align-items-center gap-3 mb-4">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 13C25 6.375 19.625 1 13 1C6.375 1 1 6.375 1 13C1 19.625 6.375 25 13 25C19.625 25 25 19.625 25 13Z"
                      fill="#6CB771"
                      stroke="#31C65B"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M19 7.99982L10.6 17.9998L7 13.9998"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="mb-0 text-dark fw-bold">مشاوران مهاجرت</p>
                </div>
                <div class="d-flex align-items-center gap-3">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 13C25 6.375 19.625 1 13 1C6.375 1 1 6.375 1 13C1 19.625 6.375 25 13 25C19.625 25 25 19.625 25 13Z"
                      fill="#6CB771"
                      stroke="#31C65B"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M19 7.99982L10.6 17.9998L7 13.9998"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="mb-0 text-dark fw-bold">
                    بهترین مشاوران و متخصص حرفه ای
                  </p>
                </div>
              </div>
            </div>
            <img alt="img" :src="require('../../src/assets/img/Group 58.png')" class="img-fluid rounded-8 flex-grow-1 flex-lg-grow-0" data-aos="fade-down">
          </div>
        </div>
      </section>

      <!-- blog -->
      <section>
        <div class="container">
          <div
            class="rounded-12 overflow-hidden position-relative bg-main p-sm-5 p-4 px-5"
          >
            <!-- shape -->
            <img
              alt="img"
              :src="require('../assets/img/random-shape-in-blue-png 2.png')"
              class="position-absolute end-0 top-0 -z-0"
            />
            <div class="position-relative">
              <h4 class="text-white font-bold text-center fs-sm-18">
                مقالات و کتاب های تالیف شده دکترسمیرا فتحی
              </h4>
              <a
                class="text-white position-absolute start-0 font-bold top-0 d-none d-lg-block"
                >مشاهده همه</a
              >
            </div>
            <!-- swiper -->
            <swiper-2></swiper-2>
            <!--  -->
            <a class="text-white font-bold text-center d-block mt-4 d-lg-none"
              >مشاهده همه</a
            >
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
              <a
                class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover"
                data-aos="flip-down"
              >
                <img
                  alt="img"
                  :src="require('../assets/img/image 49.png')"
                  class="img-fluid rounded-12 w-100 transition"
                />
                <p
                  class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center"
                >
                  دکتر مونا محمدی
                </p>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a
                class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover"
                data-aos="fade-down"
              >
                <img
                  alt="img"
                  :src="require('../assets/img/image 50.png')"
                  class="img-fluid rounded-12 w-100 transition"
                />
                <p
                  class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center"
                >
                  دکتر شهریار ملایی
                </p>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a
                class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover"
                data-aos="fade-up"
              >
                <img
                  alt="img"
                  :src="require('../assets/img/image 51.png')"
                  class="img-fluid rounded-12 w-100 transition"
                />
                <p
                  class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center"
                >
                  دکتر امیر علی بیگی
                </p>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a
                class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover"
                data-aos="fade-down"
              >
                <img
                  alt="img"
                  :src="require('../assets/img/image 49.png')"
                  class="img-fluid rounded-12 w-100 transition"
                />
                <p
                  class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center"
                >
                  دکتر مونا محمدی
                </p>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a
                class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover"
                data-aos="flip-up"
              >
                <img
                  alt="img"
                  :src="require('../assets/img/image 50.png')"
                  class="img-fluid rounded-12 w-100 transition"
                />
                <p
                  class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center"
                >
                  دکتر شهریار ملایی
                </p>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a
                class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover"
                data-aos="fade-up"
              >
                <img
                  alt="img"
                  :src="require('../assets/img/image 51.png')"
                  class="img-fluid rounded-12 w-100 transition"
                />
                <p
                  class="bg-main rounded-t-20 py-3 mb-0 position-absolute bottom-0 start-0 end-0 text-white fw-bold text-center"
                >
                  دکتر امیر علی بیگی
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </aos-vue>
  </main>

  <Footer />
</template>

<script>
import Header2 from "@/components/Header/Header2.vue";
import Footer from "@/components/Footer/Footer.vue";
import Swiper2 from "@/components/Swipers/Swiper2.vue";

export default {
  components: { Header2, Footer, Swiper2 },
  name: "Cadr-component",
};
</script>

<style>
</style>