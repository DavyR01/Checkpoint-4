import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";
// import Accueil from "../pages/Accueil";
import "../styles/Connexion.css";

function Connexion() {
  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (email && password) {
      // on appelle le back
      fetch("http://localhost:5000/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUser(result.user);
          setToken(result.token);
          navigate("/");
          window.location.reload();
        })
        .catch(console.error);
    } else {
      setErrorMessage("Merci de spécifier un email et un mot de passe correct");
    }
  };

  // const setTime = () => {
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 3000);
  // };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  E-mail{" "}
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                  onChange={(e) => setPassword(e.target.value)}
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
                // onClick={() => setTime()}
                className="buttonConnexion w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center border-solid border-black border-2 hover:bg-yellow-500 hover:text-white hover:scale-105 duration-700 transition-transform active:bg-blue-600"
              >
                Se Connecter{" "}
              </button>
              <div className="text-sm font-medium text-gray-500">
                {" "}
                <span href="#" className="text-calypso hover:underline">
                  {" "}
                  <NavLink to="/inscription">
                    {" "}
                    Pas encore de compte ? Cliquez ici {errorMessage}
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
