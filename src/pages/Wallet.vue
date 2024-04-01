<template>
  <div class="d-flex">
    <aside
      class="bg-white max-w-250 p-4 h-100vh overflow-auto flex-shrink-0 shadow hidden-scroll transition z-10"
    >
      <!-- close icon -->
      <svg
        id="close-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill cursor-pointer text-danger d-md-none start-0 m-4 position-absolute"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
        />
      </svg>
      <!--  -->
      <div class="text-center border-bottom pb-3">
        <div class="position-relative w-70 mx-auto">
          <span
            class="font-bold -right-14 -top-14 fs-12 rounded-circle d-flex align-items-center justify-content-center bg-warning text-white w-32 h-32 position-absolute"
            >4</span
          >
          <img
            alt="avatar"
            :src="require('../assets/img/Profile.png')"
            class="rounded-8 d-block mx-auto w-70 h-70"
          />
        </div>
        <p class="text-dark2 font-bold my-2">دکتر احمدی</p>
        <p class="mb-0 fs-12 text-gray">www.drahmadi@gmail.com</p>
      </div>
      <ul class="list-unstyled mt-4 pt-2 pe-0 mb-0 fs-14">
        <li class="list-hover active mb-4">
          <a href="dashboard.html" class="d-flex align-items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8 4.1V10.9C20.8 11.5708 20.6541 11.8592 20.5016 12.0027C20.3384 12.1562 20.004 12.3 19.27 12.3L15.23 12.3C14.496 12.3 14.1616 12.1562 13.9984 12.0027C13.8459 11.8592 13.7 11.5708 13.7 10.9L13.7 4.1C13.7 3.4292 13.8459 3.1408 13.9984 2.99734C14.1616 2.84379 14.496 2.7 15.23 2.7L19.27 2.7C20.004 2.7 20.3384 2.84379 20.5016 2.99734C20.6541 3.1408 20.8 3.4292 20.8 4.1Z"
                stroke="#333333"
                stroke-width="1.4"
              />
              <path
                d="M10.3 13.1L10.3 19.9C10.3 20.5708 10.1541 20.8592 10.0016 21.0027C9.83838 21.1562 9.50404 21.3 8.77 21.3H4.73C3.99596 21.3 3.66162 21.1562 3.49839 21.0027C3.34591 20.8592 3.2 20.5708 3.2 19.9L3.2 13.1C3.2 12.4292 3.34591 12.1408 3.49839 11.9973C3.66162 11.8438 3.99596 11.7 4.73 11.7L8.77 11.7C9.50404 11.7 9.83838 11.8438 10.0016 11.9973C10.1541 12.1408 10.3 12.4292 10.3 13.1Z"
                stroke="#333333"
                stroke-width="1.4"
              />
              <path
                d="M20.8 17.1V19.9C20.8 20.5708 20.6541 20.8592 20.5016 21.0027C20.3384 21.1562 20.004 21.3 19.27 21.3H15.23C14.496 21.3 14.1616 21.1562 13.9984 21.0027C13.8459 20.8592 13.7 20.5708 13.7 19.9V17.1C13.7 16.4292 13.8459 16.1408 13.9984 15.9973C14.1616 15.8438 14.496 15.7 15.23 15.7L19.27 15.7C20.004 15.7 20.3384 15.8438 20.5016 15.9973C20.6541 16.1408 20.8 16.4292 20.8 17.1Z"
                stroke="#333333"
                stroke-width="1.4"
              />
              <path
                d="M10.3 4.1V6.9C10.3 7.5708 10.1541 7.8592 10.0016 8.00266C9.83838 8.15621 9.50404 8.3 8.77 8.3H4.73C3.99596 8.3 3.66162 8.15621 3.49839 8.00266C3.34591 7.8592 3.2 7.5708 3.2 6.9L3.2 4.1C3.2 3.4292 3.34591 3.1408 3.49839 2.99734C3.66162 2.84379 3.99596 2.7 4.73 2.7L8.77 2.7C9.50404 2.7 9.83838 2.84379 10.0016 2.99734C10.1541 3.1408 10.3 3.4292 10.3 4.1Z"
                stroke="#333333"
                stroke-width="1.4"
              />
            </svg>
            <p class="mb-0 text-dark2 font-bold">داشبورد</p>
            <div
              class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"
            ></div>
          </a>
        </li>
        <li class="list-hover mb-4">
          <a href="nobat.html" class="d-flex align-items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.7399L22 4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994L2 16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5.48999L12 20.49"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 8.48999H5.5"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 11.49H5.5"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="mb-0 text-dark2 font-bold">لیست نوبت دهی</p>
            <div
              class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"
            ></div>
          </a>
        </li>
        <li class="list-hover mb-4">
          <a href="vizit.html" class="d-flex align-items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17L2 12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7L17 7C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.7514 7.05C17.5114 7.01 17.2614 7.00001 17.0014 7.00001L7.00141 7.00001C6.72141 7.00001 6.45141 7.02001 6.19141 7.06001C6.33141 6.78001 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.79002C17.3714 5.42002 17.7114 6.22 17.7514 7.05Z"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="mb-0 text-dark2 font-bold">لیست ویزیت</p>
            <div
              class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"
            ></div>
          </a>
        </li>
        <li class="list-hover mb-4">
          <a href="sabt.html" class="d-flex align-items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_201_1220)">
                <path
                  d="M3.5 18.49L9.5 12.48L13.5 16.48L22 6.92001L20.59 5.51001L13.5 13.48L9.5 9.48001L2 16.99L3.5 18.49Z"
                  fill="#333333"
                />
              </g>
              <defs>
                <clipPath id="clip0_201_1220">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p class="mb-0 text-dark2 font-bold">ثبت سریع شرح حال</p>
            <div
              class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"
            ></div>
          </a>
        </li>
        <li class="list-hover mb-4">
          <a href="payment.html" class="d-flex align-items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.7399L22 4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994L2 16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5.48999L12 20.49"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 8.48999H5.5"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 11.49H5.5"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="mb-0 text-dark2 font-bold">لیست پرداخت ها</p>
            <div
              class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"
            ></div>
          </a>
        </li>
        <li class="list-hover mb-4">
          <a href="test.html" class="d-flex align-items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.7399L22 4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994L2 16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5.48999L12 20.49"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 8.48999H5.5"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 11.49H5.5"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="mb-0 text-dark2 font-bold">تست ها</p>
            <div
              class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"
            ></div>
          </a>
        </li>
        <li class="list-hover mb-4">
          <a href="profile.html" class="d-flex align-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3515 5.61927L13.3516 5.61917C13.4269 4.60022 13.1088 3.67671 12.4802 2.99802C11.8592 2.32755 10.987 1.94969 10 1.94969C9.00386 1.94969 8.12896 2.3269 7.51326 2.99056L13.3515 5.61927ZM13.3515 5.61927C13.1955 7.73351 11.607 9.29969 10 9.29969C8.39259 9.29969 6.80183 7.73269 6.64822 5.61952L13.3515 5.61927ZM6.6482 5.61929C6.57352 4.58559 6.89171 3.6607 7.51322 2.99061L6.6482 5.61929Z"
                stroke="#333333"
                stroke-width="1.4"
              />
              <path
                d="M16.8841 18.0488V18.0489C16.9601 18.0499 17.0353 18.0339 17.1043 18.0021C17.1733 17.9704 17.2343 17.9236 17.283 17.8653L17.2836 17.8645C17.3933 17.7334 17.4542 17.5335 17.4122 17.3011L17.4121 17.3008C17.1179 15.6686 16.204 14.2938 14.7371 13.3158L16.8841 18.0488ZM16.8841 18.0488H16.8752M16.8841 18.0488H16.8752M16.8752 18.0488H3.12522V18.0488M16.8752 18.0488L3.12522 18.0488M3.12522 18.0488L3.11612 18.0489M3.12522 18.0488L3.11612 18.0489M3.11612 18.0489C3.04018 18.0499 2.96498 18.0339 2.89598 18.0022C2.82698 17.9705 2.76593 17.9238 2.71726 17.8655L2.71682 17.8649M3.11612 18.0489L2.71682 17.8649M2.71682 17.8649C2.60715 17.7338 2.54626 17.5339 2.58827 17.3015L2.58834 17.3011M2.71682 17.8649L2.58834 17.3011M2.58834 17.3011C2.88256 15.669 3.79642 14.2941 5.2634 13.3157L2.58834 17.3011ZM5.26361 13.3156C6.57578 12.4412 8.25816 11.9488 10.0002 11.9488C11.7422 11.9488 13.4246 12.4416 14.7369 13.3156L5.26361 13.3156Z"
                stroke="#333333"
                stroke-width="1.4"
              />
            </svg>
            <p class="mb-0 text-dark2 font-bold">اطلاعات کاربری</p>
            <div
              class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"
            ></div>
          </a>
        </li>
        <li class="list-hover mb-5">
          <a href="online-meet.html" class="d-flex align-items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.7399L22 4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994L2 16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5.48999L12 20.49"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 8.48999H5.5"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 11.49H5.5"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="mb-0 text-dark2 font-bold">ثبت لینک جلسه آنلاین</p>
            <div
              class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"
            ></div>
          </a>
        </li>
        <li class="mb-5">
          <a href="dashboard.html" class="d-flex align-items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_201_1171)">
                <path
                  d="M4.66727 24H19.3305C21.9043 24 24 21.9065 24 19.3305V4.66946C24 2.09351 21.9065 0 19.3305 0H4.66727C2.09351 0 -0.00218201 2.09351 -0.00218201 4.66946V19.3327C-0.00218201 21.9065 2.09132 24.0022 4.66727 24.0022V24ZM19.3305 2.05203C20.7735 2.05203 21.948 3.22649 21.948 4.66946V19.3327C21.948 20.7757 20.7735 21.9502 19.3305 21.9502H4.66727C3.2243 21.9502 2.04984 20.7757 2.04984 19.3327V4.66946C2.04984 3.22649 3.2243 2.05203 4.66727 2.05203H19.3305Z"
                  fill="#C30000"
                />
                <path
                  d="M13.9302 18.6211H16.1001C17.5038 18.6211 18.6455 17.4793 18.6455 16.0757V7.92649C18.6455 6.52282 17.5038 5.3811 16.1001 5.3811H13.9302C13.3648 5.3811 12.9042 5.83954 12.9042 6.40712C12.9042 6.9747 13.3626 7.43313 13.9302 7.43313H16.1001C16.373 7.43313 16.5935 7.6558 16.5935 7.92867V16.08C16.5935 16.3529 16.373 16.5734 16.1001 16.5734H13.9302C13.3648 16.5734 12.9042 17.0318 12.9042 17.5994C12.9042 18.167 13.3626 18.6254 13.9302 18.6254V18.6211Z"
                  fill="#C30000"
                />
                <path
                  d="M5.59136 12.6483C5.57389 12.6286 5.55643 12.609 5.54115 12.5872C5.51495 12.5479 5.49312 12.5064 5.47129 12.4649C5.46256 12.4453 5.44946 12.4278 5.44073 12.4082C5.4189 12.3579 5.40362 12.3056 5.39052 12.251C5.38616 12.2379 5.38179 12.2248 5.37743 12.2117C5.36214 12.144 5.35559 12.072 5.35559 11.9999C5.35559 11.9279 5.36433 11.8559 5.37743 11.7882C5.37961 11.7751 5.38616 11.762 5.39052 11.7489C5.40362 11.6943 5.4189 11.6419 5.44291 11.5917C5.45165 11.5721 5.46256 11.5546 5.47348 11.535C5.49531 11.4935 5.51714 11.452 5.54333 11.4127C5.55861 11.3909 5.57608 11.3734 5.59354 11.3538C5.62192 11.321 5.64812 11.2883 5.67868 11.2577C5.68523 11.2512 5.68959 11.2446 5.69396 11.2402L8.92481 8.32375C9.34614 7.9439 9.99449 7.97665 10.3743 8.39797C10.7542 8.81929 10.7214 9.46764 10.3001 9.84749L9.04925 10.9761H13.6947C14.2601 10.9761 14.7207 11.4345 14.7207 12.0021C14.7207 12.5697 14.2623 13.0281 13.6947 13.0281H9.04925L10.3001 14.1567C10.7214 14.5366 10.7542 15.1849 10.3743 15.6063C10.1713 15.8311 9.89189 15.9446 9.61246 15.9446C9.36796 15.9446 9.12129 15.8573 8.92481 15.6805L5.69396 12.764C5.69396 12.764 5.68305 12.7509 5.6765 12.7465C5.64593 12.7181 5.61755 12.6854 5.59136 12.6505V12.6483Z"
                  fill="#C30000"
                />
              </g>
              <defs>
                <clipPath id="clip0_201_1171">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-1 0 0 1 24 0)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p class="mb-0 text-danger2 font-bold">خروج از حساب کاربری</p>
          </a>
        </li>
        <div class="bg-main rounded-16 position-relative p-3 overflow-hidden">
          <!-- shape -->
          <img
            alt="img"
            :src="require('../assets/img/Group 1.png')"
            class="img-fluid position-absolute top-0 end-0 -z-0"
          />
          <!--  -->
          <div class="rounded-12 w-32 h-32 bg-white me-auto"></div>
          <div class="rounded-12 h-32 bg-white mt-5"></div>
        </div>
      </ul>
    </aside>
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
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 px-4">
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
          class="w-174 h-48 bg-white rounded-8 fw-bold d-flex align-items-center justify-content-center text-dark position-relative"
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
          class="rounded-20 p-4 position-relative overflow-hidden w-339 h-191 mx-auto bg-blue"
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
            <p class="mt-5 fs-14 text-center lh-lg text-secondary fw-bold px-3 px-sm-5">
              دیگه نگران سلامتی عزیزانت نباش!<br> کد زیر را با دوستان و آشنایان خود به اشتراک بگذارید تا اولین درخواست خدمات آنلاین پزشکی‌شان را با پانزده هزارتومان تخفیف مهمان درمانکده باشند.
            </p>
            <div class="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 mt-5"> 
              <a class="fs-14 w-sm-100 fw-bold h-48 rounded-8 text-dark border-dashed-2 d-flex align-items-center justify-content-center w-50">RT34256</a>
              <a class="fs-14 w-sm-100 fw-bold bg-main h-48 rounded-8 text-white d-flex align-items-center justify-content-center w-50"> ارسال دعوت نامه</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wallet-component",
};
</script>

<style>
</style>