import React from 'react'
import GPTSearchBar from '../GPTSearchBar/GPTSearchBar'
import GPTMovieSuggestion from '../GPTMovieSuggestion/GPTMovieSuggestion'
import { BACKGROUND_IMG } from '../../utils/constants'

export const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-50'>

        <img src={BACKGROUND_IMG}
          alt='background-img' />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  )
}
