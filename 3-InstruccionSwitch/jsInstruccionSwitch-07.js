// Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 16/02/2022
ejercicio: Instruccion-SWITCH  Ejercicio 7
info: Seleccionar un mes y determinar un enunciado.
------------------------------------- */

function mostrar(){
		// Norte: Cataratas
		// Sur: Ushuaia
		// Este: Bariloche
		// Oeste: Mar del plata

	var destinoIngresado =document.getElementById('txtIdDestino').value;

	switch(destinoIngresado){
		case "Bariloche":
			alert(destinoIngresado+" - Punto Cardinal: Este");
		break;
		case "Cataratas":
			alert(destinoIngresado+" - Punto Cardinal: Norte");
		break;
		case "Mar del plata":
			alert(destinoIngresado+" - Punto Cardinal: Oeste");
		break;
		case "Ushuaia":
			alert(destinoIngresado+" - Punto Cardinal: Sur");
		break;
	}
}
