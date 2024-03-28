//* Asynchronous JavaScript

// This code snippet demonstrates the concept of asynchronous JavaScript using callbacks, Promises, and async/await functions.

// Web Page instantly loaded. It must not be wait for the API requests
// console.log("Welcome to our site");

// In some case, we need to wait for the next event to complete before continuing to the process
// function waitForThreeSeconds() {
//   let ms = 3000 + new Date().getTime();
//   let a = new Date().getTime();

//   console.log(ms - a);

//   while (new Date() < ms) {}


//   console.log("While Ends");
// }

// Call this function after the end of the time period
// function callApi() {
//   waitForThreeSeconds();
//   console.log("Api Called");
// }
// But this will hold the call stack until the end of the time period

// For that reason we used the setTimeout function
// function callApi(callback) {
//   setTimeout(() => {
//     console.log("Api Called");
//     callback();
//   }, 3000);
// }
// This will return the callback function that will be called when the time expires in the future. Note that it will not hold the call stack and the webpage load without any delay.

// Now we need to check the api data for validations, Suppose it will also take some time
// function checkApiData() {
//   setTimeout(() => {
//     console.log("Api Data checked");
//   }, 1000);
// }

// Check if the api data is valid for the specified parameters
// if (callApi(function () {
//     checkApiData();
//   }))
// {
//   console.log("Done");
// } else {
//   console.log("Not");
// }
// You can see here, it will always return false while we have getting correct data. This is because of synchronous JavaScript.

// To solve this, we need to use the Promises
// function callApi() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       console.log("Api Called");
//     }, 3000);
//   });
// }

// Check the Promise Status
// console.log('Our Api: ', callApi());

// Now use the Promises for calling and checking the API
// function checkApiData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       console.log("Api Data checked");
//     }, 1000);
//   });
// }

// Finally we can check the api data is valid for the specified parameters
// callApi()
//   .then(() => checkApiData()
//     .then(() => console.log("Done"))
//     .catch(() => console.log("Error of checkApiData()"))
//   )
//   .catch(() => console.log("Error of callApi()"))
// This can not be done using IF ELSE Condition

// But the above approach causes a huge chain of nested then catch, which will cause problems while debugging

// For that, here is the concept of async functions
// async function wait() {
//   try {
//     await callApi();
//     await checkApiData();
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// All the Promise methods are now handled by only one then catch function
// wait()
//   .then(() => console.log("Done"))
//   .catch((error) => console.log(error));
