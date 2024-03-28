// ==========================
//? Q1
// let a = [];
// let b = [];
// console.log(a == b);
// console.log(a === b);
// ==========================

// ==========================
//? Q2
// let a = [];
// let b = a;
// console.log(a == b);
// console.log(a === b);
// ==========================

// ==========================
//? Q3
// let a = [5];
// let b = [5];
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);
// ==========================

// ==========================
//? Q4
// let a = [1, 2, 3, 4];
// let b = { code: "JavaScript" };
// console.log(...a);
// ==========================

// ==========================
//? Q5
// console.log(typeof NaN);
// ==========================

// ==========================
//? Q6
// let a = 5;
// a = "5";
// a = true;
// console.log(typeof a);
// ==========================

// ==========================
//? Q7
// let a = null;
// let b = undefined;
// console.log(typeof a);
// console.log(typeof b);
// ==========================

// ==========================
//? Q8
// let a = 5 - -5;
// console.log(a);
// ==========================

// ==========================
//? Q9
// const a = new Set([1, 1, 2, 3, 4, 4, 5]);
// console.log(a);
// ==========================

// ==========================
//? Q10
// let obj = { code: "JavaScript" };
// console.log(delete obj.code);
// console.log(obj);
// ==========================

// ==========================
//? Q11
// let obj = { code: "JavaScript" };
// console.log(delete obj);
// console.log(obj);
// ==========================

// ==========================
//? Q12
// const Languages = ["C++", "Java", "Python", "JavaScript"];
// const [a] = Languages;
// console.log(a);
// ==========================

// ==========================
//? Q13
// const Languages = ["C++", "Java", "Python", "JavaScript"];
// const [a, b] = Languages;
// console.log(a, b);
// ==========================

// ==========================
//? Q14
// const Languages = ["C++", "Java", "Python", "JavaScript"];
// const [, , , a] = Languages;
// console.log(a);
// ==========================

// ==========================
//? Q15
// const data = { name: "Ali", age: 20, skill: "JS" };
// const { name } = data;
// console.log(name);
// ==========================

// ==========================
//? Q16
// let data = { name: "Ali", age: 20, skill: "JS" };
// const info = {
//   phone: "+923123456789",
//   email: "example@something.com",
//   skill: "JavaScript",
// };
// data = { ...data, ...info };
// console.log(data);
// ==========================

// ==========================
//? Q17
// let data = { name: "Ali", age: 20, skill: "JS" };
// const info = {
//   phone: "+923123456789",
//   email: "example@something.com",
//   skill: "JavaScript",
// };
// data = { data, ...info };
// console.log(data);
// ==========================

// ==========================
//? Q18
// const code = "JavaScript";
// console.log(code());
// ==========================

// ==========================
//? Q19
// let result = false || {} || null;
// console.log(result);
// ==========================

// ==========================
//? Q20
// let result = false || {} || 10 || null;
// console.log(result);
// ==========================

// ==========================
//? Q21
// let result = null || false || ``;
// console.log(result);
// ==========================

// ==========================
//? Q22
// let result = 0 || [] || true;
// console.log(result);
// ==========================

// ==========================
//? Q23
// let a = 0 ? "YES" : "NO";
// console.log(a);

// a = [] ? "YES" : "NO";
// console.log(a);

// a = true ? "YES" : "NO";
// console.log(a);

// a = null ? "YES" : "NO";
// console.log(a);

// a = undefined ? "YES" : "NO";
// console.log(a);

// a = {} ? "YES" : "NO";
// console.log(a);
// ==========================

// ==========================
//? Q24
// const a = 5;
// console.log(Promise.resolve(a));
// console.log(Promise.reject(a));
// ==========================

// ==========================
//? Q25
// console.log("💖" === "💖");
// ==========================

// ==========================
//? Q26
//* What this method will do?
//* JSON.parse();
// A: Parses a JavaScript Object to JSON
//! B: Parses JSON to a JavaScript value
// C: Parses any JavaScript value to JSON
// D: Parses JSON to a JavaScript object only
// ==========================

// ==========================
//? Q27
// let Language = "JavaScript";
// function Print() {
//   console.log(Language);
//   let Language = "JavaScript";
// }
// Print();
// ==========================

// ==========================
//? Q28
// var Language = "JavaScript";
// function Print() {
//   console.log(Language);
//   var Language = "JavaScript";
// }
// Print();
// ==========================

// ==========================
//? Q29
// let Language = "JavaScript";
// function Print() {
//   console.log(Language);
// }
// Print();
// ==========================

// ==========================
//? Q30
// var Language = "JavaScript";
// function Print(Language) {
//   console.log(Language);
// }
// Print(Language);
// ==========================

// ==========================
//? Q31
// a = false;
// a = console.log(typeof a);
// console.log(a);
// ==========================

// ==========================
//? Q32
// function myFun() {
//   let a = 50;
// }
// myFun();
// console.log(a);
// ==========================

// ==========================
//? Q33
// var a = 10;
// function myFun() {
//   a = 50;
// }
// myFun();
// console.log(a);
// ==========================

// ==========================
//? Q34
// console.log(`I Love ${((x) => x)("JavaScript")} as a Programing Language`);
// ==========================

// ==========================
//? Q35
// const Sum = (x, y, z) => {
//   return x + y + z;
// };
//* Output Should be 6

// Option A:
// <!--
// console.log(Sum([...1, 2, 3]));
// <!--

// Option B:
// <!--
// console.log(Sum([...[1, 2, 3]]));
// <!--

//! Option C:
// <!--
// console.log(Sum(...[1, 2, 3]));
// <!--

// Option D:
// <!--
// console.log(Sum([1, 2, 3]));
// <!--
// ==========================

// ==========================
//? Q36
// const message = "I Love Coding";
// console.log(!typeof message === "object");
// console.log(!typeof message === "string");
// console.log(!typeof message === false);
// ==========================

// ==========================
//? Q37
// const string = "this is a string";
// const number = 123;
// console.log(string, " and this is", number);
// ==========================

// ==========================
//? Q38
// const language = "JavaScript";
// const Language = 5;
// console.log(isNaN(language));
// console.log(isNaN(Language));
// ==========================

// ==========================
//? Q39
// let car = { name: "Honda" };
// Object.seal(car);
// car.model = "Civic";
// car.year = 2022;
// console.log(car);
// ==========================

// ==========================
//? Q40
// let car = { name: "Honda" };
// Object.seal(car);
// car = { ...car, model: "Civic", year: 2022 };
// console.log(car);
// ==========================

// ==========================
//? Q41
// let num = [0, 3, 0, 4];
// num.shift();
// console.log(num);
// ==========================

// ==========================
//? Q42
// let num = [0, 3, 0, 4];
// num = num.filter((e) => e !== num[0]);
// console.log(num);
// ==========================

// ==========================
//? Q43
// let num = [0, 3, 0, 4];
// num.pop();
// console.log(num);
// ==========================

// ==========================
//? Q44
// let a = 44;
// console.log(a % 2 === 0 ? "Even" : "Odd");
// ==========================

// ==========================
//? Q45
// let type = "true";
// console.log(!type);
// console.log(typeof !type);
// ==========================

// ==========================
//? Q46
// let type = "true";
// console.log(!!type);
// console.log(typeof !!type);
// ==========================

// ==========================
//? Q47
// let arr = [1, 2, 3, 4, 5];

// console.log("Printing Array Using Map");
// arr.map((e) => console.log(e));

// console.log("Printing Array Using forEach");
// arr.forEach((e) => console.log(e));
// ==========================

// ==========================
//? Q48
// let Languages = ["C++", "C#", "Java", "JavaScript", "Python"];
// const toFind = "JavaScript";

// const x = Languages.map((e) => e === toFind);
// console.log("Finding", toFind, "in Array at postion: ", x);

// const y = Languages.forEach((e) => e === toFind);
// console.log("Finding", toFind, "in Array at postion: ", y);
// ==========================

// ==========================
//? Q49
// const Languages = ["C++", "Java", "Python", "JavaScript"];
// delete Languages[1];
// console.log(Languages);
// ==========================

// ==========================
//? Q50
// const Languages = ["C++", "Java", "Python", "JavaScript"];
// delete Languages[1];
// console.log(Languages.length);
// ==========================

// ==========================
//? Q51
// let a = "I am 'a'";
// {
//   let b = "I am b";
//   console.log(b);
// }
// console.log(a);
// console.log(b);
// ==========================

// ==========================
//? Q52
// const a;
// a = 5;
// let ;
// b = 10
// console.log(a);
// console.log(b);
// ==========================

// ==========================
//? Q53
// let a;
// console.log(typeof a);
// a = 1;
// console.log(typeof a);
// a = "string";
// console.log(typeof a);
// a = true;
// console.log(typeof a);
// a = null;
// console.log(typeof a);
// a = Symbol("!@#$%^&*");
// console.log(typeof a);
// a = BigInt(345);
// console.log(typeof a);
// a = undefined;
// console.log(typeof a);
// ==========================

// ==========================
//? Q54
// let a = "String";
// let b = 6;
// let c = a + b;
// console.log(c);
// console.log(typeof c);
// ==========================

// ==========================
//? Q55
// console.log("1/0 =", 1 / 0);
// console.log("0/1 =", 0 / 1);
// ==========================

// ==========================
//? Q56
// let a = 10;
// console.log("a =", a);
// console.log("++a =", ++a);
// console.log("a++ =", a++);
// console.log("--a =", --a);
// console.log("a-- =", a--);
// console.log("a =", a);
// ==========================

// ==========================
//? Q57
// const x = 5;
// console.log(x == 5);
// console.log(x == "5");
// console.log(x === 5);
// console.log(x === "5");
// ==========================

// ==========================
//? Q58
// let a = prompt("Which programming language do you like?");
// a = a.toLowerCase();
// if (a == "javascript") {
//   alert("Thanks for having Love with JavaScript.");
// } else {
//   alert(`Oh! you like ${a} language.`);
// }
// ==========================

// ==========================
//? Q59
// let a = prompt("What's your age?");
// console.log(typeof a);
// a = Number.parseInt(a);
// console.log(typeof a);
// ==========================

// ==========================
//? Q60
// Print();
// console.log(a);
// console.log(b);
// var a = 5;
// let b = 10;
// function Print() {
//   console.log("Hello World");
// }
// ==========================

// ==========================
//? Q 61
//* a is UNDEFINED
// <!--
// console.log(a);
// var a = 1;
// <!--

//* a is not DEFINED
// <!--
// console.log(a);
// <!--
// ==========================

// ==========================
//? Q62
// let a = [1, 2, 3, 4, 4];
// let b = [4, 4, 5];
// let c = [...a, ...b];
// console.log(c);
// ==========================

// ==========================
//? Q63
// let a = [1, 2, 3, 4, 4];
// let b = [4, 4, 5, 6, 7];
// let c = new Set([...a, ...b]);
// console.log(c);
// ==========================

// ==========================
//? Q64
// console.log(3 * 3);
// console.log(3 ** 3);
// ==========================

// ==========================
//? Q65
// let x = 1;
// setTimeout(function () {
//   console.log(a);
// }, 0);
// a = 100;
// ==========================

// ==========================
//? Q66
// let a = 5;
// let A = 10;
// console.log("a =", a, "A =", A);
// ==========================

// ==========================
//? Q67
// let A10 = 10;
// let $10A = 10;
// let For = 10;
// console.log("A10 = ", A10);
// console.log("$A10 = ", $10A);
// console.log("For = ", For);
// ==========================

// ==========================
//? Q68
// let a = 1;
// let b = 2;
// console.log(a === --b);
// ==========================

// ==========================
//? Q69
// let a = 5;
// console.log(--a === --a);
// ==========================

// ==========================
//? Q70
// let a = 1;
// let b = 1;
// let c = 2;
// console.log((a === b) === --c);
// ==========================

// ==========================
//? Q71
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b && a === --c && b === c);
// ==========================

// ==========================
//? Q72
// console.log([[[[]]]]);
// ==========================

// ==========================
//? Q73
// console.log(navigator.platform);
// ==========================

// ==========================
//? Q74
// function fruit() {
//   console.log(name);
//   console.log(quantity);

//   var name = "Apple";
//   let quantity = 5;
// }
// fruit();
// ==========================

// ==========================
//? Q75
// function fruit() {
//   console.log(fruit);

//   var name = "Apple";
// }
// fruit();
// console.log(name);
// ==========================

// ==========================
//? Q76
// function fruit() {
//   console.log(fruit());

//   var name = "Apple";
//   console.log(name);
// }
// fruit();
// ==========================

// ==========================
//? Q77
// function fruit() {
//   var name = "Apple";
//   console.log(name);

//   console.log(fruit());
// }
// fruit();
// ==========================

// ==========================
//? Q78
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// ==========================

// ==========================
//? Q79
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// ==========================

// ==========================
//? Q80
// console.log(true);
// console.log(typeof true);
// console.log(+true);
// console.log(typeof +true);
// console.log(!+true);
// console.log(typeof !+true);
// ==========================

// ==========================
//? Q81
// const data = "size";
// const font = {
//   size: "small",
// };
// console.log(font[data]);
// console.log(font["size"]);
// console.log(font.size);
// console.log(font.data);
// ==========================

// ==========================
//? Q82
// let a = { brand: "IPhone" };
// let b;
// b = a;
// a.model = "14 Pro Max";
// console.log(b.model);
// ==========================

// ==========================
//? Q83
// let a = [];
// let b = a;
// a[0] = 1;
// console.log(b[0]);
// ==========================

// ==========================
//? Q84
// var x;
// var x = 10;
// console.log(x);
// ==========================

// ==========================
//? Q85
// let a = 3;
// let b = new Number(3);
// console.log(a == b);
// console.log(a === b);
// ==========================

// ==========================
//? Q86
// let name;
// nmae = {};
// console.log(name);
// ==========================

// ==========================
//? Q87
// function fruit() {
//   let name = "Apple";
//   console.log(name);
// }
// fruit.name = "Orange";
// fruit();
// ==========================

// ==========================
//? Q88
// function Print(...something) {
//   console.log(typeof something);
// }
// Print(123);
// ==========================

// ==========================
//? Q89
// function Print() {
//   "use strict";
//   something = "Hello World";
//   console.log(something);
// }
// Print();
// ==========================

// ==========================
//? Q90
// function Print() {
//   "use strict";
//   let something = "Hello World";
//   console.log(something);
//   something = 12345;
//   console.log(something);
// }
// Print();
// ==========================

// ==========================
//? Q91
// const sum = eval("10*2-5*4+20/2");
// console.log(sum);
// ==========================

// ==========================
//? Q92
// const saveMe = "Secret Information";
// localStorage.setItem("saveMe", JSON.stringify(saveMe));
// sessionStorage.setItem("saveMe", JSON.stringify(saveMe));
// console.log(localStorage.getItem("saveMe"));
// console.log(sessionStorage.getItem("saveMe"));
// console.log(JSON.parse(localStorage.getItem("saveMe")));
// console.log(JSON.parse(sessionStorage.getItem("saveMe")));
// localStorage.clear();
// sessionStorage.clear();
// ==========================

// ==========================
//? Q93
// const Obj = { 1: "a", 2: "b", 3: "c" };
// console.log(Obj.hasOwnProperty(1));
// console.log(Obj.hasOwnProperty("1"));
// ==========================

// ==========================
//? Q94
// const Obj = { a: "One", b: "Two", a: "Repeat" };
// console.log(Obj);
// ==========================

// ==========================
//? Q95
// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
// ==========================

// ==========================
//? Q96
// for (let i = 0; i < 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }
// ==========================

// ==========================
//? Q97
// const a = () => console.log("First");
// const b = () => setTimeout(() => console.log("Second"));
// const c = () => console.log("Third");
// a();
// b();
// c();
// ==========================

// ==========================
//? Q98
// const person = { name: "Ahmad" };
// function Print(age) {
//   return `${this.name} is ${age} years old`;
// }
// console.log(Print.call(person, 20));
// console.log(Print.bind(person, 20)());
// ==========================

// ==========================
//? Q99
// function Print() {
//   return (() => 0)();
// }
// console.log(typeof Print());
// ==========================

// ==========================
//? Q100
// const Print = () => {
//   return () => 0;
// };
// console.log(typeof Print());
// ==========================

// ==========================
//? Q101
// console.log(typeof (() => 0)());
// ==========================

// ==========================
//? Q102
// console.log(typeof typeof 1);
// ==========================

// ==========================
//? Q103
// const numbers = [1, 2, 3];
// numbers[6] = 11;
// console.log(numbers);
// console.log(numbers.length);
// ==========================

// ==========================
//? Q104
// const numbers = [1, 2, 3];
// numbers[11] = numbers;
// console.log(numbers);
// console.log(numbers.length);
// ==========================

// ==========================
//? Q105
//* Everything in JavaScript is either a ...
// A: function or Object
// B: Number or Object
//! C: Primitive or Object
// D: only Objects
// ==========================

// ==========================
//? Q106
// console.log(!!null);
// console.log(!!"");
// console.log(!!1);
// console.log(!!"a");
// ==========================

// ==========================
//? Q107
// console.log(setInterval(() => console.log("Hello"), 1000));
// console.log(setInterval(() => console.log("Hello"), 1000));
// console.log(setInterval(() => console.log("Hello"), 1000));
// ==========================

// ==========================
//? Q108
// console.log([..."JavaScript"]);
// ==========================

// ==========================
//? Q109
// const first = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });
// const second = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });
// Promise.race([first, second]).then((res) => console.log(res));
// ==========================

// ==========================
//? Q110
// let Obj = { message: "Hello" };
// let Arr = [Obj];
// Obj = null;
// console.log(Arr);
// console.log(Obj);
// ==========================

// ==========================
//? Q111
// const Obj = { a: "1", b: "2", c: "3", d: "4", e: "5" };
// for (const i in Obj) {
//   console.log(i);
// }
// ==========================

// ==========================
//? Q112
// let solve = 3 + 5 + "9";
// console.log(typeof solve);
// console.log(typeof 3 + 5 + "9");
// console.log(typeof (3 + 5 + "9"));
// console.log(typeof (3 + 5 + +"9"));
// ==========================

// ==========================
//? Q113
// console.log([] == []);
// console.log([] === []);
// console.log(!true - true);
// console.log(true + +"10");
// ==========================

// ==========================
//? Q114
// let arr = [1, 2, 3].map((num) => {
//   if (typeof num === "number") return;
//   return num * 2;
// });
// console.log(arr);
// ==========================

// ==========================
//? Q115
// const get = (anything) => {
//   anything.code = "JavaScript";
// };
// const language = { code: "Python" };
// get(language);
// console.log(language);
// ==========================

// ==========================
//? Q116
// function Car() {
//   this.brand = "Honda";
//   return { brand: "Toyota" };
// }
// const myCar = new Car();
// console.log(myCar.brand);
// ==========================

// ==========================
//? Q117
// (() => {
//   let x = (y = 10);
// })();
// console.log(typeof x);
// console.log(typeof y);
// ==========================

// ==========================
//? Q118
// (() => {
//   let x = 10;
// })();
// (() => {
//   let x = 10;
// })();
// console.log(typeof x);
// ==========================

// ==========================
//? Q119
// (() => {
//   let x = (y = 10);
// })();
// (() => {
//   let x = (y = 20);
// })();
// console.log(y);
// ==========================

// ==========================
//? Q120
// let x = 10;
// (() => {
//   var x = 20;
// })();
// console.log(x);
// ==========================

// ==========================
//? Q121
// let arr = [3, 6, 2, 9, 7, 1, 5];
// arr.length = 3;
// console.log(arr);
// ==========================

// ==========================
//? Q122
// let arr = [1, 2, 3];
// let sum = arr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(sum);
// ==========================

// ==========================
//? Q123
// let arr = [1, 2, 2, 3, 4, 4, 5, 5, 5];
// let uniqueObj = new Set(arr);
// let uniqueArray = [...uniqueObj];
// console.log(uniqueArray);
// ==========================

// ==========================
//? Q124
// let x = 10,
//   y = 20;
// x = (x++, y);
// console.log(x);
// ==========================

// ==========================
//? Q125
// let x = 10,
//   y = 20;
// [x, y] = [y, x];
// console.log("x =", x, "and y =", y);
// ==========================
