import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import axios from "axios"
import { NavLink,useNavigate } from 'react-router-dom'

const useSignUp = () => {
  const [userCreate, setUserCreate] = useState(false);
  const [userExist,setUserExist] =useState(false)
  const [load,setLoad] =useState()
  const navigate =useNavigate();
  const [Error, setError] = useState(false)
  const { handleSubmit, register, reset, formState: { errors } } = useForm();

  const submit =datos=>{
    console.log(datos)
    const baseUrl ="http://167.172.158.165:5000/api/usuarios";
    var config = {
      method: 'post',
      url: baseUrl,
      data : datos
       };
    setLoad(true)
    axios(config)
    .then(res=>{
      console.log(res.data)
      if(res.status == 200){
         if(!res.data.error){
          setUserCreate(true)
          setTimeout(() => {
          navigate('/')
          }, 2500);
         }else{
          setUserExist(true)
          setTimeout(() => {
            setUserExist(false)
          }, 3000);
         }
      }
    }
    )
    .catch(err=>{
        setError(true)
        setTimeout(() => {
          setError(false)
          }, 3000);
    })
    .finally(fin=>{
      setLoad(false)
    })
     reset({
       email:'',
       nombre:'',
       contraseña:''
      })
  }
  return {submit,handleSubmit,register,errors,userCreate,Error,userExist,load}
}

export default useSignUp