<template>

<Header-2 />

  <main>

    <aos-vue>

         <!-- request -->
    <section class="py-lg-5">
        <div class="container my-5">
         <div class="row g-4 align-items-center mx-0">
          <div class="col-xxl-1"></div>
         <div class="col-xxl-4 col-lg-6">
            <div class="w-385 w-sm-auto h-385 h-sm-auto rounded-circle mx-auto mx-lg-0 bg-main d-flex align-items-center justify-content-start p-sm-1 p-3">
             <img alt="img" :src="require('../assets/img/image 3.png')" class="img-fluid rounded-circle w-361 w-sm-100 h-361 h-sm-auto d-block border-second-13" data-aos="flip-up">
            </div>
         </div>
         <div class="col-xxl-7 col-lg-6" data-aos="fade-up">
          <div class="max-w-581 position-relative mx-auto me-lg-0">
            <!-- shape -->
            <svg class="position-absolute start-0" width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H15V3.5H3.46154V13H0V0Z" fill="#20BC7E"/>
            </svg>
            <svg class="position-absolute bottom-0 end-0" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 18L3.8147e-06 18L2.77382e-06 13.1538L13.8462 13.1538L13.8462 1.47808e-07L18 0L18 18Z" fill="#F0AC3A"/>
            </svg>
            <!--  -->
            <h6 class="fw-bold text-dark text-center pt-3">در خواست <span class="text-main">مشاوره تخصصی</span> و حرفه ای برای کمک به شما عزیزان</h6>
            <p class="text-muted fs-14 lh-40 mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
            </p>
            <a class="d-flex align-items-center justify-content-center fw-bold text-white bg-second w-174 h-48 rounded-8 mt-5 me-auto">درخواست مشاوره</a>
          </div>
          </div>
         </div>
        </div>
    </section>

    <!-- stastistics -->
    <section>
      <div class="container">
       <div class="bg-stat rounded-24 py-5 position-relative">
        <!-- overlay -->
         <div id="overlay" class="position-absolute end-0 start-0 bottom-0 top-0 w-100 h-100 rounded-24"></div>
        <!--  -->
         <div class="d-flex flex-column flex-md-row gap-4 align-items-center justify-content-between mx-sm-5 mx-3 text-center text-white position-relative">
           <div>
            <img alt="img" :src="require('../assets/img/healthicons_doctor-male-outline.png')" class="d-block mx-auto">
            <p class="font-bold fs-18 mt-1 mb-2">409+</p>
            <p class="mb-0 fw-bold">تعداد مشاوره های ملی</p>
           </div>
           <div>
            <img alt="img" :src="require('../assets/img/heroicons-outline_emoji-happy.png')" class="d-block mx-auto">
            <p class="font-bold fs-18 mt-1 mb-2">30,00,000+</p>
            <p class="mb-0 fw-bold">تعداد مشاوران بین المللی</p>
           </div>
           <div>
            <img alt="img" :src="require('../assets/img/healthicons_doctor-male-outline.png')" class="d-block mx-auto">
            <p class="font-bold fs-18 mt-1 mb-2">409+</p>
            <p class="mb-0 fw-bold">تعداد مشاوره های ملی</p>
           </div>
         </div>
         <div class="mx-sm-5 mx-3 mt-5 pt-5 position-relative -mb-205" data-aos="fade-up">
           <form class="rounded-16 overflow-hidden bg-white shadow d-flex align-items-stretch flex-column flex-lg-row">
             <!-- <img alt="img" :src="require('../assets/img/moshavere.PNG')" class="img-fluid flex-shrink-0 d-block max-w-275 d-none d-lg-block"> -->
             <div class="flex-grow-1 p-sm-4 p-3 ps-xl-5">
               <h5 class="fw-bold text-orange">نیاز به توضیحات بیشتر دارید؟</h5>
               <h6 class="fw-bold text-dark my-4">در خواست مشاوره تخصصی و حرفه ای برای کمک به شما عزیزان</h6>
               <div class="row mx-0 g-4 ps-xl-5">
                 <div class="col-lg-6">
                   <input placeholder="نام" class="border outline-none w-100 h-64 rounded-12 px-3">
                 </div>
                 <div class="col-lg-6">
                   <input placeholder="نام خانوادگی" class="border outline-none w-100 h-64 rounded-12 px-3">
                 </div>
                 <div class="col-lg-6">
                   <input placeholder="ایمیل" class="border outline-none w-100 h-64 rounded-12 px-3">
                 </div>
                 <div class="col-lg-6">
                   <input placeholder="شماره تماس" class="border outline-none w-100 h-64 rounded-12 px-3">
                 </div>
                 <div class="col-12">
                    <input type="submit" value="ثبت مشخصات" class="bg-main text-white fw-bold rounded-8 w-174 h-48 border-0 mx-auto d-block">
                 </div>
               </div>
             </div>
           </form>
         </div>
       </div>
      </div>
    </section>

    <!-- experts -->
    <section class="my-5 py-5">
      <div class="container mt-5 pt-5">
        <div class="row g-5 mx-0 mt-5 pt-5">
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="flip-down">
                 <img alt="img" :src="require('../assets/img/image 44.png')" class="img-fluid rounded-12 w-100 transition">
                 <div class="bg-main rounded-t-20 p-3 bottom-0 start-0 end-0 text-white fw-bold position-absolute">
                   <p class="text-center mb-3 fw-bold">زوج درمانی</p>
                  <p class="mb-0 fs-14">در خواست مشاوره تخصصی و حرفه ای برای کمک به شما عزیزان</p>
                 </div>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="fade-down">
                 <img alt="img" :src="require('../assets/img/image 41.png')" class="img-fluid rounded-12 w-100 transition">
                 <div class="bg-main rounded-t-20 p-3 bottom-0 start-0 end-0 text-white fw-bold position-absolute">
                  <p class="text-center mb-3 fw-bold">کادر درمان</p>
                 <p class="mb-0 fs-14">در خواست مشاوره تخصصی و حرفه ای برای کمک به شما عزیزان</p>
                </div>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="fade-up">
                 <img alt="img" :src="require('../assets/img/image 47.png')" class="img-fluid rounded-12 w-100 transition">
                 <div class="bg-main rounded-t-20 p-3 bottom-0 start-0 end-0 text-white fw-bold position-absolute">
                  <p class="text-center mb-3 fw-bold">گفتار درمان</p>
                 <p class="mb-0 fs-14">در خواست مشاوره تخصصی و حرفه ای برای کمک به شما عزیزان</p>
                </div>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="fade-down">
                 <img alt="img" :src="require('../assets/img/image 47(1).png')" class="img-fluid rounded-12 w-100 transition">
                 <div class="bg-main rounded-t-20 p-3 bottom-0 start-0 end-0 text-white fw-bold position-absolute">
                  <p class="text-center mb-3 fw-bold">مراکز درمانی</p>
                 <p class="mb-0 fs-14">در خواست مشاوره تخصصی و حرفه ای برای کمک به شما عزیزان</p>
                </div>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="flip-up">
                 <img alt="img" :src="require('../assets/img/image 5.png')" class="img-fluid rounded-12 w-100 transition">
                 <div class="bg-main rounded-t-20 p-3 bottom-0 start-0 end-0 text-white fw-bold position-absolute">
                  <p class="text-center mb-3 fw-bold">روانشناسان</p>
                 <p class="mb-0 fs-14">در خواست مشاوره تخصصی و حرفه ای برای کمک به شما عزیزان</p>
                </div>
              </a>
            </div>
            <div class="col-xl-4 col-md-6">
              <a class="d-block border-main rounded-12 overflow-hidden position-relative zoom-hover" data-aos="fade-up">
                 <img alt="img" :src="require('../assets/img/image 42.png')" class="img-fluid rounded-12 w-100 transition">
                 <div class="bg-main rounded-t-20 p-3 bottom-0 start-0 end-0 text-white fw-bold position-absolute">
                  <p class="text-center mb-3 fw-bold">روانشناسان</p>
                 <p class="mb-0 fs-14">در خواست مشاوره تخصصی و حرفه ای برای کمک به شما عزیزان</p>
                </div>
              </a>
            </div>
        </div>
      </div>
    </section>

    </aos-vue>
    
  </main>

  <Footer />

</template>

<script>
import Header2 from '@/components/Header/Header2.vue';
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: { Header2,Footer },
  name: "Request-component",
};
</script>

<style></style>