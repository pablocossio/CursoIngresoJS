// Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).

function mostrar(){
	var userAdolecente;
	userAdolecente= document.getElementById('txtIdEdad').value;
	userAdolecente= parseInt(userAdolecente);

	if(userAdolecente > 12  && userAdolecente < 18){
		alert(userAdolecente +" Eres adolecente");
	}
	else{
		alert("No eres adolecente");
	}
}