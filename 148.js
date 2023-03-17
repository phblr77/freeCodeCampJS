let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result5 = userCheck.test(username);
console.log(result)


let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);


let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let resul2 = sample.match(countNonWhiteSpace);

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let resul3 = ohRegex.test(ohStr);