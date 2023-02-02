import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AllCollectionsDetails() {
  const [valuesDetails, setValuesDetails] = useState([]);
  const idParam = useParams();

  const getCoinsById = () => {
    fetch(`http://localhost:5000/api/coins/${idParam.id}`)
      .then((res) => res.json())
      .then((coinsList) => setValuesDetails(coinsList))
      .then((result) => console.warn(result))
      .catch((error) => console.warn("error", error));
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    getCoinsById();
    // .then((coinsList) => console.warn(coinsList));
  }, []);

  return (
    <div className="text-black text-center flex justify-center">
      <div className="pt-24 lg:w-5/12 w-8/12">
        <div className="flex justify-center pb-8">
          <img src={valuesDetails.picture} alt="My_picture" width={400} />
        </div>
        <div className="border-solid border-2 border-black p-4 bg-black text-white text-justify">
          {valuesDetails.content}
        </div>
        <div className="bg-white border-b-2 border-black border-l-2 border-r-2 mb-16 p-3 text-center text-xl">
          <div>
            {" "}
            Intitulé :{" "}
            <span className="text-blue-900 font-medium text-2xl">
              {valuesDetails.name}
            </span>
          </div>
          <div>
            {" "}
            Acier : <span className="text-blue-900">
              {valuesDetails.metal}
            </span>{" "}
          </div>
          <div>
            {" "}
            Date Historique :{" "}
            <span className="text-blue-900">{valuesDetails.dateHistory}</span>
          </div>
          <div>
            Valeur brute :{" "}
            <span className="text-blue-900">
              {valuesDetails.value} {valuesDetails.devise}
            </span>
          </div>
          <div>
            {" "}
            Prix monétaire :{" "}
            <span className="text-blue-900 font-semibold">
              {valuesDetails.price}
            </span>
          </div>
          <div className="mb-5">
            {" "}
            Provenance :{" "}
            <span className="text-blue-900">{valuesDetails.country}</span>
          </div>
          <div className="flex justify-around ">
            <button
              type="submit"
              className=" text-black opacity-70 hover:opacity-100 bg-blue-500 font-medium rounded-md text-base p-2 text-center border hover:scale-105 duration-300"
            >
              AJOUTER AUX FAVORIS{" "}
            </button>{" "}
            <button
              type="submit"
              className=" text-black opacity-70 hover:opacity-100 bg-red-500 font-medium rounded-md text-base p-2 text-center border hover:scale-105 duration-300"
            >
              ACHETER{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
