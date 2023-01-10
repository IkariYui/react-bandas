import './Ampliarinfor.css'
import { useLocation } from "react-router-dom"
export function Ampliarinfo(){

    let datosRecibidos=useLocation()

    let producto=datosRecibidos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-5 ">                      
                        <img src={producto.foto} alt="foto" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 border p-3">
                        <h2 className="fw-bold mark">{producto.nombre}</h2>
                        <h1 className="mt-3 display">{producto.precio +"$"} <span className="descuento">20% off</span></h1>
                        <br></br>
                        <span class="badge text-bg-warning">descuento </span>
                        <p className='fw-bold'>hasta 36 cuotas</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/americanexpress.png?alt=media&token=5659444a-807d-43d5-92b9-7a2023d8bcde" alt='visa' className='img-fluid ms-1 imgampliarinfor'/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/visa.png?alt=media&token=e804041f-d25d-42d8-8ecc-5a8ad708a516" alt='america express' className='img-fluid ms-1 imgampliarinfor'/>
                        <br></br>

                        <i class="bi bi-truck mt-5 fs-1 ">
                            <span className="text-success text-bold fuente envio " > Envio gratis a nivel nacional</span></i>
                        <p className='fw-bold envio'>Conoce los tiempos y las formas de envio</p>

                        <i class="bi bi-arrow-clockwise devolucion "><span className="text-success text-bold fuente envio"> Devolucion gratis</span></i>
                        <p className='fw-bold envio'>30 dias para reembolsos</p>

                        

                    </div>
                </div>
            </div>
        </>
    )
        
    
}
