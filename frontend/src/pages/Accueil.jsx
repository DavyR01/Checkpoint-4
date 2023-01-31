import React from "react";
import { NavLink } from "react-router-dom";
// import homePicture from "../assets/homePicture.jpg";
import "../styles/Accueil.css";

export default function Accueil() {
  return (
    <div className="accueilPage">
      <header className="App-header">
        {/* <img className="" src={homePicture} alt="homePicture" /> */}
        <div className="flex justify-center pt-12">
          <p className="text-6xl p-5 text-center text-white border-solid inline-block border-2 border-yellow-600">
            COINS Drop
          </p>
        </div>
        <div className="text-white h-72 w-8/12 lg:w-5/12 flex justify-start ">
          <p className="p-5 ml-10 pt-32 md:text-xl text-yellow-500">
            Bienvenue sur notre site dédié aux collectionneurs de pièces de
            monnaie rares. <br />
            <br />
            <span className="text-white">
              Nous sommes ravis de vous présenter notre sélection de pièces
              uniques et précieuses provenant du monde entier.
              <br />
              <br />
              Chaque pièce a une histoire unique à raconter.
              <br />
              <br />
              Notre site est conçu pour être facile à utiliser et vous permet de
              trouver rapidement la pièce que vous recherchez.
            </span>
          </p>
        </div>
        {/* <div className=""></div> */}
      </header>
      <main>
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
      </main>
    </div>
  );
}
