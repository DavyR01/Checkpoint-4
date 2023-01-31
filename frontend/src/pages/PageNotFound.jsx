import React from "react";
import PageNotFoundImage from "../assets/pagenotfound.jpg";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className=" text-3xl lg:text-5xl pb-5 text-white">
        Page Non trouvé !!
      </h1>
      <img src={PageNotFoundImage} alt="PageNotFound" className="w-8/12" />
    </div>
  );
}

export default PageNotFound;
