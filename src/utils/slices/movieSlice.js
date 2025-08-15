import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailorKey: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addTrailorKey : (state, action) =>{
            state.trailorKey = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailorKey} = movieSlice.actions

export default movieSlice.reducer;