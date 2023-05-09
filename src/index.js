import validator from './validator.js';

function validate() { // Esta función es para que el botón funcione
  const input_card_number = document.getElementById("card_number"); // Esta variable trae toda la caja de texto donde se ingresa la tarjeta
  const value_card_number = input_card_number.value; // Esta variable trae sólo el valor de la caja, los números que ingresó el usuario
         
  if (value_card_number.length <= 0){
    alert("Enter a card number")
    return;
  }
        
    
  const result = validator.isValid(value_card_number) // Esto es la llamada a una función (que está en el validator). La variable y el parámetro se llaman igual porque así quise, pero no es necesario que lleven el mismo nombre
  // El split es para dividir cada número en un elemento. Si no se pone el split, es una cadena. Con el split se convierte en arreglo (para poder cambiar el valor)
    
  


  if (result) {
    alert("Valid credit card! :)")
    console.log("Valid credit card")
  } else {
    alert("Invalid credit card :(")
    console.log("Invalid credit card")

  }

}



document.getElementById("ClickValidate").addEventListener("click", validate); // addEventListener: dos parámetros, el evento del click y una función (la de arriba)





