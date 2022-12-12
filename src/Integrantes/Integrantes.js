import { Footer } from "../shared/Footer/Footer"

export function Integrantes(){

        let nombres="Integrantes"

        let integrantes=[
        {
            nombre:"Acru 1",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/Acru1.jpg?alt=media&token=bbe4b9c9-d100-428e-a0e0-bfe24a4d76a1",
            descripcion:"Agustín Cruz nació el 4 de junio de 1997 en Tucumán, Argentina. En su infancia descubrió gracias a su padre, Víctor Cruz, la escritura y el manejo de la palabra, pues este era escritor. También le enseñó diferentes géneros musicales (rock, cumbia, folclore, etc.) que influenciaron su carrera musical"
        },
        {
            nombre:"Acru 1",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/Acru2.jpg?alt=media&token=62c6d6a7-7983-4722-8986-11159000c7b1",
            descripcion:"Agustín Cruz nació el 4 de junio de 1997 en Tucumán, Argentina. En su infancia descubrió gracias a su padre, Víctor Cruz, la escritura y el manejo de la palabra, pues este era escritor. También le enseñó diferentes géneros musicales (rock, cumbia, folclore, etc.) que influenciaron su carrera musical"
        },
        {
            nombre:"Acru 1",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/Acru3.webp?alt=media&token=6616d08c-424b-4b55-b64b-89a805c14726",
            descripcion:"Agustín Cruz nació el 4 de junio de 1997 en Tucumán, Argentina. En su infancia descubrió gracias a su padre, Víctor Cruz, la escritura y el manejo de la palabra, pues este era escritor. También le enseñó diferentes géneros musicales (rock, cumbia, folclore, etc.) que influenciaron su carrera musical"
        }    
    ]


    

    return(
        <> 
        <h1 className="p-5">{nombres}</h1>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-5">
                {
                    integrantes.map(function(integrante){
                        return(
                            <>
                            <div className="col">
                                <div className="card h-100">
                                <img src={integrante.foto} alt="foto" className="img-fluid h-100 w-100"></img>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <h1 className="text-center">{integrante.nombre}</h1>
                                    <h3 className="p-5">{integrante.descripcion}</h3>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>

            
        </div>
        <Footer/>
        </>

    )
}