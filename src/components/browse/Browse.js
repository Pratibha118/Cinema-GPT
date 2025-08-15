import Header from '../header/Header';
import { useNowPlayingMovies } from '../../hooks/useNowPlayingMovies';
import MainContainer from '../mainContainer/MainContainer';
import SecondryContainer from '../secondryContainer/SecondryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />

     
    </div>
  )
}

export default Browse;