// Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 20/02/2022
ejercicio: Instruccion- WHILE  Ejercicio 8
info: determinar un enunciado.
------------------------------------- */

function mostrar(){
	var contador;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numerosN;
	var numeroIngresado;
	var respuesta;

	contador= 0;
	sumaPositivos= 0;
	numeroIngresado= 0;
	numerosN= 0;
	multiplicacionNegativos= (-1);
	respuesta= "si";

	while(respuesta == "si"){
		numeroIngresado= prompt("Ingrese un numero en la posición: "+contador);
		numeroIngresado= parseInt(numeroIngresado);
		if(numeroIngresado < 0){
			multiplicacionNegativos= multiplicacionNegativos*numeroIngresado;
		}
		else{
			sumaPositivos= sumaPositivos+numeroIngresado;
		}
		respuesta= prompt("Quiere seguir ingresando un valor - si");
		contador++;
	}

	document.getElementById('txtIdSuma').value= "Suma de positivos: "+sumaPositivos;
	document.getElementById('txtIdProducto').value= "Multiplicación de negativos: "+multiplicacionNegativos;
}
