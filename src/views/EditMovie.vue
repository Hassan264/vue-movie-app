<template>
    <div>
        <h1>Edit Movie</h1>
        <MovieForm :formData="formData" @submit="handleSubmit" />
    </div>
</template>

<script>
import MovieForm from '../components/MovieForm.vue'

export default {
    name: 'EditMovie',
    components: {
        MovieForm,
    },
    data() {
        return {
            formData: {
                title: '',
                description: '',
                year: null,
                actors: [],
            },
        }
    },
    computed: {
        movie() {
            // Retrieve movie data from Vuex store based on route parameter
            return this.$store.state.movies[this.$route.params.id]
        },
    },
    created() {
        this.$store.dispatch('getMovies')
        // Set form data with existing movie details
        console.log('mounted movie', this.movie)
        if (this.movie) {
            this.formData.title = this.movie.title
            this.formData.description = this.movie.description
            this.formData.year = this.movie.year
            this.formData.actors = this.movie.actors // Assuming you have actors data in the movie object
        }
        console.log('mounted formData', this.formData)
    },
    methods: {
        handleSubmit(updatedData) {
            // Update movie data in Vuex store
            this.$store.dispatch('updateMovie', {
                index: this.$route.params.id,
                movie: updatedData,
            })
            // Redirect to view page for the updated movie
            this.$router.push({
                to: 'ViewMovie',
                params: { id: this.$route.params.id },
            })
        },
    },
}
</script>

<style scoped></style>
