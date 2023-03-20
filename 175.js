function reverseString(str) {

    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    str = reverseArray.join("");
    return str;
  }
  
  reverseString("hello");
  console.log(reverseString("hello"));