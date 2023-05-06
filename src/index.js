import validator from './validator.js';

function validate() { // Esta función es para que el botón funcione
    var input_card_number = document.getElementById("card_number"); // Esta variable trae toda la caja de texto donde se ingresa la tarjeta
    var value_card_number = input_card_number.value; // Esta variable trae sólo el valor de la caja, los números que ingresó el usuario
         
    var result = validator.isValid (value_card_number) // Esto es la llamada a una función (que está en el validator). La variable y el parámetro se llaman igual porque así quise, pero no es necesario que lleven el mismo nombre

    
    if (result) {
        alert ("Valid credit card! :)")
    }
        
    else {
        alert ("Invalid credit card :(")
    }
}



document.getElementById("ClickValidate").addEventListener("click", validate); // addEventListener: dos parámetros, el evento del click y una función (la de arriba)



console.log(input_card_number);

