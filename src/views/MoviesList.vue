<template>
    <div>
        <h1>Movies List</h1>
        <router-link to="/add">
            <button>Add Movie</button>
        </router-link>
        <div>
            <input v-model="searchQuery" type="text" placeholder="Search..." />
            <button @click="resetSearch">Reset</button>
        </div>

        <div v-for="(movie, index) in movie" :key="index">
            <movie-details :movie="movie" />
            <actor-list :actors="movie.actors" />
        </div>
    </div>
</template>

<script>
import MovieDetails from '../components/MovieDetails.vue'
import ActorList from '../components/ActorList.vue'

export default {
    name: 'MoviesList',
    components: {
        MovieDetails,
        ActorList,
    },
    props: {},
    data() {
        return {
            searchQuery: '',
        }
    },
    computed: {
        movies() {
            console.log('states', { states: this.$store.state })
            return this.$store.state.movies
        },
    },
    methods: {
        resetSearch() {
            this.searchQuery = ''
            console.log('states', { states: this.movies })
        },
    },
    created() {
        this.$store.dispatch('getMovies')
    },
}
</script>

<style scoped></style>
