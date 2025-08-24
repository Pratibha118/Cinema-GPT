import React, { useState } from 'react'
import { IMG_CDN_URL } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../utils/slices/movieSlice';
import MoviePopup from '../moviePopup/MoviePopup';

const MovieCard = ({ posterPath, movieTitle, id, sliceTitle, release_date, overview }) => {
  const dispatch = useDispatch();
  const movie = useSelector(store => store?.movies?.[sliceTitle]?.find(movie => movie.id === id))
  const searchToggle = useSelector(state => state.gpt.showGPTSearch);
  const [showPopUp, setShowPopUp] = useState(false);

  if (!posterPath) return null;

  const handleFavorite = () => {
    dispatch(toggleFavorite({ id, sliceTitle }))
  }

  const handleMoviePopup = () => {
    setShowPopUp(!showPopUp)
  }
  return (
    <>
      <div className='w-40 p-2 snap-center flex-none'>
        <span onClick={handleFavorite}>{!searchToggle ? movie?.favorite ? '⭐' : '➕' : ''}</span>
        <img alt={movieTitle}
          src={IMG_CDN_URL + posterPath}
          className='transition-transform duration-300 hover:scale-105 '
          onClick={handleMoviePopup} />
      </div>
      {
        showPopUp && <MoviePopup
          overview={overview}
          release_date={release_date}
          posterPath={posterPath}
          movieTitle={movieTitle}
          setShowPopUp={setShowPopUp}
          id={id} />
      }
    </>
  )
}

export default MovieCard