<template>
 <main class="bg-white h-100vh overflow-hidden">

    <aos-vue>
      
      <section>
      <div class="row mx-0">
        <div class="col-lg-7 px-0 position-relative d-none d-lg-block">
          <!-- shape -->
          <svg class="position-absolute bottom-0 end-0 mb-5" width="223" height="365" viewBox="0 0 223 365" fill="none"
            xmlns="http://www.w3.org/2000/svg">
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
          <img alt="bg" :src="require('../assets/img/backgorund.png')" class="img-fluid w-100 h-100vh h-lg-auto">
          <div
            class="position-absolute pb-5 end-0 start-0 bottom-0 top-0 mx-auto text-white text-center d-flex align-items-center justify-content-center">
            <div>
              <h1 class="font-bold">
                سلامت روان حق همه ماست
              </h1>
              <h3 class="mt-4">اتاق مشاوره آنلاین روانشناسی</h3>
            </div>
          </div>
        </div>
        <div class="col-lg-5 position-relative bg-login h-100vh overflow-auto">
          <!-- go back -->
          <router-link to="/" class="position-absolute start-0 m-4">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_297_333)">
              <path class="fill-lg-white" fill-rule="evenodd" clip-rule="evenodd" d="M9.42001 0.112617L0.0500102 11.7497C-0.0099893 11.8999 -0.00998932 12.1376 0.0500101 12.2127L9.42001 23.9374C9.48001 24.0125 9.67001 24.0125 9.79001 23.9374L10.96 22.3983L3.63001 13.2263L23.71 13.2263C24.26 13.2263 24.76 12.6131 24.76 11.9124C24.76 11.2242 24.27 10.5985 23.71 10.5985L3.81001 10.5985L10.96 1.57664L9.79001 0.112617C9.67001 -0.0375398 9.48001 -0.0375398 9.42001 0.112617Z" fill="#232524"/>
              </g>
              <defs>
              <clipPath id="clip0_297_333">
              <rect width="24" height="24.76" fill="white" transform="translate(24.76) rotate(90)"/>
              </clipPath>
              </defs>
            </svg>
          </router-link>
          <!-- shape -->
          <svg class="position-absolute bottom-0 start-0 -z-0 d-none d-lg-block" width="159" height="172" viewBox="0 0 159 172"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="-4.01515" cy="189.515" r="154.985" fill="#232524" />
            <circle cx="1.20464" cy="179.477" r="156.795" stroke="#232524" stroke-width="2" />
            <circle cx="1.20464" cy="167.432" r="157.045" stroke="#232524" stroke-width="1.5" />
            <circle cx="-1.20454" cy="157.795" r="157.295" stroke="#232524" />
          </svg>
          <!--  -->
          <form @submit.prevent="checkCode" class="max-w-340 mx-auto my-5 py-5 position-relative">
            <div class="mb-5 pb-5 d-block d-lg-none text-white text-center">
              <h1 class="font-bold fs-20">
                سلامت روان حق همه ماست
              </h1>
              <h3 class="mt-4 fs-14 font-bold">اتاق مشاوره آنلاین روانشناسی</h3>
            </div>
            <img alt="logo" :src="require('../assets/img/Screen.png')"
                class="d-block mx-auto">
            <h4 class="font-bold fs-20 text-center mt-3 text-lg-white">verification</h4>
            <h5 class="fs-18 mt-4 text-center font-bold text-lg-white">لطفا کدی که به شماره موبایل شما ارسال شده است را وارد نمایید</h5>
<<<<<<< HEAD
            <div dir="ltr" ref="inputDiv" class="mt-5 d-flex align-items-center justify-content-center gap-3">
             <input @input="focusNextInput($event, 1)" type="number" class="rounded-4 text-lg-white placeholder-lg-white font-bold border border-secondary bg-transparent outline-none text-center h-48 w-40 border-lg-white" min="0" max="9" maxlength="1">
             <input @input="focusNextInput($event, 2)" type="number" class="rounded-4 text-lg-white placeholder-lg-white font-bold border border-secondary bg-transparent outline-none text-center h-48 w-40 border-lg-white" min="0" max="9" maxlength="1">
             <input @input="focusNextInput($event, 3)" type="number" class="rounded-4 text-lg-white placeholder-lg-white font-bold border border-secondary bg-transparent outline-none text-center h-48 w-40 border-lg-white" min="0" max="9" maxlength="1">
             <input @input="focusNextInput($event, 4)" type="number" class="rounded-4 text-lg-white placeholder-lg-white font-bold border border-secondary bg-transparent outline-none text-center h-48 w-40 border-lg-white" min="0" max="9" maxlength="1">
             <input @input="focusNextInput($event, 5)" type="number" class="rounded-4 text-lg-white placeholder-lg-white font-bold border border-secondary bg-transparent outline-none text-center h-48 w-40 border-lg-white" min="0" max="9" maxlength="1">
=======
            <div class="mt-5 d-flex align-items-center justify-content-center gap-3">
             <input v-model="formDataCode.fifth" inputId="fifth" type="number" class="rounded-4 text-lg-white placeholder-lg-white font-bold border border-secondary bg-transparent outline-none text-center h-48 w-40 border-lg-white" min="0" max="9" maxlength="1">
             <input v-model="formDataCode.forth" inputId="forth" type="number" class="rounded-4 text-lg-white placeholder-lg-white font-bold border border-secondary bg-transparent outline-none text-center h-48 w-40 border-lg-white" min="0" max="9" maxlength="1">
             <input v-model="formDataCode.third" inputId="third" type="number" class="rounded-4 text-lg-white placeholder-lg-white font-bold border border-secondary bg-transparent outline-none text-center h-48 w-40 border-lg-white" min="0" max="9" maxlength="1">
             <input v-model="formDataCode.secend" inputId="secend" type="number" class="rounded-4 text-lg-white placeholder-lg-white font-bold border border-secondary bg-transparent outline-none text-center h-48 w-40 border-lg-white" min="0" max="9" maxlength="1">
             <input v-model="formDataCode.first" inputId="first" type="number" class="rounded-4 text-lg-white placeholder-lg-white font-bold border border-secondary bg-transparent outline-none text-center h-48 w-40 border-lg-white" min="0" max="9" maxlength="1">
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
            </div>
            <input type="submit" value="تایید"
            class="bg-main rounded-4 text-white fw-bold w-100 h-48 mt-4 border-0 mb-2">
          </form>
        </div>
      </div>
    </section>

    </aos-vue>
    
  </main>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginStore } from "@/store/modules/login.js"


export default {
  name: "Otp-component",

  setup() {
    const router = useRouter();
    const startValidation = ref(false);
<<<<<<< HEAD
    const formDataCode = ref([]);

    const inputDiv = ref(null)
    function focusNextInput(event, index) {
      event.target.value = event.target.value.replace(/\D/g, '')
      if (event.target.value) {
        formDataCode.value[index-1] = event.target.value 
      }
      if (event.data.length === 1 && index < 5) {
        inputDiv.value.children[index].focus()
      }
    }

    const loginDetails = loginStore()

    function checkCode() {
      if (formDataCode.value.length == 5 ) {
        let finalCode = Number(formDataCode.value[0] + '' + formDataCode.value[1] + '' + formDataCode.value[2] + '' + formDataCode.value[3] + '' + formDataCode.value[4])
        loginDetails.sendUserCode(finalCode)
          .then(() => {
            Swal.fire({
              title: "تبریک",
              text: "ثبت نام شما با موفقیت انجام شد",
              icon: "success",
              confirmButtonText: "بستن",
            });
            router.push({ path: "/SignUpPassword" });


          }).catch(() => {
            console.log('error')
          })
      } else {
        console.log('empty')
      }
    }
=======
    const formDataCode = ref({
      first: "",
      secend: "",
      third: "",
      forth: "",
      fifth: ""
    });

    const loginDetails = loginStore()
    
    function checkCode() {
      if ( formDataCode.value.first || formDataCode.value.secend || formDataCode.value.third || formDataCode.value.forth || formDataCode.value.fifth ) {
        
        let finalCode = Number(formDataCode.value.first +''+ formDataCode.value.secend +''+ formDataCode.value.third +''+ formDataCode.value.forth +''+   formDataCode.value.fifth)
        loginDetails.sendUserCode(finalCode)
        .then(()=>{
          Swal.fire({
            title: "تبریک",
            text: "ثبت نام شما با موفقیت انجام شد",
            icon: "success",
            confirmButtonText: "بستن",
          });
          router.push({ path: "/SignUpPassword" });


        }).catch(()=>{
          console.log('error')
        })
      }else{
        console.log('empty')
      }
  }
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef

    return {
      formDataCode,
      startValidation,
      checkCode,
<<<<<<< HEAD
      focusNextInput,
      inputDiv
=======
>>>>>>> b3b14c8b830332fe9f9b47323e954e65079838ef
    };
  },
};
</script>

<style></style>