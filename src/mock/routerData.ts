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
    name: 'Instruct',
    path: '/instruct',
    component: 'pages/instruct/index.vue',
    role: 'admin',
    meta: {
      title: '指令',
      icon: 'cpu',
      hasAuthority: false,
    },
  },
  {
    id: 4,
    name: 'Hook',
    path: '/hook',
    component: 'pages/hook/index.vue',
    role: 'admin',
    meta: {
      title: 'Hook',
      icon: 'hook',
      hasAuthority: false,
    },
  },
  {
    id: 5,
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
    id: 6,
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