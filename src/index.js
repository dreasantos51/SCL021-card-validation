import validator from "./validator.js";

var button = document.getElementById("botonPagar");

//inicio una variable vacia en la que guardaré mi numero de tarjeta:
let cardNumber = 0;
//guardo mi input en una variable:
const cardNumberInput = document.getElementById("tarjetNumber");

//escucho el evento input para guardar el valor dentro de cardNumber
if (cardNumberInput !== null) {
  cardNumberInput.addEventListener("input", (evento) => {
    cardNumber = evento.target.value;
  });
}

const maskify = (cardNumber) => {
  const cardNumberString= cardNumber.toString();
  const maskifyNumber=
  '#'.repeat(Math.max(0, cardNumberString.length - 4))
 + cardNumberString.substr(-4);
 return maskifyNumber
};
let numberToValidate=""
cardNumberInput.addEventListener("input", (evt) => {
  if (evt.data==null) {
    if (numberToValidate != "") {
      numberToValidate= numberToValidate.substring(0,numberToValidate.length-1)
      console.log(numberToValidate)
    }
  } else {
  numberToValidate= numberToValidate+evt.data
   evt.target.value=maskify(cardNumber);
   console.log(evt)
  }
});

//const numberMask(numberToMask) = maskify 4556364607935616


if (button !== null) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Enviando formulario...");
    validator.isValid(numberToValidate);
  });
}

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


