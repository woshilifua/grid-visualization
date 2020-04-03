import Vue from 'vue'
import VueRouter from 'vue-router'
import City from '../views/City.vue'
import District from '../views/District'

Vue.use(VueRouter)

const routes = [
  {
    path: '/city/:city',
    name: 'City',
    component: City
  },
  {
    path: '/city/:city/:district/:district',
    name: 'District',
    component: District
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
