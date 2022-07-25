const validator = {
  isValid: function (cardNumber) {
    // Ejemplo tarjeta valida:
    // 4556364607935616
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
  }



};


export default validator;










