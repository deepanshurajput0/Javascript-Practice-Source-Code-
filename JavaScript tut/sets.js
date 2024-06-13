// sets 
// sets (it is iterables)
// store data 
// sets also have its own methods 
// no-index based access
// order is not guarnteed
// unique items only (no duplicates allowed)
// const numbers = new Set([1,2,3]);
// const numbers = new Set();
// numbers.add(1)
// numbers.add(2)
// numbers.add(3)
// numbers.add(['item1','item2'])
// numbers.add(['item1','item2'])
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log(" 1 is not present")
// }
// console.log(numbers)


// for(let number of numbers ){
//     console.log(number)
// }

const myArray = [1,2,3,4,5,6,7]
const uniqueElements = new Set(myArray);
let length =0;
for(let element of uniqueElements){
    length++
}
console.log(length);

