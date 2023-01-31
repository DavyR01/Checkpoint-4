import React from "react";
import { NavLink } from "react-router-dom";
import Accueil from "./Accueil";

function Connexion() {
  return (
    <>
      <div>
        <Accueil />
      </div>
      {/* <div
        id="popup-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50 p-4 h-full overflow-x-hidden overflow-y-auto flex flex-col justify-center items-center backdrop-blur"
      >
        <div className="w-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="p-6 text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500">
                Error Connection{" "}
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-calypso hover:bg-calypsoLight font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login{" "}
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
        <div className="login">
          <h1 className="text-xl font-medium text-gray-900"> Login </h1>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                E-mail{" "}
              </label>
              <input
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="Email"
                required
                id="email"
                name="email"
                type="email"
                label="Email Address"
                autoComplete="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Mot de passe{" "}
              </label>
              <input
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                placeholder="Password"
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span className="text-rose-500 text-xs">
                Minimum 8 caracteres, une majuscule, une minuscule, un chiffre,
                un caractère spécial.
              </span>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-calypso hover:bg-calypsoLight font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login{" "}
            </button>
            <div className="text-sm font-medium text-gray-500">
              {" "}
              <span href="#" className="text-calypso hover:underline">
                {" "}
                <NavLink to="/inscription"> S'enregistrer </NavLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Connexion;
