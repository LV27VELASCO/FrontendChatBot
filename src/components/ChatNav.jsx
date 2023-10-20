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
  return (
    <>
      {
        isAdmin 
        ? 
        <li
        onClick={() => HistoryChat()}
        title="Historial"
        className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center justify-center gap-1">
        <p className="pl-2 pr-3">Historial de Chats</p>
        <i className="fa-solid fa-robot"></i>
        </li>
        :
        <li
        onClick={() => chatBot()}
        title="Chat"
        className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center justify-center gap-1">
        <p className="pl-2 pr-3">Chat</p>
        <i className="fa-solid fa-robot"></i>
      </li>
      }
    </>
  );
};

export default ChatNav;
