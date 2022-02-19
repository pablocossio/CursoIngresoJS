// una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

// en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

// en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

// en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

/*
	invierno: bariloche,            aumento 20%
	invierno: cataratas, cordoba, descuento 10%
	invierno: mar del plata,      descuento 20%

	verano: bariloche,        descuento 20%
	verano: cataratas, cordoba, aumento 10%
	verano: mar del plata,      aumento 20%

	otoño y primavera: bariloche,     aumento 10%
	otoño y primavera: cataratas,     aumento 10%
	otoño y primavera: mar del plata, aumento 10%
	otoño y Primavera: cordoba, $15000
	----------------------------------------------------
	Aumento:
	$15000
	20%

	20*15000	  300000
	--------- = ------ = 3000
		100			   100

	P= 15000+3000= $18.000
...........................
	Aumento:
	$15000
	10%

	10*15000	  150000
	--------- = ------ = 1500
		100			   100

	P= 15000+1500= $16.500
#####################################################
	Descuento:
	$15000
	20%

	20*15000	  300000
	--------- = ------ = 3000
		100			   100

	P= 15000-3000= $12.000
...........................
	Descuento:
	$15000
	10%

	10*15000	  150000
	--------- = ------ = 1500
		100			   100

	P= 15000-1500= $13.500

*/

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 17/02/2022
ejercicio: Instruccion-SWITCH  Ejercicio 9
info: Seleccione y determinar un enunciado.
------------------------------------- */

function mostrar(){
	var estacionIngresada;
	var destinoIngresada;
	var tarifasViajes;
	var precioFinal;

	estacionIngresada= document.getElementById('txtIdEstacion').value;
	destinoIngresada= document.getElementById('txtIdDestino').value;
	tarifasViajes= 15000;
	precioFinal= 0;

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresada){
				case "Bariloche":
					precioFinal= 15000+((tarifasViajes*20)/100); // $18.000
					alert("$"+precioFinal+" - Aumento de 20%");
				break;
				case "Cataratas":
					precioFinal= 15000-((tarifasViajes*10)/100); // $13.500
					alert("$"+precioFinal+" - Descuento de 10%");
				break;
				case "Cordoba":
					precioFinal= 15000-((tarifasViajes*10)/100); // $13.500
					alert("$"+precioFinal+" - Descuento de 10%");
				break;
				case "Mar del plata":
					precioFinal= 15000-((tarifasViajes*20)/100); // $12.000
					alert("$"+precioFinal+" - Descuento de 20%");
				break;
			}
		break;

		case "Verano":
			switch(destinoIngresada){
				case "Bariloche":
					precioFinal= 15000-((tarifasViajes*20)/100); // $12.000
					alert("$"+precioFinal+" - Descuento de 20%");
				break;
				case "Cataratas":
					precioFinal= 15000+((tarifasViajes*10)/100); // $16.500
					alert("$"+precioFinal+" - Aumento de 10%");
				break;
				case "Cordoba":
					precioFinal= 15000+((tarifasViajes*10)/100); // $16.500
					alert("$"+precioFinal+" - Aumento de 10%");
				break;
				case "Mar del plata":
					precioFinal= 15000+((tarifasViajes*20)/100); // $18.000
					alert("$"+precioFinal+" - Aumento de 20%");
				break;
			}
		break;

		case "Otoño":
			switch(destinoIngresada){
				case "Bariloche":
					precioFinal= 15000+((tarifasViajes*10)/100); // $16.500
					alert("$"+precioFinal+" - Aumento de 10%");
				break;
				case "Cataratas":
					precioFinal= 15000+((tarifasViajes*10)/100); // $16.500
					alert("$"+precioFinal+" - Aumento de 10%");
				break;
				case "Cordoba":
					precioFinal= 15000+((tarifasViajes*10)/100); // $16.500
					alert("$"+precioFinal+" - Aumento de 10%");
				break;
				case "Mar del plata":
					precioFinal= 15000;
					alert("$"+precioFinal+" - Normal");
				break;
			}
		break;

		case "Primavera":
			switch(destinoIngresada){
				case "Bariloche":
					precioFinal= 15000+((tarifasViajes*10)/100); // $16.500
					alert("$"+precioFinal+" - Aumento de 10%");
				break;
				case "Cataratas":
					precioFinal= 15000+((tarifasViajes*10)/100); // $16.500
					alert("$"+precioFinal+" - Aumento de 10%");
				break;
				case "Cordoba":
					precioFinal= 15000+((tarifasViajes*10)/100); // $16.500
					alert("$"+precioFinal+" - Aumento de 10%");
				break;
				case "Mar del plata":
					precioFinal= 15000;
					alert("$"+precioFinal+" - Normal");
				break;
			}
		break;
	}
}
