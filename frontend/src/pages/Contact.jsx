import React, { useState } from "react";

export default function Contact() {
  const [userFirstname, setUserFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className=" text-black text-center">
      <h1 className="text-center text-3xl p-5 pt-24">Formulaire de Contact</h1>
      <p className="p-2">
        Une question ? Un doute ? Une suggestion ? Veuillez nous faire part de
        vos retours en remplissant ce formulaire!
      </p>
      <form className="md:w-96 w-4/5 flex flex-col m-auto pt-8 text-left">
        <label className="flex flex-col text font-light">
          Prénom :
          <input
            className="mt-3 border-2 rounded-lg h-10"
            type="text"
            name="name"
            value={userFirstname}
            onChange={(e) => setUserFirstname(e.target.value)}
            placeholder="Livre"
          />
        </label>
        <label className="flex flex-col text font-light mt-3">
          Nom:
          <input
            className="mt-3 border-2 rounded-lg h-10"
            type="text"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Sterling"
          />
        </label>
        <label className="flex flex-col mt-4 text font-light">
          Email :
          <input
            className="mt-3 border-2 rounded-lg h-10"
            type="email"
            name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="livre.sterling@gmail.com"
          />
        </label>
        <label className="flex flex-col mt-4 mb-10 text font-light">
          Message :
          <input
            className="mt-3 border-2 h-32 rounded-lg"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="message"
            placeholder="Ecrivez votre message..."
          />
        </label>
        <div className="flex justify-end">
          <button
            type="submit"
            className=" text-black opacity-70 hover:opacity-100 bg-yellow-500 font-medium rounded-md text-xl p-2 text-center border hover:scale-105 duration-300 w-48"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
