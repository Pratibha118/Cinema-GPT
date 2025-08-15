import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailorKey } from '../utils/slices/movieSlice';
import { API_OPTIONS } from '../utils/constants';

export const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();

    const getMovieTrailor = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        dispatch(addTrailorKey(json?.results[0]))
    }

    useEffect(() => {
        getMovieTrailor();
    }, [])

}