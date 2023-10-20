import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useChatAdmin = () => {
    const [messages, setMessages] = useState([]);
  
    const ChatAdmin = () => {
      const token = localStorage.getItem('token');
      const url = "http://167.172.158.165:5000/api/historial_chat";
  
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
    // Llama a historyChat cuando se carga el componente.
    useEffect(() => {
        ChatAdmin();
    }, []);
  
  return {messages,setMessages}
}

export default useChatAdmin