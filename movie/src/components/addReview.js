import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { context } from "./context";
import { baseUrl } from "../utils";
import { useHistory } from "react-router-dom";

function AddReview() {
  let contextData = useContext(context);
  const history = useHistory();
  const [selectMovie, setSelectMovie] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const [movies, setMovies] = useState([]);

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

  let checkInput = () => {
    if (!selectMovie || !rating || !comment) {
      setError("all fields are required*");
    } else {
      addReview();
      contextData.toggle("addReview");
    }
  };

  let addReview = () => {
    fetch(`${baseUrl}${selectMovie}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        rating: rating,
        comment: comment,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("can't add new review");
        }
        return res.json();
      })
      .then((review) => {
        history.push(review.review.movie.slug);
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
            contextData.toggle("addReview");
          }}
          className="closeReview"
        >
          <IoClose />
        </div>
        <h1 className="text text-2xl mb-5 font-medium">Add new movie</h1>
        <select
          onChange={(e) => {
            setSelectMovie(e.target.value);
          }}
          className="block text font-medium bg-white rounded input outline-0 border-0 border-black"
          name="selectMovie"
          placeholder="Select a movie"
          value={selectMovie}
        >
          <option value="">Select a movie</option>
          {movies?.map((movie) => {
            return <option value={movie.slug}>{movie.name}</option>;
          })}
        </select>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="block rounded input border-black"
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
        ></input>
        <input
          onChange={(e) => {
            setRating(e.target.value);
          }}
          className="block rounded input border-black"
          type="text"
          name="rating"
          value={rating}
          placeholder="Rating out of 10"
        ></input>
        <textarea
          rows={5}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          className="block rounded input border-black"
          type="text"
          name="comment"
          value={comment}
          placeholder="Review comments"
        ></textarea>
        {error ? <p className="text-red-500">{error}</p> : ""}
        <button
          onClick={() => {
            checkInput();
          }}
          className="mt-8 float-right rounded py-2 px-6 purpleBg text-white text-lg"
        >
          Add review
        </button>
      </div>
    </div>
  );
}
export default AddReview;
