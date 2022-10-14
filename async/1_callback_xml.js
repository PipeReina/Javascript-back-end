var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type'

function exito(response){
    console.log(JSON.parse(response))
}
function fallo(status){
    console.log(status)
}

function get_data(endpoint,exito,fallo){
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