import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Movie from "./movie";
import AddMovie from "./addMovie";
import AddReview from "./addReview";
import { context } from "./context";

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

  const contextData = { toggle };

  return (
    <div>
      <context.Provider value={contextData}>
        {addMovie ? <AddMovie /> : ""}
        {addReview ? <AddReview /> : ""}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:slug" component={Movie}></Route>
        </Switch>
      </context.Provider>
    </div>
  );
}

export default App;
