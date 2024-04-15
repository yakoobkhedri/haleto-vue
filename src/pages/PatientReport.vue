<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="moreInfoModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog max-w-96">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button
            type="button"
            class="btn-close ms-0 me-auto"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="accordion" id="accordionExample1">
            <div class="accordion-item shadow-sm">
              <h2 class="accordion-header">
                <button
                  class="accordion-button text-main font-bold fs-18 position-relative"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseModal3"
                  aria-expanded="true"
                  aria-controls="collapseModal3"
                >
                  <div class="d-flex align-items-center gap-3">
                    <svg
                      width="26"
                      height="32"
                      viewBox="0 0 26 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.1988 5.01032H18.8284V4.48754C18.822 4.27552 18.7212 4.07368 18.5467 3.92371C18.3722 3.77374 18.1375 3.68704 17.8908 3.68153H17.7388V1.50319C17.7388 1.10455 17.5546 0.722252 17.2267 0.440374C16.8987 0.158496 16.454 0.0001579 15.9902 0.0001579H10.1364C9.9047 -0.0027295 9.67461 0.0340089 9.45953 0.108251C9.24445 0.182493 9.04868 0.292736 8.88362 0.432596C8.71856 0.572456 8.58748 0.739142 8.49802 0.922936C8.40857 1.10673 8.36251 1.30396 8.36253 1.50319V3.68153H8.15984C7.91117 3.68153 7.67268 3.76647 7.49685 3.91763C7.32101 4.06878 7.22223 4.27378 7.22223 4.48754V5.01032H3.82653C2.80936 5.01607 1.83608 5.36745 1.11919 5.98778C0.402301 6.6081 -2.20128e-05 7.44702 9.03322e-10 8.32141V28.6889C-2.20128e-05 29.5633 0.402301 30.4022 1.11919 31.0225C1.83608 31.6429 2.80936 31.9942 3.82653 32H22.1481C23.1697 32 24.1494 31.6512 24.8718 31.0302C25.5941 30.4093 26 29.5671 26 28.6889V8.32141C26.0001 7.45076 25.6012 6.6151 24.8898 5.99539C24.1783 5.37568 23.2116 5.02178 22.1988 5.01032ZM10.1364 1.37249H15.8888V3.55084H10.1364V1.37249ZM24.2515 28.6889C24.2515 29.1705 24.0307 29.6326 23.637 29.9752C23.2432 30.3177 22.7083 30.513 22.1481 30.5187H3.82653C3.26638 30.513 2.73142 30.3177 2.33768 29.9752C1.94394 29.6326 1.72314 29.1705 1.72318 28.6889V8.32141C1.72314 7.83987 1.94394 7.37774 2.33768 7.0352C2.73142 6.69267 3.26638 6.49735 3.82653 6.49161H7.22223V8.14714C7.21873 8.2538 7.24061 8.35998 7.2865 8.45912C7.33238 8.55827 7.40126 8.64832 7.48904 8.72377C7.57681 8.79922 7.68157 8.85847 7.79691 8.89791C7.91225 8.93735 8.03576 8.95613 8.15984 8.95312H17.8402C18.0888 8.95312 18.3273 8.86821 18.5032 8.71706C18.679 8.5659 18.7778 8.3609 18.7778 8.14714V6.49161H22.1481C22.7083 6.49735 23.2432 6.69267 23.637 7.0352C24.0307 7.37774 24.2515 7.83987 24.2515 8.32141V28.6889Z"
                        fill="#6CB771"
                      />
                      <path
                        d="M22.0994 19.454H19.844L17.3099 12.3526C17.258 12.1936 17.144 12.0549 16.9871 11.9597C16.8302 11.8645 16.6399 11.8186 16.4483 11.8298C16.2526 11.8371 16.0657 11.9014 15.9183 12.0123C15.7709 12.1232 15.6718 12.2739 15.6375 12.4397L13.2807 22.9611L10.4679 15.5765C10.4179 15.4251 10.3115 15.2919 10.165 15.1975C10.0185 15.103 9.84003 15.0525 9.65692 15.0537C9.4761 15.0475 9.29802 15.0934 9.15107 15.1842C9.00412 15.275 8.89673 15.4054 8.84598 15.5548L7.35087 19.1054H4.41129C4.28401 19.0867 4.15353 19.0922 4.02894 19.1213C3.90436 19.1505 3.78867 19.2026 3.68999 19.2742C3.5913 19.3458 3.51201 19.435 3.45759 19.5357C3.40318 19.6363 3.375 19.746 3.375 19.857C3.375 19.9679 3.40318 20.0776 3.45759 20.1782C3.51201 20.2789 3.5913 20.3681 3.68999 20.4397C3.78867 20.5113 3.90436 20.5634 4.02894 20.5926C4.15353 20.6218 4.28401 20.6272 4.41129 20.6085H7.95911C8.14151 20.609 8.31964 20.5612 8.46928 20.4716C8.61893 20.3819 8.73279 20.2548 8.79533 20.1075L9.60626 18.1034L12.6725 25.989C12.7351 26.1363 12.8489 26.2634 12.9986 26.3531C13.1482 26.4428 13.3263 26.4906 13.5087 26.49C13.7014 26.4818 13.8849 26.4167 14.0281 26.3055C14.1713 26.1943 14.2654 26.044 14.2944 25.8801L16.6511 15.4458L18.3489 20.2164C18.4072 20.3678 18.5192 20.4996 18.6692 20.5934C18.8192 20.6872 18.9997 20.7382 19.1852 20.7392H22.074C22.3026 20.7392 22.5217 20.6612 22.6833 20.5223C22.8449 20.3834 22.9356 20.195 22.9356 19.9986C22.9356 19.8021 22.8449 19.6137 22.6833 19.4748C22.5217 19.3359 22.3026 19.2579 22.074 19.2579L22.0994 19.454Z"
                        fill="#F0AC3A"
                      />
                    </svg>
                    <p class="fs-12 text-secondary mb-0">تاریخ: 1402/09/12</p>
                  </div>
                  <p class="mb-0 position-absolute mx-auto end-0 start-0 text-center text-dark">گزارشات مراجع</p>
                </button>
              </h2>
              <div
                id="collapseModal3"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample1"
              >
                <div class="accordion-body py-4 px-3">
                  
                </div>
              </div>
            </div>
            <div class="accordion-item shadow-sm">
              <h2 class="accordion-header">
                <button
                  class="accordion-button text-main font-bold fs-18 position-relative"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseModal"
                  aria-expanded="true"
                  aria-controls="collapseModal"
                >
                  <div class="d-flex align-items-center gap-3">
                    <svg
                      width="26"
                      height="32"
                      viewBox="0 0 26 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.1988 5.01032H18.8284V4.48754C18.822 4.27552 18.7212 4.07368 18.5467 3.92371C18.3722 3.77374 18.1375 3.68704 17.8908 3.68153H17.7388V1.50319C17.7388 1.10455 17.5546 0.722252 17.2267 0.440374C16.8987 0.158496 16.454 0.0001579 15.9902 0.0001579H10.1364C9.9047 -0.0027295 9.67461 0.0340089 9.45953 0.108251C9.24445 0.182493 9.04868 0.292736 8.88362 0.432596C8.71856 0.572456 8.58748 0.739142 8.49802 0.922936C8.40857 1.10673 8.36251 1.30396 8.36253 1.50319V3.68153H8.15984C7.91117 3.68153 7.67268 3.76647 7.49685 3.91763C7.32101 4.06878 7.22223 4.27378 7.22223 4.48754V5.01032H3.82653C2.80936 5.01607 1.83608 5.36745 1.11919 5.98778C0.402301 6.6081 -2.20128e-05 7.44702 9.03322e-10 8.32141V28.6889C-2.20128e-05 29.5633 0.402301 30.4022 1.11919 31.0225C1.83608 31.6429 2.80936 31.9942 3.82653 32H22.1481C23.1697 32 24.1494 31.6512 24.8718 31.0302C25.5941 30.4093 26 29.5671 26 28.6889V8.32141C26.0001 7.45076 25.6012 6.6151 24.8898 5.99539C24.1783 5.37568 23.2116 5.02178 22.1988 5.01032ZM10.1364 1.37249H15.8888V3.55084H10.1364V1.37249ZM24.2515 28.6889C24.2515 29.1705 24.0307 29.6326 23.637 29.9752C23.2432 30.3177 22.7083 30.513 22.1481 30.5187H3.82653C3.26638 30.513 2.73142 30.3177 2.33768 29.9752C1.94394 29.6326 1.72314 29.1705 1.72318 28.6889V8.32141C1.72314 7.83987 1.94394 7.37774 2.33768 7.0352C2.73142 6.69267 3.26638 6.49735 3.82653 6.49161H7.22223V8.14714C7.21873 8.2538 7.24061 8.35998 7.2865 8.45912C7.33238 8.55827 7.40126 8.64832 7.48904 8.72377C7.57681 8.79922 7.68157 8.85847 7.79691 8.89791C7.91225 8.93735 8.03576 8.95613 8.15984 8.95312H17.8402C18.0888 8.95312 18.3273 8.86821 18.5032 8.71706C18.679 8.5659 18.7778 8.3609 18.7778 8.14714V6.49161H22.1481C22.7083 6.49735 23.2432 6.69267 23.637 7.0352C24.0307 7.37774 24.2515 7.83987 24.2515 8.32141V28.6889Z"
                        fill="#6CB771"
                      />
                      <path
                        d="M22.0994 19.454H19.844L17.3099 12.3526C17.258 12.1936 17.144 12.0549 16.9871 11.9597C16.8302 11.8645 16.6399 11.8186 16.4483 11.8298C16.2526 11.8371 16.0657 11.9014 15.9183 12.0123C15.7709 12.1232 15.6718 12.2739 15.6375 12.4397L13.2807 22.9611L10.4679 15.5765C10.4179 15.4251 10.3115 15.2919 10.165 15.1975C10.0185 15.103 9.84003 15.0525 9.65692 15.0537C9.4761 15.0475 9.29802 15.0934 9.15107 15.1842C9.00412 15.275 8.89673 15.4054 8.84598 15.5548L7.35087 19.1054H4.41129C4.28401 19.0867 4.15353 19.0922 4.02894 19.1213C3.90436 19.1505 3.78867 19.2026 3.68999 19.2742C3.5913 19.3458 3.51201 19.435 3.45759 19.5357C3.40318 19.6363 3.375 19.746 3.375 19.857C3.375 19.9679 3.40318 20.0776 3.45759 20.1782C3.51201 20.2789 3.5913 20.3681 3.68999 20.4397C3.78867 20.5113 3.90436 20.5634 4.02894 20.5926C4.15353 20.6218 4.28401 20.6272 4.41129 20.6085H7.95911C8.14151 20.609 8.31964 20.5612 8.46928 20.4716C8.61893 20.3819 8.73279 20.2548 8.79533 20.1075L9.60626 18.1034L12.6725 25.989C12.7351 26.1363 12.8489 26.2634 12.9986 26.3531C13.1482 26.4428 13.3263 26.4906 13.5087 26.49C13.7014 26.4818 13.8849 26.4167 14.0281 26.3055C14.1713 26.1943 14.2654 26.044 14.2944 25.8801L16.6511 15.4458L18.3489 20.2164C18.4072 20.3678 18.5192 20.4996 18.6692 20.5934C18.8192 20.6872 18.9997 20.7382 19.1852 20.7392H22.074C22.3026 20.7392 22.5217 20.6612 22.6833 20.5223C22.8449 20.3834 22.9356 20.195 22.9356 19.9986C22.9356 19.8021 22.8449 19.6137 22.6833 19.4748C22.5217 19.3359 22.3026 19.2579 22.074 19.2579L22.0994 19.454Z"
                        fill="#F0AC3A"
                      />
                    </svg>
                    <p class="fs-12 text-secondary mb-0">تاریخ: 1402/09/12</p>
                  </div>
                  <p class="mb-0 position-absolute mx-auto end-0 start-0 text-center text-dark">نسخه الکترونیکی مراجع</p>
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
                        نام دارو:<span class="text-dark font-bold"
                          >YRTEW</span
                        >
                      </p>
                      <p class="text-secondary">
                        دستور مصرف:<span class="text-dark font-bold"
                          >هر روز 1 عدد</span
                        >
                      </p>
                      <p class="text-secondary mb-0">
                        مقدار مصرف:<span class="text-dark font-bold"
                          >3</span
                        >
                      </p>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <p class="text-secondary">
                        میزان مصرف:<span class="text-dark font-bold"
                          >1 ماه</span
                        >
                      </p>
                      <p class="text-secondary">
                        شیوه مصرف:<span class="text-dark font-bold">خوراکی</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item shadow-sm">
              <h2 class="accordion-header">
                <button
                  class="accordion-button text-main font-bold fs-18 position-relative"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseModal2"
                  aria-expanded="true"
                  aria-controls="collapseModal2"
                >
                  <div class="d-flex align-items-center gap-3">
                    <svg
                      width="26"
                      height="32"
                      viewBox="0 0 26 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.1988 5.01032H18.8284V4.48754C18.822 4.27552 18.7212 4.07368 18.5467 3.92371C18.3722 3.77374 18.1375 3.68704 17.8908 3.68153H17.7388V1.50319C17.7388 1.10455 17.5546 0.722252 17.2267 0.440374C16.8987 0.158496 16.454 0.0001579 15.9902 0.0001579H10.1364C9.9047 -0.0027295 9.67461 0.0340089 9.45953 0.108251C9.24445 0.182493 9.04868 0.292736 8.88362 0.432596C8.71856 0.572456 8.58748 0.739142 8.49802 0.922936C8.40857 1.10673 8.36251 1.30396 8.36253 1.50319V3.68153H8.15984C7.91117 3.68153 7.67268 3.76647 7.49685 3.91763C7.32101 4.06878 7.22223 4.27378 7.22223 4.48754V5.01032H3.82653C2.80936 5.01607 1.83608 5.36745 1.11919 5.98778C0.402301 6.6081 -2.20128e-05 7.44702 9.03322e-10 8.32141V28.6889C-2.20128e-05 29.5633 0.402301 30.4022 1.11919 31.0225C1.83608 31.6429 2.80936 31.9942 3.82653 32H22.1481C23.1697 32 24.1494 31.6512 24.8718 31.0302C25.5941 30.4093 26 29.5671 26 28.6889V8.32141C26.0001 7.45076 25.6012 6.6151 24.8898 5.99539C24.1783 5.37568 23.2116 5.02178 22.1988 5.01032ZM10.1364 1.37249H15.8888V3.55084H10.1364V1.37249ZM24.2515 28.6889C24.2515 29.1705 24.0307 29.6326 23.637 29.9752C23.2432 30.3177 22.7083 30.513 22.1481 30.5187H3.82653C3.26638 30.513 2.73142 30.3177 2.33768 29.9752C1.94394 29.6326 1.72314 29.1705 1.72318 28.6889V8.32141C1.72314 7.83987 1.94394 7.37774 2.33768 7.0352C2.73142 6.69267 3.26638 6.49735 3.82653 6.49161H7.22223V8.14714C7.21873 8.2538 7.24061 8.35998 7.2865 8.45912C7.33238 8.55827 7.40126 8.64832 7.48904 8.72377C7.57681 8.79922 7.68157 8.85847 7.79691 8.89791C7.91225 8.93735 8.03576 8.95613 8.15984 8.95312H17.8402C18.0888 8.95312 18.3273 8.86821 18.5032 8.71706C18.679 8.5659 18.7778 8.3609 18.7778 8.14714V6.49161H22.1481C22.7083 6.49735 23.2432 6.69267 23.637 7.0352C24.0307 7.37774 24.2515 7.83987 24.2515 8.32141V28.6889Z"
                        fill="#6CB771"
                      />
                      <path
                        d="M22.0994 19.454H19.844L17.3099 12.3526C17.258 12.1936 17.144 12.0549 16.9871 11.9597C16.8302 11.8645 16.6399 11.8186 16.4483 11.8298C16.2526 11.8371 16.0657 11.9014 15.9183 12.0123C15.7709 12.1232 15.6718 12.2739 15.6375 12.4397L13.2807 22.9611L10.4679 15.5765C10.4179 15.4251 10.3115 15.2919 10.165 15.1975C10.0185 15.103 9.84003 15.0525 9.65692 15.0537C9.4761 15.0475 9.29802 15.0934 9.15107 15.1842C9.00412 15.275 8.89673 15.4054 8.84598 15.5548L7.35087 19.1054H4.41129C4.28401 19.0867 4.15353 19.0922 4.02894 19.1213C3.90436 19.1505 3.78867 19.2026 3.68999 19.2742C3.5913 19.3458 3.51201 19.435 3.45759 19.5357C3.40318 19.6363 3.375 19.746 3.375 19.857C3.375 19.9679 3.40318 20.0776 3.45759 20.1782C3.51201 20.2789 3.5913 20.3681 3.68999 20.4397C3.78867 20.5113 3.90436 20.5634 4.02894 20.5926C4.15353 20.6218 4.28401 20.6272 4.41129 20.6085H7.95911C8.14151 20.609 8.31964 20.5612 8.46928 20.4716C8.61893 20.3819 8.73279 20.2548 8.79533 20.1075L9.60626 18.1034L12.6725 25.989C12.7351 26.1363 12.8489 26.2634 12.9986 26.3531C13.1482 26.4428 13.3263 26.4906 13.5087 26.49C13.7014 26.4818 13.8849 26.4167 14.0281 26.3055C14.1713 26.1943 14.2654 26.044 14.2944 25.8801L16.6511 15.4458L18.3489 20.2164C18.4072 20.3678 18.5192 20.4996 18.6692 20.5934C18.8192 20.6872 18.9997 20.7382 19.1852 20.7392H22.074C22.3026 20.7392 22.5217 20.6612 22.6833 20.5223C22.8449 20.3834 22.9356 20.195 22.9356 19.9986C22.9356 19.8021 22.8449 19.6137 22.6833 19.4748C22.5217 19.3359 22.3026 19.2579 22.074 19.2579L22.0994 19.454Z"
                        fill="#F0AC3A"
                      />
                    </svg>
                    <p class="fs-12 text-secondary mb-0">تاریخ: 1402/09/12</p>
                  </div>
                  <p class="mb-0 position-absolute mx-auto end-0 start-0 text-center text-dark">فعالیت های مراجع</p>
                </button>
              </h2>
              <div
                id="collapseModal2"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample1"
              >
                <div class="accordion-body py-4 px-3">
                  <p class="fs-14 font-bold text-secondary">فعالیت های بیمار:</p>
                  <p class="fs-12 text-secondary">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  </p>
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