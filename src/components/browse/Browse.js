import Header from '../header/Header';
import { useNowPlayingMovies } from '../../hooks/useNowPlayingMovies';
import MainContainer from '../mainContainer/MainContainer';
import SecondryContainer from '../secondryContainer/SecondryContainer';
import { usePopular } from '../../hooks/usePopular';
import { useUpComingMovies } from '../../hooks/useUpComingMovies';
import { useTopRatedMovies } from '../../hooks/useTopRatedMovies';
import { GPTSearch } from '../GPTSearch/GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const searchToggle = useSelector(state => state.gpt.showGPTSearch);

  useNowPlayingMovies();

  usePopular();

  useUpComingMovies();

  useTopRatedMovies();

  return (
    <div>
      <Header />
      {searchToggle ? <GPTSearch /> : <>
        <MainContainer />
        <SecondryContainer />
      </>}




    </div>
  )
}

export default Browse;