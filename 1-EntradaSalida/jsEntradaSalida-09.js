/*
	Debemos lograr tomar el importe por ID, transformarlo a entero (parseInt), luego mostrar el importe con un aumento del 10 % en el cuadro de texto "RESULTADO".
	-------------------------------------
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 3/01/2022
	info: Ingresun un sueldo y determina aplicando un 10%.
	ejercicio: ejercicio-09
	-------------------------------------
*/


function mostrarAumento(){
	var sueldo;
	var resultado;
	var aumento;
	aumento= 1.1;
	
	sueldo= document.getElementById('txtIdSueldo').value;
	sueldo= parseInt(sueldo);

	resultado= sueldo * aumento;
	document.getElementById('txtIdResultado').value= resultado;
}
