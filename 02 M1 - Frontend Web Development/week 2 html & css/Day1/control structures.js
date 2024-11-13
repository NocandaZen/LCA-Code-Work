let myString = 'Somethings'

if (myString == "Something") {
    console.log('The string is equal to Something');
    
}else if(typeof myString == 'string'){
    console.log('The string is a string but it is not equal to Something');
    
}
 else {
    console.log('The string is not equal to Something');
    

}





let age =20

if (age>=18){
    console.log("You qualify for your drivers");
    
} else if (age>=16 || age<18){
    console.log("You qualify for your learners and not drivers" );
    
}else {
    console.log("you are too young");
    

}

//even numbers
let num = 5
if (num % 2 == 0) {
    console.log('Even');
    
} else{
    console.log('Odd');
    
}

//Matthew wrote 3 exams and received; Maths 56%, Physics:71%, English: 55%
//Calculate the average and chcek whether or not 
let physics = 71
let maths = 98
let english = 79
let marks_aver = (physics + maths + english)/ 3;
console.log(marks_aver);
average_mark = 60.66
if(marks_aver >= 90){
    console.log("grade: A");
}else if(marks_aver >= 80){
    console.log("grade: B");
}else if(marks_aver >= 70){
    console.log("grade: C");
}else if(marks_aver >= 60){
    console.log("grade: D");
}else{
    console.log("grade: F");
}