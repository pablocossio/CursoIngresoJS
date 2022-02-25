// al presionar el botón mostrar 10 repeticiones
// con números ASCENDENTE, desde el 1 al 10.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 17/02/2022
ejercicio: Instruccion- WHILE  Ejercicio 1
info: determinar un enunciado.
------------------------------------- */

function mostrar(){
	var contador;
	var message= "";
	contador= 1;

	while(contador<11){
		message+= contador+' ';
		contador++;
	}
	document.getElementById('resultado').innerHTML= message;
}

 FUNCIÓN
