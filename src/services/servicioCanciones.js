//Receta para consumir un API con REACT 

export async function servicioCancionesTop(){


    //1. Para dónde voy y a qué voy
    //Escribir la URL del SERVICIO DEL API

    const URL ="https://api.spotify.com/v1/artists/0bYQe0JDIjxkSHQoXlfngl/top-tracks?market=US"

    //2. Qué operación voy a hacer en la base de datos
    //Configurar la petición de envío hacia el servidor 

    const PETICION ={
        method:"GET",
        headers:{Authorization:"Bearer BQBWe3_BEn_iLBpqDP7kiPuXrDG49j2nNwmoGsFxwL6UfwhB5E2wNAJHjnFwNItsWPORA3FBn4RDNi1c_0ol7X0O7TE_HPgChgG2Mj9I-ouFZA1wpN7h1uEQsMa-hfNQx4lrZTOvae6_didLassrEEtvPT72T6gwFfkqJdNhs_16KokE93BPrt6vmrHjqAg"}
    }

    //3. "Vamos al restaurante"
    // Consumir el API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return canciones


}