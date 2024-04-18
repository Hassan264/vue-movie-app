<template>
    <div>
        <h1>Add Movie</h1>
        <movie-form :formData="form" @submit="addMovie" />
        <actor-form
            :actors="form.actors"
            @add="addActor"
            @remove="removeActor"
        />
    </div>
</template>

<script>
import MovieForm from '../components/MovieForm.vue'
import ActorForm from '../components/ActorForm.vue'

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
        addMovie(formData) {
            // Dispatch action to add movie in store
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
        ActorForm,
    },
}
</script>

<style scoped></style>
../components/ActorForm.vue
