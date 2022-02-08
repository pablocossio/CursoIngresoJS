// Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 8/02/2022
ejercicio: Instruccion-IF  Ejercicio 4
info: Ingresar una edad y determinar entre 13 y 17 que es adolescente.
------------------------------------- */

function mostrar(){
	var userAdolecente;
	userAdolecente= document.getElementById('txtIdEdad').value;
	userAdolecente= parseInt(userAdolecente);

	if(userAdolecente > 12  && userAdolecente < 18){
		alert(userAdolecente +" Eres adolecente");
	}
	else{
		alert("No eres adolecente");
	}
}