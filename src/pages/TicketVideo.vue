<template>
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
      <div class="px-sm-4 px-3 position-relative my-5 pt-4 pb-5">
        <div
          class="rounded-20 border-blue2 h-397 h-sm-330 position-relative bg-main6 d-flex align-items-center justify-content-center"
        >
          <a>
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_11635)">
                <path
                  d="M64.375 32C64.375 40.4869 61.0036 48.6263 55.0024 54.6274C49.0013 60.6286 40.8619 64 32.375 64C23.8881 64 15.7487 60.6286 9.74758 54.6274C3.74642 48.6263 0.375 40.4869 0.375 32C0.375 23.5131 3.74642 15.3737 9.74758 9.37258C15.7487 3.37142 23.8881 0 32.375 0C40.8619 0 49.0013 3.37142 55.0024 9.37258C61.0036 15.3737 64.375 23.5131 64.375 32Z"
                  fill="#F0AC3A"
                />
                <path
                  d="M27.535 20.3727C27.2359 20.1598 26.8841 20.0333 26.5179 20.0071C26.1517 19.9808 25.7854 20.0559 25.459 20.224C25.1327 20.3922 24.8589 20.6469 24.6677 20.9603C24.4765 21.2736 24.3752 21.6336 24.375 22.0007V42.0007C24.3752 42.3678 24.4765 42.7278 24.6677 43.0412C24.8589 43.3546 25.1327 43.6093 25.459 43.7774C25.7854 43.9455 26.1517 44.0206 26.5179 43.9944C26.8841 43.9682 27.2359 43.8416 27.535 43.6287L41.535 33.6287C41.7943 33.4437 42.0056 33.1995 42.1514 32.9163C42.2972 32.6331 42.3733 32.3192 42.3733 32.0007C42.3733 31.6822 42.2972 31.3683 42.1514 31.0851C42.0056 30.802 41.7943 30.5577 41.535 30.3727L27.535 20.3727Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_11635">
                  <rect
                    width="64"
                    height="64"
                    fill="white"
                    transform="translate(0.375)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
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
  name: "TicketVideo-component",
};
</script>

<style>
</style>