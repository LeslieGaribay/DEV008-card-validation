const validator = {
    
  isValid: function (value_card_number) { // Está escrita de esta manera porque está dentro de un objeto
    value_card_number = value_card_number.split("");


    for (let a = 0; a < value_card_number.length / 2; a++){
      const lastPosition = value_card_number.length - 1;
      const z = lastPosition - a; // restar la variable "a" es para indicar que vamos para atrás según lo que valga "a" en cada iteración, para ir recorriéndonos hacia el centro

      const lastValue = value_card_number[z];
      value_card_number[z] = value_card_number[a];
      value_card_number[a] = lastValue;
    }

    for (let i = 1; i < value_card_number.length; i = i+2){
      value_card_number[i] = Number(value_card_number[i])*2;
      
      if (value_card_number[i]>9){
        value_card_number[i] = value_card_number[i]-9;
      }
    }

    let Total = 0

    for (let a = 0; a < value_card_number.length; a++){
      value_card_number[a] = Number(value_card_number[a])
      Total = Total + value_card_number[a];
    }

    return Total%10 === 0;
  },


};

export default validator;
