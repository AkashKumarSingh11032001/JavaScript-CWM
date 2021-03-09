//first JS code
console.log('Hello World');

//class 1
let name = "Akash";
console.log(name);


//multiple variable
let a,b,c;

//class 2

// let
let intrest1 = 0.3;
intrest1 = 10;
console.log(intrest1);

//constant
const intrest2 = 0.3;
//intrest2 = 10;
console.log(intrest2);

//class 3
let name1 = 'Hello'; //string litral
let age = 30; //number litral
let isApproved = true; //boolean
let firstName = undefined; // undefined litral
let lastName = null; //null litral

// class 4 (static and dynamic)

console.log(typeof name1);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof lastName);

//class 5 Object

let person = {
    name2: 'Akash',
    age2: 10

};
console.log(person);
//Dot notation
person.name2 = 'Sweety';
console.log(person.name2);
console.log(person);
// Bracket Notaion
person['name2'] = 'Priya';
console.log(person.name2);
console.log(person);

//class 6 Array(can store diffrent datatype in it)

let selectedColor = ['red','blue'];
console.log(selectedColor);
console.log(selectedColor[0]);
console.log(selectedColor[1]);
selectedColor[2] = 'green';
console.log(selectedColor);
console.log(selectedColor.length);

//class 7 Function

function greet(myName, latname) {
    console.log("Hello " + myName + ' ' + latname);
}

greet("Akash","singh");
greet("Sweety","singh");

//class 8 performing a task
function square(num) {
    return num*num;
}
console.log(square(20));
console.log(square(10));









