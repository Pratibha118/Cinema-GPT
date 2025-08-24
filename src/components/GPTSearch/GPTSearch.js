import React from 'react'
import GPTSearchBar from '../GPTSearchBar/GPTSearchBar'
import GPTMovieSuggestion from '../GPTMovieSuggestion/GPTMovieSuggestion'
import { BACKGROUND_IMG } from '../../utils/constants'

export const GPTSearch = () => {
  return (
    <div>
      <div className='fixed -z-50'>

        <img src={BACKGROUND_IMG} className='h-screen md:h-[100%] object-cover'
          alt='background-img' />
      </div>
      <div className='pt-[60%] md:pt-[10%]'>
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>

    </div>
  )
}
