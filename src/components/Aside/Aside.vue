<template>
  <aside :class="{ active: isOpen }"
    class="bg-white max-w-250 h-100vh overflow-auto flex-shrink-0 shadow hidden-scroll transition z-10">
    <!-- close icon -->
    <div class="cursor-pointer" @click="toggleMenu">
      <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-x-circle-fill text-danger d-md-none start-0 m-4 position-absolute" viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
      </svg>
    </div>
    <!--  -->
    <div class="p-4">
      <div class="text-center border-bottom pb-3">
        <div class="position-relative w-70 mx-auto">
          <span
            class="font-bold -right-14 -top-14 fs-12 rounded-circle d-flex align-items-center justify-content-center bg-warning text-white w-32 h-32 position-absolute">4</span>
          <img alt="avatar" :src="require('../../assets/img/Profile.png')"
            class="rounded-8 d-block mx-auto w-70 h-70" />
        </div>
        <p class="text-dark2 font-bold my-2">دکتر احمدی</p>

        <p class="mb-0 fs-12 text-gray">www.drahmadi@gmail.com</p>
      </div>
    </div>
    <ul class="list-unstyled pt-4 pe-0 mb-0 fs-14">
      <li class="list-hover">
        <router-link to="/userDashboard" class-active="router-link-active" exact-active-class="active"
          class="py-3 px-4 d-flex align-items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.8 4.1V10.9C20.8 11.5708 20.6541 11.8592 20.5016 12.0027C20.3384 12.1562 20.004 12.3 19.27 12.3L15.23 12.3C14.496 12.3 14.1616 12.1562 13.9984 12.0027C13.8459 11.8592 13.7 11.5708 13.7 10.9L13.7 4.1C13.7 3.4292 13.8459 3.1408 13.9984 2.99734C14.1616 2.84379 14.496 2.7 15.23 2.7L19.27 2.7C20.004 2.7 20.3384 2.84379 20.5016 2.99734C20.6541 3.1408 20.8 3.4292 20.8 4.1Z"
              stroke="#333333" stroke-width="1.4" />
            <path
              d="M10.3 13.1L10.3 19.9C10.3 20.5708 10.1541 20.8592 10.0016 21.0027C9.83838 21.1562 9.50404 21.3 8.77 21.3H4.73C3.99596 21.3 3.66162 21.1562 3.49839 21.0027C3.34591 20.8592 3.2 20.5708 3.2 19.9L3.2 13.1C3.2 12.4292 3.34591 12.1408 3.49839 11.9973C3.66162 11.8438 3.99596 11.7 4.73 11.7L8.77 11.7C9.50404 11.7 9.83838 11.8438 10.0016 11.9973C10.1541 12.1408 10.3 12.4292 10.3 13.1Z"
              stroke="#333333" stroke-width="1.4" />
            <path
              d="M20.8 17.1V19.9C20.8 20.5708 20.6541 20.8592 20.5016 21.0027C20.3384 21.1562 20.004 21.3 19.27 21.3H15.23C14.496 21.3 14.1616 21.1562 13.9984 21.0027C13.8459 20.8592 13.7 20.5708 13.7 19.9V17.1C13.7 16.4292 13.8459 16.1408 13.9984 15.9973C14.1616 15.8438 14.496 15.7 15.23 15.7L19.27 15.7C20.004 15.7 20.3384 15.8438 20.5016 15.9973C20.6541 16.1408 20.8 16.4292 20.8 17.1Z"
              stroke="#333333" stroke-width="1.4" />
            <path
              d="M10.3 4.1V6.9C10.3 7.5708 10.1541 7.8592 10.0016 8.00266C9.83838 8.15621 9.50404 8.3 8.77 8.3H4.73C3.99596 8.3 3.66162 8.15621 3.49839 8.00266C3.34591 7.8592 3.2 7.5708 3.2 6.9L3.2 4.1C3.2 3.4292 3.34591 3.1408 3.49839 2.99734C3.66162 2.84379 3.99596 2.7 4.73 2.7L8.77 2.7C9.50404 2.7 9.83838 2.84379 10.0016 2.99734C10.1541 3.1408 10.3 3.4292 10.3 4.1Z"
              stroke="#333333" stroke-width="1.4" />
          </svg>
          <p class="mb-0 text-dark2 font-bold">داشبورد</p>
          <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
        </router-link>
      </li>
      <li class="list-hover list-hover-3 cursor-pointer">
        <a @click="isActive = !isActive" class="py-3 px-4 d-flex align-items-center gap-2 accordion-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 16.7399L22 4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994L2 16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z"
              stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 5.48999L12 20.49" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M7.75 8.48999H5.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M8.5 11.49H5.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <p class="mb-0 text-dark2 font-bold">امور جلسات</p>
          <svg :class="{ 'rotate-180': isActive }" class="me-auto" width="11" height="8" viewBox="0 0 11 8" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.31603 4.97656L9.44103 0.851561L10.6194 2.02989L5.31603 7.33323L0.0126955 2.0299L1.19103 0.851562L5.31603 4.97656Z"
              fill="#383838" />
          </svg>
        </a>
        <ul :class="{ active: isActive }" class="fs-12 list-unstyled px-4 pt-0 fw-bold accordion-content">
          <li class="my-3">
            <router-link to="/requestSession" class-active="router-link-active" exact-active-class="active"
              class="d-flex align-items-center gap-2 text-secondary">
              <p class="mb-0">درخواست جلسات</p>
              <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
            </router-link>
          </li>
          <li class="mb-3">
            <router-link to="/mySessions" class-active="router-link-active" exact-active-class="active"
              class="d-flex align-items-center gap-2 text-secondary">
              <p class="mb-0">جلسات من</p>
              <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
            </router-link>
          </li>
          <li class="mb-3">
            <router-link to="/session" class-active="router-link-active" exact-active-class="active"
              class="d-flex align-items-center gap-2 text-secondary">
              <p class="mb-0">خرید پکیج های مشاوره</p>
              <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="list-hover list-hover-3 cursor-pointer">
        <a @click="isActive2 = !isActive2" class="py-3 px-4 d-flex align-items-center gap-2 accordion-btn">
          <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.43359 12.9898L8.43359 6.97976L12.4336 10.9798L20.9336 1.41977L19.5236 0.00976562L12.4336 7.97976L8.43359 3.97976L0.933594 11.4898L2.43359 12.9898Z"
              fill="#333333" />
          </svg>
          <p class="mb-0 text-dark2 font-bold">فعالیت ها</p>
          <svg :class="{ 'rotate-180': isActive2 }" class="me-auto" width="11" height="8" viewBox="0 0 11 8" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.31603 4.97656L9.44103 0.851561L10.6194 2.02989L5.31603 7.33323L0.0126955 2.0299L1.19103 0.851562L5.31603 4.97656Z"
              fill="#383838" />
          </svg>
        </a>
        <ul :class="{ active: isActive2 }" class="fs-12 list-unstyled px-4 pt-0 fw-bold accordion-content">
          <li class="my-3">
            <router-link to="/tests" class-active="router-link-active" exact-active-class="active"
              class="d-flex align-items-center gap-2 text-secondary">
              <p class="mb-0">تست ها</p>
              <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="list-hover list-hover-3 cursor-pointer">
        <a @click="isActive3 = !isActive3" class="py-3 px-4 d-flex align-items-center gap-2 accordion-btn">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.0951 7.25379L17.0951 7.25369C17.1882 5.9949 16.7951 4.84772 16.0126 4.00284C15.2395 3.16824 14.155 2.7 12.9336 2.7C11.7018 2.7 10.6139 3.16705 9.84686 3.99384L17.0951 7.25379ZM17.0951 7.25379C16.9038 9.84545 14.9525 11.8 12.9336 11.8C10.9142 11.8 8.96012 9.84455 8.77182 7.25389L17.0951 7.25379ZM8.7718 7.25366C8.67962 5.97792 9.07235 4.8289 9.84682 3.99388L8.7718 7.25366Z"
              fill="#F0F8F1" stroke="#333333" stroke-width="1.4" />
            <path
              d="M21.1928 22.298V22.2981C21.3047 22.2995 21.4156 22.276 21.5173 22.2292C21.619 22.1823 21.709 22.1134 21.7807 22.0275L21.7813 22.0267C21.9418 21.8349 22.0231 21.5521 21.966 21.2359L21.9659 21.2355C21.6057 19.2376 20.4861 17.5555 18.6958 16.3619L21.1928 22.298ZM21.1928 22.298H21.1839M21.1928 22.298H21.1839M21.1839 22.298H4.68386V22.298M21.1839 22.298L4.68386 22.298M4.68386 22.298L4.67476 22.2981M4.68386 22.298L4.67476 22.2981M4.67476 22.2981C4.56282 22.2996 4.45197 22.276 4.35027 22.2293C4.24857 22.1825 4.15858 22.1136 4.08683 22.0277L4.08639 22.0272M4.67476 22.2981L4.08639 22.0272M4.08639 22.0272C3.92594 21.8354 3.84459 21.5525 3.90176 21.2363L3.90182 21.236M4.08639 22.0272L3.90182 21.236M3.90182 21.236C4.26198 19.2381 5.38162 17.5559 7.17204 16.3618L3.90182 21.236ZM7.17225 16.3617C8.77176 15.2958 10.8181 14.698 12.9339 14.698C15.0495 14.698 17.0959 15.2962 18.6956 16.3617L7.17225 16.3617Z"
              fill="#F0F8F1" stroke="#333333" stroke-width="1.4" />
          </svg>
          <p class="mb-0 text-dark2 font-bold">اطلاعات کاربری</p>
          <svg :class="{ 'rotate-180': isActive3 }" class="me-auto" width="11" height="8" viewBox="0 0 11 8" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.31603 4.97656L9.44103 0.851561L10.6194 2.02989L5.31603 7.33323L0.0126955 2.0299L1.19103 0.851562L5.31603 4.97656Z"
              fill="#383838" />
          </svg>
        </a>
        <ul :class="{ active: isActive3 }" class="fs-12 list-unstyled px-4 pt-0 fw-bold accordion-content">
          <li class="my-3">
            <router-link to="/userInfo" class-active="router-link-active" exact-active-class="active"
              class="d-flex align-items-center gap-2 text-secondary">
              <p class="mb-0">پروفایل</p>
              <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
            </router-link>
          </li>
          <li class="mb-3">
            <router-link to="/myTransactions" class-active="router-link-active" exact-active-class="active"
              class="d-flex align-items-center gap-2 text-secondary">
              <p class="mb-0">تراکنش های من</p>
              <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="list-hover list-hover-3 cursor-pointer">
        <a @click="isActive4 = !isActive4" class="py-3 px-4 d-flex align-items-center gap-2 accordion-btn">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.93359 18.5V12.5C3.93359 10.1131 4.88181 7.82387 6.56963 6.13604C8.25746 4.44821 10.5466 3.5 12.9336 3.5C15.3205 3.5 17.6097 4.44821 19.2976 6.13604C20.9854 7.82387 21.9336 10.1131 21.9336 12.5V18.5"
              stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M21.9336 19.5C21.9336 20.0304 21.7229 20.5391 21.3478 20.9142C20.9727 21.2893 20.464 21.5 19.9336 21.5H18.9336C18.4032 21.5 17.8945 21.2893 17.5194 20.9142C17.1443 20.5391 16.9336 20.0304 16.9336 19.5V16.5C16.9336 15.9696 17.1443 15.4609 17.5194 15.0858C17.8945 14.7107 18.4032 14.5 18.9336 14.5H21.9336V19.5ZM3.93359 19.5C3.93359 20.0304 4.14431 20.5391 4.51938 20.9142C4.89445 21.2893 5.40316 21.5 5.93359 21.5H6.93359C7.46403 21.5 7.97273 21.2893 8.34781 20.9142C8.72288 20.5391 8.93359 20.0304 8.93359 19.5V16.5C8.93359 15.9696 8.72288 15.4609 8.34781 15.0858C7.97273 14.7107 7.46403 14.5 6.93359 14.5H3.93359V19.5Z"
              stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="mb-0 text-dark2 font-bold">پشتیبانی</p>
          <svg :class="{ 'rotate-180': isActive4 }" class="me-auto" width="11" height="8" viewBox="0 0 11 8" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.31603 4.97656L9.44103 0.851561L10.6194 2.02989L5.31603 7.33323L0.0126955 2.0299L1.19103 0.851562L5.31603 4.97656Z"
              fill="#383838" />
          </svg>
        </a>
        <ul :class="{ active: isActive4 }" class="fs-12 list-unstyled px-4 pt-0 fw-bold accordion-content">
          <li class="my-3">
            <router-link to="/newTicket" class-active="router-link-active" exact-active-class="active"
              class="d-flex align-items-center gap-2 text-secondary">
              <p class="mb-0">تیکت جدید</p>
              <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
            </router-link>
          </li>
          <li class="mb-3">
            <router-link to="/myTickets" class-active="router-link-active" exact-active-class="active"
              class="d-flex align-items-center gap-2 text-secondary">
              <p class="mb-0">همه تیکت ها</p>
              <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
            </router-link>
          </li>
          <li class="mb-3">
            <router-link to="/ticketVideo" class-active="router-link-active" exact-active-class="active"
              class="d-flex align-items-center gap-2 text-secondary">
              <p class="mb-0">ویدئو آموزش پلتفرم</p>
              <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="list-hover list-hover-2 mb-5">
        <router-link to="/wallet" class-active="router-link-active" exact-active-class="active"
          class="py-3 px-4 d-flex align-items-center gap-2">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.5007 7.58033H17.7007V7.38033V6.547C17.7007 6.27294 17.5918 6.01011 17.398 5.81632C17.2042 5.62253 16.9414 5.51366 16.6673 5.51366H3.33398C3.05993 5.51366 2.79709 5.62253 2.60331 5.81632C2.40952 6.01011 2.30065 6.27294 2.30065 6.547V7.38033V7.58033H2.50065H17.5007ZM2.50065 10.5137H2.30065V10.7137V14.8803C2.30065 15.1544 2.40952 15.4172 2.60331 15.611C2.7971 15.8048 3.05993 15.9137 3.33398 15.9137H16.6673C16.9414 15.9137 17.2042 15.8048 17.398 15.611C17.5918 15.4172 17.7007 15.1544 17.7007 14.8803V10.7137V10.5137H17.5007H2.50065ZM3.33398 4.247H16.6673C17.2773 4.247 17.8623 4.48932 18.2937 4.92065C18.725 5.35199 18.9673 5.937 18.9673 6.547V14.8803C18.9673 15.4903 18.725 16.0753 18.2937 16.5067C17.8623 16.938 17.2773 17.1803 16.6673 17.1803H3.33398C2.72399 17.1803 2.13897 16.938 1.70764 16.5067C1.27631 16.0753 1.03398 15.4903 1.03398 14.8803V6.547C1.03398 5.937 1.27631 5.35199 1.70764 4.92065C2.13897 4.48932 2.72399 4.247 3.33398 4.247Z"
              fill="#333333" stroke="white" stroke-width="0.4" />
          </svg>
          <p class="mb-0 text-dark2 font-bold">کیف پول</p>
          <div class="w-8 h-8 rounded-circle bg-main me-auto opacity-none transition"></div>
        </router-link>
      </li>
      <li class="mb-5 px-4">
        <router-link to="/login" class-active="router-link-active" class="d-flex align-items-center gap-2"
          @click="logoutFunc">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_201_1171)">
              <path
                d="M4.66727 24H19.3305C21.9043 24 24 21.9065 24 19.3305V4.66946C24 2.09351 21.9065 0 19.3305 0H4.66727C2.09351 0 -0.00218201 2.09351 -0.00218201 4.66946V19.3327C-0.00218201 21.9065 2.09132 24.0022 4.66727 24.0022V24ZM19.3305 2.05203C20.7735 2.05203 21.948 3.22649 21.948 4.66946V19.3327C21.948 20.7757 20.7735 21.9502 19.3305 21.9502H4.66727C3.2243 21.9502 2.04984 20.7757 2.04984 19.3327V4.66946C2.04984 3.22649 3.2243 2.05203 4.66727 2.05203H19.3305Z"
                fill="#C30000" />
              <path
                d="M13.9302 18.6211H16.1001C17.5038 18.6211 18.6455 17.4793 18.6455 16.0757V7.92649C18.6455 6.52282 17.5038 5.3811 16.1001 5.3811H13.9302C13.3648 5.3811 12.9042 5.83954 12.9042 6.40712C12.9042 6.9747 13.3626 7.43313 13.9302 7.43313H16.1001C16.373 7.43313 16.5935 7.6558 16.5935 7.92867V16.08C16.5935 16.3529 16.373 16.5734 16.1001 16.5734H13.9302C13.3648 16.5734 12.9042 17.0318 12.9042 17.5994C12.9042 18.167 13.3626 18.6254 13.9302 18.6254V18.6211Z"
                fill="#C30000" />
              <path
                d="M5.59136 12.6483C5.57389 12.6286 5.55643 12.609 5.54115 12.5872C5.51495 12.5479 5.49312 12.5064 5.47129 12.4649C5.46256 12.4453 5.44946 12.4278 5.44073 12.4082C5.4189 12.3579 5.40362 12.3056 5.39052 12.251C5.38616 12.2379 5.38179 12.2248 5.37743 12.2117C5.36214 12.144 5.35559 12.072 5.35559 11.9999C5.35559 11.9279 5.36433 11.8559 5.37743 11.7882C5.37961 11.7751 5.38616 11.762 5.39052 11.7489C5.40362 11.6943 5.4189 11.6419 5.44291 11.5917C5.45165 11.5721 5.46256 11.5546 5.47348 11.535C5.49531 11.4935 5.51714 11.452 5.54333 11.4127C5.55861 11.3909 5.57608 11.3734 5.59354 11.3538C5.62192 11.321 5.64812 11.2883 5.67868 11.2577C5.68523 11.2512 5.68959 11.2446 5.69396 11.2402L8.92481 8.32375C9.34614 7.9439 9.99449 7.97665 10.3743 8.39797C10.7542 8.81929 10.7214 9.46764 10.3001 9.84749L9.04925 10.9761H13.6947C14.2601 10.9761 14.7207 11.4345 14.7207 12.0021C14.7207 12.5697 14.2623 13.0281 13.6947 13.0281H9.04925L10.3001 14.1567C10.7214 14.5366 10.7542 15.1849 10.3743 15.6063C10.1713 15.8311 9.89189 15.9446 9.61246 15.9446C9.36796 15.9446 9.12129 15.8573 8.92481 15.6805L5.69396 12.764C5.69396 12.764 5.68305 12.7509 5.6765 12.7465C5.64593 12.7181 5.61755 12.6854 5.59136 12.6505V12.6483Z"
                fill="#C30000" />
            </g>
            <defs>
              <clipPath id="clip0_201_1171">
                <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)" />
              </clipPath>
            </defs>
          </svg>
          <p class="mb-0 text-danger2 font-bold">خروج از حساب کاربری</p>
        </router-link>
      </li>
      <div class="px-4 py-5">
        <div class="bg-main rounded-16 position-relative p-3">
          <!-- shape -->
          <img alt="img" :src="require('../../assets/img/illustration.png')"
            class="img-fluid position-absolute -top-60 end-0 start-0 mx-auto w-117 -z-0" />
          <svg class="position-absolute start-0 bottom-0 mb-3" width="28" height="40" viewBox="0 0 28 40" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.949145 2.72425C0.949145 3.74698 0.104886 4.57606 -0.93656 4.57606C-1.97801 4.57606 -2.82227 3.74698 -2.82227 2.72425C-2.82227 1.70152 -1.97801 0.872437 -0.93656 0.872437C0.104886 0.872437 0.949145 1.70152 0.949145 2.72425Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M9.7491 2.72425C9.7491 3.74698 8.90484 4.57606 7.8634 4.57606C6.82195 4.57606 5.97769 3.74698 5.97769 2.72425C5.97769 1.70152 6.82195 0.872437 7.8634 0.872437C8.90484 0.872437 9.7491 1.70152 9.7491 2.72425Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M18.5491 2.72425C18.5491 3.74698 17.7048 4.57606 16.6634 4.57606C15.6219 4.57606 14.7777 3.74698 14.7777 2.72425C14.7777 1.70152 15.6219 0.872437 16.6634 0.872437C17.7048 0.872437 18.5491 1.70152 18.5491 2.72425Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M27.349 2.72425C27.349 3.74698 26.5048 4.57606 25.4633 4.57606C24.4219 4.57606 23.5776 3.74698 23.5776 2.72425C23.5776 1.70152 24.4219 0.872437 25.4633 0.872437C26.5048 0.872437 27.349 1.70152 27.349 2.72425Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M0.949145 11.366C0.949145 12.3888 0.104886 13.2178 -0.93656 13.2178C-1.97801 13.2178 -2.82227 12.3888 -2.82227 11.366C-2.82227 10.3433 -1.97801 9.51422 -0.93656 9.51422C0.104886 9.51422 0.949145 10.3433 0.949145 11.366Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M9.7491 11.366C9.7491 12.3888 8.90484 13.2178 7.8634 13.2178C6.82195 13.2178 5.97769 12.3888 5.97769 11.366C5.97769 10.3433 6.82195 9.51422 7.8634 9.51422C8.90484 9.51422 9.7491 10.3433 9.7491 11.366Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M18.5491 11.366C18.5491 12.3888 17.7048 13.2178 16.6634 13.2178C15.6219 13.2178 14.7777 12.3888 14.7777 11.366C14.7777 10.3433 15.6219 9.51422 16.6634 9.51422C17.7048 9.51422 18.5491 10.3433 18.5491 11.366Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M27.349 11.366C27.349 12.3888 26.5048 13.2178 25.4633 13.2178C24.4219 13.2178 23.5776 12.3888 23.5776 11.366C23.5776 10.3433 24.4219 9.51422 25.4633 9.51422C26.5048 9.51422 27.349 10.3433 27.349 11.366Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M0.949145 20.0078C0.949145 21.0306 0.104886 21.8596 -0.93656 21.8596C-1.97801 21.8596 -2.82227 21.0306 -2.82227 20.0078C-2.82227 18.9851 -1.97801 18.156 -0.93656 18.156C0.104886 18.156 0.949145 18.9851 0.949145 20.0078Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M9.7491 20.0078C9.7491 21.0306 8.90484 21.8596 7.8634 21.8596C6.82195 21.8596 5.97769 21.0306 5.97769 20.0078C5.97769 18.9851 6.82195 18.156 7.8634 18.156C8.90484 18.156 9.7491 18.9851 9.7491 20.0078Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M18.5491 20.0078C18.5491 21.0306 17.7048 21.8596 16.6634 21.8596C15.6219 21.8596 14.7777 21.0306 14.7777 20.0078C14.7777 18.9851 15.6219 18.156 16.6634 18.156C17.7048 18.156 18.5491 18.9851 18.5491 20.0078Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M27.349 20.0078C27.349 21.0306 26.5048 21.8596 25.4633 21.8596C24.4219 21.8596 23.5776 21.0306 23.5776 20.0078C23.5776 18.9851 24.4219 18.156 25.4633 18.156C26.5048 18.156 27.349 18.9851 27.349 20.0078Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M0.949145 28.6496C0.949145 29.6723 0.104886 30.5014 -0.93656 30.5014C-1.97801 30.5014 -2.82227 29.6723 -2.82227 28.6496C-2.82227 27.6269 -1.97801 26.7978 -0.93656 26.7978C0.104886 26.7978 0.949145 27.6269 0.949145 28.6496Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M9.7491 28.6496C9.7491 29.6723 8.90484 30.5014 7.8634 30.5014C6.82195 30.5014 5.97769 29.6723 5.97769 28.6496C5.97769 27.6269 6.82195 26.7978 7.8634 26.7978C8.90484 26.7978 9.7491 27.6269 9.7491 28.6496Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M18.5491 28.6496C18.5491 29.6723 17.7048 30.5014 16.6634 30.5014C15.6219 30.5014 14.7777 29.6723 14.7777 28.6496C14.7777 27.6269 15.6219 26.7978 16.6634 26.7978C17.7048 26.7978 18.5491 27.6269 18.5491 28.6496Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M27.349 28.6496C27.349 29.6723 26.5048 30.5014 25.4633 30.5014C24.4219 30.5014 23.5776 29.6723 23.5776 28.6496C23.5776 27.6269 24.4219 26.7978 25.4633 26.7978C26.5048 26.7978 27.349 27.6269 27.349 28.6496Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M0.949145 37.2914C0.949145 38.3141 0.104886 39.1432 -0.93656 39.1432C-1.97801 39.1432 -2.82227 38.3141 -2.82227 37.2914C-2.82227 36.2687 -1.97801 35.4396 -0.93656 35.4396C0.104886 35.4396 0.949145 36.2687 0.949145 37.2914Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M9.7491 37.2914C9.7491 38.3141 8.90484 39.1432 7.8634 39.1432C6.82195 39.1432 5.97769 38.3141 5.97769 37.2914C5.97769 36.2687 6.82195 35.4396 7.8634 35.4396C8.90484 35.4396 9.7491 36.2687 9.7491 37.2914Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M18.5491 37.2914C18.5491 38.3141 17.7048 39.1432 16.6634 39.1432C15.6219 39.1432 14.7777 38.3141 14.7777 37.2914C14.7777 36.2687 15.6219 35.4396 16.6634 35.4396C17.7048 35.4396 18.5491 36.2687 18.5491 37.2914Z"
              fill="white" fill-opacity="0.29" />
            <path
              d="M27.349 37.2914C27.349 38.3141 26.5048 39.1432 25.4633 39.1432C24.4219 39.1432 23.5776 38.3141 23.5776 37.2914C23.5776 36.2687 24.4219 35.4396 25.4633 35.4396C26.5048 35.4396 27.349 36.2687 27.349 37.2914Z"
              fill="white" fill-opacity="0.29" />
          </svg>
          <svg class="position-absolute top-0 end-0 me-4 mt-2" width="19" height="24" viewBox="0 0 19 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.01353 1.90767C3.01353 2.50085 2.52474 2.98172 1.9218 2.98172C1.31886 2.98172 0.830078 2.50085 0.830078 1.90767C0.830078 1.31449 1.31886 0.833618 1.9218 0.833618C2.52474 0.833618 3.01353 1.31449 3.01353 1.90767Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M8.10824 1.90767C8.10824 2.50085 7.61946 2.98172 7.01652 2.98172C6.41357 2.98172 5.92479 2.50085 5.92479 1.90767C5.92479 1.31449 6.41357 0.833618 7.01652 0.833618C7.61946 0.833618 8.10824 1.31449 8.10824 1.90767Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M13.203 1.90767C13.203 2.50085 12.7142 2.98172 12.1112 2.98172C11.5083 2.98172 11.0195 2.50085 11.0195 1.90767C11.0195 1.31449 11.5083 0.833618 12.1112 0.833618C12.7142 0.833618 13.203 1.31449 13.203 1.90767Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M18.2977 1.90767C18.2977 2.50085 17.8089 2.98172 17.2059 2.98172C16.603 2.98172 16.1142 2.50085 16.1142 1.90767C16.1142 1.31449 16.603 0.833618 17.2059 0.833618C17.8089 0.833618 18.2977 1.31449 18.2977 1.90767Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M3.01353 6.91991C3.01353 7.51309 2.52474 7.99396 1.9218 7.99396C1.31886 7.99396 0.830078 7.51309 0.830078 6.91991C0.830078 6.32672 1.31886 5.84585 1.9218 5.84585C2.52474 5.84585 3.01353 6.32672 3.01353 6.91991Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M8.10824 6.91991C8.10824 7.51309 7.61946 7.99396 7.01652 7.99396C6.41357 7.99396 5.92479 7.51309 5.92479 6.91991C5.92479 6.32672 6.41357 5.84585 7.01652 5.84585C7.61946 5.84585 8.10824 6.32672 8.10824 6.91991Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M13.203 6.91991C13.203 7.51309 12.7142 7.99396 12.1112 7.99396C11.5083 7.99396 11.0195 7.51309 11.0195 6.91991C11.0195 6.32672 11.5083 5.84585 12.1112 5.84585C12.7142 5.84585 13.203 6.32672 13.203 6.91991Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M18.2977 6.91991C18.2977 7.51309 17.8089 7.99396 17.2059 7.99396C16.603 7.99396 16.1142 7.51309 16.1142 6.91991C16.1142 6.32672 16.603 5.84585 17.2059 5.84585C17.8089 5.84585 18.2977 6.32672 18.2977 6.91991Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M3.01353 11.9321C3.01353 12.5253 2.52474 13.0062 1.9218 13.0062C1.31886 13.0062 0.830078 12.5253 0.830078 11.9321C0.830078 11.339 1.31886 10.8581 1.9218 10.8581C2.52474 10.8581 3.01353 11.339 3.01353 11.9321Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M8.10824 11.9321C8.10824 12.5253 7.61946 13.0062 7.01652 13.0062C6.41357 13.0062 5.92479 12.5253 5.92479 11.9321C5.92479 11.339 6.41357 10.8581 7.01652 10.8581C7.61946 10.8581 8.10824 11.339 8.10824 11.9321Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M13.203 11.9321C13.203 12.5253 12.7142 13.0062 12.1112 13.0062C11.5083 13.0062 11.0195 12.5253 11.0195 11.9321C11.0195 11.339 11.5083 10.8581 12.1112 10.8581C12.7142 10.8581 13.203 11.339 13.203 11.9321Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M18.2977 11.9321C18.2977 12.5253 17.8089 13.0062 17.2059 13.0062C16.603 13.0062 16.1142 12.5253 16.1142 11.9321C16.1142 11.339 16.603 10.8581 17.2059 10.8581C17.8089 10.8581 18.2977 11.339 18.2977 11.9321Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M3.01353 16.9444C3.01353 17.5376 2.52474 18.0184 1.9218 18.0184C1.31886 18.0184 0.830078 17.5376 0.830078 16.9444C0.830078 16.3512 1.31886 15.8703 1.9218 15.8703C2.52474 15.8703 3.01353 16.3512 3.01353 16.9444Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M8.10824 16.9444C8.10824 17.5376 7.61946 18.0184 7.01652 18.0184C6.41357 18.0184 5.92479 17.5376 5.92479 16.9444C5.92479 16.3512 6.41357 15.8703 7.01652 15.8703C7.61946 15.8703 8.10824 16.3512 8.10824 16.9444Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M13.203 16.9444C13.203 17.5376 12.7142 18.0184 12.1112 18.0184C11.5083 18.0184 11.0195 17.5376 11.0195 16.9444C11.0195 16.3512 11.5083 15.8703 12.1112 15.8703C12.7142 15.8703 13.203 16.3512 13.203 16.9444Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M18.2977 16.9444C18.2977 17.5376 17.8089 18.0184 17.2059 18.0184C16.603 18.0184 16.1142 17.5376 16.1142 16.9444C16.1142 16.3512 16.603 15.8703 17.2059 15.8703C17.8089 15.8703 18.2977 16.3512 18.2977 16.9444Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M3.01353 21.9566C3.01353 22.5498 2.52474 23.0307 1.9218 23.0307C1.31886 23.0307 0.830078 22.5498 0.830078 21.9566C0.830078 21.3634 1.31886 20.8826 1.9218 20.8826C2.52474 20.8826 3.01353 21.3634 3.01353 21.9566Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M8.10824 21.9566C8.10824 22.5498 7.61946 23.0307 7.01652 23.0307C6.41357 23.0307 5.92479 22.5498 5.92479 21.9566C5.92479 21.3634 6.41357 20.8826 7.01652 20.8826C7.61946 20.8826 8.10824 21.3634 8.10824 21.9566Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M13.203 21.9566C13.203 22.5498 12.7142 23.0307 12.1112 23.0307C11.5083 23.0307 11.0195 22.5498 11.0195 21.9566C11.0195 21.3634 11.5083 20.8826 12.1112 20.8826C12.7142 20.8826 13.203 21.3634 13.203 21.9566Z"
              fill="white" fill-opacity="0.5" />
            <path
              d="M18.2977 21.9566C18.2977 22.5498 17.8089 23.0307 17.2059 23.0307C16.603 23.0307 16.1142 22.5498 16.1142 21.9566C16.1142 21.3634 16.603 20.8826 17.2059 20.8826C17.8089 20.8826 18.2977 21.3634 18.2977 21.9566Z"
              fill="white" fill-opacity="0.5" />
          </svg>
          <!--  -->
          <div class="w-32 h-32 bg-main me-auto"></div>
          <div class="h-32 bg-main mt-4"></div>
        </div>
      </div>
    </ul>
  </aside>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { loginStore } from "@/store/modules/login.js"
export default {
  name: "Aside-component",

  setup() {
    const isActive = ref(false);
    const isActive2 = ref(false);
    const isActive3 = ref(false);
    const isActive4 = ref(false);
    const store = useStore();
    const isOpen = computed(() => store.state.toggleMenu.isOpen);

    function toggleMenu() {
      store.commit("toggleMenu");
    }

    const router = useRouter();
    const loginDetails = loginStore()
    function logoutFunc() {
      loginDetails.logoutUser().then(() => router.push('/login'))
    }

    return { isActive, isActive2, isActive3, isActive4, isOpen, toggleMenu, logoutFunc };
  },
};
</script>

<style></style>