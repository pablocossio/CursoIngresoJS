/* Al presionar el botón pedir  números
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 21/02/2022
ejercicio: Instruccion- WHILE  Ejercicio 10
info: determinar un enunciado.
------------------------------------- */

function mostrar(){
	var contador;
	var valorIngresado;
	var diferenciaPositivo;
	var sumaPositivos;
	var cantidadPositivos;
	var promedioPositivo;
	var cantidadPares;

	var diferenciaNegativo;
	var sumaNegativos;
	var cantidadNegativos;
	var promedioNegativo;
	var cantidadCeros;
	var respuesta= "si";

	contador= 0;
	valorIngresado= 0;

	diferenciaPositivo= "Positivo";
	sumaPositivos= 0;
	cantidadPositivos= 0;
	promedioPositivo= 0;
	cantidadPares= 0;

	diferenciaNegativo= "Negativo";
	sumaNegativos= 0;
	cantidadNegativos= 0;
	promedioNegativo= 0;
	cantidadCeros= 0;

	while(respuesta == "si"){
	valorIngresado= prompt("Ingrese un valor en la posición: "+contador);
	valorIngresado= parseInt(valorIngresado);
	if(valorIngresado > 0){
		sumaPositivos= valorIngresado + sumaPositivos;
		cantidadPositivos= cantidadPositivos + 1;
	}
	else if(valorIngresado % 2 == 0){
		cantidadPares= cantidadPares + 1;
	}
	if(valorIngresado < 0){
		sumaNegativos= valorIngresado + sumaNegativos;
		cantidadNegativos= cantidadNegativos + 1;
	}
	else if(valorIngresado == 0){
		cantidadCeros= cantidadCeros + 1;
	}
		respuesta= prompt("Quiere seguir ingresando valor - si");
		contador++;
	}
	promedioNegativo= sumaNegativos/contador;
	promedioPositivo= sumaPositivos/contador;

	document.write(diferenciaPositivo+"<br>");
	document.write("la suma de positivos es : "+sumaPositivos+"<br>");
	document.write("la cantidad de positivos es : "+cantidadPositivos+"<br>");
	document.write("La cantidad de promedio Positivo es: " +promedioPositivo+"<br>");
	document.write("La cantidad de pares es: " +cantidadPares+"<br>");
	document.write("<br>");
	document.write(diferenciaNegativo+"<br>");
	document.write("la suma de negativos es : "+sumaNegativos+"<br>");
	document.write("la cantidad de negativos es : "+cantidadNegativos+"<br>");
	document.write("La cantidad de promedio negativo es: " +promedioNegativo+"<br>");
	document.write("La cantidad de ceros es: " +cantidadCeros+"<br>");

}
