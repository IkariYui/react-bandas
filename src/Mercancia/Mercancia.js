import { Footer } from "../shared/Footer/Footer"

export function Mercancia (){
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
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-5">
                {
                    productos.map(function(producto){
                        return(
                            <>
                            <div class="col">   
                                <div class="card h-100 shadow">
                                    <h1 class="text-center ">{producto.nombre}</h1>
                                    <img src={producto.foto} alt="foto" class="h-100 img-fluid w-100"></img>
                                    <h4 class="text-center">{producto.precio +"$"}</h4>
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