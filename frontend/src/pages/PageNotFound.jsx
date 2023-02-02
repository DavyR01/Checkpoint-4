import React from "react";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PageNotFoundImage from "../assets/pagenotfound.jpg";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black relative">
      <div className=" text-lg lg:text-xl pb-5 text-white top-24 left-8 absolute flex">
        <NavLink to="/">
          <div className="mr-5 text-3xl">
            <BsFillSkipBackwardFill />
          </div>
        </NavLink>
        <h1 className="text-xl">Retour à l'accueil</h1>
      </div>
      <h1 className=" text-3xl md:text-4xl pb-5 text-white">
        Page Non trouvé !!
      </h1>
      <img src={PageNotFoundImage} alt="PageNotFound" className="w-8/12" />
    </div>
  );
}

export default PageNotFound;
