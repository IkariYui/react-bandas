import './Musica.css'
import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState, useEffect } from "react"




export function Musica(){

    //Usando el hook useState para almacenar la respuesta del API de forma Global
    const[canciones,setCanciones]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    //Usar el hook useEffect para limitar el consumo del API a una sola vez
    useEffect(function(){
        servicioCancionesTop().then(function(response){
            setCanciones(response)
            setEstadoCarga(false)
        })

    },[])

    //Render del componente
    if(estadoCarga==true){

        return(
            <>
            <h2>Estamos cargando las canciones</h2>
            </>
        )

    }else{

        return(
            <>
            <h2 className='tituloMusica'>Canciones de Acru:</h2>
            <br></br>
            <br></br>
                        <div className='container'>
                                <div className='row row-cols-1 row-cols-md-5 g-2'>
            
            {
                canciones.tracks.map(function(cancion,id){
                    {console.log(cancion)}
                    return(
                        
                        <div key={id}>
                                        
                                            <div className="col">   
                                                    <div className="card h-100 w-100 shadow mb-3">
                                                        <div>

                                                            <img className="img-fluid imgMusica" src={cancion.album.images[0].url}></img>
                                                            <h1 className='text-center my-1 namecancion' >{cancion.name}</h1>
                                                            <audio className='audio' controls src={cancion.preview_url}></audio>  
                                                            <h3 className='popularity'> Número en ranking: {cancion.popularity}</h3>
                                                        </div>    
                                                    </div>
                                            </div>
                                                                    
                        </div>        
                        
                        
                    )
                })
            }
                                </div>
                        </div>
            </>
        )

    }

}