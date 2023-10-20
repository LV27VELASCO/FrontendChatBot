import React, { useEffect } from 'react'
import avatar from "../assets/bot.png";
import {Avatar, Box, Chip, Typography} from "@mui/material";
import useChatHistory from '../Hooks/useChatHistory';

const Message = ({usrMsg, botMsg,fecha}) => {
  function formatearFecha(fechaFormatear) {
    const opcionesDeFormato = {
      weekday: 'short', // Día de la semana abreviado (por ejemplo, "Mar")
      hour: '2-digit',   // Hora en formato 12 horas (por ejemplo, "03")
      minute: '2-digit'  // Minutos (por ejemplo, "22")
    };
    const fechaFormateada = new Date(fechaFormatear).toLocaleString('es-ES', opcionesDeFormato);
    return fechaFormateada;
  }

  const fechaFormat = formatearFecha(fecha);


  return (
    <div>
      <Box
        sx={{
          my: 2,
          overflowWrap:'break-word'
        }}
      >
        <span className="text-center block w-full text-sm">{fechaFormat}</span>
        <Box sx={{
          my: 2,
          display: "flex",
          flexFlow: "row",
          justifyContent:"right"
        }}>
          <Typography className="text-white bg-blue-500" gutterBottom variant="body2" maxWidth="310px" borderRadius="10px" component="div" sx={{mt: 1.5}} paddingX="8px" paddingY="5px">
              {usrMsg}  
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          my: 2,
          display: "flex",
          flexFlow: "row",
          justifyContent:"left"
        }}
      >
        <Box sx={{
          display: "flex",
          flexFlow: "row",
          my: 2,
          overflowWrap:'break-word'
        }}>
          <Avatar sx={{mr: 1, bgcolor: "text.disabled"}}>
            <img src={avatar} className="object-cover w-full h-full" alt="Chatbot avatar"/>
          </Avatar>
          <Typography gutterBottom variant="body2" className="bg-slate-200" component="div" maxWidth="270px" paddingX="8px" paddingY="5px" borderRadius="10px" sx={{mt: 1.5}}>
            {botMsg}
          </Typography>
          
        </Box>
      </Box>
    </div>
  )
}

export default Message