import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="">
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items">Accueil</li>
          <li className="items">Toutes les Collections</li>
          <li className="items">Ma Collection</li>
          <li className="items">Contact</li>
        </ul>
      )}
      <button onClick={toggleNavMenu} type="button" className="btn">
        BTN
      </button>
    </nav>
  );
}
