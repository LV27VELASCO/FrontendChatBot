import React, { useState } from "react";
import useContact from "../Hooks/useContact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUser = () => {
  const [messageInput, setMessageInput] = useState("")
  const {response,sendContact} =useContact()

  
  const handleSubmit = (event) => {
    event.preventDefault();
    sendContact(messageInput);
    setMessageInput("");
  };

  return (
    <>
    <div className="bg-slate-200 p-5 rounded-md">
      <label
        htmlFor="email"
        className="block mb-2 text-md font-medium text-gray-700 dark:text-white"
      >
        Aquí tu consulta:
      </label>
      <input
        type="text"
        id="comentario"
        value={messageInput}
        onChange={(event) => setMessageInput(event.target.value)}
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Quiero informacion acerca.."
      />
      <button  onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-4 py-2 mt-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm p text-gray-500 dark:text-gray-400"
      >
        Puedes ver aquí nuestros
        <a
          href="#"
          className="font-medium pl-1 text-blue-600 hover:underline dark:text-blue-500"
        >
          Terminos y condiciones
        </a>
        .
      </p>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactUser;
