

function splitAndMerge(string, separator) {
    return string
      .split(" ")
      .map((word) => word.split("").join(separator))
      .join(" ");
  }
  
  console.log(splitAndMerge("My name is John", "-"));