import React from 'react'
import MovieCard from '../movieCard/MovieCard'

const MovieList = ({ title, movies }) => {
    if (!movies) return;
    return (
        <div className='px-4'>
            <h1 className='text-lg py-4 font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll overflow-y-hidden'>
                <div className='flex'>
                    {movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} movieTitle={movies.title} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList