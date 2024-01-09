import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/styles.css";
import { baseUrl } from "../utils";
import { withRouter } from "react-router-dom";

function Movie(props) {
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch(`${baseUrl}${props.match.params.slug}`, {
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
      .then((movie) => setMovie(movie.movie));
    fetch(`${baseUrl}${props.match.params.slug}/reviews`, {
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
      .then((reviews) => setReviews(reviews.reviews));
  }, []);

  return (
    <div>
      <Header />
      <div className="my-12 ml-6 mr-20">
        <div className="mb-4 flex items-center spaceBetween">
          <h1 className="text-42 text capitalize">{movie?.name}</h1>
          <p className="purple text-42">
            {movie?.averageRating ? `${movie.averageRating} / 10` : `0 / 10`}
          </p>
        </div>
        <div>
          {reviews?.map((review, id) => {
            return (
              <div
                key={id}
                className="reviewBox rounded pt-5 mt-8 pb-4 pl-8 pr-4"
              >
                <div className="flex spaceBetween mb-5 items-center">
                  <p className="text text-lg tracking-wider">
                    {review.comment}
                  </p>
                  <p className="purple text-lg">{review.rating}/10</p>
                </div>
                <p className="text text-base italic tracking-wider">
                  {review.name}
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

export default withRouter(Movie);
