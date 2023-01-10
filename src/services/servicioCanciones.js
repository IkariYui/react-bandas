//Receta para consumir un API con REACT 

export async function servicioCancionesTop(){


    //1. Para dónde voy y a qué voy
    //Escribir la URL del SERVICIO DEL API

    const URL ="https://api.spotify.com/v1/artists/0bYQe0JDIjxkSHQoXlfngl/top-tracks?market=US"

    //2. Qué operación voy a hacer en la base de datos
    //Configurar la petición de envío hacia el servidor 

    const PETICION ={
        method:"GET",
        headers:{Authorization:"Bearer BQCH56DtvzDmAtF_dacx0xxLXEYWpIKyaeYNBluXk_n7QwDS8xZme6NPHJbmBZtUcsFuPoAKduMnqQBxp4bkjIz5wf3_ylx1KnxjfVgo3xyXRA42Z43E9P8NfS2wJPqM7QW5BYmWW860RrjkNvb8ZDlDVDA50BxxF5PW23dsJLTB6n3J5gwKTVluTtt6-mc"}
    }

    //3. "Vamos al restaurante"
    // Consumir el API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    console.log(canciones)


}