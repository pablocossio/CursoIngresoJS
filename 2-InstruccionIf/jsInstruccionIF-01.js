// Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 8/02/2022
ejercicio: Instruccion-IF  Ejercicio 1
info: Ingresar una edad si es igual a 15 mostrar Niña bonita.
------------------------------------- */

function mostrar(){
	var userAge;
	userAge= document.getElementById('txtIdEdad').value;
	userAge= parseInt(userAge);

	if(userAge == 15){
		alert('Ñiña bonita');
	}
}
