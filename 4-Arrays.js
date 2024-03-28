//* Arrays in JavaScript

//? Defining an Array
let arr = [1, 2, 3, 4, 5];

//? Printing an Array
// console.log(arr);

//? Type of an Array
// console.log(typeof arr);

//? Length Property
// console.log(arr.length);

//? Map Function
// arr.map((element, index) =>
//   console.log("Element:", element, "with index no:", index)
// );

//? forEach Function
// arr.forEach((element, index) =>
//   console.log("Element:", element, "with index no:", index)
// );

//? Map Function VS forEach Function
// const x = arr.map((e) => e === 2);
// console.log(x);
// const y = arr.forEach((e) => e === 2);
// console.log(y);
// Map Function always return something

//? Reduce Function
// const sum = arr.reduce((pre, curr) => pre + curr)
// console.log("Sum:", sum);

//? Filter Function
// const result = arr.filter((element) => element < 3);
// console.log("Result:", result);

//? Push Function
// arr.push(6, 7, 8, 9);
// console.log("New Array:", arr);

//? Pop Function
// arr.pop();
// console.log("New Array:", arr);

//? Fill Function
// arr.fill(0)
// console.log("New Array:", arr);

//? Array Function
// const creatingArray = Array(5);
// console.log(creatingArray);

//? indexOf Function & lastIndexOf Function
// const result1 = arr.indexOf(3);
// console.log("Index of 3:", result1);
// const result2 = arr.lastIndexOf(3);
// console.log("index of 5:", result2);

//? Include Function & Find Function
// const result1 = arr.includes(4);
// console.log("4 is include in array:", result1);
// const result2 = arr.find((elment) => elment === 4);
// console.log("Find 4 in array:", result2);

//? Reverse Function
// arr.reverse();
// console.log("Reverse Array:", arr);

//? Sort Function
// const myFirstArray = [4, 7, 2, 1, 6, 3, 5, 8];
// const mySecondArray = ["b", "d", "c", "e", "a"];
// myFirstArray.sort();
// mySecondArray.sort();
// console.log(myFirstArray);
// console.log(mySecondArray);

//? Slice Function & Splice Function
// const result1 = arr.slice(2, 4);
// console.log("Slice Array:", result1);
// const result2 = arr.splice(2, 4);
// console.log("Splice Array", result2);

//? Shift Function
// arr.shift();
// console.log("Array Shift:", arr);

//? UnShift Function
// arr.unshift(6, 7, 8, 9);
// console.log("Array UnShift:", arr);
