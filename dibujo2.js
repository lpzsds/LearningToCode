// Llamando al canvas y definiendo el tipo de dibujo (2d)
var p = document.getElementById("papel");
var areadedibujo = p.getContext("2d");





circulo("blue", 100, 100, 10)

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
