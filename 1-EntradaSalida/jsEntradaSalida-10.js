/*
	Debemos lograr tomar el importe por ID. Transformarlo a entero (parseInt), luego mostrar el importe con un Descuento del 25 % en el cuadro de texto "RESULTADO"
	-------------------------------------
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 3/01/2022
	info: Ingrese un importe y determine aplicando un 25%.
	ejercicio: ejercicio-10
	-------------------------------------
*/


// El tanto por ciento (A %) de cualquier cantidad (C) se calcula multiplicando esa cantidad C por el número A del porcentaje,
//  y dividiendo el resultado por 100. (A% de C = C*A/100).
// (25 * userImporte) / 100


function mostrarAumento(){
	var userImporte;
	var resultTotal;

	userImporte= document.getElementById('txtIdImporte').value;
	userImporte= parseInt(userImporte);
	
	resultTotal= "El descuento con 25% -  "+(25 * userImporte) / 100;
	document.getElementById('txtIdResultado').value= resultTotal;
}
