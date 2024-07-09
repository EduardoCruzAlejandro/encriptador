/*
Llaves
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


//creamos variables de encriptado
//let mensaje= prompt("Escriba el mensaje");
let mensajeEncrip=[];
let mensaje;
let mensajeDescifrado;

//funcion para encriptar texto
function encriptarMensaje(){
    
    mensaje =document.getElementById('msn').value; //capturamos el texto
    if(mensaje !=''){ //evaluamos si hay un texto para encriptar

        for (let j = 0; j <= mensaje.length; j++) {  //remplazamos las llaves mediante comparacion
            if(mensaje[j]=="a"){
                mensajeEncrip[j]="ai";
            }
            else if(mensaje[j]=="e"){
                mensajeEncrip[j]="enter";
            }
            else if(mensaje[j]=="i"){
                mensajeEncrip[j]="imes";
            }
            else if(mensaje[j]=="o"){
                mensajeEncrip[j]="ober";
            }
            else if(mensaje[j]=="u"){
                mensajeEncrip[j]="ufat";
            }
            else{
                mensajeEncrip[j]=mensaje[j];
            }
            //console.log(mensaje[j]);
        }
        mensajeDescifrado= mensajeEncrip.join(''); //imprimimos el array sin comas
        asignarTextoElemento('#msnmod',mensajeDescifrado); //llamos a funcion parar imprimir el texto resultante
        document.getElementById('imagen').style.display= "none"; //ocultar imagen
        document.getElementById('parrafo').style.display= "none"; //ocultar subtitulo
        document.getElementById('copy').style.display = 'flex'; // Mostrar el botón de copy
    }

    else{ //si no lo hay, mandamos un alert
        alert("Por favor, ingrese el mensaje"); 
    }
}

//funcion para desencriptar mensaje de texto
function desencriptarMensaje(){
    mensaje=document.getElementById('msn').value; //capturar texto
    if(mensaje !=''){

        mensajeDescifrado = descifrarMensaje(mensaje);

        function descifrarMensaje(mensaje) {
            mensajeDescifrado =mensaje.replace(/enter/g, "e")
                                                    .replace(/imes/g, "i")
                                                    .replace(/ai/g, "a")
                                                    .replace(/ober/g, "o")
                                                    .replace(/ufat/g, "u");
            return mensajeDescifrado;
        }
        document.getElementById('imagen').style.display= "none";
        document.getElementById('parrafo').style.display= "none";
        document.getElementById('copy').style.display = 'flex'; // Mostrar el botón
        asignarTextoElemento('#msnmod',mensajeDescifrado);

    }
    else{ //si no lo hay, mandamos un alert
        alert("Por favor, ingrese el mensaje"); 
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function copiar() {
    let text=mensajeDescifrado;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    })
    
}
