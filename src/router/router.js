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
import Session from '../pages/Session.vue';
import Session2 from '../pages/Session2.vue';
import Tests from '../pages/Tests.vue';
import UserInfo from '../pages/UserInfo.vue';
import UserInfo2 from '../pages/UserInfo2.vue';
import Bimeh from '../pages/Bimeh.vue';
import OfficeSetting from '../pages/OfficeSetting.vue';
import ProfileInfo from '../pages/ProfileInfo.vue';
import Dashboard from '../pages/Dashboard.vue';
import Questions from '../pages/Questions.vue';
import RequestSession from '../pages/RequestSession.vue';
import MySessions from '../pages/MySessions.vue';
import MyTransactions from '../pages/MyTransactions.vue';
import Patients from '../pages/Patients.vue';
import Reports from '../pages/Reports.vue';
import Blog from '../pages/Blog.vue';
import NewTicket from '../pages/NewTicket.vue';

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
    {name:'session',path:'/session',component:Session},
    {name:'session2',path:'/session2',component:Session2},
    {name:'tests',path:'/tests',component:Tests},
    {name:'userInfo',path:'/userInfo',component:UserInfo},
    {name:'userInfo2',path:'/userInfo2',component:UserInfo2},
    {name:'bimeh',path:'/bimeh',component:Bimeh},
    {name:'officeSetting',path:'/officeSetting',component:OfficeSetting},
    {name:'profileInfo',path:'/profileInfo',component:ProfileInfo},
    {name:'dashboard',path:'/dashboard',component:Dashboard},
    {name:'questions',path:'/questions',component:Questions},
    {name:'requestSession',path:'/requestSession',component:RequestSession},
    {name:'mySessions',path:'/mySessions',component:MySessions},
    {name:'myTransactions',path:'/myTransactions',component:MyTransactions},
    {name:'patients',path:'/patients',component:Patients},
    {name:'reports',path:'/reports',component:Reports},
    {name:'blog',path:'/blog',component:Blog},
    {name:'newTicket',path:'/newTicket',component:NewTicket},
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;