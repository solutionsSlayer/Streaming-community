import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Event from './pages/Event.vue'
import Partner from './pages/partners/Partner.vue'
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                name: 'home',
                component: Home
            },
            {
                name: 'event',
                path: '/events',
                component: Event
            },
            {
                name: 'partner',
                path: '/partners',
                component: Partner
            }
            
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router