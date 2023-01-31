import React from "react";
import { NavLink } from "react-router-dom";

export default function Accueil() {
  return (
    <div>
      <header className="App-header ">
        <p className="text-3xl text-center">Go Checkpoint 4</p>
      </header>
      <main>
        <div className="flex justify-end">
          <NavLink to="/connexion">
            <button
              type="button"
              className="text-2xl text-center inline bg-slate-100 hover:scale-110 border-black border-solid border-2 rounded-2xl"
            >
              Connexion{" "}
            </button>
          </NavLink>
          <NavLink to="/inscription">
            <button
              type="button"
              className="text-2xl text-center inline bg-slate-100 hover:scale-110 ml-5 mr-5 border-black border-2 rounded-2xl"
            >
              Inscription{" "}
            </button>
          </NavLink>
        </div>
      </main>
    </div>
  );
}
