import React from 'react'

const VideoTitle = ({ title, overview }) => {

  return (
    <div className='pt-[60%] md:pt-[5%] px-12 absolute bg-gradient-to-r w-screen aspect-video'>
      <h1 className='text-2xl md:text-2xl font-bold text-white'>{title}</h1>
      <p className='w-1/2 hidden py-4 text-sm text-white md:w-1/4 md:inline-block'>{overview}</p>
      <div>
        <button className='bg-white text-black py-1 px-2 mt-4 md:mt-0 md:py-2 md:px-3 rounded-md hover:opacity-80'>▶ Play</button>
        <button className='bg-gray-500 text-white py-2 px-3 mx-2 rounded-md bg-opacity-50 hidden md:inline-block'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;