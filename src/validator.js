const validator = {
  
  isValid: function (value_card_number) { // Está escrita de esta manera porque está dentro de un objeto. 
    

    value_card_number = [
      value_card_number[15], 
      value_card_number[14],
      value_card_number[13], 
      value_card_number[12], 
      value_card_number[11], 
      value_card_number[10], 
      value_card_number[9], 
      value_card_number[8], 
      value_card_number[7], 
      value_card_number[6], 
      value_card_number[5], 
      value_card_number[4], 
      value_card_number[3], 
      value_card_number[2], 
      value_card_number[1], 
      value_card_number[0]]

    value_card_number[0] = value_card_number[0]*1
    value_card_number[1] = value_card_number[1]*2  
    value_card_number[2] = value_card_number[2]*1
    value_card_number[3] = value_card_number[3]*2
    value_card_number[4] = value_card_number[4]*1
    value_card_number[5] = value_card_number[5]*2
    value_card_number[6] = value_card_number[6]*1
    value_card_number[7] = value_card_number[7]*2
    value_card_number[8] = value_card_number[8]*1
    value_card_number[9] = value_card_number[9]*2
    value_card_number[10] = value_card_number[10]*1
    value_card_number[11] = value_card_number[11]*2  
    value_card_number[12] = value_card_number[12]*1
    value_card_number[13] = value_card_number[13]*2
    value_card_number[14] = value_card_number[14]*1
    value_card_number[15] = value_card_number[15]*2
    


    if (value_card_number[1]>9)
      value_card_number[1] = value_card_number[1]-9

    if (value_card_number[3]>9)
      value_card_number[3] = value_card_number[3]-9

    if (value_card_number[5]>9)
      value_card_number[5] = value_card_number[5]-9

    if (value_card_number[7]>9)
      value_card_number[7] = value_card_number[7]-9

    if (value_card_number[9]>9)
      value_card_number[9] = value_card_number[9]-9

    if (value_card_number[11]>9)
      value_card_number[11] = value_card_number[11]-9

    if (value_card_number[13]>9)
      value_card_number[13] = value_card_number[13]-9
    
    if (value_card_number[15]>9)
      value_card_number[15] = value_card_number[15]-9



    let Suma = 
    value_card_number[0] +
    value_card_number[1] + 
    value_card_number[2] +
    value_card_number[3] + 
    value_card_number[4] +
    value_card_number[5] + 
    value_card_number[6] +
    value_card_number[7] + 
    value_card_number[8] +
    value_card_number[9] + 
    value_card_number[10] +
    value_card_number[11] +
    value_card_number[12] +
    value_card_number[13] +
    value_card_number[14] +
    value_card_number[15]
    
    return Suma%10 == 0;
    
  }
    



};

export default validator;
