import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import(/* webpackChunkName: "NotFound" */'@/views/404View.vue')
    }
	]
})

export default router
