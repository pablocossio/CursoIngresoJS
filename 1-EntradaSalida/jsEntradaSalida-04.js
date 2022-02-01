/* 
	Debemos lograr tomar un dato por 'PROMPT' y lo muestro por 'ID' al presionar el botón 'mostrar' 
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 1/01/2022
	info: Archivo js en donde se ejecuta un prompt para ingresar un valor al oprimir el botón mostrar y mostrarlo en el input.
*/
	function mostrar()
{
	var nombreUsuario;
	console.log("antes del dato");
	nombreUsuario= prompt("Ingrese un valor :");
	console.log("déspues del dato");
	document.getElementById('txtIdNombre').value= nombreUsuario;

}

