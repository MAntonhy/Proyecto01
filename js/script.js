

function encriptar(){
    let texto = document.getElementById("txtarea").value.toLowerCase();
    let = textoEncriptado = texto.replace(/e/img, "enter");
    let = textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    let = textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    let = textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    let = textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    
    document.getElementById("imagen").style.display = "none";
    document.getElementById("mensajeEncriptado").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("textResultado").innerHTML = textoEncriptado;
    
}

function desencriptar(){
    let texto = document.getElementById("txtarea").value.toLowerCase();
    let = textoDesencriptado = texto.replace(/ufat/img, "u");
    let = textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    let = textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    let = textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    let = textoDesencriptado = textoDesencriptado.replace(/enter/img, "e");

    document.getElementById("textResultado").innerHTML = textoDesencriptado;
    

}
    function copiar() {
        let textoCopiado = document.querySelector("#textResultado");
        textoCopiado.select();
        document.execCommand("copy");
      }
      
      document.querySelector("#textResultado").addEventListener("click", copy);

function limpiar(){
    document.getElementById("txtarea").value = "";
    document.getElementById("textResultado").value = "";
    
}

