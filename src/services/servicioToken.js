export async function generarToken(){

    generarToken()

    const client_id="client_id=61fe41f85e6c494593a85d421aab37fb"
    const client_secret="client_secret=b706ae4d620e4d3c8b65239195f36929"
    const grant_type="grant_type=client_credentials"

    let dataSend=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataSend

    }

    let respuesta=await fetch(URL, PETICION)
    let token=await respuesta.json()

    let tokenDefinitivo=token.token_type+" "+token.acces_token

    return(tokenDefinitivo)

}