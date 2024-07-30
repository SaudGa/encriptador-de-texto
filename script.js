const caracteresPermitidos = "qwertyuiopasdfghjklñzxcvbnm!?:() ";
let valido = true;
let mensajeEncriptar = "";
let mensajeEncriptado = "";
let mensajeDesencriptado = "";
const remplazo1 = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};
const remplazo2 = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

function encriptar(){
    mensajeEncriptar = document.getElementById("textoaencriptar").value;

    for (let char of mensajeEncriptar) {
        if (!caracteresPermitidos.includes(char)) {
            valido = false;
            break;
        }
    }
   
    if (mensajeEncriptar == "" || !valido){
        alert("Texto invalido, recuerde que solo letras minúsculas y sin acentos");
        valido = true;
    } else {
        mensajeEncriptado = mensajeEncriptar.replace(/a|e|i|o|u/gi, match => remplazo1[match]);
        document.getElementById("mensaje_desencriptado").innerHTML = "<p id='mensaje'>"+ mensajeEncriptado + "</p>";
        document.getElementById("btnCopiar").style.display = "block";
        if (document.getElementById("btnCopiar").style.display == "block"){
            document.querySelector(".contenido_desencriptador").classList.add("contenido_desencriptador_js");
        }
    }
}

function desencriptar(){
    mensajeEncriptado = document.getElementById("textoaencriptar").value;

    for (let char of mensajeEncriptado) {
        if (!caracteresPermitidos.includes(char)) {
            valido = false;
            break;
        }
    }
   
    if (mensajeEncriptado == "" || !valido){
        alert("Texto invalido, recuerde que solo letras minúsculas y sin acentos");
        valido = true;
    } else {
        mensajeDesencriptado = mensajeEncriptado.replace(/ai|enter|imes|ober|ufat/gi, match => remplazo2[match]);
        document.getElementById("mensaje_desencriptado").innerHTML = "<p id='mensaje'>"+ mensajeDesencriptado + "</p>";
    }
}

function copiar(){
    let mensaje = document.getElementById('mensaje');
    navigator.clipboard.writeText(mensaje.textContent);
}