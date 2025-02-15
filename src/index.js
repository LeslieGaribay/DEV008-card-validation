import validator from './validator.js';

function validate() { // Esta función es para que el botón funcione
  const input_card_number = document.getElementById("card_number"); // Esta variable trae toda la caja de texto donde se ingresa la tarjeta
  const value_card_number = input_card_number.value; // Esta variable trae sólo el valor de la caja, los números que ingresó el usuario
         
  if (value_card_number.length <= 0){
    alert("Enter a card number")
    return;
  }
        
    
  const result = validator.isValid(value_card_number) // Esto es la llamada a una función (que está en el validator). La variable y el parámetro se llaman igual porque así quise, pero no es necesario que lleven el mismo nombre
    
  
  if (result) {
    input_card_number.value = validator.maskify(value_card_number);
    console.log("Valid credit card")
    alert("Valid credit card! :)")
  } else {
    console.log("Invalid credit card")
    alert("Invalid credit card :(")

  }

}

document.getElementById("ClickValidate").addEventListener("click", validate); // addEventListener: dos parámetros, el evento del click y una función (la de arriba)

document.getElementById("ClickPay").addEventListener("click", pay);

function pay (){ 
  alert("Enjoy your purchase!") 
}




