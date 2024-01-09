import React, { useContext } from "react";
import { context } from "./context";

function Header(props) {
  let contextData = useContext(context);

  return (
    <div className="flex spaceBetween header px-6 py-4">
      <a href="/" className="text text-lg">
        MOVIECRITIC
      </a>
      <div>
        <button
          onClick={() => {
            contextData.toggle("addMovie");
          }}
          className="px-4 mr-4 py-2 text-base bg-white rounded border-2 inputBorderColor purple"
        >
          Add new movie
        </button>
        <button
          onClick={() => {
            contextData.toggle("addReview");
          }}
          className="px-4 py-2 text-base border-2 purpleBorderColor rounded text-white purpleBg"
        >
          Add new review
        </button>
      </div>
    </div>
  );
}
export default Header;
