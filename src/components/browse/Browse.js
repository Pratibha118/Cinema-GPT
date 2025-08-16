import Header from '../header/Header';
import { useNowPlayingMovies } from '../../hooks/useNowPlayingMovies';
import MainContainer from '../mainContainer/MainContainer';
import SecondryContainer from '../secondryContainer/SecondryContainer';
import { usePopular } from '../../hooks/usePopular';
import { useUpComingMovies } from '../../hooks/useUpComingMovies';
import { useTopRatedMovies } from '../../hooks/useTopRatedMovies';

const Browse = () => {

  useNowPlayingMovies();

  usePopular();

  useUpComingMovies();

  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />

     
    </div>
  )
}

export default Browse;