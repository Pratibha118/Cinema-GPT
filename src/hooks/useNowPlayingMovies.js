import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";


export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector(state => state.movies.nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    const updatedData = json.results.map((movie) => {
      return {
        ...movie,
        favorite: false,
      }
    })
    dispatch(addNowPlayingMovies(updatedData))
  }

  useEffect(() => {
    !nowPlaying && getNowPlayingMovies()
  }, [])

}