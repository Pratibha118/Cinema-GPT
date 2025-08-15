import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "../videoTitle/VideoTitle";
import BackgroundVideo from "../backgroundVideo/BackgroundVideo";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
};

export default MainContainer;
