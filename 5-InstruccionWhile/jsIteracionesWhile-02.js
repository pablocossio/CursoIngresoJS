// al presionar el botón mostrar 10 repeticiones
// con números DESCENDENTES, desde el 10 al 1.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 17/02/2022
ejercicio: Instruccion-WHILE  Ejercicio 3
info: determinar un enunciado.
------------------------------------- */

function mostrar(){
	var contador;
	var message= "";
	contador= 10;

	while(contador>0){
		message+= contador +' ';
		contador--;
	}
	document.getElementById('resultado').innerHTML= message;
}
