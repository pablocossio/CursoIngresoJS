// Al presionar el botón pedir  números  hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 22/02/2022
ejercicio: Instruccion- WHILE  Ejercicio 7
info: determinar un enunciado.
------------------------------------- */

// usar el respuesta == si
function mostrar(){
	var respuesta;
	var numeros;
	var contador= 0;
	var sumaTotal;
	var promedioTotal;

	acumuladorN= 0;
	contador= 0;
	numeros= 0;
	sumaTotal= 0;
	promedioTotal= 0;
	respuesta= "si"

	while(respuesta == "si"){
		numeros= prompt("Ingrese un numero: ");
		numeros= parseInt(numeros);
		sumaTotal= sumaTotal+numeros;

		respuesta= prompt("Quiere continuar, ingrese - si ");
		contador++;
	}
	promedioTotal= sumaTotal/contador;

	console.log(sumaTotal);
	console.log(promedioTotal);

	document.getElementById('txtIdSuma').value= "Suma total: "+sumaTotal;
	document.getElementById('txtIdPromedio').value= "promedioTotal: "+promedioTotal;
}
