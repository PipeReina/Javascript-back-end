let colors = require('colors');



//dessustrucrar 

const g1 = [
    "Laura",
    "Carlos",
    "Ana"
]
const g2 = [
    "Erique",
    "Jairo",
    "Valeria"
]
const g3 = [
    ...g1,
    "Diana",
    ...g2,
    "Duvan"
]
const estudiante= {
    id : 1,
    nombre: 'Pipe',
    adellido: 'Reina',
    identificacion:1034576464,
    amigos:g3
}

console.log(estudiante)
