let count = 0;

function cc(card) {
  // Only change code below this line
//   if(card>=2 && card<=6){
//     count++;
//     return count + " Bet";
// }else if(card>=7 && card<=9){
//     return 0 + " Hold";
// }else{
//     return -1 + " Hold";
// }

switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
     count++;
     break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count--;
        break;
    //case "10, J, Q, K, A"
}

var holdbet = "Hold";
if(count>0){
    holdbet = "Bet";
}
  return count + " " + holdbet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(7));