// una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
// informar si "Se viaja" o "No se viaja" a ese lugar
// en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
// en Verano: Se viaja a Mar del plata y Cataratas solamente
// en Otoño: Se viaja a todos los destinos.
// primavera: solo no se viaja a Bariloche

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 17/02/2022
ejercicio: Instruccion-SWITCH  Ejercicio 10
info: Seleccione y determinar un enunciado.
------------------------------------- */

function mostrar(){
	var estacionYear= document.getElementById('txtIdEstacion').value;
	var destinoSelect= document.getElementById('txtIdDestino').value;

	switch(estacionYear){
		case "Invierno":
			switch(destinoSelect){
				case "Bariloche":
					alert("Se viaja a  -  "+destinoSelect);
				break;
				default:
					alert("No se viaja.");
				break;
			}
		break;

		case "Verano":
			switch(destinoSelect){
				case "Mar del plata":
					alert("Se viaja  -  "+destinoSelect);
				break;
				case "Cataratas":
					alert("Se viaja  -  "+destinoSelect);
				break;
				default:
					alert("No se viaja");
				break;
			}
		break;

		case "Otoño":
			switch(destinoSelect){
				case "Bariloche":
					alert("Se viaja  -  "+destinoSelect);
				break;
				case "Cataratas":
					alert("Se viaja  -  "+destinoSelect);
				break;
				case "Mar del plata":
					alert("Se viaja  -  "+destinoSelect);
				break;
				case "Cordoba":
					alert("Se viaja  -  "+destinoSelect);
				break;
			}
		break;

		case "Primavera":
		switch(destinoSelect){
			case "Bariloche":
				alert("Se viaja  -  "+destinoSelect);
			break;
			case "Cataratas":
				alert("No se viaja");
			break;
			case "Mar del plata":
				alert("No se viaja");
			break;
			case "Cordoba":
				alert("No se viaja");
			break;
		}
		break;
	}
}
