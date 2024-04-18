<template>
    <div>
        <h1>View Movie</h1>
        <div v-if="movie">
            <h2>{{ movie.title }}</h2>
            <p><strong>Description:</strong> {{ movie.description }}</p>
            <p><strong>Year:</strong> {{ movie.year }}</p>
            <h3>Actors</h3>
            <ul>
                <li v-for="(actor, index) in movie.actors" :key="index">
                    {{ actor.name }} ({{ actor.role }})
                </li>
            </ul>
            <router-link :to="'/edit/' + $route.params.id">Edit</router-link>
        </div>
        <div v-else>
            <p>No movie found.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewMovie',
    computed: {
        movie() {
            // Retrieve movie data from Vuex store based on route parameter
            return this.$store.state.movies[this.$route.params.id]
        },
    },
    created() {
        this.$store.dispatch('getMovies')
    },
}
</script>

<style scoped></style>
