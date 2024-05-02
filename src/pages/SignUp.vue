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
                  <input :class="[!ISFirstnameValid ? 'border-danger' : 'border-secondary']" v-model="formData.firstname"
                    class="h-48 placeholder-lg-white outline-none bg-transparent w-100 rounded-4 border fw-bold fs-12 mb-1 px-3"
                    placeholder="نام" />
                  <small class="text-danger fs-12 font-bold" v-if="!ISFirstnameValid">نام باید فارسی و فاقد
                    عدد و کاراکتر خاص باشد</small>
                </div>
                <div class="mb-3">
                  <input :class="{
                    'border-secondary': ISLastnameValid,
                    'border-danger': !ISLastnameValid,
                  }" v-model="formData.lastname"
                    class="h-48 placeholder-lg-white outline-none bg-transparent w-100 rounded-4 border fw-bold fs-12 mb-1 px-3"
                    placeholder="نام خانوادگی" />
                  <small class="text-danger fs-12 font-bold" v-if="!ISLastnameValid">نام خانوادگی باید فارسی و فاقد عدد
                    و کاراکتر خاص
                    باشد</small>
                </div>
                <div class="mb-3">
                  <div :class="{
                    'border-secondary': ISPhoneValid,
                    'border-danger': !ISPhoneValid,
                  }" class="d-flex h-48 align-items-stretch gap-1 rounded-4 border mb-1">
                    <input type="number" min="0" v-model="formData.phone"
                      class="placeholder-lg-white outline-none bg-transparent w-100 border-0 fw-bold fs-12 px-3"
                      placeholder="شماره موبایل" />
                    <select class="bg-transparent border-end border-0 px-3 text-lg-white placeholder-lg-white">
                      <option>98+</option>
                      <option>90+</option>
                      <option>94+</option>
                    </select>
                  </div>
                  <small class="text-danger fs-12 font-bold" v-if="!ISPhoneValid">شماره تلفن باید 10 رقمی باشد</small>
                </div>


                <div class="w-full flex items-center justify-between mb-3">
                  <simpleDropdown
                    class="text-lg-white placeholder-lg-white border-secondary outline-none bg-transparent w-100 rounded-4 border fw-bold fs-12 mb-3 px-3"
                    v-model="countrySelectValue" @change="formData.country = $event.value.name"
                    :options="countryTypeOptions" optionLabel="name" placeholder="کشور" />
                </div>

                <label class="d-flex align-items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="form-check-input cursor-pointer" v-model="isAcceptRuls" />
                  <p class="mb-0 mt-1 text-main fs-14 fw-bold">
                    قوانین و مقررات
                  </p>
                </label>
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
  name: "SignUp-component",

  setup() {
    const router = useRouter();
    const isAcceptRuls = ref(false)
    const formData = ref({
      firstname: "",
      lastname: "",
      phone: "",
      country: "",
    });

    const countrySelectValue = ref()
    const countryTypeOptions = ref([
      { name: 'ایران', code: 'Iran' },
      { name: 'عراق', code: 'Iraq' },
    ]);


    const ISFirstnameValid = ref(true)
    const ISLastnameValid = ref(true)
    const ISPhoneValid = ref(true)

    const loginDetails = loginStore()
    function signUpUser() {
      if (formData.value.firstname || formData.value.lastname || formData.value.phone || formData.value.country || isAcceptRuls.value) {
        ISFirstnameValid.value = /^[\u0600-\u06FF\s]+$/.test(formData.value.firstname)
        ISLastnameValid.value = /^[\u0600-\u06FF\s]+$/.test(formData.value.lastname)
        ISPhoneValid.value = /^\d{10}$/.test(formData.value.phone)

        if (ISFirstnameValid.value || ISLastnameValid.value || ISPhoneValid.value) {
          loginDetails.sendUserNumber(formData.value)
            .then(() => {
              Swal.fire({
                title: "تبریک",
                text: "ثبت نام شما با موفقیت انجام شد",
                icon: "success",
                confirmButtonText: "بستن",
              });
              router.push('/otp');
            }).catch(() => {
              console.log('error')
            })
        }
      } else {
        console.log('error')
      }
    }

    return {
      countrySelectValue,
      countryTypeOptions,
      isAcceptRuls,
      formData,
      ISFirstnameValid,
      ISLastnameValid,
      ISPhoneValid,
      signUpUser,
    };
  },
};
</script>


<style>
.p-dropdown-items {
  background-color: white;
  width: 100%;
  padding-left: 0;
}

.p-dropdown {
  height: 48px !important;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>