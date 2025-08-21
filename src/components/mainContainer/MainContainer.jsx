import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "../videoTitle/VideoTitle";
import BackgroundVideo from "../backgroundVideo/BackgroundVideo";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[11];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-20 bg-black md:pt-20">
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
};

export default MainContainer;
