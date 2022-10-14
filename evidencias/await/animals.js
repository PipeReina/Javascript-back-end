const axios = require('axios')

let config={
    method:'get',
    url: 'https://zoo-animal-api.herokuapp.com/animals/rand'
}

const f = async () => {
    try {
        let response= await axios(config)
        response.body.forEach(element => {
            console.log(`Anime: ${element.name}`)
            console.log(`Anime: ${element.animal_type}`)
            console.log(`Anime: ${element.diet}`)
            console.log(`Anime: ${element.geo_range}`)
            console.log(`//////////////////////////////////////////`)
        });
    } catch (error) {
        console.log(error)
    }
}

f()
