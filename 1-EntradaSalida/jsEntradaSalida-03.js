/*
	Debemos lograr tomar un dato por 'ID' y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 1/01/2022
	info: Archivo js en donde se ejecuta un saludo.
*/

function mostrar()
{
	// var nombreIngresado;
	// Llamamos al id del input desde html a js, utilizando el objeto .value obtendremos el valor.
	// nombreIngresado= txtIdNombre.value;
	// alert(nombreIngresado);

	// other example
	var user_value;
	user_value= document.getElementById('txtIdNombre').value;
	alert(user_value);

}
