
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
} 

Circle.name;
Circle.length

const another = new Circle(1);