function fizzBuzz (max){
    for (let i = 1; i < max; i++ ){
        if (i % 3 === 0 && i % 5 != 0){
            console.log(i)
       } else if (i% 5 === 0 && i % 3 != 0 ){
            console.log(i)
            }
    }
}
fizzBuzz(20);


//more options 

function fizzBuzz(max) {
    for (let i = 0; i < max; i += 1) {
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }
  
  function fizzBuzzWhile(max) {
    let i = 0;
    while (i < max) {
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
      i++;
    }
  }
  