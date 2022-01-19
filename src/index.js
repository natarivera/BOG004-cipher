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

const iTexto = document.getElementById("Itexto");
const des = document.getElementById("quantity");
const cTexto = document.getElementById("Ctexto");

function cifrarTexto(){
    //Agarrar el desplazamiento
    const desplazamiento = parseInt(des.value);
    //Agarrrar el texto
    const texto = iTexto.value;
    let resultado = "";
    for(var i = 0; i < texto.length; i++){        
        console.log("pos: "+i+" letra: "+texto[i]+" ascii: "+texto.charCodeAt(i));
        const iLetra = texto.charCodeAt(i);
        var oLetra = iLetra + desplazamiento;
        if( iLetra>=65 && iLetra<=90 ){//Mayusculas            
            if(oLetra > 90){
                oLetra = 65 + (oLetra - 90);
            }
            resultado = resultado + String.fromCharCode(oLetra);
        } else if(iLetra>=97 && iLetra<=122){//Minusculas            
            if(oLetra > 122){

                oLetra = 97 + (oLetra - 122);
            }
            resultado = resultado + String.fromCharCode(oLetra);
        } else {//Otros
            resultado = resultado + texto[i];            
        }        
    }    
    //algoritmo

    
    //reemplazar el resultado en cTexto    
    cTexto.value = resultado;
}


iTexto.addEventListener("change", cifrarTexto);
des.addEventListener("change", cifrarTexto);






