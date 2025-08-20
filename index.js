console.log('hello');

// veriavals

// 1: const
const data = {
    name: "Ajeet"
}
// data = { // TypeError: Assignment to constant variable.
//     name: "Ajeet Singh"
// }

console.log(data);
try {
    data = { // this is try to Reassignment this variable so it through en error
        name: "Ajeet Singh"
    }
    console.log(data);
} catch (error) {
    console.error("through an error:", error); // run
}

try {
    const data = { //  this is a new variable with in try block
        name: "Ajeet Singh"
    }
    console.log(data);
} catch (error) {
    console.error("through an error:", error); // run
}

// const data = {   // Cannot redeclare block-scoped variable 'data'.
//     name: "Ajeet Singh"
// }
console.log(data);
