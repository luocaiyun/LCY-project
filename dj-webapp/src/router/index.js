import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import Classification from '../views/Classification'
import Explore from '../views/Explore'
// import ShoppingCart from '../views/ShoppingCart'
import user from '../views/user'
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/Classification',
      component: Classification
    },
    {
      path: '/Explore',
      component: Explore
    },
    // {
    //   path: '/ShoppingCart',
    //   component: ShoppingCart
    // },
    {
      path: '/user',
      component: user
    },

    // {
    //   path: '/main',
    //   component: main,
    //   children: [
    //     {
    //       path: '',
    //       component: home
    //     },
    //     {
    //       path: 'search',
    //       component: search
    //     }
    //   ]
    // }
  ]
});

// 全局路由guard 前置guard user ->main -> login
// router.beforeEach((to, from, next) => {
//   console.log(to.path) // to from $route
//   console.log(from.path)
  // let token = localStorage.getItem('token')
  // next()
  // if (token) {
  //   next('/main')
  // } else {
  //   next('/login')
  // }
// })

// router.afterEach((to, from) => {
  // window.confirm('您真的需要退出吗!')
  // console.log('afterEach')
// });

export default router

