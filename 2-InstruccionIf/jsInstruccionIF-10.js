/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */
// Math.random() - ejecuta numeros alatorios segun su inicio y fin.

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 9/02/2022
ejercicio: Instruccion-IF  Ejercicio 10
info: Definir una variable usando el método Math.floor con el Math.random() para definir numeros aleatorios, y así poder determinar según el numero si la nota es: EXECELENTE, APROBO, un anímo de seguir.
------------------------------------- */

function mostrar(){ 
	var start;
	var end;
	var result;

	start= 1;
	end= 10;
	result= start + Math.floor(Math.random() * end);
	
	if(result > 8 && result < 11){
		alert(result+" : EXCELENTE");
	}
	else{
		if(result > 5){
			alert(result+" : APROBÓ");
		}
		else{
			alert(result+" : Vamos, La proxima se puede");
		}
	}
}
