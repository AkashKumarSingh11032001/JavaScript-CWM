function calculateGrade(marks) {
    let sum = 0;
    for(let i of marks){
        sum += i ;
    }
    let avg = 0;
    avg = sum / marks.length;
    console.log("Average : ",avg);

    if(avg >= 90 && avg <= 100) return "A";
    else if (avg >= 80 && avg <= 89) return "B";
    else if (avg >= 70 && avg <= 79) return "C";
    else if (avg >= 60 && avg <= 69) return "D";
    else return "F";

}
 let scores = [80,80,50];
console.log(calculateGrade(scores));