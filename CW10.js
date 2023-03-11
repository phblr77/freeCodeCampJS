function alienLanguage(input){
    //coding here...
    return input.toUpperCase().split(" ").map(function(item) {
        return item.slice(0, -1) + item.slice(-1).toLowerCase();
    }).join(" ");
  }


  console.log(alienLanguage("My name is John"));