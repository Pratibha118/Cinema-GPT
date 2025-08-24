import React from 'react'
import BackgroundVideo from '../backgroundVideo/BackgroundVideo'
import { useLocation } from 'react-router-dom'

const PlayMovie = () => {

    const id=useLocation()
    console.log(id.state.id)

  return (
   <div className="pt-20 bg-black md:pt-20">
      <BackgroundVideo movieId={id.state.id} />
    </div>
  )
}

export default PlayMovie