function fizzBuzz(n) {           //function name is defined
  for (let i = 1; i <= n; i++){  //this is the loop which starts from 1 and passed as the parameter
    if (i%3===0 && i%5===0){    //if number is divisible by 3 and 5 -> print "Fizz Buzz"
      console.log("Fizz Buzz")
    }else if (i%3===0){           //if number is divisible by 3 -> print "Fizz"
      console.log("Fizz")
    }
  }
};

console.log(fizzBuzz(15))   // randomly choosen number to check the correctness of the function.
