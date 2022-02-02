/*
	Debemos lograr tomar Los numeros por ID, transformarlos a enteros (parseInt),realizar la operación correcta y mostrar el resulto por medio de "ALERT" ej.: "la Resta es 750"
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 2/01/2022
	info: Archivo js en donde se ejecuta pedir un numero y otro numero y poder seleccionar cualquiera de la arimética.
	ejercicio: ejercicio-07
*/ 

function sumar()
{	
	var sumaNumeroUno;
	var sumaNumeroDos;
	var resultSuma;

	sumaNumeroUno= document.getElementById("txtIdNumeroUno").value;
	sumaNumeroDos= document.getElementById("txtIdNumeroDos").value;

	resultSuma= parseInt(sumaNumeroUno) + parseInt(sumaNumeroDos);
	alert(resultSuma);
}


function restar()
{
	var restaNumeroUno;
	var restaNumeroDos;
	var resultResta;

	restaNumeroUno= document.getElementById("txtIdNumeroUno").value;
	restaNumeroDos= document.getElementById("txtIdNumeroDos").value;

	resultResta= parseInt(restaNumeroUno) - parseInt(restaNumeroDos);
	alert(resultResta);
}


function multiplicar()
{ 
	var multiplicarNumeroUno;
	var multiplicarNumeroDos;
	var resultMultiplicar;

	multiplicarNumeroUno= document.getElementById("txtIdNumeroUno").value;
	multiplicarNumeroDos= document.getElementById("txtIdNumeroDos").value;

	resultMultiplicar= parseInt(multiplicarNumeroUno) * parseInt(multiplicarNumeroDos);
	alert(resultMultiplicar);
}


function dividir()
{
	var dividirNumeroUno;
	var dividirNumeroDos;
	var resultDividir;

	dividirNumeroUno= document.getElementById("txtIdNumeroUno").value;
	dividirNumeroDos= document.getElementById("txtIdNumeroDos").value;

	resultDividir= parseInt(dividirNumeroUno) / parseInt(dividirNumeroDos);
	alert(resultDividir);
}

