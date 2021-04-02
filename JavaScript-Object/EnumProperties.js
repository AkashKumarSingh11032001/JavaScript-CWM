

const circle = {
    rad: 1,
    draw() {
        console.log('draw');
    }
};

for(let key in circle){
    console.log(key, circle[key]);
}

for(let key of Object.key(circle)){
    console.log(key, circle[key]);
}
