/* eslint-disable no-alert */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";

function Inscription() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  // const notify = () =>
  //   toast.success("Votre inscription a bien été prise en compte");

  const navigate = useNavigate();

  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      firstname,
      lastname,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    // on créé et on redirige
    fetch("http://localhost:5000/api/register", requestOptions)
      .then(() => {
        alert("Votre inscription a bien été prise en compte");
        navigate("/connexion");
      })
      .catch(console.error);
  };

  // const setTime = () => {
  //   // e.preventDefault();
  //   setTimeout(() => {
  //     alert("Votre inscription a bien été prise en compte");
  //     window.location.reload("/inscription");
  //   }, 2000);
  // };

  return (
    <div className="bg-black">
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
      <div className="flex justify-center pb-28">
        <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
          <div className="register">
            <h1 className="text-xl font-medium text-gray-900 text-center">
              {" "}
              Inscription
            </h1>

            <form className="space-y-6" onSubmit={handleForm}>
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Prénom
                </label>
                <input
                  onChange={(e) => setFirstname(e.target.value)}
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
                  onChange={(e) => setLastname(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Livre.Sterling@example.com"
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
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
                // onClick={(e) => setTime(e)}
                className="buttonInscription w-full bg-calypso hover:bg-calypsoLight font-medium rounded-lg text-sm px-5 py-2.5 text-center border-solid border-black border-2 hover:bg-yellow-500 active:bg-blue-600 hover:text-white hover:scale-105 duration-700 transition-transform"
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
