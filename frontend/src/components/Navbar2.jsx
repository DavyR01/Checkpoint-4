import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar2.css";

function Navbar() {
  const [showLinks, setShowLinks] = React.useState(false);
  const [showLogo, setShowLogo] = React.useState(false);
  const controlLogo = () => {
    if (window.scrollY > 200) {
      setShowLogo(true);
    } else setShowLogo(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlLogo);
    return () => {
      window.removeEventListener("scroll", controlLogo);
    };
  }, [showLogo]);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav
      className={`navBar ${
        showLinks ? "showNav" : "hideNav"
      } navBar ${showLogo} && 'navBar'`}
    >
      <ul className="navBarLinks">
        <li className="navBarItem slideInDown-1">
          <Link className="navBarLink" to="/" onClick={handleShowLinks}>
            Accueil
          </Link>
        </li>
        <li className="navBarItem slideInDown-2">
          <Link
            className="navBarLink"
            to="allcollections"
            onClick={handleShowLinks}
          >
            Catalogue Pièces
          </Link>
        </li>
        <li className="navBarItem slideInDown-3">
          <Link
            className="navBarLink"
            to="mycollection"
            onClick={handleShowLinks}
          >
            Ma Collection
          </Link>
        </li>
        <li className="navBarItem slideInDown-4">
          <Link className="navBarLink" to="contact" onClick={handleShowLinks}>
            Contact
          </Link>
        </li>
        <li className="navBarItem slideInDown-4">
          <Link
            className="navBarLink"
            to="authentification"
            onClick={handleShowLinks}
          >
            Mon Espace Compte
          </Link>
        </li>
      </ul>
      <button className="navBurger" type="button" onClick={handleShowLinks}>
        <span className="burgerLine" />
      </button>
    </nav>
  );
}

export default Navbar;
