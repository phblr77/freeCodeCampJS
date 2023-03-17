let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result2 = quoteSample.match(nonAlphabetRegex).length;

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result3 = movieName.match(numRegex).length;

let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result4 = movieName.match(noNumRegex).length;