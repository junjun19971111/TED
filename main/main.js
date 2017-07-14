'use strict';

function fizzBuzzWhizz(num) {
  if(num%10===3||(num-num%10)/10===3){
    return 'Fizz';
  }
  else  if(num%3===0){
    if(num%5===0){
      if(num%7===0){
        return 'FizzBuzzWhizz';
      }
      else {
        return'FizzBuzz';
      }
    }
    else {
      return 'Fizz';
    }

  }
  else if (num%5===0){
     if (num%7===0){
       return 'BuzzWhizz';
     }
     else {
       return 'Buzz';
     }
  }
  else if (num%7===0){
    return 'Whizz';
  }
  else {
    return num;
  }

}