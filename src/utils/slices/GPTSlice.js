import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptSlice',
    initialState: {
        showGPTSearch: false,
        tmdbMovies: null,
        gptMovies: null,
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearch = action.payload
        },
        addSearchedMoviesResult: (state, action) => {
            const { tmdbMovies, gptMovies } = action.payload
            state.tmdbMovies = tmdbMovies
            state.gptMovies = gptMovies
        },
        removeSearch: (state, action) => {
            state.showGPTSearch = false
            state.tmdbMovies = null
            state.gptMovies = null
        }
    }
})

export const { toggleGPTSearchView, addSearchedMoviesResult ,removeSearch} = gptSlice.actions;
export default gptSlice.reducer