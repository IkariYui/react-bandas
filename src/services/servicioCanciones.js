//Receta para consumir un API con REACT 
import { generarToken } from '../services/servicioToken'
 


export async function servicioCancionesTop(){

    let token=await generarToken()


    //1. Para dónde voy y a qué voy
    //Escribir la URL del SERVICIO DEL API

    const URL ="https://api.spotify.com/v1/artists/0bYQe0JDIjxkSHQoXlfngl/top-tracks?market=US"

    //2. Qué operación voy a hacer en la base de datos
    //Configurar la petición de envío hacia el servidor 

    const PETICION ={
        method:"GET",
        headers:{Authorization:token}
    }

    //3. "Vamos al restaurante"
    // Consumir el API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return canciones


}