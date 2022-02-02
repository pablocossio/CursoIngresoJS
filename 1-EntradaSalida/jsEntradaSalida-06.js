/*
	Debemos lograr tomar Los numeros por ID, transformarlos a enteros (parseInt) y Sumarlos. mostrar el resulto por medio de "ALERT"
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 2/01/2022
	info: Archivo js en donde se ejecuta pedir un numero y otro numero uy sumarlos usando parseInt.
	ejercicio: ejercicio-06
*/

function sumar()
{
	var numero_uno; 
	var numero_dos; 
	var resultado;

	numero_uno= document.getElementById("txtIdNumeroUno").value;
	numero_dos= document.getElementById("txtIdNumeroDos").value;

	// numero_uno= txtIdNumeroUno.value;
	// numero_dos= txtIdNumeroDos.value;

	resultado= parseInt(numero_uno) + parseInt(numero_dos);
	alert(resultado);
}
