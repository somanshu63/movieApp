import { useState } from "react";
import Home from "./home";
import Movie from "./movie";
import AddMovie from "./addMovie";
import AddReview from "./addReview";
function App() {
  const [addMovie, setAddMovie] = useState();
  const [addReview, setAddReview] = useState();
  const toggle = function (data) {
    switch (data) {
      case "addMovie":
        setAddMovie(!addMovie);
        break;
      case "addReview":
        setAddReview(!addReview);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {addMovie ? <AddMovie toggle={toggle} /> : ""}
      {addReview ? <AddReview toggle={toggle} /> : ""}
      <Movie toggle={toggle} />
      <Home toggle={toggle} />
    </div>
  );
}

export default App;
