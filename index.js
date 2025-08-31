// console.log('hello');

// // veriavals

// // 1: const
// const data = {
//     name: "Ajeet"
// }
// // data = { // TypeError: Assignment to constant variable.
// //     name: "Ajeet Singh"
// // }

// console.log(data);
// try {
//     data = { // this is try to Reassignment this variable so it through en error
//         name: "Ajeet Singh"
//     }
//     console.log(data);
// } catch (error) {
//     console.error("through an error:", error); // run
// }

// try {
//     const data = { //  this is a new variable with in try block
//         name: "Ajeet Singh"
//     }
//     console.log(data);
// } catch (error) {
//     console.error("through an error:", error); // run
// }

// // const data = {   // Cannot redeclare block-scoped variable 'data'.
// //     name: "Ajeet Singh"
// // }
// console.log(data);



// const d = () => {
//     try {
//         if (true) {
//             var x = 50;
//         }

//     } catch (error) {
//         console.error(error)
//     }
// }
// d();
// console.log(x)



// What is a Variable?

// A variable is like a container that stores data (a value) which can be used and changed later in the program.


// 1. var

// Old way (before 2015 / ES6).
// Function-scoped → works inside the whole function, even outside { }.
// Can be re-declared and updated.
// Hoisted (moved to the top during execution).

var x = 10;
var x = 20;   // ✅ re-declared
x = 30;       // ✅ updated
console.log(x); // 30


// But because it’s function-scoped, it can cause confusion:
if (true) {
    var y = 50;
}
console.log(y); // 50 (still accessible outside the block ❌)

// 2. let

// Introduced in ES6 (2015).
// Block-scoped → works only inside { }.
// Can be updated, but not re-declared in the same scope.
// Hoisted, but not initialized (you get error if used before declaring).

let d = 10;
// let d = 20; ❌ Error: already declared
d = 15;        // ✅ updated
console.log(d); // 15


// Block scope:
if (true) {
    let b = 100;
    console.log(b); // 100
}
console.log(b); // ❌ Error: b is not defined


//  3. const

// Also introduced in ES6 (2015).
// Block-scoped like let.
// Cannot be re-assigned (constant value).
// Must be initialized when declared.

const pi = 3.14;
// pi = 3.14159; ❌ Error: Assignment to constant variable
console.log(pi); // 3.14

// ⚠️ Note: const does not make objects or arrays immutable, only the variable reference is constant.
const numbers = [1, 2, 3];
numbers.push(4);    // ✅ allowed
console.log(numbers); // [1, 2, 3, 4]


// 🔹 Comparison Table

// | Feature      | `var`             | `let`                                    | `const`                                  |
// | ------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
// | Scope        | Function-scoped   | Block-scoped                             | Block-scoped                             |
// | Re-declare   | ✅ Yes             | ❌ No                                     | ❌ No                                     |
// | Update value | ✅ Yes             | ✅ Yes                                    | ❌ No                                     |
// | Hoisting     | ✅ Yes (undefined) | ✅ Yes (but error if used before declare) | ✅ Yes (but error if used before declare) |
// | Use case     | Old code / avoid  | General variables                        | Fixed values                             |


// 🔹 Definition of Hoisting

// Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their scope (before code execution).

// 👉 In simple words:
// When JavaScript runs your code, it scans it first and pulls all declarations (var, function, let, const, class) to the top of their scope (function or global).


console.log(x); // undefined
var x = 10;

// You might expect an error, but output is undefined.
// Why? Because JavaScript internally does this:

var x;          // declaration is hoisted
console.log(x); // undefined
x = 10;         // assignment stays in place

// 🔹 Example with let and const

console.log(y); // ❌ Error: Cannot access 'y' before initialization
let y = 20;

// 👉 let and const are also hoisted, BUT they are placed in a “Temporal Dead Zone (TDZ)” until the line where they are initialized. That’s why accessing them before declaration throws an error.


// 🔹 Functions and Hoisting

// Function declarations are fully hoisted.

sayHello(); // ✅ Works
function sayHello() {
  console.log("Hello!");
}

// JavaScript moves the whole function definition to the top.

// But function expressions (assigned to a variable) are not fully hoisted:

sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization
let sayHi = function() {
  console.log("Hi!");
};

// 🔹 Summary

// Hoisting = JavaScript moves declarations (not initializations) to the top of their scope.
// var → hoisted, initialized with undefined.
// let / const → hoisted, but not initialized (TDZ → error if accessed before declaration).
// Functions (declarations) → fully hoisted.
// Functions (expressions/arrow functions) → behave like variables (let/const).

// ✅ In short:
// Hoisting means you can use variables and functions before they are declared in the code — but the behavior depends on whether you used var, let, const, or function.




// 🔹 1. Variables

// Variables are just named storage for values.
// They can be declared using var, let, or const.
// But how they behave depends on scoping and hoisting.

// 🔹 2. Scoping

// Scoping decides where a variable can be accessed.
// var → function-scoped
// let / const → block-scoped

// 👉 Example:

if (true) {
  var x = 10;
  let y = 20;
}
console.log(x); // ✅ 10 (var leaks out of block)
console.log(y); // ❌ Error (let is block-scoped)

// 🔹 3. Hoisting

// Hoisting is how JS engine processes variables/functions before running code.
// var → hoisted & initialized with undefined.
// let / const → hoisted but not initialized → put in TDZ.
// function declarations → fully hoisted (can call before declaring).

// 👉 Example:

console.log(a); // undefined (var is hoisted)
var a = 5;

console.log(b); // ❌ Error (TDZ)
let b = 10;

// 🔹 4. Temporal Dead Zone (TDZ)

// TDZ is a special behavior for let and const.
// From the start of the block → until the line of initialization → variable exists in memory but cannot be accessed.

  // TDZ starts
  console.log(z); // ❌ ReferenceError
  let z = 100;    // TDZ ends
  console.log(z); // ✅ 100


// 🔹 Putting it all together

// Variable = storage container.
// Scope = decides where that container is visible.
// Hoisting = decides when that container becomes available in memory.
// TDZ = for let/const, a "no access zone" between scope start and initialization.

// ✅ Summary in one line:
// When you declare a variable, JavaScript first hoists it into memory. Its scope decides where you can use it, and if it’s let/const, it will stay in the TDZ until initialized.