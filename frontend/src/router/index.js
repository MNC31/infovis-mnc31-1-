import Vue from 'vue'
import Router, {createRouter, createWebHistory} from 'vue-router'

const Main = () => import("../views/Main/Main.vue")
const Test = () => import("../views/Main/Test.vue")
const New = () => import("../views/Main/New.vue")
const Old = () => import("../views/Main/Old.vue")

const routes = [
  {
    path: '/',
    name: 'New',
    component: New,
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test,
  },
  // {
  //   path: '/New',
  //   name: 'New',
  //   component: New,
  // },
  {
    path: '/Old',
    name: 'Old',
    component: Old,
  },

]

const router = createRouter({
  routes,
  history: createWebHistory('/infovis-mnc31/')
})

export default router
