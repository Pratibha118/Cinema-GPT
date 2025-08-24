import React from 'react'
import MovieList from '../movieList/MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const nowPlayingMovies = useSelector(state => state.movies.nowPlayingMovies)
  const popularMovies = useSelector(state => state.movies.popularMovies)
  const topRatedMovies = useSelector(state=> state.movies.topRatedMovies)
  const upComingMovies = useSelector(state=> state.movies.upComingMovies)


  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-32 relative z-20'>
        <MovieList title='Now Playing' movies={nowPlayingMovies} sliceTitle={'nowPlayingMovies'} />
        <MovieList title='Top Rated' movies={topRatedMovies} sliceTitle={'topRatedMovies'} />
        <MovieList title='Trending' movies={popularMovies} sliceTitle={'popularMovies'}/>
        <MovieList title='Up Coming' movies={upComingMovies} sliceTitle={'upComingMovies'}/>

      </div>
    </div>

  )
}

export default SecondryContainer