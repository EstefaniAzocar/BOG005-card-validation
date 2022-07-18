const validator = {
  isValid: (creditCardNumber) => {
    const reverseCredit = creditCardNumber.toString().split("").reverse();
    const total = [];

    //i = es la posición / e = es el valor
    reverseCredit.forEach((e, i) => {
      if (i % 2 !== 0) {
        // i = separa las posicies pares
        let numPair = e * 2;
        console.log(reverseCredit)
        console.log(numPair)
        // e = multiplica por 2 los valores de las posiciones i
        if (numPair >= 10) {
          total.push(
            numPair
              .toString()
              .split("")
              .reduce((a, b) => parseInt(a) + parseInt(b))
            // .toString = lo convierte en una cadena
            // .split = lo separa por caracter
            // parseInt (a) + (b) = vuelve números los digitos que separa .reduce
            // .reduce = Cada caracter => a 1 digito lo separa y lo suma
          );
        } else {
          total.push(numPair);
          // .push añade un valor a un array
        }
      } else {
        total.push(parseInt(e));
        // capta los número que estaban en posiciones impares
      }
    });

    const totalSum = total.reduce((a, b) => a + b);
    // toma de inicio a fin el valor total y lo suma todo
    if (totalSum % 10 === 0) {
      // si termina en 0 retorna en true, si no, en false
      return true;
    } else {
      return false;
    }
  },

  maskify: (creditCardNumber) => {
    let maskify = "";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i <= creditCardNumber.length - 5) {
        maskify = maskify + "#";
      } else {
        maskify = maskify + creditCardNumber[i];
      }
      //result.innerText = "¡Tu tarjeta número " + maskify + " es válida !";
    }

    return maskify;
  },
};
export default validator;
