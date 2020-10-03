module.exports = function toReadable(number) {
    let result = "";
    let numberStr = number.toString();
    let numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let teens = {
      teen: "teen",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      15: "fifteen",
  };
    let tens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    let addition = {
        
        hundred: "hundred",
    };

    if (number < 10) {
        return (result += numbers[number]);
    }
    if(number >= 10 && number < 100) {
      if(number === 10) return result += tens[number];
      if(number === 11) return result += teens[number];
      if(number === 12) return result += teens[number];
      if(number === 13) return result += teens[number];
      if(number === 15) return result += teens[number];
      if(numberStr[0] === "1") {
        return result += numbers[numberStr[1]] + addition.teen;
      }
      return result += tens[numberStr[0]] + " " + numbers[numberStr[1]];      
    }
    if(number >= 100) {
      result +=  numbers[numberStr[0]] + " " + addition.hundred;      
      if(numberStr[1] === "1") {
        if(numberStr[2] === 10)  result += tens[number];
        if(numberStr[2] === 11)  result += teens[number];
        if(numberStr[2] === 12)  result += teens[number];
        if(numberStr[2] === 13)  result += teens[number];
        if(numberStr[2] === 15)  result += teens[number];
        else result += numbers[numberStr[2]] + addition.teen;
      }
      if(numberStr[1] !== "0") result += " " + tens[numberStr[1]];
      if(numberStr[2] !== "0")  result +=  " " + numbers[numberStr[2]];
      return result;
    }

};
