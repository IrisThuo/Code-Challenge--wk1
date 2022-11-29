//Speed Detector
//Initialise Car speed Variable and Points
const prompt = require("prompt-sync")();
let carSpeed=prompt('enter speed');

let points=((carSpeed-70)/5);

//Set conditions for speed limit

if(carSpeed <= 70){
    console.log('Ok');
}
else if(points>=12){
    console.log(`You have ${points} demerit points, License suspended`);
}
else if(carSpeed > 70 && points<12){
    console.log(points);
}