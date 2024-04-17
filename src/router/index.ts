import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: () => import('../layout/SideBar.vue')
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('../layout/Header.vue')
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../layout/AppMain.vue'),
      children: [
        {
          path: '/simplyTable',
          name: 'simplyTable',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Table/SimplyTable.vue')
        },
        {
          path: '/simplyTable2',
          name: 'simplyTable2',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Table/SimplyTable2.vue')
        },
        {
          path: '/simplyTable3',
          name: 'simplyTable3',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Table/SimplyTable3.vue')
        },
        {
          path: '/complexTable',
          name: 'complexTable',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Table/ComplexTable.vue')
        },
      ]
    },
   


    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
   
  ]
})


router.beforeEach((to, from, next) => {
  NProgress.start();
  const role = localStorage.getItem('ms_username');
  // const permiss = usePermissStore();
  // if (!role && to.path !== '/login') {
  //     next('/login');
  // } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
  //     // 如果没有权限，则进入403
  //     next('/403');
  // } else {
      
  // }
  next();
});
router.afterEach(() => {
  NProgress.done()
})

export default router
