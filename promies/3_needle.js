const needle = require('needle')

let endpoint = 'https://pokeapi.co/api/v2/type'


needle('get',endpoint)
    .then((respose)=>{
        console.log(respose)
    })
    .catch()