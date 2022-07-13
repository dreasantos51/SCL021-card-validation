const validator = {
  // ...
};

export default validator;

// Ejemplo tarjeta valida:
// 4556364607935616

//inicio una variable vacia en la que guardaré mi numero de tarjeta:
let cardNumber = 0;
//guardo mi input en una variable:
const cardNumberInput = document.getElementById("tarjetNumber");
//escucho el evento input para guardar el valor dentro de cardNumber
cardNumberInput.addEventListener("input", (evento) => {
  cardNumber = evento.target.value;
});

//Busco el boton con id "botonPagar" y escucho el evento click
document
  .getElementById("botonPagar")
  .addEventListener("click", function (event) {
    //Evito el comportamiento por defecto del boton (reiniciar la pagina)
    event.preventDefault();
    //transformo en un array de strings el numero de tarjeta
    const cardStringArray = cardNumber.toString().split("");
    //hago que mi array deje de ser de strings y pase a ser de numeros
    const cardNumberArray = cardStringArray.map((elemento) => Number(elemento));
    //Creo un nuevo array en base al array cardNumber usando map
    const newArray = cardNumberArray.map((numero, indice) => {
      //Evaluo si el indice es par, y si es par:
      if (indice % 2 === 0) {
        //Multiplicar numero por 2
        let newNumber = numero * 2;
        //evaluando si numero es mayor a 9, si lo es:
        if (newNumber > 9) {
          //Pasamos el numero a string
          const numberToString = newNumber.toString();
          //Transformamos ese string en un array
          const arrayOfNumbers = numberToString.split("");
          // El resultado es (por ejemplo)["1", "0"]
          let suma = 0;
          for (let i = 0; i < arrayOfNumbers.length; i++) {
            suma += parseInt(arrayOfNumbers[i]);
          }
          newNumber = suma;
        }
        return newNumber;
        //Evaluo si el indice es par, y si no es par:
      } else {
        return numero;
      }
    });

//inicializo en 0 una variable sumaDeNumeros
    let sumaDeNumeros = 0;

    //Uso un ciclo for para guardar en sumaDeNumeros la suma de todos los numeros de mi array
    for (var i = 0; i < newArray.length; i++) {
      sumaDeNumeros = sumaDeNumeros + newArray[i];
    }
    //si la suma es multiplo de 10 la tarjeta es valida, es true
    if (sumaDeNumeros % 10 === 0) {
      alert("Tarjeta válida, pago realizado con éxito!");
    //y si no es valida:
    } else {
      alert("Tarjeta invalida, vuelve a intentarlo");
    }
  });
// const cardNumber = [4, 5, 5, 6, 3, 6, 4, 6, 0, 7, 9, 3, 5, 6, 1, 6];

//   //Creo un nuevo array en base al array cardNumber usando map
//   const newArray = cardNumber.map((numero, indice) => {
//     //Evaluo si el indice es par, y si es par:
//     if (indice % 2 == 0) {
//       //Multiplicar numero por 2
//       let newNumber = numero * 2;
//       //evaluando si numero es mayor a 9, si lo es:
//       if (newNumber > 9) {
//         //Pasamos el numero a string
//         const numberToString = newNumber.toString()
      
//         //Transformamos ese string en un array
//         const arrayOfNumbers = numberToString.split("");
//         // El resultado es (por ejemplo)["1", "0"]
//         let suma = 0;
//         for (let i = 0; i < arrayOfNumbers.length; i++) {
//           suma += parseInt(arrayOfNumbers[i]);
//         }
//         newNumber = suma;
//       }
//       return newNumber;
//       //Evaluo si el indice es par, y si no es par:
//     } else {
//       return numero;
//     }
//   });
//  let sumaAllArrays =0
//  for (var i=0 ; i <  newArray.length;i++)
//  {
//   sumaAllArrays += newArray [i]

//  }
//   // si la suma es multiplo de 10 la tarjeta es valida, es true
//  if (sumaAllArrays % 10 === 0) {
//   alert("Tarjeta válida, pago realizado con éxito!");
//   //y si no es valida:
//   } else {
//     alert("Tarjeta invalida, vuelve a intentarlo!");
//   }
  



//Convertir en Array el numero de la tarjeta de Credito
//var cardNumber= [4,5,5,6,3,6,4,6,0,7,9,3,5,6,1,6]
//Buscar posiciones pares Array
//var cardNumber_pares= cardNumber.filter((numero,index) => index %2 == 0);
//Multiplicar posiciones pares por 2
//var multiplicarPares= cardNumber_pares.map(function(num){ return num*2;});
//Buscar los numeros mayores a 9 del resultado del Array
//var buscarResultadosMay= multiplicarPares.filter (function(numbers){return numbers > 9;});
//Sumar los digitos mayores a 9 y convertirlos en un solo digito cada uno
//var resultadosMaySumados= buscarResultadosMay.map (function(num){
 // const arrOfDigits = Array.from(String(num), Number);
  //var results= 0
  //arrOfDigits.map (function(digito){
    //results= results+digito
  //})
  //return results
//})
//Buscar posiciones impares Array
//var cardNumber_impares= cardNumber.filter((numero,index) => index %2 !== 0);