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
    </div>
</template>

<script>
export default {
    name: 'MoviesList',
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
