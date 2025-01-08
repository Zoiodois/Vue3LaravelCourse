import { createRouter, createWebHistory } from 'vue-router'
// import HomeComputedView from '../views/HomeComputedView.vue'
// import HomeOptionView from '../views/HomeOptionView.vue'
// import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeOptionView',
      component: () => import('../views/HomeOptionView.vue'),
    },
    {
      path: '/homecomputed',
      name: 'homeComputedView',
      component: () => import('../views/HomeCompositionView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
      // component: ProductsView, ->Not the best pratice. Import in the eggining of file
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/user/createOptionApi',
      name: 'user-createOptionApi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/userCreateOptionApiView.vue'),
    },
    
    {
      path: '/user/createCompositionApi',
      name: 'user-createCompositionApi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/userCreateCompositionApiView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    
  ],
})

export default router
