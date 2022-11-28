import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import PlaceList from "@/views/PlaceList.vue";

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
