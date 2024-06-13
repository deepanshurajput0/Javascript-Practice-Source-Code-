// Sets are like iterables which store the data and it only allows unique value duplicates are not allowed 

const data = new Set()
data.add("deepanshu")
data.add(12)
data.add("Software Developer")
data.add([1,2,3,4,5,6])
// console.log(data)



// for(let item of data){
//     console.log(item)
// }


const ids = [1,2,3,42,3,54,6,2,4,65,23,45,23]
const uniqueElements = new Set(ids)
console.log(uniqueElements)
let length= 0;
for(let newEle of uniqueElements){
     length++
}
console.log(length)

