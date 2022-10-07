import {materias} from "./materias.js";
import pkg from 'colors'

//Metodo del objeto en arreglos 
//foreach: recorrer un arreglo

// materias.forEach(function(materia){
//     if(materia.instructor==="Tatis Cabrera"){
//         console.log(`materia: ${materia.nombre}`.blue)
//         console.log(`profe: ${materia.instructor}`.yellow)
//     }
// })
//map:construye un arreglo con base a otro
// const profes=materias.map((materia)=>{
//     return materia.instructor
// })

// console.log(profes)

//find : encontrar la primera materia ocurrencia(elemento), que cumpla con la criteria dada

// const PHP = materias.find((materia)=>{
//     return materia.instructor==="Cristian Buitrago"
// })

// push: agrega un elemento a un arreglo
// materias.push({
//     id:4,
//     nombre:"Cultura fisica",
//     instructor:"Luis Baquero",
//     tipo:"Transversal",
//     notas:[
//         9,
//         8,
//         7
//     ]
// })

//slice: eliminar en un array (delete)

// const materiass = materias.slice(1)
// console.log(materiass)

//findIndex: actualizar en un array (delete)
const actualizar=materias.findIndex((materia)=> materia.id===1)
materias[actualizar].instructor="Batman"

console.log(materias);