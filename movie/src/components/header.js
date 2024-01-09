import React from "react";
function Header(props) {
  return (
    <div className="flex spaceBetween header px-6 py-4">
      <p className="text text-lg">MOVIECRITIC</p>
      <div>
        <button
          onClick={() => {
            props.toggle("addMovie");
          }}
          className="px-4 mr-4 py-2 text-base bg-white rounded border-2 inputBorderColor purple"
        >
          Add new movie
        </button>
        <button
          onClick={() => {
            props.toggle("addReview");
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
