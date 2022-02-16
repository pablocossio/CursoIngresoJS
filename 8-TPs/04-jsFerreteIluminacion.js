/*
4. Para el departamento de iluminación:
    Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
    A.	Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
    B.	Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    C.	Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el  descuento es del 20%.
    D.	Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
    Es.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
    ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
*/

/* -------------------------------------
Nombre programador: Pablo omar cossio
Lenguaje: Javascript
fecha: 9/02/2022
ejercicio: Instruccion-IF  Ejercicio 10
------------------------------------- */

function CalcularPrecio(){
  // var cantidadLamparas;
  // var lamparasDescuento;
  // var marcaLamparas;
  // var precioDefault;
  // var iibb;


    // // A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
    // cantidadLamparas= document.getElementById('txtIdCantidad').value;
    // lamparasDescuento= document.getElementById('txtIdprecioDescuento');
    // marcaLamparas= document.getElementById('Marca').value;

    // cantidadLamparas= parseInt(cantidadLamparas);
    // precioDefault= 35;
    // precioNuevo= 0;

    // if(cantidadLamparas < 3){
    //     cantidadLamparas= (cantidadLamparas*precioDefault);
    //     lamparasDescuento.value= "Sin Marcas - Precio Normal:  $"+cantidadLamparas;
    // }
    // else if(cantidadLamparas > 5){
    //     cantidadLamparas= (cantidadLamparas*precioDefault)*0.5;
    //     lamparasDescuento.value= "Sin Marcas - Precio con descuento 50%  $"+cantidadLamparas;
    // }


    // // B- Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

    // // 0.4 = 40%
    // // 0.3 = 30%

    // // precioDefault= 35;

    // else if(cantidadLamparas == 5){
    //     if(marcaLamparas == 'ArgentinaLuz'){
    //         cantidadLamparas= (cantidadLamparas*precioDefault)*0.4;
    //         lamparasDescuento.value= "ArgentinaLuz - Aplicado 50%  $"+cantidadLamparas;
    //     }
    //     else{
    //         cantidadLamparas= (cantidadLamparas*precioDefault)*0.3;
    //         lamparasDescuento.value=marcaLamparas+" - Aplicado 30%  $"+cantidadLamparas;
    //     }
    // }


    // // C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    // // 0.25 = 25%
    // // 0.20 = 20%

    // else if(cantidadLamparas == 4){
    //     if(marcaLamparas == 'ArgentinaLuz' || marcaLamparas == 'FelipeLamparas'){
    //         cantidadLamparas= (cantidadLamparas*precioDefault)*0.25;
    //         lamparasDescuento.value= marcaLamparas+" - Aplicado 25%  $"+cantidadLamparas;
    //     }
    //     else{
    //         cantidadLamparas= (cantidadLamparas*precioDefault)*0.20;
    //         lamparasDescuento.value= marcaLamparas+" - Aplicado 20%  $"+cantidadLamparas;
    //     }
    // }


    // // D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

    // // 0.15 = 15%
    // // 0.1 = 10%
    // // 0.05 = 5%

    // else if(cantidadLamparas == 3){
    //     if(marcaLamparas == 'ArgentinaLuz'){
    //         cantidadLamparas= (cantidadLamparas*precioDefault)*0.15;
    //         lamparasDescuento.value= "ArgentinaLuz - Aplicado 15%  $"+cantidadLamparas;
    //     }
    //     else if(marcaLamparas == 'FelipeLamparas'){
    //         cantidadLamparas= (cantidadLamparas*precioDefault)*0.1;
    //         lamparasDescuento.value= "FelipeLamparas - Aplicado 10%  $"+cantidadLamparas;
    //     }
    //     else{
    //         cantidadLamparas= (cantidadLamparas*precioDefault)*0.05;
    //         lamparasDescuento.value= marcaLamparas+" - Aplicado 5%  $"+cantidadLamparas;
    //     }
    // }


    // // E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
    // precioTotal= cantidadLamparas;

    // if(cantidadLamparas > 120){
    //     iibb= cantidadLamparas * 0.1;
    //     iibb= (cantidadLamparas + iibb);
    //     alert("Usted pago $"+iibb+ " de IIBB, siendo  $"+iibb+" el inpuesto a pagar");
    // }


    // -----------------------------------------------------------------------------------------------------------------------------------------


    var cantidadLamparas;
    var lamparasDescuento;
    var marcaLamparas;
    var precioDefault;
    var iibb;


    cantidadLamparas= document.getElementById('txtIdCantidad').value;
    lamparasDescuento= document.getElementById('txtIdprecioDescuento');
    marcaLamparas= document.getElementById('Marca').value;

    cantidadLamparas= parseInt(cantidadLamparas);
    precioDefault= 35;
    precioTotal= 0;
    precioNuevo= 0;

    switch(cantidadLamparas){
        // A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
        case 1:
        case 2:
            cantidadLamparas= (cantidadLamparas*precioDefault);
            lamparasDescuento.value= "Sin Marcas -  $"+cantidadLamparas;
        break;
        default:
            if(cantidadLamparas > 5){
            cantidadLamparas= (cantidadLamparas*precioDefault)*0.5;
            lamparasDescuento.value= "Sin Marcas - Aplicado 50%  $"+cantidadLamparas;
        }
        break;


        // B- Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        case 5:
            if(marcaLamparas == 'ArgentinaLuz'){
              cantidadLamparas= (cantidadLamparas*precioDefault)*0.4;
              lamparasDescuento.value= "ArgentinaLuz - Aplicado 50%  $"+cantidadLamparas;
            }
            else{
              cantidadLamparas= (cantidadLamparas*precioDefault)*0.3;
              lamparasDescuento.value= marcaLamparas+" - Aplicado 30%  $"+cantidadLamparas;
            }
        break;


        //D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

        // 0.15 = 15%
        // 0.1 = 10%
        // 0.05 = 5%

        case 3:
            if(marcaLamparas == 'ArgentinaLuz'){
                cantidadLamparas= (cantidadLamparas*precioDefault)*0.15;
                lamparasDescuento.value= "ArgentinaLuz - Aplicado 15%  $"+cantidadLamparas;
            }
            else if(marcaLamparas == 'FelipeLamparas'){
                cantidadLamparas= (cantidadLamparas*precioDefault)*0.1;
                lamparasDescuento.value= marcaLamparas+" - Aplicado 10%  $"+cantidadLamparas;
            }
            else{
                cantidadLamparas= (cantidadLamparas*precioDefault)*0.05;
                lamparasDescuento.value= marcaLamparas+" - Aplicado 5%  $"+cantidadLamparas;
            }
        break;
    }


    // E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

    if(cantidadLamparas > 120){
        iibb= cantidadLamparas * 0.1;
        iibb= (cantidadLamparas + iibb);
        alert("Usted pago $"+iibb+ " de IIBB, siendo  $"+iibb+" el inpuesto a pagar");
    }
}
