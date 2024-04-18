<template>
    <div>
        <h1>Edit Movie</h1>
        <movie-form :formData="form" @submit="updateMovie" />
        <actor-list
            :actors="form.actors"
            @add="addActor"
            @remove="removeActor"
        />
    </div>
</template>

<script>
import MovieForm from '../components/MovieForm.vue'
import ActorList from '../components/ActorList.vue'

export default {
    name: 'EditMovie',
    data() {
        return {
            form: {
                title: '',
                description: '',
                year: null,
                actors: [{ name: '', age: null, joinDate: '', role: '' }],
            },
        }
    },
    methods: {
        addActor() {
            this.form.actors.push({
                name: '',
                age: null,
                joinDate: '',
                role: '',
            })
        },
        removeActor(index) {
            this.form.actors.splice(index, 1)
        },
        updateMovie(formData) {
            // Dispatch action to update movie in store
            this.$store.dispatch('updateMovie', {
                index: this.$route.params.id,
                movie: formData,
            })
            // Redirect to ViewMovie component after updating
            this.$router.push({
                name: 'ViewMovie',
                params: { id: this.$route.params.id },
            })
        },
        loadMovie() {
            // Load movie data from store and fill the form
            const movie = this.$store.state.movies[this.$route.params.id]
            if (movie) {
                this.form = { ...movie }
            }
        },
    },
    created() {
        // Load movie data when component is created
        this.loadMovie()
    },
    components: {
        MovieForm,
        ActorList,
    },
}
</script>

<style scoped></style>
../components/ActorForm.vue
