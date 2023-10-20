import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import axios from "axios"

const useLogin = () => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    const [ErrorLogin, setErrorLogin] = useState(false)
    const [notCredential, setNotCredential] = useState(false);
    const [load, setload] = useState(false)

    const navigate =useNavigate()
    
    const submit = datos =>{
        const baseUrl ="http://167.172.158.165:5000/api/iniciar_sesion/";
        let config = {
            method: 'post',
            url: baseUrl, data : datos
             };
        let user ={
            id:0,
            name:"",
            admin:false
        }    
        setload(true)
        axios(config)
        .then(({data})=>{
            console.log(data)
            if(data.access_token){
                user.id =data.id_usuario;
                user.name=data.nombre_usuario;
                user.admin=data.es_administrador;
                localStorage.setItem("dataUser",JSON.stringify(user));
                localStorage.setItem("token",data.access_token);
                navigate('/')
            }else{
                setNotCredential(true)
                setTimeout(() => {
                  setNotCredential(false)
                  }, 3000);
            }
        })
        .catch(err=>{
             setErrorLogin(true)
            setTimeout(() => {
                setErrorLogin(false)
                }, 3000);
            })
            .finally(fin =>{setload(false)})
            reset({
                email:'',
                password:''
            })
    }

    return {submit,ErrorLogin,handleSubmit,register,reset,errors,notCredential,load}
}

export default useLogin