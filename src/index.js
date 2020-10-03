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
        18: "eighteen",
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
    if (number >= 10 && number < 100) {
        if (number === 10) return (result += tens[1]);
        if (number === 11) return (result += teens[number]);
        if (number === 12) return (result += teens[number]);
        if (number === 13) return (result += teens[number]);
        if (number === 15) return (result += teens[number]);
        if (number === 18) return (result += teens[number]);
        if (numberStr[0] === "1")
            return (result += numbers[+numberStr[1]] + teens.teen);
        if (numberStr[1] === "0") return (result += tens[+numberStr[0]]);
        return (result += tens[+numberStr[0]] + " " + numbers[numberStr[1]]);
    }
    if (number >= 100) {
        result += numbers[numberStr[0]] + " " + addition.hundred;
        if (numberStr[1] === "1") {
            if (numberStr.substring(1, 3) === "10") result += " " + tens[1];
            else if (numberStr.substring(1, 3) === "11")
                result += " " + teens[+numberStr.substring(1, 3)];
            else if (numberStr.substring(1, 3) === "12")
                result += " " + teens[+numberStr.substring(1, 3)];
            else if (numberStr.substring(1, 3) === "13")
                result += " " + teens[+numberStr.substring(1, 3)];
            else if (numberStr.substring(1, 3) === "15")
                result += " " + teens[+numberStr.substring(1, 3)];
            else if (numberStr.substring(1, 3) === "18")
                result += " " + teens[+numberStr.substring(1, 3)];
            else result += " " + numbers[+numberStr[2]] + teens.teen;
        } else {
            if (numberStr[1] !== "0") result += " " + tens[+numberStr[1]];
            if (numberStr[2] !== "0") result += " " + numbers[+numberStr[2]];
        }
        return result;
    }
};
