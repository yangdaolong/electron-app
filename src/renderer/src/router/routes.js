/**
 * 路由表
 */

export const AppRoutes = [
  {
    path: '/login',
    name: '登录',
    component: () => import('@renderer/views/login.vue')
  },
  {
    path: '/',
    name: '首页',
    component: () => import('@renderer/views/home.vue')
  }
]
