import React, { useEffect, useState } from "react";

function AllCollections() {
  const [coins, setCoins] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  useEffect(() => {
    fetch("http://localhost:5000/api/coins")
      .then((res) => res.json())
      .then((coinsList) => setCoins(coinsList));
    // .then((coinsList) => console.warn(coinsList));
  }, []);

  return (
    <div className=" text-black">
      <h1 className="text-center text-3xl p-5 pt-24">
        Notre catalogue de pièces
      </h1>
      {coins.map((coin) => (
        <div>
          <div> {coin.name}</div>
          <div>
            {" "}
            <img src={coin.picture} alt="pictureCoins" width={500} />
            {coin.picture}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllCollections;
