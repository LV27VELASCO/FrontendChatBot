import React from "react";
import useLogin from "../Hooks/UseLogin";
import "../styles/height.css";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
const Login = () => {
  const {
    submit,
    ErrorLogin,
    register,
    handleSubmit,
    errors,
    notCredential,
    load,
  } = useLogin();
  return (
    <div className="conten-height flex flex-col justify-center items-center">
      {load ? (
        <Loader />
      ) : (
        <div className="m-auto block w-80 rounded-lg bg-white px-6 shadow-lg dark:bg-neutral-700 py-10  md:w-96">
          <div className="w-11/12 m-auto flex flex-col items-center gap-4">
            <h3 className="text-2xl text-center font-semibold text-gray-800 mb-7">
              Bienvenido, por favor ingresa tu correo electrónico y contraseña
            </h3>
            {/* <ul className="bg-red-500 px-3 py-2 w-3/4 rounded-lg flex flex-col items-center mb-2 gap-1">
            <h4 className="text-xl">Test data</h4>
            <li className="flex gap-1 items-center"><i className="fa-solid fa-envelope"></i><span>john@gmail.com</span></li>
            <li className="flex gap-1 items-center"><i className="fa-solid fa-lock"></i><span>john1234</span></li>
        </ul> */}
          </div>
          <form
            className="flex flex-col gap-4 py-5"
            onSubmit={handleSubmit(submit)}
          >
            <ul className="flex flex-col gap-4 items-center text-gray-800">
              <li className="w-11/12">
                <label
                  htmlFor="form-email"
                  className="block text-gray-700 font-bold"
                >
                  Correo
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  id="form-email"
                  name="email"
                  placeholder="Your Email"
                  className="border w-full rounded py-2 px-3 leading-4 focus:outline-none focus:border-blue-500 shadow-inner text-sm"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-xs text-red-700">
                    {errors.email.message}
                  </span>
                )}
              </li>
              <li className="w-11/12">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold"
                >
                  Contraseña
                </label>
                <input
                  autoComplete="off"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  className="border w-full rounded py-2 px-3 leading-4  focus:outline-none focus:border-blue-500 shadow-inner text-sm"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-xs text-red-700">
                    {errors.password.message}
                  </span>
                )}
              </li>
            </ul>
            <div className="w-11/12 m-auto">
              {(notCredential && (
                <span className="text-xs text-red-700">
                  Invalid credentials, try again...
                </span>
              )) ||
                (ErrorLogin && (
                  <span className="text-xs text-red-700">
                    An error occurred please try again later
                  </span>
                ))}

              <button className="text-white rounded-md w-full font-medium bg-blue-600 py-2 hover:bg-blue-500 hover:shadow-lg">
                Iniciar Sesión
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-700 w-11/12 m-auto">
            Aún no tienes una cuenta registrada?{" "}
            <NavLink className="text-blue-600 font-semibold" to={"/signUp"}>
              Registrarse
            </NavLink>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
