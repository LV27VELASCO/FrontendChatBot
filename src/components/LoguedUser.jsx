import React from 'react'
import {useNavigate} from "react-router-dom"
const LoguedUser = ({logued}) => {
    const navigate=useNavigate()
    const logOut=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("dataUser");
        navigate('/login');
    }

    const update=()=>{
        navigate('/Update');
    }

    

  return (
    <>
    {
        logued
        &&
        <>
        <li onClick={()=>logOut()} title="Cerrar sesión" className="px-3 py-1 font-medium  bg-red-600 rounded-xl cursor-pointer flex items-center justify-center gap-1">
            <p>Cerrar sesión</p>
            <i className="fa-solid fa-person-running"></i>
        </li>
        </>
    }
    </>
  );
}

export default LoguedUser