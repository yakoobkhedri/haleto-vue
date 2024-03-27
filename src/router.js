import { createRouter,createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Cadr from './pages/Cadr.vue';
import Request from './pages/Request.vue';
import SingleBlog from './pages/SingleBlog.vue';

const routes=[
    {name:'home',path:'/',component:Home},
    {name:'cadr',path:'/cadr',component:Cadr},
    {name:'request',path:'/request',component:Request},
    {name:'singleBlog',path:'/singleBlog',component:SingleBlog},
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;