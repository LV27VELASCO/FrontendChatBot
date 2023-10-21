import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useContactHistory = () => {
    const [contacts, setContacts] = useState([]);
  
    const historyContact = () => {
      const url = `https://aerlonieapi.shop:5000/api/contactos`;
      axios.get(url)
        .then(({ data }) => {
          setContacts(data)
        })
        .catch(err => {
          toast.error('Ocurrió un error, intententelo más tarde', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        });
    };
  
    // Llama a historyChat cuando se carga el componente.
    useEffect(() => {
        historyContact();
    }, []);


  return {contacts}
}

export default useContactHistory