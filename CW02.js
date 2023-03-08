
var dolls_str = ["Mickey Mouse","Hello Kitty","Snow white", "Hello Kitty", "Barbie doll"];

function grabDoll(dolls){
    var bag=[];
    //coding here
    for(var i = 0; i < dolls.length; i++) {
        if(dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll"){
            bag.push(dolls[i]);
        }else continue;
        if(bag.length == 3){
            break;
        }
    }
    return bag;
  }

  console.log(grabDoll(dolls_str));