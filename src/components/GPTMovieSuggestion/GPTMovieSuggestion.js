import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../movieList/MovieList'

const GPTMovieSuggestion = () => {

  const { gptMovies, tmdbMovies } = useSelector(state => state.gpt)
  if (!gptMovies) return null;

  return (
    <div className='p-4 m-4 bg-black text-white opacity-80'>
      <div>
        {
          gptMovies.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={tmdbMovies[index]} />)
        }

      </div>
    </div>
  )
}

export default GPTMovieSuggestion