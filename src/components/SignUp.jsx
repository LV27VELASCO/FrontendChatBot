import React from 'react'
import useSignUp from '../Hooks/useSignUp'
import Loader from './Loader'
import Created from './Created'
import { NavLink } from 'react-router-dom'
import '../styles/height.css'

const SignUp = () => {
 const {submit,handleSubmit,register,errors,userCreate,Error,userExist,load} =useSignUp()
  return (
    <div className="conten-height flex flex-col justify-center items-center">
    {
      load
      ?
      <Loader/>
      :
      userCreate
      ?
      <Created/>
      :
    <div className="m-auto block w-80 rounded-lg bg-white px-6 shadow-lg dark:bg-neutral-700 py-8 md:w-96">
     <div className="w-11/12 m-auto flex justify-start gap-4 mb-5">
        <h3 className="text-2xl text-justify font-semibold text-gray-800">Registrar Usuario</h3>
     </div>
     <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
        <ul className="flex flex-col gap-4 items-center text-gray-800">
         <li className="w-11/12">
            <label htmlFor="form-nombre" className="block text-gray-700 font-bold">Nombre</label>
            <input autoComplete='off' type="text" id="form-nombre" name="nombre" placeholder="Your Name" className="border w-full rounded py-2 px-3 leading-4 focus:outline-none focus:border-blue-500 shadow-inner text-sm" {...register('nombre', {
                required: {
                  value: true,
                  message: "Campo requerido"
                },
                pattern: {
                  value: /[A-Za-z]$/i,
                  message: "Formato incorrecto, solo caracteres (A-Z)."
                },minLength:{
                    value:3,
                    message:'Nombre muy corto'
                },
                maxLength:{
                    value:25,
                    message:'Nombre muy largo'
                }
                })} />
                {errors.nombre && <span className='text-xs text-red-700'>{errors.nombre.message}</span>}
         </li>
            <li className="w-11/12">
               <label htmlFor="for-email" className="block text-gray-700 font-bold">Email</label>
               <input autoComplete='off' type="text" id="for-email" name="email" placeholder="Your Email" className="border w-full rounded py-2 px-3 leading-4  focus:outline-none focus:border-blue-500 shadow-inner text-sm" {...register('email', {
                   required: {
                    value: true,
                    message: "Campo requerido"
                    
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Formato incorrecto."
                  }
                })}/>
                {errors.email && <span className='text-xs text-red-700'>{errors.email.message}</span>}
            </li>
         <li className="w-11/12">
            <label htmlFor="contraseña" className="block text-gray-700 font-bold">Contraseña</label>
            <input autoComplete='off' type="password" id="for-password" name="contraseña" placeholder="Your Password" className="border w-full rounded py-2 px-3 leading-4  focus:outline-none focus:border-blue-500 shadow-inner text-sm" {...register('contraseña', {
                required: {
                  value: true,
                  message: "Campo requerido"
                },
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres"
                }
              })}/>
              {errors.contraseña && <span className='text-xs text-red-700'>{errors.contraseña.message}</span>}
         </li>
        </ul>
        <div className="w-11/12 m-auto"> 
        {
          Error
          &&
          <span className="text-xs text-red-700">An error occurred, please try again later</span>
          ||
          userExist
          &&
          <span className="text-xs text-red-700">User already exists</span>
        }
        <button className="text-white rounded-md w-full font-medium bg-blue-600 py-2 hover:bg-blue-500 hover:shadow-lg">Registrar</button>
        </div>
        <p className="text-sm text-gray-700 w-11/12 m-auto">Tienes una cuenta registrada? <NavLink className="text-blue-600 font-semibold" to={'/login'}>Iniciar Sesión</NavLink></p>
     </form>
    </div>
    }
    </div>
  )
}

export default SignUp