import cipher from './cipher.js';

console.log(cipher);

const viewone = document.getElementById('Cesar');
viewone.addEventListener("click", () => {
document.getElementById("root").style.display = "block"
document.getElementById("bienvenido").style.display = "none"
});

const inicio = document.getElementById('regreso');
inicio.addEventListener("click", () => {
document.getElementById("bienvenido").style.display = "block"
document.getElementById("root").style.display = "none"
});

const hecho= document.getElementById('cifrar');
hecho.addEventListener("click", cifrarTexto);

const deshecho= document.getElementById('descifrar');
deshecho.addEventListener("click", descifrarTexto);

const iTexto = document.getElementById("Itexto");
const des = document.getElementById("quantity");
const cTexto = document.getElementById("Ctexto");

function cifrarTexto(){
    //Agarrar el desplazamiento
    const desVal = parseInt(des.value);
    //Agarrrar el texto
    const texVal = iTexto.value;        
    //reemplazar el resultado en cTexto    
    cTexto.value = cipher.encode(desVal, texVal);

    }

    function descifrarTexto(){
        //Agarrar el desplazamiento
        const desVal = parseInt(des.value);
        //Agarrrar el texto
        const texVal = iTexto.value;        
        //reemplazar el resultado en cTexto    
        cTexto.value = cipher.decode(desVal, texVal);
    
        }
   