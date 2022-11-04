import axios from "axios";
import React from "react";

import Movie from "./Movie";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Row = ({ title, fetchURL, RowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  //   console.log(movies);
  const slideLeft = () => {
    var slider = document.getElementById("slider" + RowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + RowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group ">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white hidden group-hover:block rounded-full absolute opacity-50 hover:opacity-100 left-0 z-20"
          size={40}
        />
        <div
          id={"slider" + RowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth z-10"
        >
          {movies.map((item, id) => (
            <Movie item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white hidden group-hover:block rounded-full absolute opacity-50 hover:opacity-100 right-0 z-20 "
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
