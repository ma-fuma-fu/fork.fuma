for(let fork=1; 20>=fork; fork++ ){
   if(fork%15==0){
    
    console.log('FizzBuzz');
    
  }else if(fork%5==0){
    
    console.log('Buzz');
    
  }else if(fork%3==0){
    
    console.log('Fizz');
  }else{
    
    console.log(fork);
    
  }
};
