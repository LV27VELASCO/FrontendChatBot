import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoguedUser from "./LoguedUser";
import ChatNav from "./ChatNav";

const Header = () => {

  const [logued, setLogued] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("dataUser"));
  const toHome = () => navigate("/");
  return (
    <>
      <header className="bg-gray-100 py-5 px-4 border-b sticky top-0 z-20 border-gray-300  box-border md:px-7">
        <div className="flex items-center justify-between max-w-[78rem] m-auto">
        <div onClick={toHome} className="cursor-pointer">
          <h1 className="font-semibold text-lg font-serif text-gray-700">
            ChatBot Aerolinea
          </h1>
        </div>
        {/* Contenedor filtrado, user, menu */}
        <div className="flex items-center gap-6">
        <nav className="flex gap-4">
        {token && 
              <>
              <ul className="flex flex-col relative">
                <ChatNav isAdmin={user.admin}/>
              </ul>
              <ul className="flex flex-col relative">
              <li
                  onClick={() => setLogued(!logued)}
                  title="Usuario"
                  className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center justify-center gap-1">
                  <p className="pl-2 pr-3">{user.name}</p>
                  <i className="fa-solid fa-user"></i>
                </li>
                <div className="absolute top-10">
                <LoguedUser logued={logued}/>
                </div>
              </ul>
              </>
              }
        </nav>
        </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;