const validator = {
  // ...
};

export default validator;

var cardNumber= [4,5,5,6,3,6,4,6,0,7,9,3,5,6,1,6]

var cardNumber_pares= cardNumber.filter((numero,index) => index %2 == 0);

var multiplicarPares= cardNumber_pares.map(function(num){ return num*2;});

var buscarResultadosMay= multiplicarPares.filter (function(numbers){return numbers > 9;});

var resultadosMaySumados= buscarResultadosMay.map (function(num){
  const arrOfDigits = Array.from(String(num), Number);
  var results= 0
  arrOfDigits.map (function(digito){
    results= results+digito
  })
  return results
})
console.log (resultadosMaySumados);