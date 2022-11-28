//Student Grade Generator
//prompt user to enter marks

let studentMarks = prompt('Please Enter Student Marks', studentMarks);

//assign different marks to different grades using if..else if..esle
//using logical operators to assign range


if(studentMarks >=80 && studentMarks <=100){
    console.log('Grade A');
}
else if(studentMarks <=79 && studentMarks >=60){
    console.log('Grade B');
}
else if(studentMarks <=59 && studentMarks >=49){
    console.log('Grade C');
}
else if(studentMarks <=48 && studentMarks >=40){
    console.log('Grade D');
}
else if(studentMarks < 40){
    console.log('Grade E');
}
else{
    console.log('Invalid Input');
}
