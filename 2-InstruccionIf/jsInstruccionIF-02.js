// Al ingresar una edad debemos informar solo si la persona es mayor de edad

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 8/02/2022
ejercicio: Instruccion-IF  Ejercicio 2
info: Ingresar una edad y mostrar si es mayor de edad.
------------------------------------- */

function mostrar()
{
	//  (age > 18)
	userAge= document.getElementById('txtIdEdad').value;
	userAge= parseInt(userAge);

	if (userAge > 17){
		alert(userAge +" Es mayor de edad");
	}
	

}