

function printFives(max){
    let i = 0
    while (i < max){
        console.log(i);
        i += 5
     }
}

// Example:

printFives(20) // prints out:
// 0
// 5
// 10
// 15


//more options 

function printFives1For(max) {
    for (let i = 0; i < max; i += 1) {
      if (i % 5 === 0) {
        console.log(i);
      }
    }
  }
  
  function printFives1(max) {
    let i = 0;
    while (i < max) {
      if (i % 5 === 0) {
        console.log(i);
      }
      i++;
    }
  }
  
  function printFives2(max) {
    for (let i = 0; i < max; i += 5) {
      console.log(i);
    }
  }
  
