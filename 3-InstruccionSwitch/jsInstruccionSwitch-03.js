// al seleccionar un mes informar.
// si es Febrero: " Este mes no tiene más de 29 días."
// si NO es Febrero: "Este mes tiene 30 o más días"

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 15/02/2022
ejercicio: Instruccion-SWITCH  Ejercicio 3
info: Seleccionar un mes y determinar un enunciado.
------------------------------------- */

function mostrar(){
	var mesDelYear;
	mesDelYear= document.getElementById('txtIdMes').value;

	// 28 - meses1
	// 30 - meses 4
	// 31 - meses 7

	switch(mesDelYear){
		case 'Febrero':
			alert(" \"Este mes no tiene más de 29 días.\" ");
		break;

		case 'Abril':
		case 'Junio':
		case 'septiembre':
		case 'Noviembre':
			alert(" \"Este mes tiene 30 días.\" ");
		break;

		case 'Enero':
		case 'Marzo':
		case 'Mayo':
		case 'Julio':
		case 'Agosto':
		case 'Octubre':
		case 'Diciembre':
			alert(" \"Este mes tiene más de 31 días.\" ");
		break;
	}
}
