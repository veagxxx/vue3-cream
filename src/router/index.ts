import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import commonRoutes from './common'
import { routerList } from '@/mock/routerData';
import { ElMessage } from 'element-plus';
const modules = import.meta.glob('../pages/**/**.vue')
const Layout = () => import('@/layout/Layout.vue')
const Home = () => import('@/pages/home/index.vue')
// 路由白名单
const whiteList: string[] = ['/login', '/register']
// 基本路由
const base: string = import.meta.env.VITE_APP_BASE_PATH
// 路由菜单
const routes: Array<RouteRecordRaw> = [
  ...Object.values(commonRoutes),
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      // { path: '/index', name: 'index', component: Home },
    ]
  }
]

const router: Router = createRouter({
  history: createWebHistory(base),
  routes,
})
const mergeRoutes = (routerList: any) => {
  routerList.forEach((item: any) => {
    if (item.name !== 'Login') {
      router.addRoute('Home', {
        path: item.path,
        name: item.name,
        component: modules[/* @vite-ignore */ `../${item.component}`],
        meta: item.meta,
      })
    }
    if(item.children && item.children.length) {
      mergeRoutes(item.children)
    }
  });
}
mergeRoutes(routerList)

router.beforeEach((to, from, next) => {
  // if (to.meta.hasAuthority) {
  //   ElMessage.warning(`无访问权限，请检查是否登录`)
  //   return {
  //     path: '/login',
  //     query: { redirect: to.fullPath },
  //   }
  // }
  next()
})

export default router 