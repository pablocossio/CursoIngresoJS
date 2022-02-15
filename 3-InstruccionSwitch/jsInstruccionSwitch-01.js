// al seleccionar un mes informar.
// si es Enero: "que comiences bien el año!!!."
// si es Marzo: "a clases!!!."
// si es Julio: "se vienen las vacaciones!!!."
// si es Diciembre: "Felices fiesta!!!."

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 8/02/2022
ejercicio: Instruccion-SWITCH  Ejercicio 1
info: Seleccionar un mes y determinar un enunciado.
------------------------------------- */

function mostrar()
{	
	var mesAño;
	var mesAño= document.getElementById('txtIdMes').value;
	
	switch(mesAño){
		case 'Enero':
			alert(" \"Que comiences bien el año!!!\" ");
		break;
		case 'Marzo':
			alert(" \"a clases!!!\" ");
		break;
		case 'Julio':
			alert(" \"se vienen las vcaciones!!!\" ");
		break;
		case 'Diciembre':
			alert(" \"Felices fiestas!!!\" ");
		break;
		default:
			alert("Nada aún");
		break;
	}
}
