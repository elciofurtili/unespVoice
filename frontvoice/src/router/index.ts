import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'dashboard' },
  },
  {
    name: 'admin',
    path: '/',
    component: AppLayout,
    redirect: { name: 'dashboard' },
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'projects',
        path: '/projects',
        component: RouteViewComponent,
        children: [
          {
            name: 'my-projects',
            path: 'my-projects',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'all-projects',
            path: 'all-projects',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
        ],
      },
      {
        name: 'imagined-speech',
        path: '/imaginedspeech',
        component: RouteViewComponent,
        children: [
          {
            name: 'my-imagined-speechs',
            path: 'my-imagined-speechs',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'all-imagined-speechs',
            path: 'all-imagined-speechs',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
        ],
      },
      {
        name: 'organization',
        path: '/organization',
        component: RouteViewComponent,
        children: [
          {
            name: 'my-organizations',
            path: 'my-organizations',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'all-organizations',
            path: 'all-organizations',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'organization-solicitation',
            path: 'organization-solicitation',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
        ],
      },
      {
        name: 'faq',
        path: '/faq',
        component: () => import('../pages/faq/FaqPage.vue'),
      },
      // Daqui pra baixo é o que vair
      {
        name: 'settings',
        path: 'settings',
        component: () => import('../pages/settings/Settings.vue'),
      },
      {
        name: 'preferences',
        path: 'preferences',
        component: () => import('../pages/preferences/Preferences.vue'),
      },
      {
        name: 'users',
        path: 'users',
        component: () => import('../pages/users/UsersPage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/RecoverPassword.vue'),
      },
      {
        name: 'recover-password-email',
        path: 'recover-password-email',
        component: () => import('../pages/auth/CheckTheEmail.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../pages/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      window.scrollTo(0, 0)
    }
  },
  routes,
})

export default router
