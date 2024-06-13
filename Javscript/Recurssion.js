// what is Recurssion 

// When a function call itself 

function printNumbersRecursive(n){
  if(n<=10){
    console.log(n)
    printNumbersRecursive(n+1)
  }
}

printNumbersRecursive(1)