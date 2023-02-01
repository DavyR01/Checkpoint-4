import React, { useEffect, useState } from "react";
import "../styles/Allcollections.css";

function AllCollections() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("http://localhost:5000/api/coins")
      .then((res) => res.json())
      .then((coinsList) => setCoins(coinsList))
      .catch((error) => console.warn("error", error));
    // .then((coinsList) => console.warn(coinsList));
  }, []);

  return (
    <div className=" text-black">
      <h1 className="text-center text-3xl p-5 pt-24">
        Notre catalogue de pièces
      </h1>
      <section className="container">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="card hover:scale-105 relative cursor-pointer"
          >
            <img className="card-image" src={coin.picture} alt="pictureCoins" />
            <h1 className="text-lg text-center ml-2 mr-2">{coin.name}</h1>{" "}
            <h1 className="text-sm text-center">
              Date historique : {coin.date_history}
            </h1>{" "}
            <h1 className="text-sm text-center">Métal : {coin.metal}</h1>{" "}
            <h1 className="text-sm text-center">Devise : {coin.devise}</h1>{" "}
            <h1 className="text-sm absolute bg-black text-white p-1 bottom-3 left-3">
              PLUS D'INFOS
            </h1>{" "}
            <h1 className="text-sm text-blue-600 text-right text-bottom absolute bottom-3 right-3 ">
              {coin.price}
            </h1>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AllCollections;
