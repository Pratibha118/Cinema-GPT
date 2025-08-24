import React from 'react'
import MovieCard from '../movieCard/MovieCard'

const MovieList = ({ title, movies, sliceTitle }) => {
    if (!movies) return;

    return (
        <div className='px-4'>
            <h1 className='text-lg py-4 font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll overflow-y-hidden no-scrollbar scroll-smooth hover:cursor-pointer'>
                {movies?.map((movie) => <MovieCard
                    key={movie.id}
                    posterPath={movie.poster_path}
                    movieTitle={movie.title}
                    fav={movie.favorite}
                    id={movie.id}
                    sliceTitle={sliceTitle} 
                    overview={movie.overview}
                    release_date={movie.release_date}
                    />)}
            </div>
        </div>
    )
}

export default MovieList