import React, { useEffect, useState } from "react";
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const options = { method: "GET", headers: { accept: "application/json" } };
import GlobalApi from "../Services/GlobalApi";

const Slider = () => {
  const [peliculas, setPeliculas] = useState([]);
  async function getMovies() {
    const response = await fetch(GlobalApi.movieByGenreBaseURL);

    const data = await response.json();
    console.log(data);
    setPeliculas(data.results);
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {peliculas.map((item, index) => (
        <img
          key={index}
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-600 transition-all duration-100 ease-in"
          alt=""
        />
      ))}
    </div>
  );
};

export default Slider;
