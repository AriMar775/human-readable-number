module.exports = function toReadable(number) {
    let result = "";
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
    let tens = {
        10: "ten",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let addition = {
        11: "eleven",
        12: "twelve",
        teen: "teen",
        hundred: "hundred",
    };

    if (number <= 10) {
        return (result += numbers[number]);
    }
};
