// pass by refrence
let x1 = {value: 10};
let y1 = x1;

x1.value = 20;

// pass by value
let x2 = 10;
let y2 = x2;

x2 = 20;

// eg 2

let num = 10;
function inc(num){
    num++;
}

inc(num);
console.log(num); // by value 

// eg 3
let obj = {value: 10};
function inc(obj){
    obj.value++;
}

inc(obj);
console.log(obj); // by value

