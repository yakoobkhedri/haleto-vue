<template>
  <div class="position-relative servicesbox">
    <div class="swiper swiper3 py-3 px-sm-5 px-2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="rounded-12 shadow-sm p-3 bg-white overflow-hidden">
            <div
              class="d-flex justify-content-between align-items-start border-bottom pb-3"
            >
              <div class="d-flex align-items-center gap-2">
                <div class="position-relative">
                  <div class="border p-1 bg-white rounded-circle w-66 h-66">
                    <img
                      alt="img"
                      :src="require('../../assets/img/Ellipse 398.png')"
                      class="img-fluid rounded-circle"
                    />
                  </div>
                  <span
                    class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"
                  ></span>
                </div>
                <div class="font-bold">
                  <p class="mb-1 fs-14">دکتر سارا احمدی</p>
                  <p class="mb-0 text-secondary fs-12">متخصص و روانشناس</p>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2 cursor-pointer">
                <p class="mb-0 mt-1 font-bold text-main fs-14">%15</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z"
                    fill="#6CB771"
                  ></path>
                  <path
                    d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z"
                    fill="#6CB771"
                  ></path>
                </svg>
                <p class="text-secondary fs-12 mb-0 mt-1">(100کاربر)</p>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex align-items-center gap-5">
                <div class="d-flex align-items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.4 5.44444C3.73137 5.44444 4 5.20566 4 4.91111V1.53333C4 1.23878 4.26863 1 4.6 1H13.4C13.7314 1 14 1.23878 14 1.53333V4.91111C14 5.20566 14.2686 5.44444 14.6 5.44444H16.4C16.7314 5.44444 17 5.68323 17 5.97778V16.4667C17 16.7612 16.7314 17 16.4 17H1.6C1.26863 17 1 16.7612 1 16.4667V5.97778C1 5.68323 1.26863 5.44444 1.6 5.44444H3.4Z"
                      stroke="#565454"
                    ></path>
                    <path
                      d="M6.99219 5.4444H8.9922M8.9922 5.4444H10.9922M8.9922 5.4444V3.66663M8.9922 5.4444V7.22218"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 13.4532L13.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 9.89768L13.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 9.89768L9.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 9.89768L5.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 13.4532L5.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 13.4532L9.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="fs-14 mb-0 text-main fw-bold">نوبت حضوری</p>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8638 11.3398L10.5367 11.9894C8.28929 10.8528 6.90104 9.54728 6.09313 7.51221L6.71518 4.1502L5.53932 1H2.50889C1.59792 1 0.880565 1.75849 1.01662 2.66605C1.35627 4.93175 2.35775 9.03973 5.28521 11.9894C8.3595 15.0869 12.7873 16.431 15.2242 16.9653C16.1653 17.1716 17 16.4319 17 15.4616V12.5439L13.8638 11.3398Z"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="fs-14 mb-0 text-main fw-bold">مشاوره آنلاین</p>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2 mt-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9147 1.76861C7.09715 1.75236 3.16211 5.55672 3.00484 10.3187L3 10.6143C3.08008 12.9484 3.88018 15.1734 5.2894 17.0065L5.62036 17.4352C6.96548 19.1328 8.56399 20.6228 10.3589 21.851L10.791 22.1397L10.8541 22.1889C11.4693 22.6276 12.2999 22.6276 12.9151 22.1889L12.9805 22.1355L12.955 22.1541C14.384 21.2356 15.7016 20.1557 16.8814 18.9359C19.2731 16.423 20.7146 13.6074 20.769 10.7478L20.7692 10.6417C20.7855 5.84781 16.9644 1.93006 12.1815 1.77342L11.9147 1.76861Z"
                    fill="#565454"
                  ></path>
                  <path
                    d="M11.9091 3.36499C15.8402 3.37836 19.0318 6.50276 19.1503 10.3937L19.1537 10.7367C19.1082 13.1282 17.8494 15.5923 15.7199 17.8346C14.6341 18.9597 13.4167 19.9597 12.0963 20.8103L12.0083 20.8761C11.9372 20.9375 11.8317 20.9375 11.7606 20.8761L11.6751 20.8119C9.70805 19.5344 7.98166 17.9215 6.57487 16.0469C5.44173 14.5696 4.77025 12.8032 4.63509 10.9606L4.61523 10.5911C4.62859 6.67124 7.75981 3.48661 11.6592 3.36835L11.9091 3.36499Z"
                    fill="white"
                  ></path>
                  <path
                    d="M11.8842 6.55652C9.65378 6.55652 7.8457 8.34302 7.8457 10.5468C7.8457 12.7505 9.65378 14.537 11.8842 14.537C14.1145 14.537 15.9226 12.7505 15.9226 10.5468C15.9226 8.34302 14.1145 6.55652 11.8842 6.55652Z"
                    fill="#565454"
                  ></path>
                  <path
                    d="M11.884 8.15295C13.2222 8.15295 14.3071 9.22485 14.3071 10.5471C14.3071 11.8694 13.2222 12.9413 11.884 12.9413C10.5458 12.9413 9.46094 11.8694 9.46094 10.5471C9.46094 9.22485 10.5458 8.15295 11.884 8.15295Z"
                    fill="white"
                  ></path>
                </svg>
                <p class="fs-14 mb-0 text-dark fw-bold">
                  تهران ، فلکه دوم صادقیه خیابان بهشتی ساختمان الف طبقه2
                </p>
              </div>
              <div
                class="mt-5 d-flex align-items-center justify-content-end gap-4"
              >
                <a
                  class="d-flex align-items-center justify-content-center border-bottom border-warning pb-1 font-bold fs-14 text-warning text-center"
                  >مشاهده پروفایل</a
                ><a
                  class="d-flex align-items-center justify-content-center border-b-main text-main pb-1 font-bold"
                  >دریافت نوبت</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="rounded-12 shadow-sm p-3 bg-white overflow-hidden">
            <div
              class="d-flex justify-content-between align-items-start border-bottom pb-3"
            >
              <div class="d-flex align-items-center gap-2">
                <div class="position-relative">
                  <div class="border p-1 bg-white rounded-circle w-66 h-66">
                    <img
                      alt="img"
                      :src="require('../../assets/img/Ellipse 398.png')"
                      class="img-fluid rounded-circle"
                    />
                  </div>
                  <span
                    class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"
                  ></span>
                </div>
                <div class="font-bold">
                  <p class="mb-1 fs-14">دکتر سارا احمدی</p>
                  <p class="mb-0 text-secondary fs-12">متخصص و روانشناس</p>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2 cursor-pointer">
                <p class="mb-0 mt-1 font-bold text-main fs-14">%15</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z"
                    fill="#6CB771"
                  ></path>
                  <path
                    d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z"
                    fill="#6CB771"
                  ></path>
                </svg>
                <p class="text-secondary fs-12 mb-0 mt-1">(100کاربر)</p>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex align-items-center gap-5">
                <div class="d-flex align-items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.4 5.44444C3.73137 5.44444 4 5.20566 4 4.91111V1.53333C4 1.23878 4.26863 1 4.6 1H13.4C13.7314 1 14 1.23878 14 1.53333V4.91111C14 5.20566 14.2686 5.44444 14.6 5.44444H16.4C16.7314 5.44444 17 5.68323 17 5.97778V16.4667C17 16.7612 16.7314 17 16.4 17H1.6C1.26863 17 1 16.7612 1 16.4667V5.97778C1 5.68323 1.26863 5.44444 1.6 5.44444H3.4Z"
                      stroke="#565454"
                    ></path>
                    <path
                      d="M6.99219 5.4444H8.9922M8.9922 5.4444H10.9922M8.9922 5.4444V3.66663M8.9922 5.4444V7.22218"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 13.4532L13.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 9.89768L13.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 9.89768L9.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 9.89768L5.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 13.4532L5.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 13.4532L9.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="fs-14 mb-0 text-main fw-bold">نوبت حضوری</p>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8638 11.3398L10.5367 11.9894C8.28929 10.8528 6.90104 9.54728 6.09313 7.51221L6.71518 4.1502L5.53932 1H2.50889C1.59792 1 0.880565 1.75849 1.01662 2.66605C1.35627 4.93175 2.35775 9.03973 5.28521 11.9894C8.3595 15.0869 12.7873 16.431 15.2242 16.9653C16.1653 17.1716 17 16.4319 17 15.4616V12.5439L13.8638 11.3398Z"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="fs-14 mb-0 text-main fw-bold">مشاوره آنلاین</p>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2 mt-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9147 1.76861C7.09715 1.75236 3.16211 5.55672 3.00484 10.3187L3 10.6143C3.08008 12.9484 3.88018 15.1734 5.2894 17.0065L5.62036 17.4352C6.96548 19.1328 8.56399 20.6228 10.3589 21.851L10.791 22.1397L10.8541 22.1889C11.4693 22.6276 12.2999 22.6276 12.9151 22.1889L12.9805 22.1355L12.955 22.1541C14.384 21.2356 15.7016 20.1557 16.8814 18.9359C19.2731 16.423 20.7146 13.6074 20.769 10.7478L20.7692 10.6417C20.7855 5.84781 16.9644 1.93006 12.1815 1.77342L11.9147 1.76861Z"
                    fill="#565454"
                  ></path>
                  <path
                    d="M11.9091 3.36499C15.8402 3.37836 19.0318 6.50276 19.1503 10.3937L19.1537 10.7367C19.1082 13.1282 17.8494 15.5923 15.7199 17.8346C14.6341 18.9597 13.4167 19.9597 12.0963 20.8103L12.0083 20.8761C11.9372 20.9375 11.8317 20.9375 11.7606 20.8761L11.6751 20.8119C9.70805 19.5344 7.98166 17.9215 6.57487 16.0469C5.44173 14.5696 4.77025 12.8032 4.63509 10.9606L4.61523 10.5911C4.62859 6.67124 7.75981 3.48661 11.6592 3.36835L11.9091 3.36499Z"
                    fill="white"
                  ></path>
                  <path
                    d="M11.8842 6.55652C9.65378 6.55652 7.8457 8.34302 7.8457 10.5468C7.8457 12.7505 9.65378 14.537 11.8842 14.537C14.1145 14.537 15.9226 12.7505 15.9226 10.5468C15.9226 8.34302 14.1145 6.55652 11.8842 6.55652Z"
                    fill="#565454"
                  ></path>
                  <path
                    d="M11.884 8.15295C13.2222 8.15295 14.3071 9.22485 14.3071 10.5471C14.3071 11.8694 13.2222 12.9413 11.884 12.9413C10.5458 12.9413 9.46094 11.8694 9.46094 10.5471C9.46094 9.22485 10.5458 8.15295 11.884 8.15295Z"
                    fill="white"
                  ></path>
                </svg>
                <p class="fs-14 mb-0 text-dark fw-bold">
                  تهران ، فلکه دوم صادقیه خیابان بهشتی ساختمان الف طبقه2
                </p>
              </div>
              <div
                class="mt-5 d-flex align-items-center justify-content-end gap-4"
              >
                <a
                  class="d-flex align-items-center justify-content-center border-bottom border-warning pb-1 font-bold fs-14 text-warning text-center"
                  >مشاهده پروفایل</a
                ><a
                  class="d-flex align-items-center justify-content-center border-b-main text-main pb-1 font-bold"
                  >دریافت نوبت</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="rounded-12 shadow-sm p-3 bg-white overflow-hidden">
            <div
              class="d-flex justify-content-between align-items-start border-bottom pb-3"
            >
              <div class="d-flex align-items-center gap-2">
                <div class="position-relative">
                  <div class="border p-1 bg-white rounded-circle w-66 h-66">
                    <img
                      alt="img"
                      :src="require('../../assets/img/Ellipse 398.png')"
                      class="img-fluid rounded-circle"
                    />
                  </div>
                  <span
                    class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"
                  ></span>
                </div>
                <div class="font-bold">
                  <p class="mb-1 fs-14">دکتر سارا احمدی</p>
                  <p class="mb-0 text-secondary fs-12">متخصص و روانشناس</p>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2 cursor-pointer">
                <p class="mb-0 mt-1 font-bold text-main fs-14">%15</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z"
                    fill="#6CB771"
                  ></path>
                  <path
                    d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z"
                    fill="#6CB771"
                  ></path>
                </svg>
                <p class="text-secondary fs-12 mb-0 mt-1">(100کاربر)</p>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex align-items-center gap-5">
                <div class="d-flex align-items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.4 5.44444C3.73137 5.44444 4 5.20566 4 4.91111V1.53333C4 1.23878 4.26863 1 4.6 1H13.4C13.7314 1 14 1.23878 14 1.53333V4.91111C14 5.20566 14.2686 5.44444 14.6 5.44444H16.4C16.7314 5.44444 17 5.68323 17 5.97778V16.4667C17 16.7612 16.7314 17 16.4 17H1.6C1.26863 17 1 16.7612 1 16.4667V5.97778C1 5.68323 1.26863 5.44444 1.6 5.44444H3.4Z"
                      stroke="#565454"
                    ></path>
                    <path
                      d="M6.99219 5.4444H8.9922M8.9922 5.4444H10.9922M8.9922 5.4444V3.66663M8.9922 5.4444V7.22218"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 13.4532L13.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 9.89768L13.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 9.89768L9.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 9.89768L5.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 13.4532L5.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 13.4532L9.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="fs-14 mb-0 text-main fw-bold">نوبت حضوری</p>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8638 11.3398L10.5367 11.9894C8.28929 10.8528 6.90104 9.54728 6.09313 7.51221L6.71518 4.1502L5.53932 1H2.50889C1.59792 1 0.880565 1.75849 1.01662 2.66605C1.35627 4.93175 2.35775 9.03973 5.28521 11.9894C8.3595 15.0869 12.7873 16.431 15.2242 16.9653C16.1653 17.1716 17 16.4319 17 15.4616V12.5439L13.8638 11.3398Z"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="fs-14 mb-0 text-main fw-bold">مشاوره آنلاین</p>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2 mt-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9147 1.76861C7.09715 1.75236 3.16211 5.55672 3.00484 10.3187L3 10.6143C3.08008 12.9484 3.88018 15.1734 5.2894 17.0065L5.62036 17.4352C6.96548 19.1328 8.56399 20.6228 10.3589 21.851L10.791 22.1397L10.8541 22.1889C11.4693 22.6276 12.2999 22.6276 12.9151 22.1889L12.9805 22.1355L12.955 22.1541C14.384 21.2356 15.7016 20.1557 16.8814 18.9359C19.2731 16.423 20.7146 13.6074 20.769 10.7478L20.7692 10.6417C20.7855 5.84781 16.9644 1.93006 12.1815 1.77342L11.9147 1.76861Z"
                    fill="#565454"
                  ></path>
                  <path
                    d="M11.9091 3.36499C15.8402 3.37836 19.0318 6.50276 19.1503 10.3937L19.1537 10.7367C19.1082 13.1282 17.8494 15.5923 15.7199 17.8346C14.6341 18.9597 13.4167 19.9597 12.0963 20.8103L12.0083 20.8761C11.9372 20.9375 11.8317 20.9375 11.7606 20.8761L11.6751 20.8119C9.70805 19.5344 7.98166 17.9215 6.57487 16.0469C5.44173 14.5696 4.77025 12.8032 4.63509 10.9606L4.61523 10.5911C4.62859 6.67124 7.75981 3.48661 11.6592 3.36835L11.9091 3.36499Z"
                    fill="white"
                  ></path>
                  <path
                    d="M11.8842 6.55652C9.65378 6.55652 7.8457 8.34302 7.8457 10.5468C7.8457 12.7505 9.65378 14.537 11.8842 14.537C14.1145 14.537 15.9226 12.7505 15.9226 10.5468C15.9226 8.34302 14.1145 6.55652 11.8842 6.55652Z"
                    fill="#565454"
                  ></path>
                  <path
                    d="M11.884 8.15295C13.2222 8.15295 14.3071 9.22485 14.3071 10.5471C14.3071 11.8694 13.2222 12.9413 11.884 12.9413C10.5458 12.9413 9.46094 11.8694 9.46094 10.5471C9.46094 9.22485 10.5458 8.15295 11.884 8.15295Z"
                    fill="white"
                  ></path>
                </svg>
                <p class="fs-14 mb-0 text-dark fw-bold">
                  تهران ، فلکه دوم صادقیه خیابان بهشتی ساختمان الف طبقه2
                </p>
              </div>
              <div
                class="mt-5 d-flex align-items-center justify-content-end gap-4"
              >
                <a
                  class="d-flex align-items-center justify-content-center border-bottom border-warning pb-1 font-bold fs-14 text-warning text-center"
                  >مشاهده پروفایل</a
                ><a
                  class="d-flex align-items-center justify-content-center border-b-main text-main pb-1 font-bold"
                  >دریافت نوبت</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="rounded-12 shadow-sm p-3 bg-white overflow-hidden">
            <div
              class="d-flex justify-content-between align-items-start border-bottom pb-3"
            >
              <div class="d-flex align-items-center gap-2">
                <div class="position-relative">
                  <div class="border p-1 bg-white rounded-circle w-66 h-66">
                    <img
                      alt="img"
                      :src="require('../../assets/img/Ellipse 398.png')"
                      class="img-fluid rounded-circle"
                    />
                  </div>
                  <span
                    class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"
                  ></span>
                </div>
                <div class="font-bold">
                  <p class="mb-1 fs-14">دکتر سارا احمدی</p>
                  <p class="mb-0 text-secondary fs-12">متخصص و روانشناس</p>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2 cursor-pointer">
                <p class="mb-0 mt-1 font-bold text-main fs-14">%15</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z"
                    fill="#6CB771"
                  ></path>
                  <path
                    d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z"
                    fill="#6CB771"
                  ></path>
                </svg>
                <p class="text-secondary fs-12 mb-0 mt-1">(100کاربر)</p>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex align-items-center gap-5">
                <div class="d-flex align-items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.4 5.44444C3.73137 5.44444 4 5.20566 4 4.91111V1.53333C4 1.23878 4.26863 1 4.6 1H13.4C13.7314 1 14 1.23878 14 1.53333V4.91111C14 5.20566 14.2686 5.44444 14.6 5.44444H16.4C16.7314 5.44444 17 5.68323 17 5.97778V16.4667C17 16.7612 16.7314 17 16.4 17H1.6C1.26863 17 1 16.7612 1 16.4667V5.97778C1 5.68323 1.26863 5.44444 1.6 5.44444H3.4Z"
                      stroke="#565454"
                    ></path>
                    <path
                      d="M6.99219 5.4444H8.9922M8.9922 5.4444H10.9922M8.9922 5.4444V3.66663M8.9922 5.4444V7.22218"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 13.4532L13.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 9.89768L13.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 9.89768L9.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 9.89768L5.01 9.88782"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 13.4532L5.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 13.4532L9.01 13.4434"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="fs-14 mb-0 text-main fw-bold">نوبت حضوری</p>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8638 11.3398L10.5367 11.9894C8.28929 10.8528 6.90104 9.54728 6.09313 7.51221L6.71518 4.1502L5.53932 1H2.50889C1.59792 1 0.880565 1.75849 1.01662 2.66605C1.35627 4.93175 2.35775 9.03973 5.28521 11.9894C8.3595 15.0869 12.7873 16.431 15.2242 16.9653C16.1653 17.1716 17 16.4319 17 15.4616V12.5439L13.8638 11.3398Z"
                      stroke="#565454"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="fs-14 mb-0 text-main fw-bold">مشاوره آنلاین</p>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2 mt-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9147 1.76861C7.09715 1.75236 3.16211 5.55672 3.00484 10.3187L3 10.6143C3.08008 12.9484 3.88018 15.1734 5.2894 17.0065L5.62036 17.4352C6.96548 19.1328 8.56399 20.6228 10.3589 21.851L10.791 22.1397L10.8541 22.1889C11.4693 22.6276 12.2999 22.6276 12.9151 22.1889L12.9805 22.1355L12.955 22.1541C14.384 21.2356 15.7016 20.1557 16.8814 18.9359C19.2731 16.423 20.7146 13.6074 20.769 10.7478L20.7692 10.6417C20.7855 5.84781 16.9644 1.93006 12.1815 1.77342L11.9147 1.76861Z"
                    fill="#565454"
                  ></path>
                  <path
                    d="M11.9091 3.36499C15.8402 3.37836 19.0318 6.50276 19.1503 10.3937L19.1537 10.7367C19.1082 13.1282 17.8494 15.5923 15.7199 17.8346C14.6341 18.9597 13.4167 19.9597 12.0963 20.8103L12.0083 20.8761C11.9372 20.9375 11.8317 20.9375 11.7606 20.8761L11.6751 20.8119C9.70805 19.5344 7.98166 17.9215 6.57487 16.0469C5.44173 14.5696 4.77025 12.8032 4.63509 10.9606L4.61523 10.5911C4.62859 6.67124 7.75981 3.48661 11.6592 3.36835L11.9091 3.36499Z"
                    fill="white"
                  ></path>
                  <path
                    d="M11.8842 6.55652C9.65378 6.55652 7.8457 8.34302 7.8457 10.5468C7.8457 12.7505 9.65378 14.537 11.8842 14.537C14.1145 14.537 15.9226 12.7505 15.9226 10.5468C15.9226 8.34302 14.1145 6.55652 11.8842 6.55652Z"
                    fill="#565454"
                  ></path>
                  <path
                    d="M11.884 8.15295C13.2222 8.15295 14.3071 9.22485 14.3071 10.5471C14.3071 11.8694 13.2222 12.9413 11.884 12.9413C10.5458 12.9413 9.46094 11.8694 9.46094 10.5471C9.46094 9.22485 10.5458 8.15295 11.884 8.15295Z"
                    fill="white"
                  ></path>
                </svg>
                <p class="fs-14 mb-0 text-dark fw-bold">
                  تهران ، فلکه دوم صادقیه خیابان بهشتی ساختمان الف طبقه2
                </p>
              </div>
              <div
                class="mt-5 d-flex align-items-center justify-content-end gap-4"
              >
                <a
                  class="d-flex align-items-center justify-content-center border-bottom border-warning pb-1 font-bold fs-14 text-warning text-center"
                  >مشاهده پروفایل</a
                ><a
                  class="d-flex align-items-center justify-content-center border-b-main text-main pb-1 font-bold"
                  >دریافت نوبت</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next bg-dark left-3 right-auto after-white"></div>
      <div class="swiper-button-prev bg-dark right-3 after-white"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

export default {
  name: "swiper3-component",

  mounted() {
    new Swiper(".swiper3", {
      loop: true,
      spaceBetween: 8,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 1.4,
        },
        1200: {
          slidesPerView: 2.4,
        },
      },
    });
  },
};
</script>

<style></style>