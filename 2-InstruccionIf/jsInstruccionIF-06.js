// Al ingresar una edad debemos informar si la persona es:
// 	mayor de edad (mas de 18 años) o 
//  adolescente (entre 13 y 17 años) o 
//  niño (menor a 13 años).

function mostrar(){
	var userAge;

	userAge= document.getElementById('txtIdEdad').value;
	userAge= parseInt(userAge);

	if(userAge > 17){
		alert("Eres mayor de edad");
	}
	else{
		if(userAge > 12 && userAge < 18){
			alert("Eres adolecente");
		}
		else if(userAge < 13){
			alert("Eres menor de edad");
		}
	}
}
