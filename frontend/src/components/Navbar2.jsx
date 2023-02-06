import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar2.css";
import Logo from "../assets/logo.png";
import { useCurrentUserContext } from "../contexts/userContext";

function Navbar() {
  const [showLinks, setShowLinks] = React.useState(false);
  const [showLogo, setShowLogo] = React.useState(false);
  const { token, user, setUser } = useCurrentUserContext();
  const navigate = useNavigate();

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

  const handleDisconnection = () => {
    localStorage.clear();
    setUser({});
    handleShowLinks();
    window.location.reload();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav
      className={`navBar ${
        showLinks ? "showNav" : "hideNav"
      } navBar ${showLogo} && 'navBar'`}
    >
      <div className="LogoNavBar flex items-center">
        <NavLink to="/">
          <img
            src={Logo}
            alt="Logo Coins Drop "
            className="cursor-pointer"
            width={50}
          />
        </NavLink>
        <p className="pl-3">
          <span className="text-yellow-400">COINS</span> Drop
        </p>
        {token ? (
          <div className="ml-12 max-md:hidden">
            Bonjour {user.firstname}, nous sommes le :{" "}
            {new Date().toLocaleDateString()}{" "}
          </div>
        ) : null}
      </div>
      <ul className="navBarLinks">
        <li className="navBarItem slideInDown-1">
          <Link className="navBarLink" to="/" onClick={handleShowLinks}>
            Accueil
          </Link>
        </li>
        {token ? (
          <li className="navBarItem slideInDown-1">
            <Link
              className="navBarLink"
              to="dashboard"
              onClick={handleShowLinks}
            >
              Tableau de bord
            </Link>
          </li>
        ) : null}
        <li className="navBarItem slideInDown-2">
          <Link
            className="navBarLink"
            to="allcollections"
            onClick={handleShowLinks}
          >
            Catalogue Pièces
          </Link>
        </li>
        {token ? (
          <li className="navBarItem slideInDown-3">
            <Link
              className="navBarLink"
              to="mycollection"
              onClick={handleShowLinks}
            >
              Ma Collection
            </Link>
          </li>
        ) : null}
        <li className="navBarItem slideInDown-4">
          <Link className="navBarLink" to="contact" onClick={handleShowLinks}>
            Contact
          </Link>
        </li>
        {token ? (
          <li className="navBarItem slideInDown-4">
            <Link
              className="navBarLink"
              to="myprofile"
              onClick={handleShowLinks}
            >
              Mon Profil
            </Link>
          </li>
        ) : (
          <li className="navBarItem slideInDown-4">
            <Link
              className="navBarLink"
              to="authentification"
              onClick={handleShowLinks}
            >
              Mon Compte
            </Link>
          </li>
        )}
        {token ? (
          <li className="navBarItem slideInDown-4 bg-slate-100 text-black">
            <button type="button" onClick={handleDisconnection}>
              X Se déconnecter
            </button>
          </li>
        ) : null}
      </ul>
      <button className="navBurger" type="button" onClick={handleShowLinks}>
        <span className="burgerLine" />
      </button>
    </nav>
  );
}

export default Navbar;
