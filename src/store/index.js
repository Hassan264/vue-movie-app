import { createStore } from 'vuex'

const store = createStore({
    state: {
        movies: [], // Array to store movies
    },
    mutations: {
        addMovie(state, movie) {
            console.log('addMovie store', { movie })
            state.movies.push(movie)
            localStorage.setItem('movies', JSON.stringify(state.movies)) // Save to localStorage
        },
        updateMovie(state, { index, movie }) {
            console.log('updateMovie store', { movie, index })
            state.movies[index] = movie
            localStorage.setItem('movies', JSON.stringify(state.movies)) // Save to localStorage
        },
        deleteMovie(state, index) {
            state.movies.splice(index, 1)
            localStorage.setItem('movies', JSON.stringify(state.movies)) // Save to localStorage
        },
        getMovies(state) {
            const movies = JSON.parse(localStorage.getItem('movies'))
            if (movies) {
                state.movies = movies
            }
        },
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
        getMovies({ commit }) {
            commit('getMovies')
        },
    },
})

export default store
