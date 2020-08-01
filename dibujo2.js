// Llamando al canvas y definiendo el tipo de dibujo (2d)
var p = document.getElementById("papel");
var areadedibujo = p.getContext("2d");
var color;

//Definimos todas las funciones


//- Funcion que hace una linea - draw a line
function linea(color, x0, y0, xf, yf)
{
//Obtener pendiente de la recta
  var m = (yf-y0)/(xf-x0);
//interseccion con el eje y
  var b = y0 - m*x0;
  var longitud_linea = Math.sqrt( (xf-x0)*(xf-x0) + (yf-y0)*(yf-y0)  );
  var posx = x0
  var posy = y0
  var longitudrecorrida = 0;
  var aumento_por_ciclo = 5

        while (longitudrecorrida<longitud_linea)

        {
          console.log(posx);
          posy = m * posx + b
          circulo("blue", posx, posy, 10)
          posx = posx + aumento_por_ciclo
          longitudrecorrida = longitudrecorrida + aumento_por_ciclo
        }

}

function circulo(color, x, y, rGrados)
//Funcion que dibuja un circulo - function that draw a circle
{
// Grados a radianes - degrees to radians
  var angulo_final = 360
  var angulo_partida = 0
  var rRadianes = (Math.PI / 180) * rGrados;
  var rRadianes = (Math.PI / 180) * angulo_partida;
  var rRadianes = (Math.PI / 180) * angulo_final;
// Dibujar circulo - Draw circle
  areadedibujo.beginPath();
  areadedibujo.strokeStyle = color;
  areadedibujo.arc(x, y, rGrados, angulo_partida, angulo_final);
  areadedibujo.stroke();
  areadedibujo.closePath();
}



linea("blue", 0, 20, 300, 20)
console.log("fin")
