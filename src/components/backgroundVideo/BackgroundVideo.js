import React from 'react'
import { useMovieTrailer } from '../../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const BackgroundVideo = ({ movieId }) => {
    const trailerKey = useSelector(state=>state.movies?.trailorKey)

    useMovieTrailer(movieId)

    return (
        <div>
            <iframe
            className='w-screen aspect-video h-[500px]'
                src={`https://www.youtube.com/embed/${trailerKey?.key}?&autoplay=1&mute=1`}
                title="YouTube video player"
                llow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
            </iframe>
        </div>
    )
}

export default BackgroundVideo