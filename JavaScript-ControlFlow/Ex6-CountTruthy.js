function countTruthy(array) {
    let count = 0;

    for (let i of array) {
        if (i === "Falsy" || i === false || i === 0 || i === null || i === '' || i === NaN) 
        {
            continue;
        }
        else { 
            count++; 
        }
        
    }
    return count;
}

let arr = ["Falsy", 1, 5, 8 , '',0,4];
console.log(countTruthy(arr));