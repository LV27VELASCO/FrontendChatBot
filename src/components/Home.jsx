import React from 'react'
import background from "../assets/Aerolinea.jpg"
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${background})` 
    }} className="min-h-[91vh]  bg-no-repeat bg-cover grid place-content-center">
      <Outlet/>
    </div>
  )
}

export default Home