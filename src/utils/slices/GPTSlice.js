import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptSlice',
    initialState: {
        showGPTSearch: false,
        tmdbMovies: null,
        gptMovies: null
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addSearchedMoviesResult : (state, action) =>{
            const {tmdbMovies, gptMovies} = action.payload
            state.tmdbMovies = tmdbMovies
            state.gptMovies = gptMovies
        }
    }
})

export const {toggleGPTSearchView, addSearchedMoviesResult} = gptSlice.actions;
export default gptSlice.reducer