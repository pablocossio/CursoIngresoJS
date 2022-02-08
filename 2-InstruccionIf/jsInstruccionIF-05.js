// Al ingresar una edad solo debemos informar si la persona NO es adolescente.

// segun google: entre 10 a 19 - adolecencia

function mostrar(){
	var userAge;
	userAge= document.getElementById('txtIdEdad').value;
	userAge= parseInt(userAge);

	if(userAge > 18){
		alert('No es adolecente');
	}
}
