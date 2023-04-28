//Obtencion de variables, acepto y encriptacion por replace
const texto = document.getElementById('txtArea');
const imagen = document.getElementById('imagen');
const resultado = document.getElementById('resultado');
const copiar = document.getElementById('copiar');
const error = document.getElementById('error');
const acentos = /[ÁÉÍÓÚÜÑáéíóúüñ]/;
const encriptacion = texto => {
    return texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}
const desencriptacion = texto => {
    return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}

//Funcion encriptar
function encriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = encriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
    }    
}
//Funcion desencriptar
function desencriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = desencriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
    }    
}
//boton copiar
copiar.addEventListener('click', ()=>{
    navigator.clipboard.writeText( textoFinal );
})