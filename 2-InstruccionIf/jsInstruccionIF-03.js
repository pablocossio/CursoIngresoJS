// Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 8/02/2022
ejercicio: Instruccion-IF  Ejercicio 3
info: Ingresar una edad y mostrar si es menor.
------------------------------------- */

function mostrar(){
	var userAge;

	userAge= document.getElementById('txtIdEdad').value;
	userAge= parseInt(userAge);
	
	if(userAge < 18){
		alert("Eres menor de edad");
	}
	else if(userAge > 17){
		alert("Eres mayor de edad");
	}
}
