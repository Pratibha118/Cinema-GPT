import React from 'react'
import MovieList from '../movieList/MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const nowPlayingMovies = useSelector(state => state.movies.nowPlayingMovies)
  const popularMovies = useSelector(state => state.movies.popularMovies)
  const topRatedMovies = useSelector(state=> state.movies.topRatedMovies)
  const upComingMovies = useSelector(state=> state.movies.upComingMovies)

  console.log(upComingMovies?.results)

  return (
    <div className='bg-black'>
      <div className='-mt-20 relative z-20'>
        <MovieList title='Now Playing' movies={nowPlayingMovies} />
        <MovieList title='Top Rated' movies={topRatedMovies} />
        <MovieList title='Trending' movies={popularMovies} />
        <MovieList title='Up Coming' movies={upComingMovies?.results} />

      </div>
    </div>

  )
}

export default SecondryContainer