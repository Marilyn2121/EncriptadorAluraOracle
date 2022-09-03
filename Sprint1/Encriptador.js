//el .value es para obtener le valor y cambiarlo a otro

//document.designMode = "on";
var texto;


function EncriptarMensaje(){
  var encriptado ="";
  texto = document.getElementById("textoDigitado").value;
    console.log(texto);
    for(var x=0; x<texto.length;x++){
        var letra = texto[x];
            if(letra == "e"){
                encriptado +="enter";
            }
            else if(letra == "i"){
                encriptado +="imes";
            }
            else if(letra == "a"){
                encriptado +="ai";
            }
            else if(letra == "o"){
                encriptado +="ober";
            }
            else if(letra == "u"){
                encriptado +="ufat";
            }else{
                encriptado += letra;
            }

        } 
    document.getElementById("resultado").value = encriptado;
    EconderImagen();	
    }

    function DesEncriptarMensaje() {
          var desencadenar ="";
          texto = document.getElementById("textoDigitado").value;
          desencadenar = texto;
              /*  if(desencadenar.indexOf("enter") > -1){
                desencadenar = desencadenar.replace(/enter/g,"e");
              }
              if(desencadenar.indexOf("imes") > -1){
                desencadenar = texto.replace(/imes/g,"i");
              }
              if(desencadenar.indexOf("ai") > -1){
                desencadenar = texto.replace(/ai/g,"a");
              }
              if(desencadenar.indexOf("ufat") > -1){
                desencadenar = texto.replace(/ufat/g,"u");
              }
              if(desencadenar.indexOf("ober") > -1){
                desencadenar = desencadenar.replace(/ober/g,"o");
              }*/
            desencadenar = desencadenar.replace(/enter/g,"e");
            desencadenar = desencadenar.replace(/imes/g,"i");
            desencadenar = desencadenar.replace(/ai/g,"a");
              desencadenar = desencadenar.replace(/ober/g,"o");
              desencadenar = desencadenar.replace(/ufat/g,"u");

              // el //g es para cambiar todos los que sean igual a esa peticion es global todos los que matcheen los cambiara
              document.getElementById("resultado").value = desencadenar;
              EconderImagen();
    }

function CopiarPortapapeles() {

var contenido = document.getElementById("resultado");

contenido.select();
document.execCommand('copy');

alert("Copied!");
}



function EconderImagen(){
  var contenedorTexto = document.getElementById("resultado");
  if(contenedorTexto.value != ""){
    contenedorTexto.style.backgroundImage = `url(${""})`;
  }
}

function limpiar(){
  var contenedorTexto = document.getElementById("resultado");
  var contenedorTexto2 = document.getElementById("textoDigitado");
  contenedorTexto.value = "";
  contenedorTexto2.value = "";
  contenedorTexto.style.backgroundImage = `url(${"imagenes/buscar.png"})`;
}
