// Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
// pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 8/02/2022
ejercicio: Instruccion-IF  Ejercicio 8
info: Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: Es soltero y no es menor
------------------------------------- */

function mostrar(){
	var userAge;
	var conditionCivil;

	userAge= document.getElementById('txtIdEdad').value;
	conditionCivil= document.getElementById('estadoCivil').value;
	
	userAge= parseInt(userAge);

	if(userAge < 18 && conditionCivil !='Soltero'){
		alert("");
	}
	else{
		if(userAge > 17 && conditionCivil == 'Soltero'){
			alert("Es soltero y no es menor");
		}
	}
}
