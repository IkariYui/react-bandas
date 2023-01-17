import './Footer.css'

export function Footer (){

    return (
        <footer>
            <div className="container-fluid">
                <div className="row p-5 pie">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/acruLogo.png?alt=media&token=e916d769-0ea2-4c4e-a6f8-fa7fcf0be246" alt="logo" className="img-fluid w-100 imagenFooter"></img>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h2 className="fw-bold">Sobre Acru</h2>
                        <h4>Rapero Argentino</h4>
                        <br></br>
                        <h2 className="fw-bold">Sobre Acru</h2>
                        <h4>Rapero Argentino</h4>
                    </div>
                    <div className="col-12 col-md-4">
                    <i className="bi bi-instagram fuente me-4"></i>
                    <i className="bi bi-facebook fuente me-4"></i>
                    <i className="bi bi-youtube fuente m-4"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}