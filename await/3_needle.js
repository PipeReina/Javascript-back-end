const needle = require('needle')

let endpoint = 'https://rickandmortyapi.com/api/character'

const f = async () => {
    try {
        let response= await needle('get',endpoint)
        response.body.results.forEach((element) => {
            console.log(`Url: ${element.url}`)
            console.log(`Tipo: ${element.name}`)
            console.log(`//////////////////////////////////////`)
        });
    } catch (error) {
        console.log(error)
    }
}

f()

