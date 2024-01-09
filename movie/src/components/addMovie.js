import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function AddMovie(props) {
  const [movieName, setMovieName] = useState("");
  const [movieReleaseDate, setMovieReleaseDate] = useState("");
  const [error, setError] = useState("");

  let checkInput = () => {
    if (!movieName || !movieReleaseDate) {
      setError("all fields are required*");
    } else {
      props.toggle("addMovie");
    }
  };
  return (
    <div className="addMovie">
      <div className="addMovieBox">
        <div
          onClick={() => {
            props.toggle("addMovie");
          }}
          className="close"
        >
          <IoClose />
        </div>
        <h1 className="text text-2xl mb-5 font-medium">Add new movie</h1>
        <input
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
          className="border-2 block rounded input border-black"
          type="text"
          name="name"
          placeholder="Name"
          value={movieName}
        ></input>
        <input
          onChange={(e) => {
            setMovieReleaseDate(e.target.value);
          }}
          className="border-2 block rounded input border-black"
          type="text"
          name="date"
          value={movieReleaseDate}
          placeholder="Release Date"
        ></input>
        {error ? <p className="text-red-500">{error}</p> : ""}
        <button
          onClick={() => {
            checkInput();
          }}
          className="mt-8 float-right rounded py-2 px-6 purpleBg text-white text-lg"
        >
          Create movie
        </button>
      </div>
    </div>
  );
}
export default AddMovie;
