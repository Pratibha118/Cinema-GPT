import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='pt-[13%] px-12 absolute bg-gradient-to-r w-screen aspect-video'>
        <h1 className='text-4xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
        <div>
            <button className='bg-white text-black py-2 px-5 rounded-md hover:opacity-80'>▶ Play</button>
            <button className='bg-gray-500 text-white py-2 px-5 mx-2 rounded-md bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;