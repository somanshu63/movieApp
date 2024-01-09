import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/styles.css";
function Movie(props) {
  return (
    <div>
      <Header toggle={props.toggle} />
      <div className="my-12 ml-6 mr-20">
        <div className="mb-4 flex items-center spaceBetween">
          <h1 className="text-42 text">Star Wars: A New Hope</h1>
          <p className="purple text-42">9/10</p>
        </div>
        <div>
          <div className="reviewBox rounded pt-5 mt-8 pb-4 pl-8 pr-4">
            <div className="flex spaceBetween mb-5 items-center">
              <p className="text text-lg tracking-wider">
                This is the best movie ever! I really enjoyed it.
              </p>
              <p className="purple text-lg">9/10</p>
            </div>
            <p className="text text-base italic tracking-wider">
              By Amitav Khandelwal
            </p>
          </div>
          <div className="reviewBox rounded pt-5 mt-8 pb-4 pl-8 pr-4">
            <div className="flex spaceBetween mb-5 items-center">
              <p className="text text-lg tracking-wider">
                This is the best movie ever! I really enjoyed it.
              </p>
              <p className="purple text-lg">9/10</p>
            </div>
            <p className="text text-base italic tracking-wider">
              By Amitav Khandelwal
            </p>
          </div>
          <div className="reviewBox rounded pt-5 mt-8 pb-4 pl-8 pr-4">
            <div className="flex spaceBetween mb-5 items-center">
              <p className="text text-lg tracking-wider">
                This is the best movie ever! I really enjoyed it.
              </p>
              <p className="purple text-lg">9/10</p>
            </div>
            <p className="text text-base italic tracking-wider">
              By Amitav Khandelwal
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Movie;
