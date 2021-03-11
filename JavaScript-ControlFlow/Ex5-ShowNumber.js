function oddEven(n){
    if(n %2 === 0) return "Even";
    else return "Odd";

}

function showNumber(num) {

    for(let i = 0; i<= num; i++){
        console.log(i + " " + oddEven(i));
    }
}

showNumber(10);