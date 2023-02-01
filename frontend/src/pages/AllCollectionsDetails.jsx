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
      <div className="pt-24 w-1/2">
        <div>{valuesDetails.content}</div>
      </div>
    </div>
  );
}
