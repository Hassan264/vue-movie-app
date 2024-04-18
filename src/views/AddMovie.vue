<template>
    <div>
        <h1>Add Movie</h1>
        <movie-form :formData="form" @submit="addMovie" />
    </div>
</template>

<script>
import MovieForm from '../components/MovieForm.vue'

export default {
    name: 'AddMovie',
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
        addMovie(formData) {
            // Dispatch action to add movie in store
            console.log('addMovie page', { formData })
            this.$store.dispatch('addMovie', formData)
            // Clear form fields after adding movie
            this.form = {
                title: '',
                description: '',
                year: null,
                actors: [{ name: '', age: null, joinDate: '', role: '' }],
            }
        },
    },
    components: {
        MovieForm,
    },
}
</script>

<style scoped></style>
