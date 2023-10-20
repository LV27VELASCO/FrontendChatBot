import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonPortal = ({ text, path, px, ico}) => {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => { navigate(`/${path}`) }} className={`button-container  cursor-pointer ${px} grid place-content-center py-4 shadow-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br outline-none rounded-lg  after:bg-gradient-to-br hover:scale-110 transition-all duration-500`}>
                <span id='icono'>
                <i className={`bx ${ico} text-4xl`}></i>
                </span>
                <span type="button" id='texto' className='text-white  text-2xl font-poppins'>{text}</span>
            </div>
        </>
    )
}

export default ButtonPortal