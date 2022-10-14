const needle = require('needle')

let endpoint = 'https://hp-api.herokuapp.com/api/characters'

const f = async () => {
    try {
        let response= await needle('get',endpoint)
        response.body.forEach((element) => {
            console.log(`Nombre: ${element.name}`)
            console.log(`Especie: ${element.species}`)
            console.log(`Casa: ${element.house}`)
            console.log(`Actor: ${element.actor}`)
            console.log(`//////////////////////////////////////`)
        });
    } catch (error) {
        console.log(error)
    }
}

f()
