module.exports = function toReadable (number) {
  let result = "";
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  let teen = ["eleven", "twelve", "teen"];
  let tens = ["ten","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  let bigNumbers = ["hundred", "thousand", "million", "billion"]

  if (number.length > 9) result += "!!!!!!" + bigNumbers[3]
  return number;

  /*вместо массивов объект и сравнивать поля?*/
}
