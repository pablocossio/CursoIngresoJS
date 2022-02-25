/* al presionar el botón pedir la CLAVE (ayuda: es utn750) */

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 24/02/2022
ejercicio: Instruccion- WHILE  Ejercicio 3
info: determinar un enunciado.
------------------------------------- */

function mostrar(){
	var claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada != 'utn750'){
		claveIngresada = prompt("ingrese la clave.");
		if(claveIngresada == 'utn750'){
			alert("Password success - WELCOME");
		}
		else{
			alert("No, Is not correct");
		}
	}
}
