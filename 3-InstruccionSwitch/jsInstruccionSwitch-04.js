// al seleccionar un mes informar.
// si tiene 28 días.
// si tiene 30 días.
// si tiene 31 días.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 16/02/2022
ejercicio: Instruccion-SWITCH  Ejercicio 3
info: Seleccionar un mes y determinar un enunciado.
------------------------------------- */

function mostrar()
{
	var meses;
	meses= document.getElementById('txtIdMes').value;

	switch(meses){
		case "Enero":
			alert("Tiene  31 días");
		break;
		case "Febrero":
			alert("tiene 28 días");
		break;
		case "Marzo":
			alert("tiene 31 días");
		break;
		case "Abril":
			alert("tiene 30 días");
		break;
		case "Mayo":
			alert("tiene 31 días");
		break;
		case "Junio":
			alert("tiene 30 días");
		break;
		case "Julio":
			alert("tiene 31 días");
		break;
		case "Agosto":
			alert("tiene 31 días");
		break;
		case "Septiembre":
			alert("tiene 30 días");
		break;
		case "Octubre":
			alert("tiene 31 días");
		break;
		case "Noviembre":
			alert("tiene 30 días");
		break;
		case "Diciembre":
			alert("tiene 31 días");
		break;
	}


}
