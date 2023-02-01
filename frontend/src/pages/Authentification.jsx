import React from "react";
import { NavLink } from "react-router-dom";

export default function Authentification() {
  return (
    <div>
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
    </div>
  );
}
