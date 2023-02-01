import React from "react";
import { NavLink } from "react-router-dom";
// import Accueil from "../pages/Accueil";

function Connexion() {
  return (
    <div className="">
      <section className="sectionDown pt-24">
        <div className="flex justify-center pb-6 pt-6">
          <NavLink to="/connexion">
            <button
              type="button"
              className="text-2xl text-center inline bg-slate-100 hover:scale-110 opacity-70 hover:opacity-100 border-black border-solid border-2 rounded-xl p-2"
            >
              Connexion{" "}
            </button>
          </NavLink>
          <NavLink to="/inscription">
            <button
              type="button"
              className="text-2xl text-center inline bg-slate-100 hover:scale-110 opacity-70 hover:opacity-100 ml-5 mr-5 border-black border-2 rounded-xl p-2"
            >
              Inscription{" "}
            </button>
          </NavLink>
        </div>
      </section>
      {/* <div>
        <Accueil />
      </div> */}
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
      <div className="flex justify-center pb-28">
        <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
          <div className="login">
            <h1 className="text-xl font-medium text-gray-900 text-center">
              {" "}
              Connexion{" "}
            </h1>
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
                  placeholder="Password"
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-calypso hover:bg-calypsoLight font-medium rounded-lg text-sm px-5 py-2.5 text-center border-solid border-black border-2 hover:bg-yellow-500 hover:text-white"
              >
                Se Connecter{" "}
              </button>
              <div className="text-sm font-medium text-gray-500">
                {" "}
                <span href="#" className="text-calypso hover:underline">
                  {" "}
                  <NavLink to="/inscription">
                    {" "}
                    Pas encore de compte ? Cliquez ici{" "}
                  </NavLink>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
