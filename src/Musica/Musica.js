import { servicioCancionesTop } from "../services/servicioCanciones"

export function Musica(){


    servicioCancionesTop()

    return(
        <>
        <h1>Cargando Musica</h1>
        </>
    )
}