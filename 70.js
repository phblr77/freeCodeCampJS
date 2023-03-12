const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(par == 4 && strokes == 1){
    return names[0];
  }else if(par == 4 && strokes == 2){
    return names[1];
  }else if(par == 5 && strokes == 2){
    return names[1];
  }else if(par == 4 && strokes == 3){
    return names[2];
  }else if(par == 4 && strokes == 4){
    return names[3];
  }else if(par == 1 && strokes == 1){
    return names[0];
  }else if(par == 5 && strokes == 5){
    return names[3];
  }else if(par == 4 && strokes == 5){
    return names[4];
  }else if(par == 4 && strokes == 6){
    return names[5];
  }else if(par == 4 && strokes == 7){
    return names[6];
  }else if(par == 5 && strokes == 9){
    return names[6];
  }


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
console.log(golfScore(5, 9));