window.addEventListener("load",function(){

let listajugador=[
    
    {nif:1,
    nombre:"juan",
    apellido1:"jimenez",
    apellido2:"manuel",
    fechanacimiento:"30/02/20000",
    telefono:"821821219",
    email:"juan@gmail.com",
    cuentacorriente:"21882121e",
    edad:"beginer"
    }]



let boton=document.getElementById("boton");
let datos=document.getElementById("datos");

boton.addEventListener("click",function(){

if(validacion() && correo())
{
informacion();
relleno()
categoria()
}




})
   
init();
 function init(){relleno()}

function informacion(){
    let nif=document.getElementById("nif").value;
    let nombre=document.getElementById("nombre").value;
    let apellido1=document.getElementById("apellido1").value;
    let apellido2=document.getElementById("apellido2").value;
    let fechanacimiento=document.getElementById("fechanacimiento").value;
    let telefono=document.getElementById("telefono").value;
    let email=document.getElementById("email").value;
    let cuentacorriente=document.getElementById("cuentacorriente").value;
    let edad=document.getElementById("edad").value
    let jugador={
    
        "nif":nif,
        "nombre":nombre,
        "apellido1":apellido1,
        "apellido2":apellido2,
        "fechanacimiento":fechanacimiento,
        "telefono":telefono,
        "email":email,
        "cuentacorriente":cuentacorriente,
        "edad":edad
    
    }
    
    
    listajugador.push(jugador);
    
    }

function  relleno(){
    datos.innerHTML="";
    for( let jugador1 of listajugador){
        
       datos.innerHTML+= `
    <td>
    <th>${jugador1.nif}</th>
    <th>${jugador1.nombre}</th>
    <th>${jugador1.apellido1}</th>
    <th>${jugador1.apellido2}</th>
    <th>${jugador1.fechanacimiento}</th>
    <th>${jugador1.telefono}</th>
    <th>${jugador1.email}</th>
    <th>${jugador1.cuentacorriente}</th>
    <th>${jugador1.edad}</th>



    </td

    
`




    }







}

function validacion(){




    let nif=document.getElementById("nif").value;
    let nombre=document.getElementById("nombre").value;
    let apellido1=document.getElementById("apellido1").value;
    let apellido2=document.getElementById("apellido2").value;
    let fechanacimiento=document.getElementById("fechanacimiento").value;
    let telefono=document.getElementById("telefono").value;
    let email=document.getElementById("email").value;
    let cuentacorriente=document.getElementById("cuentacorriente").value;
    let edad=document.getElementById("edad").value


    if(nif=="" || nombre=="" || apellido1=="" || apellido2=="" || fechanacimiento==""  
|| telefono==" " || email=="" || cuentacorriente==""    ||edad==""    ){
alert("debes rellenar todo el formulario")
return false
}

else {return true}


}


function correo(){
    let email=document.getElementById("email").value;

if(email.indexOf("@")!=-1){

let partesdelcorreo=email.split("@");
let usuario=partesdelcorreo[0];
let dominio=partesdelcorreo[1];

if(!dominio.endsWith(".es") && !dominio.endsWith(".com")){return false}




}

else{
alert("falta la arroba")

}
return true

}




let cat=document.getElementById("cat")

function categoria(){
    let edad=document.getElementById("edad").value
if(edad>=18){
cat.innerHTML="eres profesional"
    
} else{
    cat.innerHTML="eres begginer"
}

}


function fecha(){}

})