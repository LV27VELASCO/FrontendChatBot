import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';


const useContact = () => {
    const sendContact = (msg) => {
        let data = {
          message: msg
        };
        const token = localStorage.getItem('token');
        const url = "https://aerlonieapi.shop:5000/api/contactos";
        axios.post(url, data, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(({ data }) => {
          toast.info('Enviado correctamente!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        })
        .catch(err => {
          toast.error('Ocurrió un error, intententelo más tarde', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        });
      }
      

  return {sendContact}
}

export default useContact