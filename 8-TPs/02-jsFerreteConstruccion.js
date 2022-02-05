/*
    2.Para el departamento de Construcción:
    A. mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
    B. mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
    C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
    -------------------------------------
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 3/01/2022
	info: Ingrese 3 importes y determine: sumatotal, promediototal, sumatotal con un iva de 21%.
	ejercicio: TP Ejercicio 2
	-------------------------------------
*/

function Rectangulo(){
    /*
        formula:
        perimetro= 1l + 1l + 1a + 1a
        ------------------------------
        perimetro= 2(ancho) + 2(largo)
        peimetro= 2(12cm) + 2(36cm) = 24m + 72m = 96m
        se necesita 96m de alambre

    */
    var largoTerreno;
    var anchoTerreno;
    var metrosCompra;

    largoTerreno= document.getElementById('txtIdLargo').value;
    anchoTerreno= document.getElementById('txtIdAncho').value;

    largoTerreno= parseInt(largoTerreno);
    anchoTerreno= parseInt(anchoTerreno);

    largoTerreno= (2*largoTerreno);
    anchoTerreno= (2*anchoTerreno);

    metrosCompra= largoTerreno + anchoTerreno;

    alert("Se necesitan -  "+ metrosCompra +"m");

}


function Circulo(){
    /* 
        INFO:  https://www.mundodeportivo.com/uncomo/educacion/articulo/como-sacar-el-area-de-un-circulo-37105.html

        radio= Diametro/2
        radio= 38/2= 19cm
        -----------------
        radio= 19
        PI= 3.14
        area_circulo= PI x 19²  = PI x 361  = 3,14 x 361  = 1133,54 cm²
    */

    var radioTerreno;
    var cantidadAlambre;
    var PI;

    radioTerreno= document.getElementById('txtIdRadio').value;
    radioTerreno= parseFloat(radioTerreno);
    PI= parseFloat(3.14);

    cantidadAlambre= PI * (radioTerreno**2);

    alert("El alambre a comprar es:  "+ cantidadAlambre.toFixed() +"cm²");
}


function Materiales(){
    var capaLargo;
    var capaAncho;
    var bolsaCemento;
    var bolsaCal;
    var resultCapas;

    capaLargo= document.getElementById('txtIdLargo').value;
    capaAncho= document.getElementById('txtIdAncho').value;

    capaLargo= parseInt(capaLargo);
    capaAncho= parseInt(capaAncho);

    resultCapas= capaLargo * capaAncho;
    bolsaCemento= resultCapas*2;
    bolsaCal= resultCapas*3;
    
    alert("Cantidad de bolsas de Cemento: "+bolsaCemento + " Cantidad de bolsas de Cal: "+bolsaCal+"");

}

















// txtIdLargo txtIdAncho txtIdRadio
// function Rectangulo () 
// {
//     var largoRectangulo;
//     var anchoRectangulo;
//     var alambreRectangulo;
//     var perimetroDelTerreno;

//     largoRectangulo = document.getElementById("txtIdLargo").value;
//     anchoRectangulo = document.getElementById("txtIdAncho").value;

//     largoRectangulo = parseFloat(largoRectangulo);// cambiamos a parsefloat porque las medidas pueden ser numeros con coma
//     anchoRectangulo = parseFloat(anchoRectangulo);

//     perimetroDelTerreno = (anchoRectangulo + largoRectangulo) * 2;
//     alambreRectangulo = perimetroDelTerreno * 3;

//     alert("La cantidad de alambre a comprar es " + alambreRectangulo);
// }

// function Circulo () 
// {
//     var radioCirculo;
//     var perimetroCirculo;	
//     var vueltaAlambre;
//     var cantidadAlambre;
//     var mensaje;

//     vueltaAlambre = 3
//     radioCirculo = document.getElementById("txtIdRadio").value;

//     radioCirculo = parseFloat(radioCirculo);

//     perimetroCirculo = 2 * Math.PI * radioCirculo;

//     //console.log(Math.PI);

//     cantidadAlambre = perimetroCirculo * vueltaAlambre;

//     mensaje = "La cantidad total es " + cantidadAlambre.toFixed();

//     alert(mensaje);

// }

// function Materiales () 
// {
// 	var largoDelTerreno;
//     var anchoDelTerreno;
//     var areaDelTerreno;
//     var bolsaDeCemento;
//     var bolsaDeCal;
//     var mensaje;

//     largoDelTerreno= document.getElementById("txtIdLargo").value;
//     anchoDelTerreno= document.getElementById("txtIdAncho").value;

//     largoDelTerreno= parseFloat(largoDelTerreno);
//     anchoDelTerreno= parseFloat(anchoDelTerreno);

//     areaDelTerreno= largoDelTerreno * anchoDelTerreno;
//     bolsaDeCemento= areaDelTerreno * 2;
//     bolsaDeCal= areaDelTerreno * 3;
//      //console.log(bolsaDeCal, bolsaDeCemento);

//      mensaje = "la cantidad de bolsas de cemento a comprar son " + bolsaDeCemento; 
//      mensaje += " y la cantidad de bolsas de cal a comprar son " + bolsaDeCal;

//     alert(mensaje);





// }

