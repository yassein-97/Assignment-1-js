// ---------------------- (1) -------------------------
// var number = Number(prompt("Enter a Number"));
// console.log(number);
// document.getElementById("result").innerHTML = "You Entered "+number;

// ---------------------- (2) -------------------------
// var number = Number(prompt("Enter a Number"));

// if(number%3==0 && number%4==0){
//     console.log("Yes");
//     document.getElementById("result").innerHTML = "Yes";
// }
// else{
//     console.log("No");
//     document.getElementById("result").innerHTML = "No";
// }
// ---------------------- (3) -------------------------
// var number1 = Number(prompt("Enter the first Number"));
// var number2 = Number(prompt("Enter the second Number"));

// if(number1>number2){
//     console.log(number1);
//     document.getElementById("result").innerHTML = "the max number is "+ number1;
// }
// else{
//     console.log(number2);
//     document.getElementById("result").innerHTML = "the max number is "+ number2;
// }
// ---------------------- (4) -------------------------
// var number = Number(prompt("Enter a Number"));

// if(number<0){
//     console.log("negative");
//     document.getElementById("result").innerHTML = "negative";
// }
// else{
//     console.log("positive");
//     document.getElementById("result").innerHTML = "positive";
// }
// ---------------------- (5) -------------------------
// var number1 = Number(prompt("Enter the first Number"));
// var number2 = Number(prompt("Enter the second Number"));
// var number3 = Number(prompt("Enter the third Number"));

// if(number1>number2 && number1>number3){
//     console.log("Max element = " + number1);
//     document.getElementById("result").innerHTML = "the max element is "+ number1;
//     if(number2>number3){
//         console.log("min element = " + number3);
//         document.getElementById("result2").innerHTML = "the min element is "+ number3;
//     }
//     else{
//         console.log("min element = " + number2);
//         document.getElementById("result2").innerHTML = "the min element is "+ number2;
//     }
// }

// else if(number2>number1 && number2>number3){
//     console.log("Max element = " + number2);
//     document.getElementById("result").innerHTML = "the max element is "+ number2;
//     if(number1>number3){
//         console.log("min element = " + number3);
//         document.getElementById("result2").innerHTML = "the min element is "+ number3;
//     }
//     else{
//         console.log("min element = " + number1);
//         document.getElementById("result2").innerHTML = "the min element is "+ number1;
//     }
// }

// else{
//     console.log("Max element = " + number3);
//     document.getElementById("result").innerHTML = "the max element is "+ number3;
//     if(number1>number2){
//         console.log("min element = " + number2);
//         document.getElementById("result2").innerHTML = "the min element is "+ number2;
//     }
//     else{
//         console.log("min element = " + number1);
//         document.getElementById("result2").innerHTML = "the min element is "+ number1;
//     }
// }
// ---------------------- (6) -------------------------
// var number = Number(prompt("Enter the Number"));

// if(number%2==0){
//     console.log('even');
//     document.getElementById("result").innerHTML = "even";
// }
// else{
//     console.log('odd');
//     document.getElementById("result").innerHTML = "odd";
// }
// ---------------------- (8) -------------------------
// var letter = prompt("Enter a one character");

// if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
//     console.log("vowel");
//     document.getElementById("result").innerHTML = "vowel";
// }
// else{
//     console.log("consonant");
//     document.getElementById("result").innerHTML = "consonant";
// }

// ---------------------- (9) -------------------------
// var number = Number(prompt("Enter a Number"));

// for(var i =1; i<=number;i++){
//     console.log(i);
// }
// ---------------------- (10) -------------------------
// var number = Number(prompt("Enter a Number"));

// for(var i=1; i<=12 ; i++){
//     var result = i * number;
//     console.log(result);
// }
// ---------------------- (11) -------------------------
// var number = Number(prompt("Enter a Number"));

// for(var i =1; i<=number;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }
// ---------------------- (12) -------------------------
// var number1 = Number(prompt("Enter a Number"));
// var number2 = Number(prompt("Enter a Number"));
// var result = 1;
// for(var  i=1 ; i<= number2; i++){
//     result*= number1;
// }
// console.log(result);
// ---------------------- (12) -------------------------
/*var mark1 = Number(prompt("Enter a mark1"));
var mark2 = Number(prompt("Enter a mark2"));
var mark3 = Number(prompt("Enter a mark3"));
var mark4 = Number(prompt("Enter a mark4"));
var mark5 = Number(prompt("Enter a mark5"));

var total = mark1 + mark2 + mark3 + mark4 + mark5;
var average = (mark1 + mark2 + mark3 + mark4 + mark5)/5;
var percentage = (mark1 + mark2 + mark3 + mark4 + mark5)/5;

console.log("Total marks = "+ total);
console.log("Average marks = "+ average);
console.log("Percentage marks = "+ percentage + "%");*/

//another way
/*var result=0; 
for(var i=1 ; i<=5 ; i++){
    var mark = Number(prompt("Enter your mark mark"));
    result += mark; 
}
console.log("Total marks = "+ Number(result));
console.log("Average marks = "+ Number(result/5));
console.log("Percentage marks = "+ Number(result/5) + "%");*/
// ---------------------- (13) -------------------------
/*31 ==> 1,3,5,7,8,10,12
30 ==> 4,6,9,11
29 ==> 2*/
// var monthNumber = Number(prompt("Enter Month  Number"));

// if(monthNumber ==2){
//         console.log("Days in Month: 29");
// }
// else if(monthNumber==4 || monthNumber==6 || monthNumber==9 || monthNumber==11){
//     console.log("Days in Month: 30");
// }
// else{
//     console.log("Days in Month: 31");
// }
// ---------------------- (14) -------------------------

// for(var i=1 ; i<=5 ; i++){
//     var grade = prompt("enter your grade");
//     if(grade >= 90){
//         console.log(grade+"%: "+"Grade is A");
//     }
//     else if(grade >= 80){
//         console.log(grade+"%: "+"Grade is B");
//     }
//     else if(grade >= 70){
//         console.log(grade+"%: "+"Grade is C");
//     }
//     else if(grade >= 60){
//         console.log(grade+"%: "+"Grade is D");
//     }
//     else if(grade >= 40){
//         console.log(grade+"%: "+"Grade is E");
//     }
//     else{
//         console.log(grade+"%: "+"Grade is F");
//     }
// }
// ---------------------- (15) -------------------------
// var monthNumber = Number(prompt("Enter Month  Number"));
// switch(monthNumber){
//     case 2:
//         console.log("Days in Month: 29");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Days in Month: 30");
//         break;
//     default:
//         console.log("Days in Month: 31");
// }
// ---------------------- (16) -------------------------
// var letter = prompt("Enter a one character");

// switch(letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("vowel");
//         document.getElementById("result").innerHTML = "vowel";
//         break;
//     default:
//         console.log("consonant");
//         document.getElementById("result").innerHTML = "consonant";
// }
// ---------------------- (17) -------------------------
// var number1 = Number(prompt("Enter the first Number"));
// var number2 = Number(prompt("Enter the second Number"));

// switch(true){
//     case number1>number2:
//         console.log(number1);
//         document.getElementById("result").innerHTML = "the max number is "+ number1;
//         break;
//     default:
//         console.log(number2);
//         document.getElementById("result").innerHTML = "the max number is "+ number2;
//         break;
// }
// ---------------------- (18) -------------------------
// var number = Number(prompt("Enter the Number"));

// switch(true){
//     case number%2==0:
//         console.log('even');
//         document.getElementById("result").innerHTML = "even";
//         break;
//     default:
//         console.log('odd');
//         document.getElementById("result").innerHTML = "odd";
// }
// ---------------------- (19) -------------------------
// var number = Number(prompt("Enter a Number"));

// switch(true){
//     case number<0:
//         console.log("negative");
//         document.getElementById("result").innerHTML = "negative";
//         break;
//     case number>0:
//         console.log("positive");
//         document.getElementById("result").innerHTML = "positive";
//         break;
//     default:
//         console.log("zero");
//         document.getElementById("result").innerHTML = "zero";
// }
// ---------------------- (20) -------------------------

var number1 = Number(prompt("Enter the first number"));
var opration = prompt("slect an opration from (+) (-) (*) (/) (^)");
var number2 = Number(prompt("Enter the second number"));

switch (opration) {
  case "+":
    var result = number1 + number2;
    console.log(number1 + " + " + number2 + " = " + result);
    break;
  case "-":
    var result = number1 - number2;
    console.log(number1 + " - " + number2 + " = " + result);
    break;
  case "*":
    var result = number1 * number2;
    console.log(number1 + " * " + number2 + " = " + result);
    break;
  case "/":
    var result = number1 / number2;
    console.log(number1 + " / " + number2 + " = " + result);
    break;
  case "^":
    var result = 1;
    for (var i = 1; i <= number2; i++) {
      result *= number1;
    }
    console.log(number1 + " ^ " + number2 + " = " + result);
    break;
}
