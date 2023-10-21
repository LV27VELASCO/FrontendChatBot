import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Card, CardContent, Grid, TextField } from "@mui/material";
import Message from "./Message";
import useChatHistory from '../Hooks/useChatHistory';
import "../styles/loader.css";
import { ToastContainer } from 'react-toastify';
const ChatBoot = () => {
  const messagesListRef = useRef(null);
  const [messageInput, setMessageInput] = useState("");
  const {sendMesaje,messages,setMessages, load} =useChatHistory()
    
  useEffect(() => {
    // Ajusta el desplazamiento al scrollHeight cuando los mensajes se actualicen.
    if (messagesListRef.current) {
      messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (content) => {
    // add the message to the state
    sendMesaje(content)
        setMessages([
            ...messages
          ])
    // TODO: post the request to Back4app
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(messageInput);
    setMessageInput("");
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Box
            ref={messagesListRef}
            sx={{
              height: 420,
              overflow: "scroll",
              overflowX: "hidden",
            }}
          >
            <Box sx={{ m: 1, mr: 2 }}>
              {
              messages.length>0 ?
              messages.map((message, index) => (
                <Message
                  key={index}
                  usrMsg={message.mensaje}
                  botMsg={message.respuesta_chatbot}
                  fecha={message.fecha}
                />
              ))
              :
              <h5 className="text-center mt-56 font-medium text-gray-500">Inicia una conversación</h5>
            }
              {
                load 
                &&
                <span className="loaderChat inline-block text-center"></span>
              }
            </Box>
          </Box>
          <Box
            component="form"
            sx={{
              mt: 2,
              display: "flex",
              flexFlow: "row",
              gap: 1,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              value={messageInput}
              onChange={(event) => setMessageInput(event.target.value)}
              fullWidth
            />
            <Button variant="contained" onClick={handleSubmit} type="submit">
            Enviar
            </Button>
          </Box>
        </CardContent>
      </Card>
      <ToastContainer />
    </Grid>
  );
};

export default ChatBoot;
