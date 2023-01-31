import React from "react";
import Accueil from "../pages/Accueil";

function Inscription() {
  return (
    <div className="bg-black">
      <div>
        <Accueil />
      </div>
      <div className="flex justify-center pb-28">
        <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
          <div className="register">
            <h1 className="text-xl font-medium text-gray-900 text-center">
              {" "}
              Inscription
            </h1>

            <form noValidate className="space-y-6">
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Prénom
                </label>
                <input
                  placeholder="Livre"
                  name="firstname"
                  label="Firstname"
                  type="firstname"
                  id="firstname"
                  autoComplete="current-firstname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nom de famille{" "}
                </label>
                <input
                  placeholder="Sterling"
                  name="lastname"
                  label="Lastname"
                  type="lastname"
                  id="lastname"
                  autoComplete="current-lastname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  E-mail{" "}
                </label>
                <input
                  placeholder="Livre.Sterling@example.com"
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
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
                  placeholder="543210"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-calypso hover:bg-calypsoLight font-medium rounded-lg text-sm px-5 py-2.5 text-center border-solid border-black border-2 hover:bg-yellow-500 hover:text-white"
              >
                S'enregistrer{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
