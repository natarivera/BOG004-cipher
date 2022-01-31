


const cipher = function (texto, desplazamiento) {
  let textoCifrado = "";
  for (var i = 0; i < texto.length; i++) {
    console.log("pos: " + i + " letra: " + texto[i] + " ascii: " + texto.charCodeAt(i));
    const iLetra = texto.charCodeAt(i);
    var oLetra = iLetra + desplazamiento;
    if (iLetra >= 65 && iLetra <= 90) {//Mayusculas            
      if (oLetra > 90) {
        oLetra = 65 + (oLetra - 90);
      }
      textoCifrado = textoCifrado + String.fromCharCode(oLetra);
    } else if (iLetra >= 97 && iLetra <= 122) {//Minusculas            
      if (oLetra > 122) {
        oLetra = 97 + (oLetra - 122);
      }
      textoCifrado = textoCifrado + String.fromCharCode(oLetra);

    } else if (iLetra >= 48 && iLetra <= 57) {//Numeros         
      if (oLetra > 57) {
        oLetra = 48 + (oLetra - 57);
      }
      textoCifrado = textoCifrado + String.fromCharCode(oLetra);

    } else if (iLetra >= 32 && iLetra <= 47) {//Caracteres especiales         
      if (oLetra > 47) {
        oLetra = 32 + (oLetra - 47);
      }
      textoCifrado = textoCifrado + String.fromCharCode(oLetra);

    } else if (iLetra >= 58 && iLetra <= 64) {//Caracteres especiales         
      if (oLetra > 64) {
        oLetra = 58 + (oLetra - 64);
      }
      textoCifrado = textoCifrado + String.fromCharCode(oLetra);
    }
    else { //Otros
      textoCifrado = textoCifrado + texto[i];
    }    
  }
  return textoCifrado;
};

export default cipher;
