import React, { useEffect, useState } from "react";
import "../styles/Allcollections.css";
import { NavLink } from "react-router-dom";
import cross1 from "../assets/croix4.png";
// import NotFound from "../assets/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

function AllCollections() {
  const [coins, setCoins] = useState([]);
  const myHeaders = new Headers();

  const getAllCoins = () => {
    fetch("http://localhost:5000/api/coins")
      .then((res) => res.json())
      .then((coinsList) => setCoins(coinsList))
      .catch((error) => console.warn("error", error));
  };

  useEffect(() => {
    myHeaders.append("Content-Type", "application/json");
    getAllCoins();
    // .then((coinsList) => console.warn(coinsList));
  }, []);

  const deleteCoin = (id) => {
    // alert(id);
    alert("Suppression réussie");
    fetch(`http://localhost:5000/api/coins/${id}`, {
      method: "delete",
      redirect: "follow",
      headers: myHeaders,
    })
      .then((result) => {
        result.json();
      })
      .then((response) => {
        console.warn(response);
        getAllCoins();
      })
      .catch((error) => console.warn("error", error));
  };

  return (
    <div className=" text-black">
      <h1 className="text-center text-3xl p-5 pt-24">
        Notre catalogue de pièces
      </h1>
      <section className="container">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="card hover:scale-105 relative cursor-default"
          >
            <img className="card-image" src={coin.picture} alt="pictureCoins" />
            <h1 className="text-lg text-center ml-2 mr-2">{coin.name}</h1>{" "}
            <h1 className="text-sm text-center">
              Date historique : {coin.dateHistory}
            </h1>{" "}
            <h1 className="text-sm text-center">Métal : {coin.metal}</h1>{" "}
            <h1 className="text-sm text-center">Devise : {coin.devise}</h1>{" "}
            {coins ? (
              <NavLink to={`/allcollections/${coin.id}`}>
                <h1 className="text-sm absolute bg-black text-white p-1 bottom-3 left-3">
                  PLUS D'INFOS
                </h1>
              </NavLink>
            ) : null}
            <button type="button" onClick={() => deleteCoin(coin.id)}>
              <img
                src={cross1}
                alt="croix delete"
                className="absolute p-1 top-1 right-1 w-6 cursor-pointer"
              />{" "}
            </button>
            <h1 className="text-sm text-blue-600 text-right text-bottom absolute bottom-3 right-3 ">
              {coin.price}
            </h1>
            <h1 className="text-sm text-right text-bottom absolute top-1 left-28 ">
              {coin.id}
            </h1>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AllCollections;
