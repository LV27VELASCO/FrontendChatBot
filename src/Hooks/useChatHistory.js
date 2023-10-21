import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const useChatHistory = () => {
    const [messages, setMessages] = useState([]);
    const [resBot, setResBot] = useState([]);
    const [load, setLoad] = useState(false);
  
    const historyChat = () => {
      const token = localStorage.getItem('token');
      let id = JSON.parse(localStorage.getItem('dataUser')).id;
      const url = `https://aerlonieapi.shop:5000/api/historial_chat/${id}`;
  
      axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
        .then(({ data }) => {
          setMessages(data);
        })
        .catch(err => {
          toast.error('Ocurrió un error, intententelo más tarde', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        });
    };
  
    const sendMesaje = (msg) => {
      let data = {
        message: msg
      };
      setLoad(true);
      const token = localStorage.getItem('token');
      const url = "https://aerlonieapi.shop:5000/api/chat";
      
      axios.post(url, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(({ data }) => {
        setResBot(data.response);
        // Después de recibir la respuesta, actualiza el historial de chat.
        historyChat();
      })
      .catch(err => {
        toast.error('Ocurrió un error, intententelo más tarde', {
          position: toast.POSITION.BOTTOM_RIGHT
      });
      })
      .finally(fn => {
        setLoad(false);
      });
    }
  
    // Llama a historyChat cuando se carga el componente.
    useEffect(() => {
      historyChat();
    }, []);
  
  return {historyChat,sendMesaje,messages,setMessages,resBot,load}
}

export default useChatHistory