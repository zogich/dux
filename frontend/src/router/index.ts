import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import PlaceList from "@/views/PlaceList.vue"
import PlaceView from '@/views/PlaceView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/place-list/:placeTypeId',
    name: 'PlaceList',
    component: PlaceList,
    props: (route) => {
      const placeTypeId = route.params.placeTypeId;
      return { placeTypeId, ...route.params };
    },
  },
  {
    path: '/place/:placeId',
    name: 'PlaceView',
    component: PlaceView,
    props: (route) => {
      const placeId = route.params.placeId;
      return { placeId, ...route.params };
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
