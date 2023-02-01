import React, { useState } from "react";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [metal, setMetal] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [picture, setPicture] = useState("");
  const [content, setContent] = useState("");
  const [devise, setDevise] = useState("");

  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      name,
      metal,
      date,
      value,
      price,
      country,
      picture,
      content,
      devise,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    // on créé et on redirige
    fetch("http://localhost:5000/api/coins", requestOptions)
      .then((response) => {
        response.text();
      })
      .catch(console.error);
  };
  return (
    <div className=" text-black">
      <h1 className="text-center text-3xl p-5 pt-24">Gestion des stocks</h1>
      <div>
        <form onSubmit={handleForm}>
          <div className="formStocks flex flex-col justify-center text-white ">
            <div className="mt-8 mx-12 bg-gray-800 py-8 px-8 h-1/2 md:mx-auto rounded-xl ">
              <div className="w-full flex flex-col justify-center items-center ">
                <div className="flex flex-wrap gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="xxx"
                      className="block font-medium text-sm mb-2"
                    >
                      Désignation{" "}
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      id="Intitulé de la pièce"
                      type="text"
                      required
                      pattern=".+"
                      placeholder="Intitulé"
                      className="text-black border-gray-400 bg-gray-100 rounded-lg p-4 w-full h-10"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="xxx"
                      className="block font-medium text-sm mb-2"
                    >
                      Métal{" "}
                    </label>
                    <input
                      onChange={(e) => setMetal(e.target.value)}
                      id="metal"
                      type="text"
                      required
                      pattern=".+"
                      placeholder="acier, argent, or..."
                      className="text-black border-gray-400 bg-gray-100 rounded-lg p-4 w-full h-10"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="xxx"
                      className="block font-medium text-sm mb-2"
                    >
                      Date historique
                    </label>
                    <input
                      onChange={(e) => setDate(e.target.value)}
                      id="Date historique"
                      type="text"
                      required
                      pattern=".+"
                      placeholder="1950"
                      className="text-black border-gray-400 bg-gray-100 rounded-lg p-4 w-full h-10"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="xxx"
                      className="block font-medium text-sm mb-2"
                    >
                      Valeur brut
                    </label>
                    <input
                      onChange={(e) => setValue(e.target.value)}
                      id="Valeur brut"
                      type="text"
                      required
                      pattern=".+"
                      placeholder="5000"
                      className="text-black border-gray-400 bg-gray-100 rounded-lg p-4 w-full h-10"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="xxx"
                      className="block font-medium text-sm mb-2"
                    >
                      Prix Marchand{" "}
                    </label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      id="Prix marchand"
                      type="text"
                      required
                      pattern=".+"
                      placeholder="400€"
                      className="text-black border-gray-400 bg-gray-100 rounded-lg p-4 w-full h-10"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="xxx"
                      className="block font-medium text-sm mb-2"
                    >
                      Provenance{" "}
                    </label>
                    <input
                      onChange={(e) => setCountry(e.target.value)}
                      id="provenance"
                      type="text"
                      pattern=".+"
                      placeholder="Kuala Lumpur"
                      className="text-black border-gray-400 bg-gray-100 rounded-lg p-4 w-full h-10"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="xxx"
                      className="block font-medium text-sm mb-2"
                    >
                      Contenu{" "}
                    </label>
                    <input
                      onChange={(e) => setContent(e.target.value)}
                      id="Contenu"
                      type="text"
                      pattern=".+"
                      placeholder="Présentation..."
                      className="text-black border-gray-400 bg-gray-100 rounded-lg p-4 w-full h-10"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="xxx"
                      className="block font-medium text-sm mb-2"
                    >
                      Devise{" "}
                    </label>
                    <input
                      onChange={(e) => setDevise(e.target.value)}
                      id="Devise"
                      type="text"
                      pattern=".+"
                      placeholder="Dollars, Francs..."
                      className="text-black border-gray-400 bg-gray-100 rounded-lg p-4 w-full h-10"
                    />
                  </div>
                </div>
                <div className="text-center border-solid border-2 mt-6">
                  <h2 className="bg-gray-600">Sélectionnez une image : </h2>
                  <input
                    onChange={(e) => setPicture(e.target.value)}
                    className="border-solid"
                    type="file"
                  />
                </div>
              </div>
            </div>
            <div className="mb-20 flex justify-center text-black pl-4 pr-4 pt-4">
              <button
                type="submit"
                className=" text-black opacity-70 hover:opacity-100 bg-yellow-500 font-medium rounded-md text-xl p-4 text-center border hover:scale-105 duration-300"
              >
                AJOUTER une pièce
              </button>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
