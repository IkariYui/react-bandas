import './Mercancia.css'
import { useNavigate } from "react-router-dom"
import { Footer } from "../shared/Footer/Footer"

export function Mercancia (){


    //Activamos la navegación entre componentes
    //Cuando se dé un evento
    let navegacion=useNavigate()

    //Qué hago cuando se dé el evento
    function detectarEvento(productoSeleccionado){
        navegacion('/masinfo',{
            state:{productoSeleccionado}
        })
    }

    let titulo="Merchandising ACRU"
    let productos=[
        {
            nombre:"vinilo Acru",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/acruVinilo.jpeg?alt=media&token=e07aeefe-b911-493f-b672-a2af13a80c12",
            precio:40
        },
        {
            nombre:"Camiseta Acru",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/camisetaAcru.webp?alt=media&token=a88c9e69-b972-4916-a4ff-9bd32e68905b",
            precio:50
        },
        {
            nombre:"Lp Original",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/viniloAcru.jpg?alt=media&token=b1cb7023-3309-4797-a32b-1698bf0032aa",
            precio:40
        },
        {
            nombre:"Lp Original",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/viniloAcru.jpg?alt=media&token=b1cb7023-3309-4797-a32b-1698bf0032aa",
            precio:40
        },
        {
            nombre:"Camiseta Acru",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/camisetaAcru.webp?alt=media&token=a88c9e69-b972-4916-a4ff-9bd32e68905b",
            precio:50
        },
        {
            nombre:"vinilo Acru",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/acruVinilo.jpeg?alt=media&token=e07aeefe-b911-493f-b672-a2af13a80c12",
            precio:40
        }
    ]





    return(
        <>
        <h1>{titulo}</h1>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-1">
                {
                    productos.map(function(producto,id){
                        return(
                            <div key={id}>
                                <div className="col">   
                                    <div className="card h-100 shadow">     

                                        <h1 className="text-center my-1 ">{producto.nombre}</h1>
                                        <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100"></img>
                                        <h4 className="text-center my-1">{producto.precio +"$"}</h4>


                                        <button className="btn btn-primary mx-3 my-3" onClick={
                                            function(){
                                                detectarEvento(producto)
                                            }
                                        }>Ampliar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <Footer/>
        </>
    )
}