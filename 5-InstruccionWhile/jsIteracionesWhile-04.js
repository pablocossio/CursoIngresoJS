// al presionar el botón pedir un número entre 0 y 9 inclusive.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 18/02/2022
ejercicio: Instruccion- WHILE  Ejercicio 4
info: determinar un enunciado.
------------------------------------- */

function mostrar(){
var numeroIngresado;
// var showResult;

numeroIngresado = prompt("ingrese un número entre 0 y 9.");
numeroIngresado= parseInt(numeroIngresado);

while(numeroIngresado > 0 || numeroIngresado < 10){
	document.getElementById('txtIdNumero').value= "El numero es:  "+numeroIngresado;
	contador++;
}
}
