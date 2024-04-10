<template>
    <header class="position-relative z-10">
        <div class="container position-relative">
            <!-- logo && menu && login -->
            <div class="d-flex align-items-center justify-content-between gap-80 gap-lg-40 py-4 position-relative">
                <div class="d-flex align-items-center justify-content-between w-100 gap-2 position-absolute z-1">
                    <div class="py-3 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-list cursor-pointer text-white" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>
                    <router-link to="/" class="d-block position-relative"><img alt="logo" :src="require('../../assets/img/logo.png')"
                            class="img-fluid"></router-link>
                </div>
                <ul
                    class="list-unstyled mx-auto mb-0 pe-0 d-lg-flex d-none align-items-center position-relative z-10 justify-content-center gap-xl-5 gap-4 py-3 fw-bold">
                    <li><router-link to="/cadr" active-class="active" class="text-white">پنل کادر درمان</router-link></li>
                    <li><router-link to="/centers" active-class="active" class="text-white">پنل مراکز درمانی</router-link></li>
                    <li><router-link to="/companies" active-class="active" class="text-white">پنل شرکت های بیمه</router-link></li>
                    <li><router-link to="/organization" active-class="active" class="text-white">پنل سازمانی</router-link></li>
                    <li><router-link to="/jobs" active-class="active" class="text-white">فرصت های شغلی</router-link></li>
                    <li><router-link to="/contact" active-class="active" class="text-white">تماس با ما</router-link></li>
                </ul>
            </div>
            <!-- mobile menu -->
            <div class="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul
                        class="list-unstyled mb-0 pe-0 d-lg-flex flex-column align-items-center justify-content-center gap-lg-5 py-3 fw-bold">
                        <li class="mb-4"><router-link to="/cadr" class="text-dark">پنل کادر درمان</router-link></li>
                        <li class="mb-4"><router-link to="/centers" class="text-dark">پنل مراکز درمانی</router-link></li>
                        <li class="mb-4"><router-link to="/companies" class="text-dark">پنل شرکت های بیمه</router-link></li>
                        <li class="mb-4"><router-link to="/organization" class="text-dark">پنل سازمانی</router-link></li>
                        <li class="mb-4"><router-link to="/jobs" class="text-dark">فرصت های شغلی</router-link></li>
                        <li><router-link to="/contact" class="text-dark">تماس با ما</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
  export default {
  name: 'Header-component',
}
</script>

<style></style>