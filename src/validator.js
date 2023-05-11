const validator = {
    
  isValid: function (value_card_number){ // Está escrita de esta manera porque está dentro de un objeto
    value_card_number = value_card_number.split(""); // El split es para dividir cada número en un elemento. Si no se pone el split, es una cadena. Con el split se convierte en arreglo (para poder cambiar el valor)


    for (let a = 0; a < value_card_number.length / 2; a++){
      const lastPosition = value_card_number.length - 1;
      const z = lastPosition - a; // restar la variable "a" es para indicar que vamos para atrás según lo que valga "a" en cada iteración, para ir recorriéndonos hacia el centro

      const lastValue = value_card_number[z];
      value_card_number[z] = value_card_number[a];
      value_card_number[a] = lastValue;
    }

    for (let i = 1; i < value_card_number.length; i = i+2){ // i+2 = Para irnos de dos en dos
      value_card_number[i] = Number(value_card_number[i])*2;
      
      if (value_card_number[i]>9){
        value_card_number[i] = value_card_number[i]-9;
      }
    }

    let Total = 0

    for (let a = 0; a < value_card_number.length; a++){
      value_card_number[a] = Number(value_card_number[a]); // Se convierte a números
      Total = Total + value_card_number[a];
    }

    return Total%10 === 0; // Residuo de cero, divisible entre diez
  },




  maskify: function (value_card_number) {
    const lastPosition = value_card_number.length - 1;

    let maskified = "" //Cadena vacía, se va a ir construyendo al iterar, sustituyendo el valor del número por el #
    for (let o = 0; o < value_card_number.length; o++) {
      if (o > lastPosition - 4) {
        maskified = maskified + value_card_number[o];  // maskified es el resultado que llevamos hasta el momento. Maskified lleva toda la cola de valores
      } else {
        maskified = maskified + "#";
      }
    }

    return maskified;

  }

}

export default validator;
