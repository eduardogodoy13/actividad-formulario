function Register() {
    let Nombre =document.getElementById("Nombre").value;
    let Apellido =document.getElementById("Apellido").value;
    let Edad =document.getElementById("Edad").value;
    let Email =document.getElementById("Email").value;
    
    Edad= parseInt(Edad)

    if (Nombre==="" || Apellido ==="" || Edad==="" || Email==="")
    {
        alert ("Llene todos los campos solicitados");
    }
    else if (Edad >= 18 )
    {
    alert(`Hola ${Nombre} ${Apellido}, has aplicado correctamente te contactaremos en ${Email}`)
    }
    else{
        alert(`Hola ${Nombre} ${Apellido}, no cumples con la edad requerida`)
    }
    }
    function VaciarTodo(){ 
        document.getElementById("Nombre").value=""
        document.getElementById("Apellido").value=""
        document.getElementById("Edad").value=""
        document.getElementById("Email").value= ""
    }