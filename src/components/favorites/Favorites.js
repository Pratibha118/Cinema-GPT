import { useSelector } from 'react-redux'
import MovieList from '../movieList/MovieList'

const Favorites = () => {
    const nowPlayingMovies = useSelector(state => state?.movies?.nowPlayingMovies?.filter((movie) => movie.favorite === true))
    const popularMovies = useSelector(state => state.movies.popularMovies?.filter((movie) => movie.favorite === true))
    const topRatedMovies = useSelector(state => state.movies.topRatedMovies?.filter((movie) => movie.favorite === true))
    const upComingMovies = useSelector(state => state.movies.upComingMovies?.filter((movie) => movie.favorite === true))

    const favAvailable = nowPlayingMovies.length > 0 || popularMovies.length > 0 ||
                         topRatedMovies.length > 0 || upComingMovies.length > 0
    return (
        <div className='bg-black min-h-screen'  >
            {
               favAvailable ?
                    <div className='pt-20'>
                        <MovieList movies={nowPlayingMovies} sliceTitle={'nowPlayingMovies'} />
                        <MovieList movies={popularMovies} sliceTitle={'popularMovies'} />
                        <MovieList movies={topRatedMovies} sliceTitle={'topRatedMovies'} />
                        <MovieList movies={upComingMovies} sliceTitle={'upComingMovies'} />

                    </div> :
                    <h1 className='p-2 m-2 font-bold text-white text-center text-2xl pt-36'>No Favorites!</h1>
            }

        </div>
    )
}

export default Favorites