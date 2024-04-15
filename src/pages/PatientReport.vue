<template>

  <!-- Modal -->
  <div
    class="modal fade"
    id="moreInfoModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close ms-0 me-auto"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="accordion" id="accordionExample1">
          <div class="accordion-item shadow-sm mb-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button text-main font-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseModal"
                aria-expanded="true"
                aria-controls="collapseModal"
              >
                مشخصات فردی مراجع
              </button>
            </h2>
            <div
              id="collapseModal"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample1"
            >
              <div class="accordion-body py-4 px-2">
                <div class="row mx-0 g-3">
                  <div class="col-lg-4 col-sm-6">
                    <p class="text-secondary">
                      نام و نام خانوادگی:<span class="text-dark font-bold"
                        >مهسا امیری</span
                      >
                    </p>
                    <p class="text-secondary">
                      تاریخ تولد:<span class="text-dark font-bold"
                        >1375/09/12</span
                      >
                    </p>
                    <p class="text-secondary">
                      شماره پرونده:<span class="text-dark font-bold"
                        >123456</span
                      >
                    </p>
                    <p class="text-secondary mb-0">
                      کدملی:<span class="text-dark font-bold">285439845</span>
                    </p>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <p class="text-secondary">
                      بیمه:<span class="text-dark font-bold"
                        >تامین اجتماعی</span
                      >
                    </p>
                    <p class="text-secondary">
                      جنسیت:<span class="text-dark font-bold">زن</span>
                    </p>
                    <p class="text-secondary">
                      شماره موبایل:<span class="text-dark font-bold"
                        >09149492490</span
                      >
                    </p>
                    <p class="text-secondary mb-0">
                      ایمیل:<span class="text-dark font-bold"
                        >yakoobkhedri@gmail.com</span
                      >
                    </p>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <p class="text-secondary">
                      کشور:<span class="text-dark font-bold">ایران</span>
                    </p>
                    <p class="text-secondary">
                      شهر:<span class="text-dark font-bold">تهران</span>
                    </p>
                    <p class="text-secondary">
                      تاریخ آخرین مراجعه:<span class="text-dark font-bold"
                        >1402/09/21</span
                      >
                    </p>
                    <p class="text-secondary mb-0">
                      ساعت آخرین مراجعه:<span class="text-dark font-bold"
                        >18:10 عصر</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

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
        <a
          class="w-174 h-48 bg-white border border-dark rounded-8 fw-bold d-flex align-items-center justify-content-center text-dark position-relative"
        >
          پنل کاربری
        </a>
      </div>
      <div class="mt-5 mb-5 pb-3 px-sm-4 px-3 position-relative">
        <div class="accordion" id="accordionExample2">
          <div class="accordion-item shadow-sm mb-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button text-main font-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                مشخصات فردی مراجع
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample2"
            >
              <div class="accordion-body py-4 px-2">
                <div class="row mx-0 g-3">
                  <div class="col-lg-4 col-sm-6">
                    <p class="text-secondary">
                      نام و نام خانوادگی:<span class="text-dark font-bold"
                        >مهسا امیری</span
                      >
                    </p>
                    <p class="text-secondary">
                      تاریخ تولد:<span class="text-dark font-bold"
                        >1375/09/12</span
                      >
                    </p>
                    <p class="text-secondary">
                      شماره پرونده:<span class="text-dark font-bold"
                        >123456</span
                      >
                    </p>
                    <p class="text-secondary mb-0">
                      کدملی:<span class="text-dark font-bold">285439845</span>
                    </p>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <p class="text-secondary">
                      بیمه:<span class="text-dark font-bold"
                        >تامین اجتماعی</span
                      >
                    </p>
                    <p class="text-secondary">
                      جنسیت:<span class="text-dark font-bold">زن</span>
                    </p>
                    <p class="text-secondary">
                      شماره موبایل:<span class="text-dark font-bold"
                        >09149492490</span
                      >
                    </p>
                    <p class="text-secondary mb-0">
                      ایمیل:<span class="text-dark font-bold"
                        >yakoobkhedri@gmail.com</span
                      >
                    </p>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <p class="text-secondary">
                      کشور:<span class="text-dark font-bold">ایران</span>
                    </p>
                    <p class="text-secondary">
                      شهر:<span class="text-dark font-bold">تهران</span>
                    </p>
                    <p class="text-secondary">
                      تاریخ آخرین مراجعه:<span class="text-dark font-bold"
                        >1402/09/21</span
                      >
                    </p>
                    <p class="text-secondary mb-0">
                      ساعت آخرین مراجعه:<span class="text-dark font-bold"
                        >18:10 عصر</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item shadow-sm mb-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button text-main font-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                شرح حال مراجع
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample2"
            >
              <div class="accordion-body py-4 px-3 fs-sm-12">
                <div class="row mx-0 g-3 border-bottom mb-3">
                  <div class="col-lg-4 col-sm-6">
                    <p class="text-secondary">
                      تاریخچه بیماری/مشکل فعلی:<span class="text-dark font-bold"
                        >افسردگی</span
                      >
                    </p>
                    <p class="text-secondary">
                      زمان شروع بیماری:<span class="text-dark font-bold"
                        >4 ماه قبل</span
                      >
                    </p>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <p class="text-secondary">
                      نحوه شروع بیماری:<span class="text-dark font-bold"
                        >قبول نشدن در کنکور</span
                      >
                    </p>
                  </div>
                </div>
                <div class="border-bottom pb-3 mb-3">
                  <p class="text-secondary fs-14 font-bold">
                    علت مراجعه و شکایات اصلی:
                  </p>
                  <textarea
                    class="border-dashed-2 bg-gray4 w-100 rounded-2 outline-none p-3"
                  ></textarea>
                </div>
                <div class="border-bottom pb-3 mb-3">
                  <p class="text-secondary fs-14 font-bold">
                    علایم شروع بیمار:
                  </p>
                  <div class="row mx-0 g-4 text-secondary mt-0">
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">خودزنی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">کمبود انرژی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس گناه</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس بی ارزشی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">خودزنی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">کمبود انرژی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس گناه</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس بی ارزشی</p></label
                      >
                    </div>
                  </div>
                </div>
                <div class="border-bottom pb-3 mb-3">
                  <p class="text-secondary fs-14 font-bold">تاریخچه تکاملی:</p>
                  <div class="row mx-0 g-4 text-secondary mt-0">
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">خودزنی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">کمبود انرژی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس گناه</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس بی ارزشی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">خودزنی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">کمبود انرژی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس گناه</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس بی ارزشی</p></label
                      >
                    </div>
                  </div>
                </div>
                <div class="border-bottom pb-3 mb-3">
                  <p class="text-secondary fs-14 font-bold mb-0">
                    سابقه مصرف سیگار،مواد، الکل:
                  </p>
                  <div class="row mx-0 g-4 text-secondary mt-0">
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">خیر</p></label
                      >
                    </div>
                  </div>
                </div>
                <div class="border-bottom pb-3 mb-3">
                  <p class="text-secondary fs-14 font-bold mb-0">
                    سابقه بیماری جسمی:
                  </p>
                  <div class="row mx-0 g-4 text-secondary mt-0">
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">خیر</p></label
                      >
                    </div>
                  </div>
                </div>
                <div class="border-bottom pb-3 mb-3">
                  <p class="text-secondary fs-14 font-bold">
                    تاریخچه مشکل فعلی:
                  </p>
                  <div class="row mx-0 g-4 text-secondary mt-0">
                    <div class="col-lg-3 col-sm-4 col-6">
                      <p class="text-secondary">
                        تاریخ آخرین حمله:<span class="text-dark font-bold"
                          >4 ماه قبل</span
                        >
                      </p>
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <p class="text-secondary">
                        تعداد حملات در ماه:<span class="text-dark font-bold"
                          >4</span
                        >
                      </p>
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس گناه</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس بی ارزشی</p></label
                      >
                    </div>
                  </div>
                </div>
                <div class="border-bottom pb-3 mb-3">
                  <p class="text-secondary fs-14 font-bold">
                    اختلال کارکرد در حوزه های:
                  </p>
                  <div class="row mx-0 g-4 text-secondary mt-0">
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">خودزنی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">کمبود انرژی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس گناه</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس بی ارزشی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">خودزنی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">کمبود انرژی</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس گناه</p></label
                      >
                    </div>
                    <div class="col-lg-3 col-sm-4 col-6">
                      <label
                        class="cursor-pointer d-flex align-items-center gap-2"
                        ><input
                          type="checkbox"
                          class="form-check-input form-select-lg bg-transparent cursor-pointer"
                        />
                        <p class="mb-0 mt-1">احساس بی ارزشی</p></label
                      >
                    </div>
                  </div>
                </div>
                <div class="border-bottom pb-3 mb-3">
                  <p class="text-secondary fs-14 font-bold">
                    علائم تشخیص ها و درمان های قبلی:
                  </p>
                  <textarea
                    class="border-dashed-2 bg-gray4 w-100 rounded-2 outline-none p-3"
                  ></textarea>
                </div>
                <div class="border-bottom pb-3 mb-3">
                  <p class="text-secondary fs-14 font-bold">
                    تاریخچه خانوادگی:
                  </p>
                  <textarea
                    class="border-dashed-2 bg-gray4 w-100 rounded-2 outline-none p-3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item shadow-sm mb-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button text-main font-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                تاریخچه درمان بیمار
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample2"
            >
              <div class="accordion-body p-0">
                <div class="table-responsive">
                  <table class="table text-center">
                    <tbody class="fs-14 fs-lg-10 text-muted font-bold">
                      <tr>
                        <td>
                          <div
                            class="my-1 text-muted d-flex align-items-center gap-2 pe-3"
                          >
                            <img
                              alt="img"
                              :src="require('../assets/img/image 67.png')"
                              class="d-block rounded-circle w-32 h-32 shadow-sm"
                            />
                            <p class="mb-0">دکتر امیر محمدی</p>
                          </div>
                        </td>
                        <td>
                          <p class="mt-2 text-muted">
                            فوق تخصص روانشناسی بالینی
                          </p>
                        </td>
                        <td>
                          <p class="mt-2 text-muted">تاریخ مراجعه:1402/09/12</p>
                        </td>
                        <td>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#moreInfoModal"
                            class="mt-2 d-block text-orange"
                            >مطالب بیشتر</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="my-1 text-muted d-flex align-items-center gap-2 pe-3"
                          >
                            <img
                              alt="img"
                              :src="require('../assets/img/image 67.png')"
                              class="d-block rounded-circle w-32 h-32 shadow-sm"
                            />
                            <p class="mb-0">دکتر امیر محمدی</p>
                          </div>
                        </td>
                        <td>
                          <p class="mt-2 text-muted">
                            فوق تخصص روانشناسی بالینی
                          </p>
                        </td>
                        <td>
                          <p class="mt-2 text-muted">تاریخ مراجعه:1402/09/12</p>
                        </td>
                        <td>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#moreInfoModal"
                            class="mt-2 d-block text-orange"
                            >مطالب بیشتر</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="my-1 text-muted d-flex align-items-center gap-2 pe-3"
                          >
                            <img
                              alt="img"
                              :src="require('../assets/img/image 67.png')"
                              class="d-block rounded-circle w-32 h-32 shadow-sm"
                            />
                            <p class="mb-0">دکتر امیر محمدی</p>
                          </div>
                        </td>
                        <td>
                          <p class="mt-2 text-muted">
                            فوق تخصص روانشناسی بالینی
                          </p>
                        </td>
                        <td>
                          <p class="mt-2 text-muted">تاریخ مراجعه:1402/09/12</p>
                        </td>
                        <td>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#moreInfoModal"
                            class="mt-2 d-block text-orange"
                            >مطالب بیشتر</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside/Aside.vue";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon.vue";
export default {
  components: { Aside, HamburgerIcon },
  name: "PatientReport-component",
};
</script>

<style>
</style>