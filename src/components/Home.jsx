import React from 'react'
import background from "../assets/Aerolinea.jpg"
import ChatBoot from './ChatBoot'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${background})` 
    }} className="h-[88vh] bg-no-repeat bg-cover grid place-content-center">
      <Outlet/>
    </div>
  )
}

export default Home