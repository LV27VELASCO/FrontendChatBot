import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useChatHistory = () => {
    const [messages, setMessages] = useState([]);
    const [resBot, setResBot] = useState([]);
    const [load, setLoad] = useState(false);
  
    const historyChat = () => {
      const token = localStorage.getItem('token');
      let id = JSON.parse(localStorage.getItem('dataUser')).id;
      const url = `http://167.172.158.165:5000/api/historial_chat/${id}`;
  
      axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
        .then(({ data }) => {
          setMessages(data);
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    const sendMesaje = (msg) => {
      let data = {
        message: msg
      };
      setLoad(true);
      const token = localStorage.getItem('token');
      const url = "http://167.172.158.165:5000/api/chat";
      
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
        console.log(err);
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