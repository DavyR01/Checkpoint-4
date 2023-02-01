import { NavLink } from "react-router-dom";
// import homePicture from "../assets/homePicture.jpg";
import "../styles/Accueil.css";
import arrow from "../assets/la-fleche.png";
import img1 from "../assets/123.png";
import img2 from "../assets/456.png";
import img3 from "../assets/789.png";

export default function Accueil() {
  return (
    <div className="accueilPage">
      <header className="App-header relative">
        {/* <img className="" src={homePicture} alt="homePicture" /> */}
        <div className="flex justify-center pt-24">
          <p className="text-6xl p-5 text-center text-white border-solid inline-block border-2 border-yellow-600">
            COINS Drop
          </p>
        </div>
        <div className="text-white h-72 w-10/12 lg:w-5/12 flex justify-start ">
          <p className="p-5 ml-10 pt-20 md:text-xl text-yellow-500">
            <span className="text-xl md:text-3xl">
              Bienvenue sur notre site dédié aux collectionneurs de pièces de
              monnaie rares fantaisistes.
            </span>{" "}
            <br />
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
        <div className="absolute bottom-0 left-1/2">
          <a href="#jumpArrow">
            <img
              src={arrow}
              alt="arrow"
              className="w-10 lg:w-16 animate-pulse"
            />
          </a>
        </div>
      </header>
      <main>
        <div
          id="jumpArrow"
          className=" bg-black text-white text-center text-3xl p-12"
        >
          <p>Libérez votre instinct de collectionneur !</p>
          <p className="text-xl mt-6">
            Découvrez les tendances et nouveautés !
          </p>
        </div>
        {/* <section className="sectionDown">
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
        </section> */}

        <div className=" imagesAccueil flex justify-center flex-wrap text-center">
          <div>
            <img src={img1} alt="img1" />
            <p> 100 FRANCS ARGENT PANTHÉON</p>
            <p> €24,95</p>
          </div>
          <div>
            <img src={img2} alt="img1" />
            <p>MONNAIE OR - ITALIE 20 LIRE UMBERTO I </p>
            <p>€499,00 </p>
          </div>
          <div>
            <img src={img3} alt="img1" />
            <p>1 FRANC INSTITUT DE FRANCE 1995 </p>
            <p>€11,95 </p>
          </div>
        </div>
        <div className="text-center p-10">
          <NavLink to="/allcollections">
            <button
              type="button"
              className=" text-white bg-red-800 opacity-70 hover:opacity-100 font-medium rounded-md text-xl p-4 border hover:scale-105 duration-300"
            >
              Parcourir le Catalogue{" "}
            </button>
          </NavLink>
        </div>
      </main>
    </div>
  );
}
