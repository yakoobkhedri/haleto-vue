<template>
  <main class="bg-white h-100vh h-lg-auto overflow-hidden overflow-lg-auto">
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
          <div class="col-lg-5 position-relative bg-login h-100vh h-lg-auto">
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
            <svg class="position-absolute bottom-0 start-0 -z-0" width="159" height="172" viewBox="0 0 159 172"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="-4.01515" cy="189.515" r="154.985" fill="#232524" />
              <circle cx="1.20464" cy="179.477" r="156.795" stroke="#232524" stroke-width="2" />
              <circle cx="1.20464" cy="167.432" r="157.045" stroke="#232524" stroke-width="1.5" />
              <circle cx="-1.20454" cy="157.795" r="157.295" stroke="#232524" />
            </svg>
            <!--  -->
            <form @submit.prevent="loginUser" class="max-w-340 mx-auto my-5 pb-5 position-relative">
              <div class="mb-5 pb-5 d-block d-lg-none text-white text-center">
                <h1 class="font-bold fs-20">سلامت روان حق همه ماست</h1>
                <h3 class="mt-4 fs-14 font-bold">
                  اتاق مشاوره آنلاین روانشناسی
                </h3>
              </div>
              <a href="index.html" class="d-block"><img alt="logo" :src="require('../assets/img/Frame 1597883545.png')"
                  class="d-block mx-auto" /></a>
              <h4 class="font-bold fs-20 text-center mt-3 text-lg-white">
                خوش آمدید
              </h4>
              <div class="mt-4">
                <div :class="{
<<<<<<< HEAD
                  'border-secondary': ISUsernameValid,
=======
                  'border-success': ISUsernameValid,
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
                  'border-danger': !ISUsernameValid,
                }"
                  class="rounded-4 bg-gray-transparent h-48 border d-flex align-items-center gap-2 px-3 fs-14 fw-bold mb-1">
                  <svg class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path :class="{
<<<<<<< HEAD
                      'stroke-secondary': ISUsernameValid,
=======
                      'stroke-success': ISUsernameValid,
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
                      'stroke-danger': !ISUsernameValid,
                    }" class="stroke-lg-white"
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="#232524" stroke-linecap="round" stroke-linejoin="round" />
                    <path :class="{
<<<<<<< HEAD
                      'stroke-secondary': ISUsernameValid,
=======
                      'stroke-success': ISUsernameValid,
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
                      'stroke-danger': !ISUsernameValid,
                    }" class="stroke-lg-white"
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="#232524" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <input v-model="formData.username" placeholder="نام کاربری"
                    class="w-100 bg-transparent outline-none border-0 flex-grow-1 text-dark text-lg-white placeholder-lg-white" />
                </div>
                <small class="text-danger fs-12 font-bold" v-if="!ISUsernameValid">نام کاربری باید حداقل دارای 4 حرف و
                  انگلیسی باشد</small>
              </div>
              <div class="mt-3">
                <div>
                  <div :class="{
<<<<<<< HEAD
                    'border-secondary': ISPasswordValid,
=======
                    'border-success': ISPasswordValid,
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
                    'border-danger': !ISPasswordValid,
                  }"
                    class="rounded-4 h-48 border bg-gray-transparent d-flex align-items-center gap-2 px-3 fs-14 fw-bold mb-1">
                    <svg class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path :class="{
<<<<<<< HEAD
                        'stroke-secondary': ISPasswordValid,
=======
                        'stroke-success': ISPasswordValid,
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
                        'stroke-danger': !ISPasswordValid,
                      }" class="stroke-lg-white"
                        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                        stroke="#232524" stroke-linecap="round" stroke-linejoin="round" />
                      <path :class="{
<<<<<<< HEAD
                        'stroke-secondary': ISPasswordValid,
=======
                        'stroke-success': ISPasswordValid,
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
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
                  <small class="text-danger fs-12 font-bold" v-if="!ISPasswordValid">رمز عبور باید دارای 6 تا 15 کاراکتر
                    که شامل حداقل یک حرف
                    کوچک، یک حرف بزرگ، یک رقم عددی و یک کاراکتر خاص باشد</small>
<<<<<<< HEAD
=======
                  <!-- <small class="text-success fs-12 font-bold" v-else>رمز عبور صحیح است.</small> -->
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
                </div>
                <a class="text-lg-white text-dark fs-14 mt-2 d-block">رمز عبور خود را فراموش کرده اید؟</a>
              </div>
              <div class="mt-3">
                <div class="d-flex align-items-center gap-1 mb-1 position-relative">
                  <div :class="{
<<<<<<< HEAD
                    'border-secondary': ISCaptchaValid,
=======
                    'border-success': ISCaptchaValid,
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
                    'border-danger': !ISCaptchaValid,
                  }"
                    class="rounded-4 overflow-hidden bg-gray-transparent flex-shrink-0 w-100 h-48 border d-flex align-items-center gap-2 fs-14 fw-bold">
                    <input v-model="formData.captchaVal" placeholder="کد امنیتی"
                      class="w-100 bg-transparent px-3 outline-none border-0 flex-grow-1 text-lg-white placeholder-lg-whitee" />
                    <div :class="{
                      'bg-main': ISCaptchaValid,
                      'bg-danger': !ISCaptchaValid,
                    }"
                      class="h-100 bg-main w-90 w-sm-120 flex-shrink-0 flex-grow-1 d-flex align-items-center justify-content-center gap-3 fw-bold text-white border-end text-center">
                      {{ captchaCode }}
                      <svg @click="generateNewCaptcha" class="cursor-pointer flex-shrink-0 d-sm-none" width="28"
                        height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="stroke-lg-white"
                          d="M24.2391 13.3748L21.6723 14.0665C21.0736 12.2561 19.8539 10.6056 18.0624 9.56549C14.1685 7.30467 9.18761 8.6483 6.94116 12.5612L6.69221 12.9948L7.12462 13.2459L8.66607 14.1408L6.56617 14.6718L6.55869 14.6737L6.55127 14.6758L4.2972 15.3209C4.1949 15.3475 4.05814 15.3303 3.92625 15.2537C3.79312 15.1764 3.7096 15.0646 3.6821 14.9614L3.06499 12.6453L2.5082 10.5556L4.02339 11.4353L4.4558 11.6864L4.70474 11.2528C7.65392 6.11587 14.2147 4.31387 19.3618 7.30228C21.782 8.70748 23.4391 10.908 24.2391 13.3748Z"
                          fill="#6CB771" stroke="#F9F9F9" />
                        <path class="stroke-lg-white"
                          d="M3.76091 18.6252L6.32769 17.9335C6.92642 19.7439 8.14609 21.3944 9.93756 22.4345C13.8315 24.6953 18.8124 23.3517 21.0588 19.4388L21.3078 19.0052L20.8754 18.7541L19.3339 17.8592L21.4338 17.3282L21.4413 17.3263L21.4487 17.3242L23.7028 16.6791C23.8051 16.6525 23.9419 16.6697 24.0737 16.7463C24.2069 16.8236 24.2904 16.9354 24.3179 17.0386L24.935 19.3547L25.4918 21.4444L23.9766 20.5647L23.5442 20.3136L23.2953 20.7472C20.3461 25.8841 13.7853 27.6861 8.63821 24.6977C6.21797 23.2925 4.56087 21.092 3.76091 18.6252Z"
                          fill="#6CB771" stroke="#F9F9F9" />
                      </svg>
                    </div>
                  </div>
                  <svg @click="generateNewCaptcha" class="cursor-pointer flex-shrink-0 d-none d-sm-block" width="28"
                    height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="stroke-lg-white"
                      d="M24.2391 13.3748L21.6723 14.0665C21.0736 12.2561 19.8539 10.6056 18.0624 9.56549C14.1685 7.30467 9.18761 8.6483 6.94116 12.5612L6.69221 12.9948L7.12462 13.2459L8.66607 14.1408L6.56617 14.6718L6.55869 14.6737L6.55127 14.6758L4.2972 15.3209C4.1949 15.3475 4.05814 15.3303 3.92625 15.2537C3.79312 15.1764 3.7096 15.0646 3.6821 14.9614L3.06499 12.6453L2.5082 10.5556L4.02339 11.4353L4.4558 11.6864L4.70474 11.2528C7.65392 6.11587 14.2147 4.31387 19.3618 7.30228C21.782 8.70748 23.4391 10.908 24.2391 13.3748Z"
                      fill="#6CB771" stroke="#F9F9F9" />
                    <path class="stroke-lg-white"
                      d="M3.76091 18.6252L6.32769 17.9335C6.92642 19.7439 8.14609 21.3944 9.93756 22.4345C13.8315 24.6953 18.8124 23.3517 21.0588 19.4388L21.3078 19.0052L20.8754 18.7541L19.3339 17.8592L21.4338 17.3282L21.4413 17.3263L21.4487 17.3242L23.7028 16.6791C23.8051 16.6525 23.9419 16.6697 24.0737 16.7463C24.2069 16.8236 24.2904 16.9354 24.3179 17.0386L24.935 19.3547L25.4918 21.4444L23.9766 20.5647L23.5442 20.3136L23.2953 20.7472C20.3461 25.8841 13.7853 27.6861 8.63821 24.6977C6.21797 23.2925 4.56087 21.092 3.76091 18.6252Z"
                      fill="#6CB771" stroke="#F9F9F9" />
                  </svg>
                </div>
                <small class="text-danger fs-12 font-bold" v-if="!ISCaptchaValid">کد وارد شده شما باید با کد کپچا برابر
                  باشد</small>
              </div>
              <input type="submit" value="ورود"
                class="bg-main rounded-4 text-white fw-bold w-100 h-48 mt-4 border-0 mb-2" />
              <router-link to="/signUp"
                class="bg-black d-flex align-items-center justify-content-center rounded-4 text-white fw-bold w-100 h-48 mt-4 border-0 mb-2">ثبت
                نام</router-link>
            </form>
          </div>
        </div>
      </section>
    </aos-vue>
  </main>
</template>

<script>
// import { useStore } from "vuex";
import Swal from "sweetalert2";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginStore } from "@/store/modules/login.js"

export default {
  name: "Login-component",

  setup() {

    const router = useRouter();
<<<<<<< HEAD
    // const store = useStore();
=======
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
    const formData = ref({
      username: '',
      password: '',
      captchaVal: ''
    })
<<<<<<< HEAD
=======
    const startValidation = ref(false);
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
    const passwordFieldType = ref("password");
    const captchaCode = ref(generateCaptchaCode());
    const userInput = ref("");

    const ISUsernameValid = ref(true)
    const ISPasswordValid = ref(true)
    const ISCaptchaValid = ref(true)

    function generateCaptchaCode() {
      return Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    function generateNewCaptcha() {
      captchaCode.value = generateCaptchaCode();
      userInput.value = '';
<<<<<<< HEAD
=======
      startValidation.value = false;
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
    }

    const loginDetails = loginStore()
    function loginUser() {
      if (formData.value.username || formData.value.password || formData.value.captchaVal) {
        if (formData.value.captchaVal == captchaCode.value) {

          ISUsernameValid.value = /^[a-zA-Z-]+$/.test(formData.value.username)
<<<<<<< HEAD
          ISPasswordValid.value = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/.test(formData.value.password)
          if (formData.value.captchaVal === captchaCode.value) {
            ISCaptchaValid.value = true
          } else {
            ISCaptchaValid.value = false
          }
          if (ISUsernameValid.value || ISPasswordValid.value || ISCaptchaValid.value) {
            loginDetails.sendLoginUserDetails(formData.value)
              .then(() => {
                Swal.fire({
                  title: "تبریک",
                  text: "ورود",
                  icon: "success",
                  confirmButtonText: "بستن",
                });
                router.push('/');
              }).catch(() => {
                console.log('error')
              })
          }
=======
          if(formData.value.username.length >= 4){
            ISUsernameValid.value = true
          }else{
            ISUsernameValid.value = false
          }

          ISPasswordValid.value =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/.test(formData.value.password)

          if (formData.value.captchaVal.toUpperCase() === captchaCode.value) {
            ISCaptchaValid.value = true      
          }else{
            ISCaptchaValid.value = false
          }
      
          startValidation.value = true;
          loginDetails.sendLoginUserDetails(formData.value)
            .then(() => {
              Swal.fire({
                title: "تبریک",
                text: "ورود",
                icon: "success",
                confirmButtonText: "بستن",
              });
              router.push('/');
            }).catch(() => {
              console.log('error')
            })
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
        } else {
          console.log('کد اشتباه')
        }
      } else {
        console.log('empty')
      }
    }



    function switchVisibility() {
      passwordFieldType.value =
        passwordFieldType.value === "password" ? "text" : "password";
    }

    return {
      formData,
      passwordFieldType,
      ISUsernameValid,
      ISPasswordValid,
<<<<<<< HEAD
=======
      startValidation,
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
      loginUser,
      switchVisibility,
      captchaCode,
      userInput,
      ISCaptchaValid,
      generateNewCaptcha
    };
  },
};
</script>

<style></style>