import React from 'react'
import { IMG_CDN_URL } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

const MoviePopup = ({ movieTitle, overview, release_date, posterPath, setShowPopUp, id }) => {
    const navigate = useNavigate()
    const handlePlay = () => {
        navigate('/playmovie', { state: { id: id } })
    }

    return <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        {/* popup box */}
        <div className="bg-gray-950 text-white p-6 rounded-2xl w-3/4 md:w-1/2 lg:w-1/3 shadow-lg relative">
            <button
                className="absolute top-2 right-2 text-xl font-bold hover:text-red-400"
                onClick={() => setShowPopUp(false)}
            >
                ❌
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">{movieTitle}</h2>
            <div className='flex justify-center gap-6'>
                <div className='w-40 flex-shrink-0'>
                    <img
                        src={IMG_CDN_URL + posterPath}
                        alt={movieTitle}
                        className="rounded-lg"
                    />
                    <div className='flex justify-center'>
                        <button
                            onClick={handlePlay}
                            className='bg-white text-black py-1 px-2 mt-4 md:py-1 md:mt-4 md:px-3 rounded-md hover:opacity-80'>
                            ▶ Play
                        </button>
                    </div>

                </div>
                <div className='hidden md:inline-block'>
                    <p className="opacity-80 line-clamp-6">
                        {overview}
                    </p>
                    <p className='pt-3'>
                        Release date: {release_date}
                    </p>
                </div>

            </div>


        </div>
    </div>
}

export default MoviePopup