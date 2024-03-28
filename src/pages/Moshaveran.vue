<template>
 <main>

    <aos-vue>
      
      <section class="py-5 my-5">
      <div class="container">
        <form class="border max-w-581 mx-auto d-flex align-items-center gap-2 rounded-8 p-2">
          <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 21C7.25329 21 3 16.7467 3 11.5C3 6.25329 7.25329 2 12.5 2C17.7467 2 22 6.25329 22 11.5C22 16.7467 17.7467 21 12.5 21Z" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 22L4 20" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input class="outline-none w-100 h-100 border-0 bg-transparent">
        </form>
        <div class="mt-5 row mx-0 g-4">
          <div class="col-xl-4 col-md-6" data-aos="fade-up">
            <div class="rounded-12 shadow p-3 bg-white overflow-hidden">
              <div class="d-flex align-items-center gap-2 border-bottom pb-3">
               <div class="position-relative">
                 <div class="border p-1 bg-white rounded-circle w-66 h-66">
                   <img alt="img" :src="require('../assets/img/Ellipse 312.png')" class="img-fluid rounded-circle">
                 </div>
                 <span class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"></span>
               </div>
               <div class="font-bold">
                <p class="mb-1">دکتر سارا احمدی</p>
                <p class="mb-0">متخصص و روانشناس</p>
               </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-4 mb-2">
               <a class="bg-main rounded-8 text-white font-bold h-48 px-5 d-flex align-items-center">انتخاب</a>
               <div class="d-flex align-items-center gap-4">
                 <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 7.5L12.8053 12.2375C12.314 12.5502 11.686 12.5502 11.1947 12.2375L3.75 7.5M5.25 18.75H18.75C19.5784 18.75 20.25 18.0784 20.25 17.25V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V17.25C3.75 18.0784 4.42157 18.75 5.25 18.75Z" stroke="#232524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </a>
                 <div class="d-flex align-items-center gap-2">
                   <p class="mb-0 font-bold text-main">%15</p>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z" fill="#232524"/>
                    <path d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z" fill="#232524"/>
                  </svg>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6" data-aos="fade-down">
            <div class="rounded-12 shadow p-3 bg-white overflow-hidden">
              <div class="d-flex align-items-center gap-2 border-bottom pb-3">
               <div class="position-relative">
                 <div class="border p-1 bg-white rounded-circle w-66 h-66">
                   <img alt="img" :src="require('../assets/img/Ellipse 309.png')" class="img-fluid rounded-circle">
                 </div>
                 <span class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"></span>
               </div>
               <div class="font-bold">
                <p class="mb-1">دکتر امیر مرادی</p>
                <p class="mb-0">متخصص و روانشناس</p>
               </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-4 mb-2">
               <a class="bg-main rounded-8 text-white font-bold h-48 px-5 d-flex align-items-center">انتخاب</a>
               <div class="d-flex align-items-center gap-4">
                 <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 7.5L12.8053 12.2375C12.314 12.5502 11.686 12.5502 11.1947 12.2375L3.75 7.5M5.25 18.75H18.75C19.5784 18.75 20.25 18.0784 20.25 17.25V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V17.25C3.75 18.0784 4.42157 18.75 5.25 18.75Z" stroke="#232524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </a>
                 <div class="d-flex align-items-center gap-2">
                   <p class="mb-0 font-bold text-main">%15</p>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z" fill="#232524"/>
                    <path d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z" fill="#232524"/>
                  </svg>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6" data-aos="fade-up">
            <div class="rounded-12 shadow p-3 bg-white overflow-hidden">
              <div class="d-flex align-items-center gap-2 border-bottom pb-3">
               <div class="position-relative">
                 <div class="border p-1 bg-white rounded-circle w-66 h-66">
                   <img alt="img" :src="require('../assets/img/Ellipse 312.png')" class="img-fluid rounded-circle">
                 </div>
                 <span class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"></span>
               </div>
               <div class="font-bold">
                <p class="mb-1">دکتر سارا احمدی</p>
                <p class="mb-0">متخصص و روانشناس</p>
               </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-4 mb-2">
               <a class="bg-main rounded-8 text-white font-bold h-48 px-5 d-flex align-items-center">انتخاب</a>
               <div class="d-flex align-items-center gap-4">
                 <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 7.5L12.8053 12.2375C12.314 12.5502 11.686 12.5502 11.1947 12.2375L3.75 7.5M5.25 18.75H18.75C19.5784 18.75 20.25 18.0784 20.25 17.25V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V17.25C3.75 18.0784 4.42157 18.75 5.25 18.75Z" stroke="#232524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </a>
                 <div class="d-flex align-items-center gap-2">
                   <p class="mb-0 font-bold text-main">%15</p>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z" fill="#232524"/>
                    <path d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z" fill="#232524"/>
                  </svg>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6" data-aos="fade-down">
            <div class="rounded-12 shadow p-3 bg-white overflow-hidden">
              <div class="d-flex align-items-center gap-2 border-bottom pb-3">
               <div class="position-relative">
                 <div class="border p-1 bg-white rounded-circle w-66 h-66">
                   <img alt="img" :src="require('../assets/img/Ellipse 312.png')" class="img-fluid rounded-circle">
                 </div>
                 <span class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"></span>
               </div>
               <div class="font-bold">
                <p class="mb-1">دکتر سارا احمدی</p>
                <p class="mb-0">متخصص و روانشناس</p>
               </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-4 mb-2">
               <a class="bg-main rounded-8 text-white font-bold h-48 px-5 d-flex align-items-center">انتخاب</a>
               <div class="d-flex align-items-center gap-4">
                 <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 7.5L12.8053 12.2375C12.314 12.5502 11.686 12.5502 11.1947 12.2375L3.75 7.5M5.25 18.75H18.75C19.5784 18.75 20.25 18.0784 20.25 17.25V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V17.25C3.75 18.0784 4.42157 18.75 5.25 18.75Z" stroke="#232524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </a>
                 <div class="d-flex align-items-center gap-2">
                   <p class="mb-0 font-bold text-main">%15</p>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z" fill="#232524"/>
                    <path d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z" fill="#232524"/>
                  </svg>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6" data-aos="fade-up">
            <div class="rounded-12 shadow p-3 bg-white overflow-hidden">
              <div class="d-flex align-items-center gap-2 border-bottom pb-3">
               <div class="position-relative">
                 <div class="border p-1 bg-white rounded-circle w-66 h-66">
                   <img alt="img" :src="require('../assets/img/Ellipse 309.png')" class="img-fluid rounded-circle">
                 </div>
                 <span class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"></span>
               </div>
               <div class="font-bold">
                <p class="mb-1">دکتر امیر مرادی</p>
                <p class="mb-0">متخصص و روانشناس</p>
               </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-4 mb-2">
               <a class="bg-main rounded-8 text-white font-bold h-48 px-5 d-flex align-items-center">انتخاب</a>
               <div class="d-flex align-items-center gap-4">
                 <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 7.5L12.8053 12.2375C12.314 12.5502 11.686 12.5502 11.1947 12.2375L3.75 7.5M5.25 18.75H18.75C19.5784 18.75 20.25 18.0784 20.25 17.25V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V17.25C3.75 18.0784 4.42157 18.75 5.25 18.75Z" stroke="#232524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </a>
                 <div class="d-flex align-items-center gap-2">
                   <p class="mb-0 font-bold text-main">%15</p>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z" fill="#232524"/>
                    <path d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z" fill="#232524"/>
                  </svg>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6" data-aos="fade-down">
            <div class="rounded-12 shadow p-3 bg-white overflow-hidden">
              <div class="d-flex align-items-center gap-2 border-bottom pb-3">
               <div class="position-relative">
                 <div class="border p-1 bg-white rounded-circle w-66 h-66">
                   <img alt="img" :src="require('../assets/img/Ellipse 312.png')" class="img-fluid rounded-circle">
                 </div>
                 <span class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"></span>
               </div>
               <div class="font-bold">
                <p class="mb-1">دکتر سارا احمدی</p>
                <p class="mb-0">متخصص و روانشناس</p>
               </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-4 mb-2">
               <a class="bg-main rounded-8 text-white font-bold h-48 px-5 d-flex align-items-center">انتخاب</a>
               <div class="d-flex align-items-center gap-4">
                 <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 7.5L12.8053 12.2375C12.314 12.5502 11.686 12.5502 11.1947 12.2375L3.75 7.5M5.25 18.75H18.75C19.5784 18.75 20.25 18.0784 20.25 17.25V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V17.25C3.75 18.0784 4.42157 18.75 5.25 18.75Z" stroke="#232524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </a>
                 <div class="d-flex align-items-center gap-2">
                   <p class="mb-0 font-bold text-main">%15</p>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z" fill="#232524"/>
                    <path d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z" fill="#232524"/>
                  </svg>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6" data-aos="fade-up">
            <div class="rounded-12 shadow p-3 bg-white overflow-hidden">
              <div class="d-flex align-items-center gap-2 border-bottom pb-3">
               <div class="position-relative">
                 <div class="border p-1 bg-white rounded-circle w-66 h-66">
                   <img alt="img" :src="require('../assets/img/Ellipse 312.png')" class="img-fluid rounded-circle">
                 </div>
                 <span class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"></span>
               </div>
               <div class="font-bold">
                <p class="mb-1">دکتر سارا احمدی</p>
                <p class="mb-0">متخصص و روانشناس</p>
               </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-4 mb-2">
               <a class="bg-main rounded-8 text-white font-bold h-48 px-5 d-flex align-items-center">انتخاب</a>
               <div class="d-flex align-items-center gap-4">
                 <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 7.5L12.8053 12.2375C12.314 12.5502 11.686 12.5502 11.1947 12.2375L3.75 7.5M5.25 18.75H18.75C19.5784 18.75 20.25 18.0784 20.25 17.25V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V17.25C3.75 18.0784 4.42157 18.75 5.25 18.75Z" stroke="#232524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </a>
                 <div class="d-flex align-items-center gap-2">
                   <p class="mb-0 font-bold text-main">%15</p>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z" fill="#232524"/>
                    <path d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z" fill="#232524"/>
                  </svg>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6" data-aos="fade-down">
            <div class="rounded-12 shadow p-3 bg-white overflow-hidden">
              <div class="d-flex align-items-center gap-2 border-bottom pb-3">
               <div class="position-relative">
                 <div class="border p-1 bg-white rounded-circle w-66 h-66">
                   <img alt="img" :src="require('../assets/img/Ellipse 309.png')" class="img-fluid rounded-circle">
                 </div>
                 <span class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"></span>
               </div>
               <div class="font-bold">
                <p class="mb-1">دکتر امیر مرادی</p>
                <p class="mb-0">متخصص و روانشناس</p>
               </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-4 mb-2">
               <a class="bg-main rounded-8 text-white font-bold h-48 px-5 d-flex align-items-center">انتخاب</a>
               <div class="d-flex align-items-center gap-4">
                 <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 7.5L12.8053 12.2375C12.314 12.5502 11.686 12.5502 11.1947 12.2375L3.75 7.5M5.25 18.75H18.75C19.5784 18.75 20.25 18.0784 20.25 17.25V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V17.25C3.75 18.0784 4.42157 18.75 5.25 18.75Z" stroke="#232524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </a>
                 <div class="d-flex align-items-center gap-2">
                   <p class="mb-0 font-bold text-main">%15</p>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z" fill="#232524"/>
                    <path d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z" fill="#232524"/>
                  </svg>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6" data-aos="fade-up">
            <div class="rounded-12 shadow p-3 bg-white overflow-hidden">
              <div class="d-flex align-items-center gap-2 border-bottom pb-3">
               <div class="position-relative">
                 <div class="border p-1 bg-white rounded-circle w-66 h-66">
                   <img alt="img" :src="require('../assets/img/Ellipse 312.png')" class="img-fluid rounded-circle">
                 </div>
                 <span class="d-block position-absolute w-16 h-16 rounded-circle bg-main bottom-0 me-1 mb-1"></span>
               </div>
               <div class="font-bold">
                <p class="mb-1">دکتر سارا احمدی</p>
                <p class="mb-0">متخصص و روانشناس</p>
               </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-4 mb-2">
               <a class="bg-main rounded-8 text-white font-bold h-48 px-5 d-flex align-items-center">انتخاب</a>
               <div class="d-flex align-items-center gap-4">
                 <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 7.5L12.8053 12.2375C12.314 12.5502 11.686 12.5502 11.1947 12.2375L3.75 7.5M5.25 18.75H18.75C19.5784 18.75 20.25 18.0784 20.25 17.25V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V17.25C3.75 18.0784 4.42157 18.75 5.25 18.75Z" stroke="#232524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </a>
                 <div class="d-flex align-items-center gap-2">
                   <p class="mb-0 font-bold text-main">%15</p>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z" fill="#232524"/>
                    <path d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z" fill="#232524"/>
                  </svg>
                 </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </aos-vue>
    
  </main>
</template>

<script>

export default {
  name: "Moshaveran-component",
};
</script>

<style></style>