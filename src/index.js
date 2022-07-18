import validator from "./validator.js";

//console.log(validator);
//Lo que esta arriba es del index.js original de laboratoria

document.getElementById("btnAll").addEventListener("click", function () {
  let cardNumber = document.getElementById("numberCard").value;
  let result = document.getElementById("result");
  let btnCard = document.getElementById("Card");
  let btnRetVal = document.getElementById("bttRetVal");
  let textR = "";
  /* Validar*/

  let newNumber = validator.isValid(cardNumber);
  if (newNumber === true) {
    textR = "es valida!";
  } else {
    textR = "no es valido! Por favor comunicate con tu proveedor o entiendad bancaria.";
    document.getElementById("result").style.color = "red";
  }

  /* Mascara */

  let nMaskify = validator.maskify(cardNumber);

  result.innerText = "¡Tu tarjeta número " + nMaskify + " " + textR;
  btnCard.style.display = "none";
  btnRetVal.style.display = "block";
});
