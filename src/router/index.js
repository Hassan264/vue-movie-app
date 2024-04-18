import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesList from '../views/MoviesList.vue'
import AddMovie from '../views/AddMovie.vue'
import EditMovie from '../views/EditMovie.vue'
import ViewMovie from '../views/ViewMovie.vue'

const routes = [
    {
        path: '/home2',
        name: 'home2',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
        path: '/',
        name: 'home',
        component: MoviesList,
    },
    {
        path: '/movie/:id',
        name: 'View Movie',
        component: ViewMovie,
        props: true,
    },
    { path: '/add', name: 'Add Movie', component: AddMovie },
    {
        path: '/edit/:id',
        name: 'Edit Movie',
        component: EditMovie,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
