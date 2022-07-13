
// var name = document.getElementById("tarjetName");
// var tarjet = document.getElementById("tarjetNumber");
// var date = document.getElementById("date");
// var cvv = document.getElementById("cvv");
// var error = document.getElementById ("error");

var form = document.getElementById ("form");
form.addEventListener("submit",function(evt){
  evt.preventDefault() });  
  console.log ("Enviando formulario...")
 

 //document.getElementById (tarjetNumber).value.addEventListener(input,event)
//   var mensajesError= [];

//if(name.value === null || name.value === ""){
   //mensajesError.push("Ingresa tu nombre");
//}

// if(tarjet.value === null || tarjet.value === ""){
//   mensajesError.push("Ingresa los numeros de la tarjeta");
// }

// if(date.value === null || date.value === ""){
//   mensajesError.push("Ingresa tu fecha");
// }

// if(cvv.value === null || cvv.value === ""){
//   mensajesError.push("Ingresa tu cvv");
// }
// error.innerHTML=mensajesError.join(", ");

// });



//1.Recuperar los numeros desde html
//2.Asegurar que ingresaron solo numeros y que sean 16
//3.Ejecutar validacion
//4.Ejecutar la funcion enmascarar
//5.Filtrar las posiciones pares
//6.Filtrar las posiciones impares
//7.Ejecutar la multiplicacion x2 de los num pares
//8.Encontrar los resultados mayores a 9 de la multiplicacion
//9.Sumar los resultados de los numeros mayores a 9
//10.Sumar todos los numeros
//11.Desarrollar funcion validacion
//12.Desarrollar Masiky


import validator from './validator.js' 