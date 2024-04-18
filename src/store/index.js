import { createStore } from 'vuex'

const store = createStore({
    state: {
        movies: [], // Array to store movies
    },
    mutations: {
        addMovie(state, movie) {
            state.movies.push(movie)
        },
        updateMovie(state, { index, movie }) {
            state.movies[index] = movie
        },
        deleteMovie(state, index) {
            state.movies.splice(index, 1)
        },
        // getMovies(state) {
        //     // get movie from local storage
        // },
    },
    actions: {
        addMovie({ commit }, movie) {
            commit('addMovie', movie)
        },
        updateMovie({ commit }, payload) {
            commit('updateMovie', payload)
        },
        deleteMovie({ commit }, index) {
            commit('deleteMovie', index)
        },
        // getMovies({ commit }) {
        //     commit('loadMovies')
        // },
    },
})

export default store
