// const myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleTimeString())


// const createDate = new Date(2024,3,22,5,6)
// console.log(createDate.toLocaleString())

// const createDate = new Date("2024-03-23")
// console.log(createDate.toLocaleString())

// const timeStamps = Date.now()
// console.log(timeStamps/60)



// Get the current timestamp in milliseconds
const currentTimestamp = Date.now();

// Create a new Date object using the timestamp
const currentDate = new Date(currentTimestamp);

// Convert the date to a human-readable string
const formattedDate = currentDate.toLocaleString();

console.log(formattedDate);
