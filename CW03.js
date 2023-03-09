
//var ob={item1:"This",item2:"is",item3:"an",item4:"example", item5:"camel"};
var ob={"ksdy":"ncoep","bxzwwoa":"jmka","jud":"ghxtu","iirhjr":"jyo","qmqhrfp":"cuxg","jejyy":"nlvzq","qnxi":"gdkny","hyj":"js","ywgaomo":"zuuklt"};
function giveMeFive(obj){
    //coding here
    var arr = [];
    for (var key in obj){
        if (key.length == 5 && obj[key].length == 5){
            arr.push(key);
            arr.push(obj[key]);
        }else if(obj[key].length == 5){
            arr.push(obj[key]);
        }else if(key.length == 5){
            arr.push(key);
        }
    }
    return arr;
  }

  console.log(giveMeFive(ob));