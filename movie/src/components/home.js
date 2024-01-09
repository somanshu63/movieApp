import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../styles/styles.css";
import Footer from "./footer";
import Header from "./header";

function Home(props) {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <Header toggle={props.toggle} />
      <div className="mx-6 my-12">
        <h1 className="text-42 text">The best movie reviews site!</h1>
        <div className="mt-10 mb-6 flex searchInput py-2 rounded w-5/12 px-3">
          <IoSearch fontSize={18} color="#788896" />

          <input
            className="w-9/12 text mb-0.5 ml-3 text-xl outline-0"
            placeholder="Search for your favourite movie"
            type="search"
          ></input>
        </div>
        <div className="flex wrap mlN-30">
          <div className="py-8 pl-7 mb-6 ml-6 w-30 movieBg">
            <p className="mb-6 text text-22 font-medium">
              Star Wars: A New Hope
            </p>
            <p className="mb-6 text text-19 font-normal italic">
              Released: 1st August, 2022
            </p>
            <p className="text text-17 font-extrabold">Rating: 9/10</p>
          </div>
          <div className="py-8 pl-7 mb-6 ml-6 w-30 movieBg">
            <p className="mb-6 text text-22 font-medium">
              Star Wars: A New Hope
            </p>
            <p className="mb-6 text text-19 font-normal italic">
              Released: 1st August, 2022
            </p>
            <p className="text text-17 font-extrabold">Rating: 9/10</p>
          </div>
          <div className="py-8 pl-7 mb-6 ml-6 w-30 movieBg">
            <p className="mb-6 text text-22 font-medium">
              Star Wars: A New Hope
            </p>
            <p className="mb-6 text text-19 font-normal italic">
              Released: 1st August, 2022
            </p>
            <p className="text text-17 font-extrabold">Rating: 9/10</p>
          </div>
          <div className="py-8 pl-7 mb-6 ml-6 w-30 movieBg">
            <p className="mb-6 text text-22 font-medium">
              Star Wars: A New Hope
            </p>
            <p className="mb-6 text text-19 font-normal italic">
              Released: 1st August, 2022
            </p>
            <p className="text text-17 font-extrabold">Rating: 9/10</p>
          </div>
          <div className="py-8 pl-7 mb-6 ml-6 w-30 movieBg">
            <p className="mb-6 text text-22 font-medium">
              Star Wars: A New Hope
            </p>
            <p className="mb-6 text text-19 font-normal italic">
              Released: 1st August, 2022
            </p>
            <p className="text text-17 font-extrabold">Rating: 9/10</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
