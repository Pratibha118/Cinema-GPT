import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addUpcomingMovies } from "../utils/slices/movieSlice"
import { useEffect } from "react"


export const useUpComingMovies = () => {
    const dispatch = useDispatch()

    const upComingMovies = useSelector(state=> state.movies.upComingMovies)

    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
         const updatedData = json.results.map((movie) => {
      return {
        ...movie,
        favorite: false,
      }
    })
        dispatch(addUpcomingMovies(updatedData))
    }

    useEffect(() => {
        ! upComingMovies&& getUpComingMovies()
    }, [])

}