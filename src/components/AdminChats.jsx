import React from 'react'
import useChatAdmin from '../Hooks/useChatAdmin'

const AdminChats = () => {

    let {messages} = useChatAdmin()
    function formatearFecha(fechaFormatear) {
        const fechaFormateada = new Date(fechaFormatear).toLocaleString('es-ES', "DD/MM/YYYY");
        let fch= fechaFormateada.split(",")[0]
        return fch;
      }
  return (
   <>
   
<div className="relative h-[30rem] min-w-[800px] w-full overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                    Mensaje usuario
                </th>
                <th scope="col" className="px-6 py-3">
                   Respuesta bot
                </th>
                <th scope="col" className="px-6 py-3">
                    User Id
                </th>
            </tr>
        </thead>
        <tbody>
            {
            messages.map((msg,index)=>(
            
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {formatearFecha(msg.fecha)}
                </th>
                <td className="px-6 py-4">
                    {msg.mensaje}
                </td>
                <td className="px-6 py-4">
                    {msg.respuesta_chatbot}
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {msg.usuario_id}
                </th>
            </tr>
                ))
            }
        </tbody>
    </table>
</div>

   </>
  )
}

export default AdminChats