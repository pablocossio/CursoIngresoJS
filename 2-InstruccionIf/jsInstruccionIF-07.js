// Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
// mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 8/02/2022
ejercicio: Instruccion-IF  Ejercicio 7
info: Ingresar una edad menor a 18 y un estado civil distinto a soltero, mostrar 'Es muy pequeño para NO ser soltero.'
------------------------------------- */

function mostrar(){
	var userAge;
	var conditionCivil;

	userAge= document.getElementById('txtIdEdad').value;
	conditionCivil= document.getElementById('estadoCivil').value;
	
	userAge= parseInt(userAge);

	if(userAge < 18 && conditionCivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero.");
	}
}
