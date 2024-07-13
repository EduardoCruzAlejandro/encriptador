/*
Llaves
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

//creamos variables de encriptado
let mensajeEncrip=[];
let mensaje;
let mensajeDescifrado;

//funcion para encriptar texto
function encriptarMensaje(){
    mensaje =document.getElementById('msn').value; //capturamos el texto

    if(mensaje !=''){ //evaluamos si hay un texto para encriptar

        if(exclusion(mensaje)){ //si el mensaje solo es en minusculas y sin caracteres entonces sigue

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
                
            }
            mensajeDescifrado= mensajeEncrip.join(''); //convertimos el array sin comas
            asignarTextoElemento('#msnmod',mensajeDescifrado); //llamos a una funcion para imprimir el texto resultante
            document.getElementById('imagen').style.display= "none"; //ocultar la imagen
            document.getElementById('parrafo').style.display= "none"; //ocultar los subtitulo
            document.getElementById('copy').style.display = 'flex'; // Mostrar el botón de copy

        }

        else{//sino, espera a que sea correcto
            alert('Por favor, solo minusculas, sin acentos y caracteres especiales');
        }
    
    }

    else{ //si no lo hay, mandamos un alert
        alert("Por favor, ingrese un mensaje"); 
    }
}

//funcion para desencriptar mensaje de texto
function desencriptarMensaje(){
   
    mensaje=document.getElementById('msn').value; //capturar texto

    if(mensaje !=''){//comparar si hay texto
    
        if(exclusion(mensaje)){ //si el mensaje solo es en minusculas y sin caracteres entonces sigue

            mensajeDescifrado = descifrarMensaje(mensaje); //llamamos a la funcion para descifrar el mensaje

            function descifrarMensaje(mensaje) {
                mensajeDescifrado =mensaje.replace(/enter/g, "e") //usamos replace para reemplazar las llaves encriptadas a las silabas correspondietntes
                                                        .replace(/imes/g, "i")
                                                        .replace(/ai/g, "a")
                                                        .replace(/ober/g, "o")
                                                        .replace(/ufat/g, "u");
                return mensajeDescifrado; //regresamos el mensaje descifrado
            }


            document.getElementById('imagen').style.display= "none"; //ocultar imagen
            document.getElementById('parrafo').style.display= "none";//ocultar display
            document.getElementById('copy').style.display = 'flex'; // Mostrar el botón
            asignarTextoElemento('#msnmod',mensajeDescifrado); //llamos a una funcion para imprimir el texto resultante
        }

        else{//sino, espera a que sea correcto
            alert('Por favor, solo minusculas, sin acentos y caracteres especiales');
        }
    }

    else{ //si no lo hay, mandamos un alert
        alert("Por favor, ingrese un mensaje"); 
    }
}

//funcion para asignar textos
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //seleccionamos el elemento donde ira el texto
    elementoHTML.innerHTML = texto; //se imprime el texto en elemento seleccionado
    return; //regresamos el resultado
}
//funcion copiar del boton copy
function copiar() { 
    let text=mensajeDescifrado; //camputaramos el mensaje final 
    navigator.clipboard.writeText(text).then(() => {  //usamos el API clipboard y usamos una promise 
        alert('Texto copiado al portapapeles'); //mandamos un alert que se ha copiado en el porta papeles
    })
}

//funcion para excluir mayusculas, acentos y caracteres
function exclusion(mensaje){
    mensaje=document.getElementById('msn').value; //capturar texto
    let excluir = /^[a-z]+$/; //inidicamos el margen de a-z en minusculas sin caracteres
    //regresamos la evalucion en un true si el mensaje solo es en minusculas sin caracteres especiales y falsa si hay mayusculas y/o caracteres especiales
    return excluir.test(mensaje); 

}