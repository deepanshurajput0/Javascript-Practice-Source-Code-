

const value1 = "val1"
function myApp(){   // this is lexical Scope for myFunc and myFunc2
    // const value1 = "val1"
    function myFunc(){
        // console.log("this is my func", value1)
        function myFunc2(){
            console.log("this is my func2 ", value1)
        }
        myFunc2()
    }

    myFunc()
}

myApp()




