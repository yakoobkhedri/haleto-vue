<template>
  <main class="bg-white h-100vh h-lg-auto overflow-hidden overflow-lg-auto position-relative">
    <!-- shape -->
    <svg class="position-absolute bottom-0 start-0 -z-0" width="159" height="172" viewBox="0 0 159 172" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="-4.01515" cy="189.515" r="154.985" fill="#232524" />
      <circle cx="1.20464" cy="179.477" r="156.795" stroke="#232524" stroke-width="2" />
      <circle cx="1.20464" cy="167.432" r="157.045" stroke="#232524" stroke-width="1.5" />
      <circle cx="-1.20454" cy="157.795" r="157.295" stroke="#232524" />
    </svg>

    <aos-vue>
      <section>
        <div class="row mx-0">
          <div class="col-lg-7 px-0 position-relative d-none d-lg-block">
            <!-- shape -->
            <svg class="position-absolute bottom-0 end-0 mb-5" width="223" height="365" viewBox="0 0 223 365"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M382.5 182.5C382.5 282.993 297.009 364.5 191.5 364.5C85.9907 364.5 0.5 282.993 0.5 182.5C0.5 82.0066 85.9907 0.5 191.5 0.5C297.009 0.5 382.5 82.0066 382.5 182.5Z"
                stroke="#FCFCFC" />
            </svg>
            <svg class="position-absolute bottom-0 end-0" width="223" height="313" viewBox="0 0 223 313" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M382.5 182.5C382.5 282.993 297.009 364.5 191.5 364.5C85.9907 364.5 0.5 282.993 0.5 182.5C0.5 82.0066 85.9907 0.5 191.5 0.5C297.009 0.5 382.5 82.0066 382.5 182.5Z"
                stroke="#FCFCFC" />
            </svg>
            <!--  -->
            <img alt="bg" :src="require('../assets/img/backgorund.png')" class="img-fluid w-100 h-100vh h-lg-auto" />
            <div
              class="position-absolute pb-5 end-0 start-0 bottom-0 top-0 mx-auto text-white text-center d-flex align-items-center justify-content-center">
              <div>
                <h1 class="font-bold">سلامت روان حق همه ماست</h1>
                <h3 class="mt-4">اتاق مشاوره آنلاین روانشناسی</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-5 position-relative bg-login h-100vh h-lg-auto overflow-auto">
            <!-- go back -->
            <router-link to="/" class="position-absolute start-0 m-4">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_297_333)">
                  <path class="fill-lg-white" fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.42001 0.112617L0.0500102 11.7497C-0.0099893 11.8999 -0.00998932 12.1376 0.0500101 12.2127L9.42001 23.9374C9.48001 24.0125 9.67001 24.0125 9.79001 23.9374L10.96 22.3983L3.63001 13.2263L23.71 13.2263C24.26 13.2263 24.76 12.6131 24.76 11.9124C24.76 11.2242 24.27 10.5985 23.71 10.5985L3.81001 10.5985L10.96 1.57664L9.79001 0.112617C9.67001 -0.0375398 9.48001 -0.0375398 9.42001 0.112617Z"
                    fill="#232524" />
                </g>
                <defs>
                  <clipPath id="clip0_297_333">
                    <rect width="24" height="24.76" fill="white" transform="translate(24.76) rotate(90)" />
                  </clipPath>
                </defs>
              </svg>
            </router-link>
            <!-- shape -->
            <svg class="position-absolute bottom-0 start-0 -z-0 d-lg-none" width="159" height="172"
              viewBox="0 0 159 172" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="-4.01515" cy="189.515" r="154.985" fill="#232524" />
              <circle cx="1.20464" cy="179.477" r="156.795" stroke="#232524" stroke-width="2" />
              <circle cx="1.20464" cy="167.432" r="157.045" stroke="#232524" stroke-width="1.5" />
              <circle cx="-1.20454" cy="157.795" r="157.295" stroke="#232524" />
            </svg>
            <!--  -->
            <form @submit.prevent="signUpUser" class="max-w-340 mx-auto my-5 pb-5 position-relative">
              <div class="mb-5 pb-5 d-block d-lg-none text-white text-center">
                <h1 class="font-bold fs-20">سلامت روان حق همه ماست</h1>
                <h3 class="mt-4 fs-14 font-bold">
                  اتاق مشاوره آنلاین روانشناسی
                </h3>
              </div>
              <a href="index.html" class="d-block"><img alt="logo" :src="require('../assets/img/Frame 1597883545.png')"
                  class="d-block mx-auto" /></a>
              <h4 class="font-bold fs-18 text-center mt-3 text-lg-white">
                لطفا جهت ثبت نام اطلاعات خود را تکمیل کنید
              </h4>
              <div class="mt-5 text-lg-white">
                <div class="mb-3">
                  <input v-model="formData.username"
                    class="border-success h-48 placeholder-lg-white outline-none bg-transparent w-100 rounded-4 border fw-bold fs-12 mb-1 px-3"
                    placeholder="نام کاربری" />
                </div>
                <div class="mt-3">
                  <div>
                    <div :class="{
                      'border-success': ISPasswordValid,
                      'border-danger': !ISPasswordValid,
                    }"
                      class="rounded-4 h-48 border bg-gray-transparent d-flex align-items-center gap-2 px-3 fs-14 fw-bold mb-1">
                      <svg class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path :class="{
                          'stroke-success': ISPasswordValid,
                          'stroke-danger': !ISPasswordValid,
                        }" class="stroke-lg-white"
                          d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                          stroke="#232524" stroke-linecap="round" stroke-linejoin="round" />
                        <path :class="{
                          'stroke-success': ISPasswordValid,
                          'stroke-danger': !ISPasswordValid,
                        }" class="stroke-lg-white"
                          d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                          stroke="#232524" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <input v-model="formData.password" :type="passwordFieldType" placeholder="رمز عبور"
                        class="w-100 bg-transparent outline-none border-0 flex-grow-1 text-lg-white placeholder-lg-white" />
                      <svg v-if="passwordFieldType == 'text'" @click="switchVisibility"
                        class="me-auto cursor-pointer flex-shrink-0" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="stroke-lg-white"
                          d="M13.9997 17.0479C14.6618 17.0479 15.2666 16.9736 15.8182 16.8453L14.5883 15.5782C14.3972 15.5934 14.2033 15.6056 13.9997 15.6056C10.254 15.6056 8.80297 12.8322 8.45158 12C8.71544 11.3934 9.0718 10.8342 9.50716 10.3436L8.52858 9.33543C7.452 10.5375 7.04391 11.7483 7.03621 11.7721C6.98793 11.9202 6.98793 12.0805 7.03621 12.2286C7.05091 12.2762 8.65668 17.0479 13.9997 17.0479ZM13.9997 6.9521C12.7138 6.9521 11.6575 7.23766 10.7769 7.65952L8.19469 5L7.20491 6.01968L19.8046 19L20.7944 17.9803L18.4711 15.5869C20.3009 14.18 20.954 12.2589 20.9638 12.2286C21.0121 12.0805 21.0121 11.9202 20.9638 11.7721C20.9484 11.7238 19.3426 6.9521 13.9997 6.9521ZM17.48 14.5658L15.884 12.9216C16.017 12.6404 16.0996 12.331 16.0996 12C16.0996 10.8166 15.1483 9.83661 13.9997 9.83661C13.6784 9.83661 13.3781 9.92171 13.1058 10.0594L11.8402 8.75564C12.5349 8.51003 13.2652 8.38786 13.9997 8.39435C17.7453 8.39435 19.1963 11.1678 19.5477 12C19.3363 12.499 18.7315 13.6889 17.48 14.5658Z"
                          fill="#8A8A8A" />
                      </svg>
                      <svg v-if="passwordFieldType == 'password'" @click="switchVisibility"
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-eye me-auto ms-1 cursor-pointer flex-shrink-0" viewBox="0 0 16 16">
                        <path
                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                          fill="#8A8A8A" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                          fill="#8A8A8A" />
                      </svg>
                    </div>
                    <small class="text-danger fs-12 font-bold" v-if="!ISPasswordValid">رمز عبور باید دارای 6 تا 15
                      کاراکتر
                      که شامل حداقل یک حرف
                      کوچک، یک حرف بزرگ، یک رقم عددی و یک کاراکتر خاص باشد</small>
                  </div>
                </div>
                <div class="mt-3">
                  <div>
                    <div :class="{
                      'border-success': passwordsAreNotSame,
                      'border-danger': !passwordsAreNotSame,
                    }"
                      class="rounded-4 h-48 border bg-gray-transparent d-flex align-items-center gap-2 px-3 fs-14 fw-bold mb-1">
                      <svg class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path :class="{
                          'stroke-success': passwordsAreNotSame,
                          'stroke-danger': !passwordsAreNotSame,
                        }" class="stroke-lg-white"
                          d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                          stroke="#232524" stroke-linecap="round" stroke-linejoin="round" />
                        <path :class="{
                          'stroke-success': passwordsAreNotSame,
                          'stroke-danger': !passwordsAreNotSame,
                        }" class="stroke-lg-white"
                          d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                          stroke="#232524" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <input v-model="formData.passwordConfirm" :type="passwordFieldType" placeholder="تکرار رمز عبور"
                        class="w-100 bg-transparent outline-none border-0 flex-grow-1 text-lg-white placeholder-lg-white" />
                      <svg v-if="passwordFieldType == 'text'" @click="switchVisibility"
                        class="me-auto cursor-pointer flex-shrink-0" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="stroke-lg-white"
                          d="M13.9997 17.0479C14.6618 17.0479 15.2666 16.9736 15.8182 16.8453L14.5883 15.5782C14.3972 15.5934 14.2033 15.6056 13.9997 15.6056C10.254 15.6056 8.80297 12.8322 8.45158 12C8.71544 11.3934 9.0718 10.8342 9.50716 10.3436L8.52858 9.33543C7.452 10.5375 7.04391 11.7483 7.03621 11.7721C6.98793 11.9202 6.98793 12.0805 7.03621 12.2286C7.05091 12.2762 8.65668 17.0479 13.9997 17.0479ZM13.9997 6.9521C12.7138 6.9521 11.6575 7.23766 10.7769 7.65952L8.19469 5L7.20491 6.01968L19.8046 19L20.7944 17.9803L18.4711 15.5869C20.3009 14.18 20.954 12.2589 20.9638 12.2286C21.0121 12.0805 21.0121 11.9202 20.9638 11.7721C20.9484 11.7238 19.3426 6.9521 13.9997 6.9521ZM17.48 14.5658L15.884 12.9216C16.017 12.6404 16.0996 12.331 16.0996 12C16.0996 10.8166 15.1483 9.83661 13.9997 9.83661C13.6784 9.83661 13.3781 9.92171 13.1058 10.0594L11.8402 8.75564C12.5349 8.51003 13.2652 8.38786 13.9997 8.39435C17.7453 8.39435 19.1963 11.1678 19.5477 12C19.3363 12.499 18.7315 13.6889 17.48 14.5658Z"
                          fill="#8A8A8A" />
                      </svg>
                      <svg v-if="passwordFieldType == 'password'" @click="switchVisibility"
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-eye me-auto ms-1 cursor-pointer flex-shrink-0" viewBox="0 0 16 16">
                        <path
                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                          fill="#8A8A8A" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                          fill="#8A8A8A" />
                      </svg>
                    </div>
                  </div>
                </div>
                <input type="submit" value="ثبت نام"
                  class="h-48 fw-bold bg-main border-0 w-100 d-flex align-items-center justify-content-center text-white rounded-4 mt-4" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </aos-vue>
  </main>
</template>


<script>
// import axios from "axios";
import Swal from "sweetalert2";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginStore } from "@/store/modules/login.js"



export default {
  name: "SignUpPassword-component",

  setup() {
    const router = useRouter();
    const startValidation = ref(false);
    const formData = ref({
      username: "",
      password: "",
      passwordConfirm: ""
    });

    const passwordFieldType = ref("password");
    function switchVisibility() {
      passwordFieldType.value =
        passwordFieldType.value === "password" ? "text" : "password";
    }
    const ISPasswordValid = ref(true)
    const passwordsAreNotSame = ref(true)

    const loginDetails = loginStore()
    function signUpUser() {
      if (formData.value.username || formData.value.password || formData.value.passwordConfirm) {
        if (formData.value.password == formData.value.passwordConfirm) {
          ISPasswordValid.value = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/.test(formData.value.password)
          loginDetails.sendUserPassword(formData.value)
            .then(() => {
              Swal.fire({
                title: "تبریک",
                text: "ثبت نام شما با موفقیت انجام شد",
                icon: "success",
                confirmButtonText: "بستن",
              });
              router.push('/login');
            }).catch(() => {
              console.log('error')
            })
        } else {
          passwordsAreNotSame.value = false
          console.log('passwords are not same')
        }
      } else {
        console.log('empty')
      }
    }

    return {
      switchVisibility,
      passwordFieldType,
      passwordsAreNotSame,
      ISPasswordValid,
      formData,
      startValidation,
      signUpUser,
    };
  },
};
</script>


<style></style>