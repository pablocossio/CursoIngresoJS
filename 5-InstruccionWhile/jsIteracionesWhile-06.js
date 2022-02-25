// Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 18/02/2022
ejercicio: Instruccion- WHILE  Ejercicio 6
info: determinar un enunciado.
------------------------------------- */

function mostrar(){
	var numeroIngresado;
	var suma;
	var promedio;
	var contador;
	var sumaTotal;
	var prmedioTotal;

	contador= 0;
	suma= 0;
	premedio= 0;

	while(contador < 5){
		numeroIngresado= prompt("Ingrese un numero:  ");
		numeroIngresado= parseInt(numeroIngresado);
		suma= suma + numeroIngresado;
		contador++;
	}
	promedio= suma/5;

	document.getElementById('txtIdSuma').value= "Suma total:  "+suma;
	document.getElementById('txtIdPromedio').value= "Promedio total:  "+promedio;
}
