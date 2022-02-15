// al seleccionar un mes informar.
// si estamos en Invierno: "Abrigate que hace frio."
// si aún no llego el Invierno: "Falta para el invierno."
// si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
// ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 15/02/2022
ejercicio: Instruccion-SWITCH  Ejercicio 2
info: Seleccionar un mes y determinar un enunciado.
------------------------------------- */

function mostrar(){
	var mesDelYear;
	var mesDelYear= document.getElementById('txtIdMes').value;
	
	switch(mesDelYear){
		case 'Enero':
		case 'Febrero':
		case 'Marzo':
		case 'Junio':
		case 'Mayo':
		case 'Junio':
			alert(" \"Falta para el invierno.\" ");
		break;
		
		case 'Julio':
		case 'Agosto':
			alert("Abrigrate que hace frio!!!");
		break;

		default:
			alert("Ya pasamos el frio, ahora calor!!!");
		break;
	}
}