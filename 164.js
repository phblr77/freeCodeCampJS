function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

  function quickCheck(arr, elem) {
    // Only change code below this line
  if(arr.indexOf(elem) >= 0){
    return true;
  } 
    return false;
  }
    // Only change code above this line
  
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'apple'));


  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for( let i = 0; i < arr.length; i++){
        if(arr[i].indexOf(elem) == -1){
            newArr.push(arr[i]);
        }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));