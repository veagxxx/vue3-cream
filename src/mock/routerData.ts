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
    id: 2,
    name: 'Commodity',
    path: '/commodity',
    component: 'pages/home/index.vue',
    role: 'admin',
    meta: {
      title: '商品管理',
      icon: 'commodity',
      hasAuthority: true,
    },
  },
  {
    id: 3,
    name: 'Order',
    path: '/order',
    component: 'pages/home/index.vue',
    role: 'admin',
    meta: {
      title: '订单管理',
      icon: 'order',
      hasAuthority: true,
    },
    children: [
      {
        id: 33,
        name: 'ZZZZ',
        path: '/zzzz',
        component: 'pages/home/index.vue',
        role: 'admin',
        meta: {
          title: '我的订单',
          icon: 'order',
          hasAuthority: true,
        },
      },
    ]
  },
  {
    id: 4,
    name: 'Member',
    path: '/member',
    component: 'pages/home/index.vue',
    role: 'admin',
    meta: {
      title: '会员管理',
      icon: 'member',
      hasAuthority: true,
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
]