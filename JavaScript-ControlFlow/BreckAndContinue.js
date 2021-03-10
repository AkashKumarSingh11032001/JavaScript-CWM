
// Break
let i = 0;
while (i <= 10) {

    if (i === 5) {
        console.log("Loop break");
        break;
    }
    else
        console.log(i);
    i++;
}

// Continue (not working )
let j = 0;
while (j <= 10) {

    if (j === 5) {
        console.log("Loop continue");
        continue;
    }
    else
        console.log(j);
    j++;

}