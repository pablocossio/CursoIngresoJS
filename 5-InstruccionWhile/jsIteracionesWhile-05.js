// Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 18/02/2022
ejercicio: Instruccion- WHILE  Ejercicio 5
info: determinar un enunciado.
------------------------------------- */

function mostrar(){
	var sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado){ // cuando la condition sea 0 se pondra false, se convierte en un bool.
		if(sexoIngresado == "m"){
			document.getElementById('txtIdSexo').value= "Eres Masculino -  "+sexoIngresado;
		}
		else if(sexoIngresado == "f"){
			document.getElementById('txtIdSexo').value= "Eres Femenino -  "+sexoIngresado;
		}
		else{
			document.getElementById('txtIdSexo').value= "INCORRECTO";
		}
		sexoIngresado++;
	}
}
