// Al ingresar una edad solo debemos informar si la persona NO es adolescente.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 8/02/2022
ejercicio: Instruccion-IF  Ejercicio 5
info: Ingresar una edad y determinar que no es adolescente.
------------------------------------- */

function mostrar(){
	// segun google: entre 10 a 19 - adolecencia
	var userAge;
	userAge= document.getElementById('txtIdEdad').value;
	userAge= parseInt(userAge);

	if(userAge > 18){
		alert('No es adolecente');
	}
}
