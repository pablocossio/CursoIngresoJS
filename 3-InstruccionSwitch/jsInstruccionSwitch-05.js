// Al ingresar una hora, informar:
// si está entre las 7 y las 11 : "Es de mañana.".

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 16/02/2022
ejercicio: Instruccion-SWITCH  Ejercicio 5
info: Seleccionar un mes y determinar un enunciado.
------------------------------------- */

function mostrar(){
	var horaDelDia= document.getElementById('txtIdHora').value;

	switch(horaDelDia){
			case "7":
				alert(horaDelDia+" AM - de la mañana");
			break;
			case "8":
				alert(horaDelDia+" AM - de la mañana");
			break;
			case "9":
				alert(horaDelDia+" AM - de la mañana");
			break;
			case "10":
				alert(horaDelDia+" AM - de la mañana");
			break;
			case "11":
				alert(horaDelDia+" AM - de la mañana");
			break;
			default:
				alert(horaDelDia+" No es la mañana");
			break;
	}
}
