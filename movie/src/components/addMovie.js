import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { baseUrl } from "../utils";
import { useHistory } from "react-router-dom";
import { context } from "./context";

function AddMovie(props) {
  let contextData = useContext(context);

  const [movieName, setMovieName] = useState("");
  const [movieReleaseDate, setMovieReleaseDate] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  let checkInput = () => {
    if (!movieName || !movieReleaseDate) {
      setError("all fields are required*");
    } else {
      addMovie();
      contextData.toggle("addMovie");
    }
  };

  let addMovie = () => {
    fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: movieName,
        releaseDate: movieReleaseDate,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("can't add new movie");
        }
        return res.json();
      })
      .then((movie) => {
        history.push(movie.movie.slug);
        window.location.reload();
      })
      .catch((errors) => {
        setError(errors.error);
      });
  };

  return (
    <div className="addMovie">
      <div className="addMovieBox">
        <div
          onClick={() => {
            contextData.toggle("addMovie");
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
