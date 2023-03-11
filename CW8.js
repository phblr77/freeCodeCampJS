


function firstToLast(str,c){
    //coding here...
    if(str.indexOf(c) >= 0){
        var num = str.lastIndexOf(c) - str.indexOf(c);
        return num;
    }else return -1;
  }

//   let str = "ababc";
//   console.log(str.indexOf("A"));
//   console.log(str.lastIndexOf("c"));
  console.log(firstToLast("ababc","d"));
