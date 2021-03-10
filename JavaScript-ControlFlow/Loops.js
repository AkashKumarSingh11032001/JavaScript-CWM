
//For
//While
//Do while
//For in
//For of

// For Loop
for(let i =0; i <10 ;i++){
    console.log(i + " Hello");
}
console.log("*****");

//while Loop
let j = 0;
while(j < 10){
    console.log(j + " Hello");
    j++;
}
console.log("*****");

// DO While Loop
let k = 0;
do{
    console.log(k + " Hello");
    k++;
}while(k < 10);
console.log("*****");

// For In Loop ( data + value )
const person = {
    name: "Akash",
    age: 20
};
for(let i in person) console.log(i, person[i]);

console.log("*****");

//eg2
const colors = ['red','green','blue'];

for(let i in colors) console.log(i, colors[i]);

console.log("*****");

// For Of Loop (direct value)
const colors2 = ['red','green','blue'];

for(let i of colors2) console.log(i);

console.log("*****");
