import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../styles/styles.css";
import Footer from "./footer";
import Header from "./header";
import { baseUrl } from "../utils";
import { Link } from "react-router-dom";

function Home(props) {
  const [movies, setMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState("");

  useEffect(() => {
    fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((movies) => setMovies(movies.movies));
  }, []);

  return (
    <div>
      <Header />
      <div className="mx-6 my-12">
        <h1 className="text-42 text">The best movie reviews site!</h1>
        <div className="mt-10 mb-6 flex searchInput py-2 rounded w-5/12 px-3">
          <IoSearch fontSize={18} color="#788896" />

          <input
            className="w-9/12 text mb-0.5 ml-3 text-xl outline-0"
            placeholder="Search for your favourite movie"
            type="search"
            onChange={(e) => {
              setSearchedMovie(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex wrap mlN-30">
          {movies
            ?.filter((movie) =>
              movie.name.toLowerCase().includes(searchedMovie.toLowerCase())
            )
            .map((movie) => {
              return (
                <div className="py-8 pl-7 mb-6 ml-6 w-30 movieBg">
                  <Link to={`${movie.slug}`}>
                    <p className="mb-6 text text-22 font-medium">
                      {movie.name}
                    </p>
                  </Link>
                  <p className="mb-6 text text-19 font-normal italic">
                    Released: {movie.releaseDate}
                  </p>
                  <p className="text text-17 font-extrabold">
                    Rating: {movie.averageRating}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
