export default [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      authentication: true
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/home')
  }
]
