// Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 9/02/2022
ejercicio: Instruccion-IF  Ejercicio 10
info: Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.
------------------------------------- */

function mostrar(){
	var start;
	var end;
	var result;

	start= 1;
	end= 10;
	result= start + Math.floor(Math.random( ) * end);

	alert(result+" - Numero aleatorio");
}
