// Step 1: Create an empty array
let myArray = [];

// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 0; i < 10; i++) {
    myArray.push(i);
}

// Step 3: Log the array into the console
console.log("Array:", myArray);

// Step 4: Use the for loop to iterate through the array and output into the console
console.log("Using for loop:");
for (let j = 0; j < myArray.length; j++) {
    console.log(myArray[j]);
}

// Step 5: Use the for of loop to output the value into the console from the array
console.log("Using for of loop:");
for (let value of myArray) {
    console.log(value);
}