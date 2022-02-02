/*
	Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados  ej: "Usted se llama José y tiene 66 años" 	
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 1/01/2022
	info: Archivo js en donde se ejecuta pedir nombre y edad y concatenar los los valores en una varaible y mostrar por alert.
*/

function mostrar()
{	
	var nombre;
	var edad;
	var resultado;
	nombre= txtIdNombre.value;
	edad= txtIdEdad.value;
	resultado= "Usted se llama " + nombre + " y tiene " + edad + " años.";
	alert(resultado);
}
