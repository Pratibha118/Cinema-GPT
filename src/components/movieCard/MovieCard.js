import React from 'react'
import {IMG_CDN_URL} from '../../utils/constants'

const MovieCard = ({posterPath, movieTitle}) => {
  if(!posterPath) return null;
  return (
    <div className='w-40 p-2'>
        <img alt={movieTitle} src={IMG_CDN_URL+posterPath} className='transition-transform duration-75 hover:scale-125' />
    </div>
  )
}

export default MovieCard