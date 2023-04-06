import { Route } from '@/typings/route';
export const routerList: Route[] = [
  {
    id: 1,
    name: 'Index',
    path: '/index',
    component: 'pages/home/index.vue',
    role: '',
    meta: {
      title: '首页',
      icon: 'home',
      hasAuthority: false,
    }
  },
  {
    id: 3,
    name: 'Component',
    path: '/component',
    component: 'pages/component/index.vue',
    role: 'admin',
    meta: {
      title: '组件',
      icon: 'comp',
      hasAuthority: false,
    },
  },
  {
    id: 4,
    name: 'Game',
    path: '/game',
    component: 'pages/game/index.vue',
    role: 'admin',
    meta: {
      title: '游戏',
      icon: 'game',
      hasAuthority: false,
    },
  },
  {
    id: 5,
    name: 'Setting',
    path: '/setting',
    component: 'pages/setting/index.vue',
    role: 'admin',
    meta: {
      title: '系统设置',
      icon: 'setting',
      hasAuthority: true,
    },
  },
]