// Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 16/02/2022
ejercicio: Instruccion-SWITCH  Ejercicio 8
info: Seleccionar un mes y determinar un enunciado.
------------------------------------- */

function mostrar(){
	// Cataratas - calor
	// Ushuaia - frio
	// Bariloche - frio
	// Mar del plata - calor

	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado){
		case "Bariloche":
			alert(destinoIngresado+" - Frio");
		break;
		case "Cataratas":
			alert(destinoIngresado+" - Calor");
		break;
		case "Mar del plata":
			alert(destinoIngresado+" - Calor");
		break;
		case "Ushuaia":
			alert(destinoIngresado+" - Frio");
		break;
	}

}
