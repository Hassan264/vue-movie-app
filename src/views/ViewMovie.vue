<template>
    <div>
        <h1>View Movie</h1>
        <movie-details :movie="movie" />
        <actor-list :actors="movie.actors" />
    </div>
</template>

<script>
import MovieDetails from '../components/MovieDetails.vue'
import ActorList from '../components/ActorList.vue'

export default {
    name: 'ViewMovie',
    computed: {
        movie() {
            // Retrieve movie data from Vuex store based on route parameter
            return this.$store.state.movies[this.$route.params.id]
        },
    },
    components: {
        MovieDetails,
        ActorList,
    },
}
</script>

<style scoped></style>
