// Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
// de cada una debo obtener los siguientes datos:
// el tipo (validar "barbijo" , "jabón" o "alcohol") ,
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// la Marca y el fabricante.

// Se debe Informar al usuario lo siguiente:
// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
// b) Del tipo con mas unidades, el promedio por compra
// c) Cuántas unidades de jabones hay en total

function mostrar(){
	var repeticion;
	var tipoProducto;
	var precio;
	var	cantidadUnidad;
	var marca;
	var fabricante;
	var precioBarato;
	var fabricanteBarato;
	var cantidadBarato;
	var masProductosAlcohol;
	var masProductosJabon;
	var masProductosBarbijo;
	var contadorProductoAlcohol;
	var contadorProductoJabon;
	var contadorProductoBarbijo;
	var promedioCompra;
	var unidadTipo;

	repeticion= 0;
	tipoProducto= 0;
	precio= 0;
	cantidadUnidad= 0;
	marca= "";
	fabricante= "";
	precioBarato= 0;
	fabricanteBarato= "";
	cantidadBarato= 0;
	masProductosAlcohol= 0;
	masProductosJabon= 0;
	masProductosBarbijo= 0;
	contadorporductoAlcohol= 0;
	contadorporductoJabon= 0;
	contadorporductoBarbijo= 0;
	promedioCompra=0;
	unidadTipo= "";

	while(repeticion < 3){
		// --- Producto
		tipoProducto= prompt("Ingrese un producto: ");
		while(tipoProducto != 'barbijo' && tipoProducto != 'jabon' && tipoProducto != 'alcohol'){
			tipoProducto= prompt("ERROR - Ingrese un producto: ");
		}

		// --- Precio
		precio= prompt("Ingrese un precio: ");
		precio= parseFloat(precio);
		while(precio < 100 || precio > 301){
			precio= prompt("ERROR - Ingrese un precio");
			precio= parseFloat(precio);
		}

		// --- Unidades
		cantidadUnidad= prompt("Ingrese una cantidad de unidades: ");
		cantidadUnidad= parseInt(cantidadUnidad);
		while(cantidadUnidad > 0 || cantidadUnidad < 1000){
			cantidadUnidad= prompt("ERROR - Ingrese una cantidad de unidades: ");
			cantidadUnidad= parseInt(cantidadUnidad);
		}

		// --- Marca y Fabricante
		marca= prompt("Ingrese su marca: ");
		fabricante= prompt("Ingrese el fabricante: ");


		// Informe del alcohol más barato.
		if(tipoProducto == "alcohol"){
			if(repeticion == 0){
				precioBarato= precio;
				fabricanteBarato= fabricante;
				cantidadBarato= cantidadUnidad;
			}
			else{
				if(precio < precioBarato){
					precioBarato= precio;
					fabricanteBarato= fabricante;
					cantidadBarato= cantidadUnidad;
					console.log("precio Barato Alcohol: "+precioBarato);
					console.log("Fabricante Barato: "+fabricanteBarato);
					console.log("cantidad Barato: "+cantidadBarato);
				}
			}
		}

		// --- El que tenga más productos acumulados, y su promedio
		switch(tipoProducto){
			case "alcohol":
				masProductosAlcohol= masProductosAlcohol + cantidadUnidad;
				console.log("mas acumulado Alcohol: "+masProductosAlcohol);
				contadorProductoAlcohol++;
			break;

			case "jabon":
				masProductosJabon= masProductosJabon + cantidadUnidad;
				console.log("mas acumulado jabon: "+masProductosJabon);
				contadorProductoJabon++;
			break;

			case "barbijo":
				masProductosBarbijo= masProductosBarbijo + cantidadUnidad;
				console.log("mas acumulado barbijo: "+masProductosBarbijo);
				contadorProductoBarbijo++;
			break;
		}
		repeticion++;
	}

	// Promedio de cada producto
	if(masProductosAlcohol > masProductosJabon && masProductosAlcohol > masProductosBarbijo){
		promedioCompra= masProductosAlcohol/contadorProductoAlcohol;
		console.log("promedio Alcohol: "+promedioCompra);
		unidadTipo= "Alcohol";
	}
	else{
		if(masProductosJabon > masProductosAlcohol && masProductosJabon > masProductosBarbijo){
			promedioCompra= masProductosJabon/contadorProductoJabon;
			console.log("promedio jabon: "+promedioCompra);
			unidadTipo= "Jabon";
		}
		else{
			promedioCompra= masProductosBarbijo/contadorProductoBarbijo;
			console.log("promedio barbijo: "+promedioCompra);
			unidadTipo= "Barbijo";
		}
	}

	// final Mostrar
	document.write("Alcohol mas barato cantidad: "+precioBarato+ "Fabricante del alcohol barato: "+fabricante);
	document.write("Tipo más unidades: "+unidadTipo+ "Promedio compra: "+promedioCompra);
	document.write("Total de unidad de jabon: "+masProductosJabon);
}
