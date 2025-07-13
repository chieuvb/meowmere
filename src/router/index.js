import {createRouter, createWebHistory} from 'vue-router'
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
            path: '/play',
            name: 'play',
            component: () => import('../views/PlayView.vue')
        },
        {
            path: '/community',
            name: 'community',
            component: () => import('../views/CommunityView.vue')
        },
        {
            path: '/terms',
            name: 'terms',
            component: () => import('../views/TermsView.vue')
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('../views/PrivacyView.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import ('../components/NotFound.vue')
        }
    ]
})

export default router