var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://rickandmortyapi.com/api/character'

const exito = (response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
    console.log(`Nombre : ${tipo.name}`)
    console.log('-----------------------------')
    })
    // console.log(JSON.parse(response))
}
const fallo = (status)=>{
    console.log(status)
}

const get_data=(endpoint,exito,fallo)=>{
   //2. objeto de coneccion a la api
    let http = new XMLHttpRequest() 
    //3. abrir una coneccion a la API
    http.open('get',endpoint)
    //4. enviar solicitud (request) a la API
    http.send()
    //5. hacer el tratamiento de la response
    http.onload = (function(){
        if(http.status===200){
        exito(http.responseText)
    }else{
        fallo(http.status)
    }

    })
}


// invocamos a la funcion get_data

get_data(endpoint, exito, fallo)