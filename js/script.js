function encriptar(){
    let texto = document.getElementById("txtArea");
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("mensajeParrafo");
    let imagen = document.getElementById("imagen");

    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/o/gi, "ober")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/u/gi, "ufat");

    if (texto.length !=0){
        texto = textoEncriptado;
        tituloMensaje.textContent = "Texto Encriptado con éxito"
        parrafo.textContent = "";
        
    }else{
        alert("Ingrese un mensaje a encriptar")
        }   
    }

