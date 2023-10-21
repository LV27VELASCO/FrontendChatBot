import React from "react";
import { useNavigate } from "react-router-dom";

const ChatNav = ({isAdmin}) => {
  const navigate=useNavigate()
  const chatBot = () => {
    navigate("/chatBOT");
  };

  const HistoryChat = () => {
    navigate("/HistoryChat");
  };

  const ContactSoport = () => {
    navigate("/ContactSuport");
  };

  const HostoryContact = () => {
    navigate("/HistoryContact");
  };
  return (
    <>
      {
        isAdmin 
        ? 
        <>
        <li
        onClick={() => HistoryChat()}
        title="Historial chats"
        className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center justify-center gap-1">
        <p className="pl-2 pr-3">Historial de Chats</p>
        <i className="fa-solid fa-comments"></i>
        </li>
        <li
        onClick={() => HostoryContact()}
        title="Historial de contactos"
        className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center justify-center gap-1">
        <p className="pl-2 pr-3">Contactos</p>
        <i className="fa-solid fa-robot"></i>
        </li>
        </>
        :
        <>
        <li
        onClick={() => chatBot()}
        title="Chat"
        className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center justify-center gap-1">
        <p className="pl-2 pr-3">Chat</p>
        <i className="fa-solid fa-comment"></i>
        </li>
        <li
        onClick={() => ContactSoport()}
        title="Contactar Soporte"
        className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center justify-center gap-1">
        <p className="pl-2 pr-3">Contactar Soporte</p>
        <i className="fa-solid fa-robot"></i>
        </li>
        
        </>
      }
    </>
  );
};

export default ChatNav;
