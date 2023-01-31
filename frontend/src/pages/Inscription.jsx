import React from "react";
import Accueil from "./Accueil";

function Inscription() {
  return (
    <>
      <div>
        <Accueil />
      </div>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
        <div className="register">
          <h1 className="text-xl font-medium text-gray-900"> Inscription</h1>

          <form noValidate className="space-y-6">
            <div>
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Prénom
              </label>
              <input
                required
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
                required
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
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
                id="email"
                label="Email Address"
                name="email"
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
                required
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
              className="w-full text-white bg-calypso hover:bg-calypsoLight font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              S'enregistrer{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Inscription;
