/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
   	-------------------------------------
	Nombre programador: Pablo omar cossio
	Lenguaje: Javascript
	fecha: 5/01/2022
	ejercicio: TP Ejercicio 3
	-------------------------------------
*/



// EJemplo Formula
// Por ejemplo, si se quiere saber cuántos grados centígrados son 100 grados farenheit, 
// lo que hay que hacer seguir la fórmula que aparece en el paso anterior. Es decir, 
// 100-32= 68 A ese resultado y de acuerdo con la fórmula, hay que multiplicarlo por 5. 
// Es decir, 68*5= 340 Y el número resultante (340) se divide entre 9. 340/9= 37,7ºC son 100ºF.

/* 
    cent= 100
    result= cent-32= 68
    result= result * 5= 340 
    result= result / 9= 37,7ºC
*/

function FahrenheitCentigrados () 
{
    var calculoCentigrados;
    var resultFahrenheit;
    
    calculoCentigrados= document.getElementById('txtIdTemperatura').value;

    calculoCentigrados= parseFloat(calculoCentigrados);

    resultFahrenheit= calculoCentigrados-32;
    resultFahrenheit= resultFahrenheit*5;
    resultFahrenheit= resultFahrenheit/9;
    
    alert(resultFahrenheit.toFixed(1)+ " ºC");
}


function CentigradosFahrenheit () 
{
	/*
        1) Multiplicamos 30 por 1,8 = 54.
        2) Le sumamos 32 a 54 = 86.
        RESULTADO: 30ºC = 86 ºF. 
    */
    /* F= (Cº · 1,8) + 32 */

    var calculoFahrenheit;
    var resultCentigrados;

    calculoFahrenheit= document.getElementById('txtIdTemperatura').value;
    calculoFahrenheit= parseFloat(calculoFahrenheit);

    resultCentigrados= (calculoFahrenheit*1.8)+32;
    alert(resultCentigrados+" ºF");
}
