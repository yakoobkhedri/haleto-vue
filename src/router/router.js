import { createRouter,createWebHistory } from "vue-router";
import Home from '../pages/Home.vue';
import Cadr from '../pages/Cadr.vue';
import Request from '../pages/Request.vue';
import SingleBlog from '../pages/SingleBlog.vue';
import Login from '../pages/Login.vue';
import Otp from '../pages/Otp.vue';
import SignUp from '../pages/SignUp.vue';
import Moshaveran from '../pages/Moshaveran.vue';
import Wallet from '../pages/Wallet.vue';

const routes=[
    {name:'home',path:'/',component:Home},
    {name:'cadr',path:'/cadr',component:Cadr},
    {name:'request',path:'/request',component:Request},
    {name:'singleBlog',path:'/singleBlog',component:SingleBlog},
    {name:'login',path:'/login',component:Login},
    {name:'otp',path:'/otp',component:Otp},
    {name:'signUp',path:'/signUp',component:SignUp},
    {name:'moshaveran',path:'/moshaveran',component:Moshaveran},
    {name:'wallet',path:'/wallet',component:Wallet},
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;