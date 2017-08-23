import Vue from 'vue'
import takeOut from '@/view/takeOut';
import Order from '@/view/Order';
import Discover from '@/view/Discover';
import Mine from '@/view/Mine';
import footerGuide from '@/components/footerGuide'; 
import Login from '@/components/login';
import Integral from '@/components/Mine/Integral';
import membership from '@/components/Mine/membership';
import service from '@/components/Mine/service';
import elmApp from '@/components/Mine/elmApp';
import DessertDrinks from '@/components/TakeOut/DessertDrinks';
import common from '@/components/common/common';
import nearstore from '@/components/common/nearstore';
import Router from 'vue-router';

Vue.use(Router)                 //使用Router路由插件

export default new Router({
    linkActiveClass: "focus",//router高亮
    routes: [
        { path: '/', redirect: '/footerGuide/takeOut'}, //重定向到默认首页
        { path: '/footerGuide',component:footerGuide ,
            children:[
            {path: 'takeOut',component: takeOut},
            {path: 'Order',component: Order},
            {path: 'Discover',component: Discover},
            {path: 'Mine',component: Mine},
            {path: '/',component: takeOut}
            ]
        },
        {path: '/login',component: Login},
        {path:'/Integral',component:Integral},
        {path:'/membership',component:membership},
        {path:'/service',component:service},
        {path:'/elmApp',component:elmApp},
        {path:'/DessertDrinks',component:DessertDrinks},
        {path:'/common',component:common},
        {path:'/nearstore',component:nearstore}
    ]
})
