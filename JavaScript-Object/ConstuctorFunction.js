// FActory Function
function createCircle(radius) {
    return {

        radius, //radius: radius,
        draw() {
            console.log('draw');
        }
    };

}


// Constructor Function(this and new keyword is used is constructor)

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
} 

const circle = new Circle(1);
const x = {};