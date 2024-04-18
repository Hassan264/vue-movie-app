import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesList from '../components/MoviesList.vue'
import AddMovie from '../components/AddMovie.vue'
import ViewMovie from '../components/ViewMovie.vue'
import EditMovie from '../components/EditMovie.vue'

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
        path: '/view/:id',
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
