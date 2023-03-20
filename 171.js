const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
    for (let user in usersObj) {
        if(usersObj[user].online === true){
            count++;
        }
        
      }
    // Only change code above this line
    return count;
  }
  
  console.log(countOnline(users));