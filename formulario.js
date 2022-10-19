function habilitarBtn(){

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let contador = 0;
    

    if (nombre == ""){
        contador++;
    }

    if (correo == ""){
        contador++;
    }
    if (telefono == ""){
        contador++;
    }
    if (asunto == ""){
        contador++;
    }
    if (mensaje == ""){
        contador++;
    }

    if(contador==0){
        document.getElementById("enviar").disabled = false;
    } else{
        document.getElementById("enviar").disabled = true;
    }

}

/*function limpiarFormulario(){
    nombre = "";
    correo = "";
    telefono = "";
    asunto = "";
    mensaje = "";
}*/

document.getElementById("nombre").addEventListener("keyup", habilitarBtn);
document.getElementById("correo").addEventListener("keyup", habilitarBtn);
document.getElementById("telefono").addEventListener("keyup", habilitarBtn);
document.getElementById("asunto").addEventListener("keyup", habilitarBtn);
document.getElementById("mensaje").addEventListener("keyup", habilitarBtn);


