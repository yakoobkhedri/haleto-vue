<template>
  <Header-2 />

  <main>
    <aos-vue>

      <!-- filter -->
      <section class="mt-5 pt-5">
        <form class="container"> 
         <div class="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between gap-4 fw-bold"> 
          <div class="text-main rounded-8 bg-main6 w-100 text-center cursor-pointer py-3">کتاب های رایگان</div>
          <div class="text-main rounded-8 bg-main6 w-100 text-center cursor-pointer py-3">پر فروش ترین ها</div>
          <div class="text-main rounded-8 bg-main6 w-100 text-center cursor-pointer py-3">کتاب های برگزیده</div>
          <div class="text-main rounded-8 bg-main6 w-100 text-center cursor-pointer py-3">کتاب های چاپی</div>
         </div>
         <div class="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between gap-4 fw-bold mt-4"> 
          <div class="w-100"> 
            <p class="font-bold mb-0 pb-2 border-bottom">قیمت</p>
            <div class="d-flex align-items-center justify-content-between gap-4 mt-2"> 
             <div class="d-flex align-items-center gap-2"> 
               <input class="rounded-1 text-center w-42 h-32 outline-none bg-transparent border border-dark">
               <p class="fs-10 text-muted mb-0">تومان</p>
             </div>
             <p class="fs-18 mb-0 text-muted">از</p>
             <div class="d-flex align-items-center gap-2"> 
               <input class="rounded-1 text-center w-42 h-32 outline-none bg-transparent border border-dark">
               <p class="fs-10 text-muted mb-0">تومان</p>
             </div>
            </div>
          </div>
          <select class="bg-white rounded-8 shadow-sm px-2 h-48 w-100 border-0">
            <option>نوع کتاب</option>
            <option>نوع کتاب</option>
          </select>
          <select class="bg-white rounded-8 shadow-sm px-2 h-48 w-100 border-0">
            <option>نوع دسترسی</option>
            <option>نوع دسترسی</option>
          </select>
          <select class="bg-white rounded-8 shadow-sm px-2 h-48 w-100 border-0">
            <option>برند</option>
            <option>برند</option>
          </select>
         </div>
         <button class="bg-main text-white fw-bold rounded-8 w-202 w-sm-100 h-44 mt-4 border-0">فیلتر کنید</button>
        </form>
      </section>

      <!-- blog grid -->
      <section class="mt-5">
        <div class="container">
          <div class="row g-4 mx-0">
            <div class="col-xl-4 col-md-6">
              <div
                class="rounded-12 py-4 overflow-hidden bg-white position-relative"
              >
                <span
                  class="font-bold z-1 shadow fs-12 bg-orange-transparent text-orange d-flex align-items-center justify-content-center w-70 rounded-l-4 h-28 position-absolute top-0 end-0 mt-2"
                  >30%-</span
                >
                <div class="position-relative mx-5">
                  <img
                    alt="img"
                    :src="require('../assets/img/book16 3.png')"
                    class="d-block mx-auto shadow w-100"
                  />
                  <div
                    class="d-flex align-items-center justify-content-center cursor-pointer w-40 h-40 rounded-circle border position-absolute bottom-0 start-0 bg-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_187_220)">
                        <path
                          d="M19.6602 3.99C17.0202 2.19 13.7602 3.03 12.0002 5.09C10.2402 3.03 6.98021 2.18 4.34021 3.99C2.94021 4.95 2.06021 6.57 2.00021 8.28C1.86021 12.16 5.30021 15.27 10.5502 20.04L10.6502 20.13C11.4102 20.82 12.5802 20.82 13.3402 20.12L13.4502 20.02C18.7002 15.26 22.1302 12.15 22.0002 8.27C21.9402 6.57 21.0602 4.95 19.6602 3.99ZM12.1002 18.55L12.0002 18.65L11.9002 18.55C7.14021 14.24 4.00021 11.39 4.00021 8.5C4.00021 6.5 5.50021 5 7.50021 5C9.04021 5 10.5402 5.99 11.0702 7.36H12.9402C13.4602 5.99 14.9602 5 16.5002 5C18.5002 5 20.0002 6.5 20.0002 8.5C20.0002 11.39 16.8602 14.24 12.1002 18.55Z"
                          fill="#263238"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_187_220">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center gap-3 justify-content-between mx-5 mt-4"
                >
                  <h6 class="fw-bold mb-0 text-second fs-sm-14">
                    خلق مدل کسب و کار
                  </h6>
                  <div class="d-flex align-items-center gap-2">
                    <p class="mb-0 fs-14">4.5</p>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.73467 0.502901C6.84723 0.289557 7.15277 0.289558 7.26533 0.502902L9.0707 3.92471C9.11411 4.00699 9.19323 4.06447 9.28489 4.08033L13.0971 4.73994C13.3348 4.78106 13.4292 5.07165 13.2611 5.24463L10.5647 8.01904C10.4998 8.08575 10.4696 8.17876 10.4828 8.27083L11.0336 12.1003C11.0679 12.3391 10.8207 12.5187 10.6042 12.4122L7.13237 10.7051C7.0489 10.664 6.9511 10.664 6.86763 10.7051L3.39576 12.4122C3.1793 12.5187 2.93211 12.3391 2.96644 12.1003L3.51716 8.27083C3.5304 8.17876 3.50018 8.08575 3.43534 8.01904L0.738899 5.24463C0.57078 5.07165 0.665199 4.78106 0.902885 4.73994L4.71511 4.08033C4.80677 4.06447 4.88589 4.00699 4.9293 3.92471L6.73467 0.502901Z"
                        fill="#FFC41F"
                      />
                    </svg>
                  </div>
                </div>
                <a
                  href="single-book.html"
                  class="d-flex mt-4 mx-5 align-items-center justify-content-center transition text-main fw-bold rounded-8 blogLink h-48"
                  >مطالعه بیشتر</a
                >
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div
                class="rounded-12 py-4 overflow-hidden bg-white position-relative"
              >
                <span
                  class="font-bold z-1 shadow fs-12 bg-orange-transparent text-orange d-flex align-items-center justify-content-center w-70 rounded-l-4 h-28 position-absolute top-0 end-0 mt-2"
                  >30%-</span
                >
                <div class="position-relative mx-5">
                  <img
                    alt="img"
                    :src="require('../assets/img/book3 4.png')"
                    class="d-block mx-auto shadow w-100"
                  />
                  <div
                    class="d-flex align-items-center justify-content-center cursor-pointer w-40 h-40 rounded-circle border position-absolute bottom-0 start-0 bg-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_187_220)">
                        <path
                          d="M19.6602 3.99C17.0202 2.19 13.7602 3.03 12.0002 5.09C10.2402 3.03 6.98021 2.18 4.34021 3.99C2.94021 4.95 2.06021 6.57 2.00021 8.28C1.86021 12.16 5.30021 15.27 10.5502 20.04L10.6502 20.13C11.4102 20.82 12.5802 20.82 13.3402 20.12L13.4502 20.02C18.7002 15.26 22.1302 12.15 22.0002 8.27C21.9402 6.57 21.0602 4.95 19.6602 3.99ZM12.1002 18.55L12.0002 18.65L11.9002 18.55C7.14021 14.24 4.00021 11.39 4.00021 8.5C4.00021 6.5 5.50021 5 7.50021 5C9.04021 5 10.5402 5.99 11.0702 7.36H12.9402C13.4602 5.99 14.9602 5 16.5002 5C18.5002 5 20.0002 6.5 20.0002 8.5C20.0002 11.39 16.8602 14.24 12.1002 18.55Z"
                          fill="#263238"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_187_220">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center gap-3 justify-content-between mx-5 mt-4"
                >
                  <h6 class="fw-bold mb-0 text-second fs-sm-14">
                    خلق مدل کسب و کار
                  </h6>
                  <div class="d-flex align-items-center gap-2">
                    <p class="mb-0 fs-14">4.5</p>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.73467 0.502901C6.84723 0.289557 7.15277 0.289558 7.26533 0.502902L9.0707 3.92471C9.11411 4.00699 9.19323 4.06447 9.28489 4.08033L13.0971 4.73994C13.3348 4.78106 13.4292 5.07165 13.2611 5.24463L10.5647 8.01904C10.4998 8.08575 10.4696 8.17876 10.4828 8.27083L11.0336 12.1003C11.0679 12.3391 10.8207 12.5187 10.6042 12.4122L7.13237 10.7051C7.0489 10.664 6.9511 10.664 6.86763 10.7051L3.39576 12.4122C3.1793 12.5187 2.93211 12.3391 2.96644 12.1003L3.51716 8.27083C3.5304 8.17876 3.50018 8.08575 3.43534 8.01904L0.738899 5.24463C0.57078 5.07165 0.665199 4.78106 0.902885 4.73994L4.71511 4.08033C4.80677 4.06447 4.88589 4.00699 4.9293 3.92471L6.73467 0.502901Z"
                        fill="#FFC41F"
                      />
                    </svg>
                  </div>
                </div>
                <a
                  href="single-book.html"
                  class="d-flex mt-4 mx-5 align-items-center justify-content-center transition text-main fw-bold rounded-8 blogLink h-48"
                  >مطالعه بیشتر</a
                >
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div
                class="rounded-12 py-4 overflow-hidden bg-white position-relative"
              >
                <span
                  class="font-bold z-1 shadow fs-12 bg-orange-transparent text-orange d-flex align-items-center justify-content-center w-70 rounded-l-4 h-28 position-absolute top-0 end-0 mt-2"
                  >30%-</span
                >
                <div class="position-relative mx-5">
                  <img
                    alt="img"
                    :src="require('../assets/img/book3 4(1).png')"
                    class="d-block mx-auto shadow w-100"
                  />
                  <div
                    class="d-flex align-items-center justify-content-center cursor-pointer w-40 h-40 rounded-circle border position-absolute bottom-0 start-0 bg-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_187_220)">
                        <path
                          d="M19.6602 3.99C17.0202 2.19 13.7602 3.03 12.0002 5.09C10.2402 3.03 6.98021 2.18 4.34021 3.99C2.94021 4.95 2.06021 6.57 2.00021 8.28C1.86021 12.16 5.30021 15.27 10.5502 20.04L10.6502 20.13C11.4102 20.82 12.5802 20.82 13.3402 20.12L13.4502 20.02C18.7002 15.26 22.1302 12.15 22.0002 8.27C21.9402 6.57 21.0602 4.95 19.6602 3.99ZM12.1002 18.55L12.0002 18.65L11.9002 18.55C7.14021 14.24 4.00021 11.39 4.00021 8.5C4.00021 6.5 5.50021 5 7.50021 5C9.04021 5 10.5402 5.99 11.0702 7.36H12.9402C13.4602 5.99 14.9602 5 16.5002 5C18.5002 5 20.0002 6.5 20.0002 8.5C20.0002 11.39 16.8602 14.24 12.1002 18.55Z"
                          fill="#263238"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_187_220">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center gap-3 justify-content-between mx-5 mt-4"
                >
                  <h6 class="fw-bold mb-0 text-second fs-sm-14">
                    خلق مدل کسب و کار
                  </h6>
                  <div class="d-flex align-items-center gap-2">
                    <p class="mb-0 fs-14">4.5</p>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.73467 0.502901C6.84723 0.289557 7.15277 0.289558 7.26533 0.502902L9.0707 3.92471C9.11411 4.00699 9.19323 4.06447 9.28489 4.08033L13.0971 4.73994C13.3348 4.78106 13.4292 5.07165 13.2611 5.24463L10.5647 8.01904C10.4998 8.08575 10.4696 8.17876 10.4828 8.27083L11.0336 12.1003C11.0679 12.3391 10.8207 12.5187 10.6042 12.4122L7.13237 10.7051C7.0489 10.664 6.9511 10.664 6.86763 10.7051L3.39576 12.4122C3.1793 12.5187 2.93211 12.3391 2.96644 12.1003L3.51716 8.27083C3.5304 8.17876 3.50018 8.08575 3.43534 8.01904L0.738899 5.24463C0.57078 5.07165 0.665199 4.78106 0.902885 4.73994L4.71511 4.08033C4.80677 4.06447 4.88589 4.00699 4.9293 3.92471L6.73467 0.502901Z"
                        fill="#FFC41F"
                      />
                    </svg>
                  </div>
                </div>
                <a
                  href="single-book.html"
                  class="d-flex mt-4 mx-5 align-items-center justify-content-center transition text-main fw-bold rounded-8 blogLink h-48"
                  >مطالعه بیشتر</a
                >
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div
                class="rounded-12 py-4 overflow-hidden bg-white position-relative"
              >
                <span
                  class="font-bold z-1 shadow fs-12 bg-orange-transparent text-orange d-flex align-items-center justify-content-center w-70 rounded-l-4 h-28 position-absolute top-0 end-0 mt-2"
                  >30%-</span
                >
                <div class="position-relative mx-5">
                  <img
                    alt="img"
                    :src="require('../assets/img/book16 3.png')"
                    class="d-block mx-auto shadow w-100"
                  />
                  <div
                    class="d-flex align-items-center justify-content-center cursor-pointer w-40 h-40 rounded-circle border position-absolute bottom-0 start-0 bg-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_187_220)">
                        <path
                          d="M19.6602 3.99C17.0202 2.19 13.7602 3.03 12.0002 5.09C10.2402 3.03 6.98021 2.18 4.34021 3.99C2.94021 4.95 2.06021 6.57 2.00021 8.28C1.86021 12.16 5.30021 15.27 10.5502 20.04L10.6502 20.13C11.4102 20.82 12.5802 20.82 13.3402 20.12L13.4502 20.02C18.7002 15.26 22.1302 12.15 22.0002 8.27C21.9402 6.57 21.0602 4.95 19.6602 3.99ZM12.1002 18.55L12.0002 18.65L11.9002 18.55C7.14021 14.24 4.00021 11.39 4.00021 8.5C4.00021 6.5 5.50021 5 7.50021 5C9.04021 5 10.5402 5.99 11.0702 7.36H12.9402C13.4602 5.99 14.9602 5 16.5002 5C18.5002 5 20.0002 6.5 20.0002 8.5C20.0002 11.39 16.8602 14.24 12.1002 18.55Z"
                          fill="#263238"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_187_220">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center gap-3 justify-content-between mx-5 mt-4"
                >
                  <h6 class="fw-bold mb-0 text-second fs-sm-14">
                    خلق مدل کسب و کار
                  </h6>
                  <div class="d-flex align-items-center gap-2">
                    <p class="mb-0 fs-14">4.5</p>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.73467 0.502901C6.84723 0.289557 7.15277 0.289558 7.26533 0.502902L9.0707 3.92471C9.11411 4.00699 9.19323 4.06447 9.28489 4.08033L13.0971 4.73994C13.3348 4.78106 13.4292 5.07165 13.2611 5.24463L10.5647 8.01904C10.4998 8.08575 10.4696 8.17876 10.4828 8.27083L11.0336 12.1003C11.0679 12.3391 10.8207 12.5187 10.6042 12.4122L7.13237 10.7051C7.0489 10.664 6.9511 10.664 6.86763 10.7051L3.39576 12.4122C3.1793 12.5187 2.93211 12.3391 2.96644 12.1003L3.51716 8.27083C3.5304 8.17876 3.50018 8.08575 3.43534 8.01904L0.738899 5.24463C0.57078 5.07165 0.665199 4.78106 0.902885 4.73994L4.71511 4.08033C4.80677 4.06447 4.88589 4.00699 4.9293 3.92471L6.73467 0.502901Z"
                        fill="#FFC41F"
                      />
                    </svg>
                  </div>
                </div>
                <a
                  href="single-book.html"
                  class="d-flex mt-4 mx-5 align-items-center justify-content-center transition text-main fw-bold rounded-8 blogLink h-48"
                  >مطالعه بیشتر</a
                >
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div
                class="rounded-12 py-4 overflow-hidden bg-white position-relative"
              >
                <span
                  class="font-bold z-1 shadow fs-12 bg-orange-transparent text-orange d-flex align-items-center justify-content-center w-70 rounded-l-4 h-28 position-absolute top-0 end-0 mt-2"
                  >30%-</span
                >
                <div class="position-relative mx-5">
                  <img
                    alt="img"
                    :src="require('../assets/img/book3 4.png')"
                    class="d-block mx-auto shadow w-100"
                  />
                  <div
                    class="d-flex align-items-center justify-content-center cursor-pointer w-40 h-40 rounded-circle border position-absolute bottom-0 start-0 bg-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_187_220)">
                        <path
                          d="M19.6602 3.99C17.0202 2.19 13.7602 3.03 12.0002 5.09C10.2402 3.03 6.98021 2.18 4.34021 3.99C2.94021 4.95 2.06021 6.57 2.00021 8.28C1.86021 12.16 5.30021 15.27 10.5502 20.04L10.6502 20.13C11.4102 20.82 12.5802 20.82 13.3402 20.12L13.4502 20.02C18.7002 15.26 22.1302 12.15 22.0002 8.27C21.9402 6.57 21.0602 4.95 19.6602 3.99ZM12.1002 18.55L12.0002 18.65L11.9002 18.55C7.14021 14.24 4.00021 11.39 4.00021 8.5C4.00021 6.5 5.50021 5 7.50021 5C9.04021 5 10.5402 5.99 11.0702 7.36H12.9402C13.4602 5.99 14.9602 5 16.5002 5C18.5002 5 20.0002 6.5 20.0002 8.5C20.0002 11.39 16.8602 14.24 12.1002 18.55Z"
                          fill="#263238"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_187_220">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center gap-3 justify-content-between mx-5 mt-4"
                >
                  <h6 class="fw-bold mb-0 text-second fs-sm-14">
                    خلق مدل کسب و کار
                  </h6>
                  <div class="d-flex align-items-center gap-2">
                    <p class="mb-0 fs-14">4.5</p>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.73467 0.502901C6.84723 0.289557 7.15277 0.289558 7.26533 0.502902L9.0707 3.92471C9.11411 4.00699 9.19323 4.06447 9.28489 4.08033L13.0971 4.73994C13.3348 4.78106 13.4292 5.07165 13.2611 5.24463L10.5647 8.01904C10.4998 8.08575 10.4696 8.17876 10.4828 8.27083L11.0336 12.1003C11.0679 12.3391 10.8207 12.5187 10.6042 12.4122L7.13237 10.7051C7.0489 10.664 6.9511 10.664 6.86763 10.7051L3.39576 12.4122C3.1793 12.5187 2.93211 12.3391 2.96644 12.1003L3.51716 8.27083C3.5304 8.17876 3.50018 8.08575 3.43534 8.01904L0.738899 5.24463C0.57078 5.07165 0.665199 4.78106 0.902885 4.73994L4.71511 4.08033C4.80677 4.06447 4.88589 4.00699 4.9293 3.92471L6.73467 0.502901Z"
                        fill="#FFC41F"
                      />
                    </svg>
                  </div>
                </div>
                <a
                  href="single-book.html"
                  class="d-flex mt-4 mx-5 align-items-center justify-content-center transition text-main fw-bold rounded-8 blogLink h-48"
                  >مطالعه بیشتر</a
                >
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div
                class="rounded-12 py-4 overflow-hidden bg-white position-relative"
              >
                <span
                  class="font-bold z-1 shadow fs-12 bg-orange-transparent text-orange d-flex align-items-center justify-content-center w-70 rounded-l-4 h-28 position-absolute top-0 end-0 mt-2"
                  >30%-</span
                >
                <div class="position-relative mx-5">
                  <img
                    alt="img"
                    :src="require('../assets/img/book3 4(1).png')"
                    class="d-block mx-auto shadow w-100"
                  />
                  <div
                    class="d-flex align-items-center justify-content-center cursor-pointer w-40 h-40 rounded-circle border position-absolute bottom-0 start-0 bg-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_187_220)">
                        <path
                          d="M19.6602 3.99C17.0202 2.19 13.7602 3.03 12.0002 5.09C10.2402 3.03 6.98021 2.18 4.34021 3.99C2.94021 4.95 2.06021 6.57 2.00021 8.28C1.86021 12.16 5.30021 15.27 10.5502 20.04L10.6502 20.13C11.4102 20.82 12.5802 20.82 13.3402 20.12L13.4502 20.02C18.7002 15.26 22.1302 12.15 22.0002 8.27C21.9402 6.57 21.0602 4.95 19.6602 3.99ZM12.1002 18.55L12.0002 18.65L11.9002 18.55C7.14021 14.24 4.00021 11.39 4.00021 8.5C4.00021 6.5 5.50021 5 7.50021 5C9.04021 5 10.5402 5.99 11.0702 7.36H12.9402C13.4602 5.99 14.9602 5 16.5002 5C18.5002 5 20.0002 6.5 20.0002 8.5C20.0002 11.39 16.8602 14.24 12.1002 18.55Z"
                          fill="#263238"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_187_220">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center gap-3 justify-content-between mx-5 mt-4"
                >
                  <h6 class="fw-bold mb-0 text-second fs-sm-14">
                    خلق مدل کسب و کار
                  </h6>
                  <div class="d-flex align-items-center gap-2">
                    <p class="mb-0 fs-14">4.5</p>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.73467 0.502901C6.84723 0.289557 7.15277 0.289558 7.26533 0.502902L9.0707 3.92471C9.11411 4.00699 9.19323 4.06447 9.28489 4.08033L13.0971 4.73994C13.3348 4.78106 13.4292 5.07165 13.2611 5.24463L10.5647 8.01904C10.4998 8.08575 10.4696 8.17876 10.4828 8.27083L11.0336 12.1003C11.0679 12.3391 10.8207 12.5187 10.6042 12.4122L7.13237 10.7051C7.0489 10.664 6.9511 10.664 6.86763 10.7051L3.39576 12.4122C3.1793 12.5187 2.93211 12.3391 2.96644 12.1003L3.51716 8.27083C3.5304 8.17876 3.50018 8.08575 3.43534 8.01904L0.738899 5.24463C0.57078 5.07165 0.665199 4.78106 0.902885 4.73994L4.71511 4.08033C4.80677 4.06447 4.88589 4.00699 4.9293 3.92471L6.73467 0.502901Z"
                        fill="#FFC41F"
                      />
                    </svg>
                  </div>
                </div>
                <a
                  href="single-book.html"
                  class="d-flex mt-4 mx-5 align-items-center justify-content-center transition text-main fw-bold rounded-8 blogLink h-48"
                  >مطالعه بیشتر</a
                >
              </div>
            </div>
          </div>
          <!-- pagination -->
          <div
            class="d-flex align-items-center justify-content-center gap-3 mt-5 pagination font-bold"
          >
            <div
              class="h-48 w-48 cursor-pointer rounded-circle bg-white d-flex align-items-center justify-content-center blogLink"
            >
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.123 0.789062L19.6001 6.35629L14.123 11.9235L12.977 10.732L16.4662 7.18487H0.114805V5.52771H16.4671L12.977 1.98056L14.123 0.789062Z"
                  fill="#6CB771"
                />
              </svg>
            </div>
            <a
              class="d-flex align-items-center justify-content-center w-48 h-48 rounded-circle border text-secondary fs-22 active"
              >1</a
            >
            <a
              class="d-flex align-items-center justify-content-center w-48 h-48 rounded-circle border text-secondary fs-22"
              >2</a
            >
            <a
              class="d-flex align-items-center justify-content-center w-48 h-48 rounded-circle border text-secondary fs-22"
              >3</a
            >
            <div
              class="h-48 w-48 cursor-pointer rounded-circle bg-white d-flex align-items-center justify-content-center blogLink"
            >
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.59039 0.789062L0.113281 6.35629L5.59039 11.9235L6.73634 10.732L3.24713 7.18487H19.5986V5.52771H3.24632L6.73634 1.98056L5.59039 0.789062Z"
                  fill="#6CB771"
                />
              </svg>
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

export default {
  components: { Header2, Footer },
  name: "Blog-component",
};
</script>

<style></style>