// Para que funcione el boton y la caja de texto
var texto = document.getElementById("texto_linea");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

// Llamando al canvas y definiendo el tipo de dibujo (2d)
var d = document.getElementById("dibujitoxd");
console.log(d)
var lienzo = d.getContext("2d");

// llamando al ancho y alto del Canvas
var ancho = dibujitoxd.width;
var alto = dibujitoxd.height;


function dibujoPorClick()
//Funcion que despliega el dibujo con las medidas del usuario
{
// Obteneniendo el número del usuario
 var NumUsuario = parseInt(texto.value)
 console.log(NumUsuario)
 //Haciendo el dibujoss
 // Contador para el for y Definir un numero limite de lineas
 var l = 0;
 var limitelinea = NumUsuario;
   for (l= 0; l < limitelinea; l++)
     {
       yi = (l) * (alto/limitelinea)
       xf = (l+1) * (ancho/limitelinea)
     linea("black", ancho, yi, xf,0)
     linea("black", 0, yi, xf, alto)
     linea("black", ancho, xf, ancho-xf, alto)
     linea("black", alto-yi, 0, 0, yi)
      }
}

// Cosas para que sea proporcional el dibujo sin importar las dimensiones del canvas
/*
  var limitelineax = (ancho/5);
  var limitelineay = (alto/5);
  var yi, xf;

if (limitelineax > limitelineay)
{
  limitlinea = limitelineax
} else {
          limitelinea = limitelineay
        }
*/


function linea(color, x0, y0, xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x0, y0);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}
