function llamarAlumno(alumno,callback){
    let llamaAlumno = `Llamando a Alumno: ${alumno}`
    //ejecutar funcion callback
    callback(llamaAlumno)
}
    //definir funcion del callback 
    const imprimir=(texto)=>{
        console.log(texto)
    } 
    //invocar la funcion principal llamarAlumno
    llamarAlumno("Cristian Buitrago",imprimir)