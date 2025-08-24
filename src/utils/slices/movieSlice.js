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
        },
        toggleFavorite: (state, action) => {
            const { id, sliceTitle } = action.payload;
            state[sliceTitle] = state?.[sliceTitle]?.map((movie) => {
                return movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
            }
            )

        },
        removeMovies: (state, action) => {
            state.nowPlayingMovies = null
            state.popularMovies = null
            state.topRatedMovies = null
            state.upComingMovies = null
            state.trailorKey = null
        }
    }
})

export const { addNowPlayingMovies, addTrailorKey, addPopularMovies, addTopRatedMovies,
    addUpcomingMovies, toggleFavorite, removeMovies } = movieSlice.actions

export default movieSlice.reducer;