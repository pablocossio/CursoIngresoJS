// Al presionar el botón pedir  números  hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 20/02/2022
ejercicio: Instruccion- WHILE  Ejercicio 9
info: determinar un enunciado.
------------------------------------- */

function mostrar(){
	var numeroIngresadoN;
	var valorIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var contador;
	var respuesta;

	numeroIngresadoN= 0;
	valorIngresado= 0;
	numeroMaximo= 0;
	numeroMinimo= 0;
	contador= 0;
	respuesta= "si";

	while(respuesta == "si"){
		valorIngresado= prompt("Ingrese un numero en la posición: "+contador);
		valorIngresado= parseInt(valorIngresado);
		if(valorIngresado > numeroMaximo){
			numeroMaximo= valorIngresado;
		}
		else{
			numeroMinimo= valorIngresado;
		}
		respuesta= prompt("Quiere seguir ingresando - si");
		contador++;
	}

	document.getElementById('txtIdMaximo').value= "Numero Maximo: "+numeroMaximo;
	document.getElementById('txtIdMinimo').value= "Numero Minimo: "+numeroMinimo;
}
