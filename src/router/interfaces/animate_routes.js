export default [
  {
    path: '/animate',
    name: 'animate',
    meta: {
      title: '动画'
    },
    component: () => import(/* webpackChunkName: "animateHome" */ '@/views/animate/home')
  },
  {
    path: '/animate/login_a',
    name: 'animateLoginA',
    meta: {
      title: '动画_登陆'
    },
    component: () => import(/* webpackChunkName: "animateLoginA" */ '@/views/animate/login_a')
  }
]
