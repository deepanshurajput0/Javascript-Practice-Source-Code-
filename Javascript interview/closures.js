/// Closures with example 
// "A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables—a scope chain. This includes the outer function’s variables, the outer function's parameters, and the global variables."

function fullName(firstname,lastname){
    console.log(firstname,lastname)
   function printName(){
     console.log(firstname,lastname)
   }
   return printName
}

const ans = fullName("deepanshu","verma")
ans()



