import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full text-white h-[550px]">
      <div className="w-full h-full">
        <div className="w-full  bg-gradient-to-r from-black  absolute "></div>
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <span></span>
        <div className="absolute top-[20%] w-full p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl mb-2 font-bold">
            {movie?.title}
          </h1>
          <div className="my-4">
            <button className="border text-black bg-white border-gray-500 py-2 px-4">
              Play
            </button>
            <button className="border text-white border-gray-500 py-2 px-4 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-300 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
