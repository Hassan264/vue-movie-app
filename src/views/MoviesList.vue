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
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Number of Actors</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(movie, index) in filteredMovies" :key="index">
                    <td>{{ movie.title }}</td>
                    <td>{{ movie.year }}</td>
                    <td>{{ movie.actors.length }}</td>
                    <td>
                        <router-link :to="'/movie/' + index">View</router-link>
                        <router-link :to="'/edit/' + index">Edit</router-link>
                        <button @click="deleteMovie(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'MoviesList',
    data() {
        return {
            searchQuery: '',
        }
    },
    computed: {
        movies() {
            return this.$store.state.movies
        },
        filteredMovies() {
            return this.movies.filter((movie) =>
                movie.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            )
        },
    },
    methods: {
        resetSearch() {
            this.searchQuery = ''
            console.log('states', { states: this.movies })
        },
        deleteMovie(index) {
            this.$store.dispatch('deleteMovie', index)
        },
    },
    created() {
        this.$store.dispatch('getMovies')
    },
}
</script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}

input {
    padding: 8px;
    margin-bottom: 10px;
}
</style>
