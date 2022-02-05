/*
    1.  Para el departamento de facturación:
    A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
    B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
    C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
   	-------------------------------------
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 3/01/2022
	info: Ingrese 3 importes y determine: sumatotal, promediototal, sumatotal con un iva de 21%.
	ejercicio: TP Ejercicio 1
	-------------------------------------
*/


function Sumar(){
    var precioSumaUno;
    var precioSumaDos;
    var precioSumaTres;
    var resultTotalSuma;

    precioSumaUno= document.getElementById('txtIdPrecioUno').value;
    precioSumaDos= document.getElementById('txtIdPrecioDos').value;
    precioSumaTres= document.getElementById('txtIdPrecioTres').value;
    
    precioSumaUno= parseInt(precioSumaUno);
    precioSumaDos= parseInt(precioSumaDos);
    precioSumaTres= parseInt(precioSumaTres);

    resultTotalSuma= precioSumaUno + precioSumaDos + precioSumaTres;

    alert("Suma total -  "+resultTotalSuma);
}


function Promedio(){
    // Promedio Esta es la media aritmética y se calcula agregando un grupo de números y dividiendo por el recuento de esos números. Por ejemplo, el promedio de 2, 3 , 3 , 5, 7 y 10 es 30 dividido por 6, que es 5.

    var promedioUno;
    var promedioDos;
    var promedioTres;
    var resultTotal;

    promedioUno= document.getElementById('txtIdPrecioUno').value;
    promedioDos= document.getElementById('txtIdPrecioDos').value;
    promedioTres= document.getElementById('txtIdPrecioTres').value;
    
    promedioUno= parseInt(promedioUno);
    promedioDos= parseInt(promedioDos);
    promedioTres= parseInt(promedioTres);

    resultTotal= (promedioUno + promedioDos + promedioTres) / 3;

    alert("Promedio total -  "+resultTotal);
}


function PrecioFinal(){
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaTotalIva;

    precioUno= document.getElementById('txtIdPrecioUno').value;
    precioDos= document.getElementById('txtIdPrecioDos').value;
    precioTres= document.getElementById('txtIdPrecioTres').value;

    precioUno= parseInt(precioUno);
    precioDos= parseInt(precioDos);
    precioTres= parseInt(precioTres);

    sumaTotalIva= (21*(precioUno + precioDos + precioTres))/100;

    alert("Suma total más IVA de 21% -  "+sumaTotalIva);
}
