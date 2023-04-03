function logBetween(lowNum, highNum){
    for (let i = lowNum; i <= highNum; i+=1){
        console.log(i);
    }
}
    logBetween(-8, 2)
    logBetween (5, -2)
    logBetween(-1, 3)
    
//more options 
  
  function logBetweenWhile(lowNum, highNum) {
    let i = lowNum;
    while (i <= highNum) {
      console.log(i);
      i++;
    }
  }