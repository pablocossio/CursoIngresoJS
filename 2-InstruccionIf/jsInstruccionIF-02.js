// Al ingresar una edad debemos informar solo si la persona es mayor de edad

function mostrar()
{
	//  (age > 18)
	userAge= document.getElementById('txtIdEdad').value;
	userAge= parseInt(userAge);

	if (userAge > 17){
		alert(userAge +" Es mayor de edad");
	}
	

}