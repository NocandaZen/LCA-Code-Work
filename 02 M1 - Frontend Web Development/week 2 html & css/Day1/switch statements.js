//1 - Sunny
//2 - Cloudy
//3 - Rain
let value = 1
switch ( value) {
    case 1:
        console.log("It is sunny");
        break;
     case 2:
        console.log("It is cloudy");
        break;
    case 3:
        console.log("It is raining");
        break;
    default:
        console.log("Couldnt read value");
        break;       
        
}


//version 2 of switch statements
let number = 5
switch (true) {
    case number %2==0:
        console.log('Number is even');
        break;
    default:
        console.log('Number is odd');
        break;
}

let num = 5
console.log(num>10? "This is true" :"This is not true" );

let num6 = 5
console.log(num6%2 ==0? "Even" :"Odd" );

let studAtLC = false
console.log(studAtLC? "you are a student at LC" : "you are not a student at LC");

