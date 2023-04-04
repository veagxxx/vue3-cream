
export const login = {
  path: '/login',
  component: () => import('@/pages/login/Login.vue'),
}
// 404页面
export const error = {
  path: '/:pathMatch(.*)',
  component: () => import('@/pages/error404/index.vue'),
}

export default {
  login,
  error,
}