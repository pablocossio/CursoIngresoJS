/*
	Debemos lograr tomar Los numeros por ID ,transformarlos a enteros (parseInt),realizar la operación correcta y mostrar el resto entre el dividendo y el divisor. ej.: "El resto es 0 ."
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 2/01/2022
	info: Archivo js en donde se ejecuta pedir un numero y otro numero y poder obtener solo el residuo.
	ejercicio: ejercicio-08

*/

function SacarResto(){
	var dividendoNumber;
	var divisorNumber;
	var resultResto;

	dividendoNumber= document.getElementById('txtIdNumeroDividendo').value;
	divisorNumber= document.getElementById('txtIdNumeroDivisor').value;

	dividendoNumber= parseInt(dividendoNumber);
	divisorNumber= parseInt(divisorNumber);

	// Otro ejemplo - Other Example
	// resultResto= parseInt(divisorNumber) % parseInt(dividendoNumber);

	resultResto= (dividendoNumber % divisorNumber);
	alert(resultResto);
}
