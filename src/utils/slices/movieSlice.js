import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trailorKey: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailorKey: (state, action) => {
            state.trailorKey = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upComingMovies = action.payload
        }

    }
})

export const { addNowPlayingMovies, addTrailorKey, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions

export default movieSlice.reducer;