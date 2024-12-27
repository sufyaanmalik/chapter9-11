// Question # 1

function myFunction() {

let a = document.getElementById("userInput").value.toLowerCase();


if(a == "karachi"){
    alert("Welcome To City of Lights");
} else if (a == "multan"){
    alert("Welcome to City of Auliya");
} else if (a == "lahore"){
    alert("Welcome to City of Punjab");
} else if (a == "islamabad"){
    alert("Welcome to Capital of Pakistan");
}

}

// Question # 2

function myFunction1() {

    let b = document.getElementById("userInput1").value;
    
    
    if(b == "Male"){
        alert("Good Morning Sir");
    } else if (b == "Female"){
        alert("Good Morning Madam");
    }
    
}

document.write("<h2>Answer 6</h2>");
document.write("<h4>Marksheet</h4>");


let obt1 = +prompt("Enter Obtained Marks to Subject 1");
let obt2 = +prompt("Enter Obtained Marks to Subject 2");
let obt3 = +prompt("Enter Obtained Marks to Subject 3");

let total_marks = 100;
let totalObtainMarks = obt1 + obt2 + obt3;
let totalPrecent = totalObtainMarks / 300 * 100;
let grade;

document.write("Total Marks is: " + "300" + "<br>");
document.write("Marks Obtained is: " + totalObtainMarks + "<br>");
document.write("Your Percentage is: " + totalPrecent + "%" + "<br><br>");

if(totalPrecent >= 80){
    grade = "A+ Grade Excellent";
} else if (totalPrecent >= 70){
    grade = "A Grade Good";
} else if (totalPrecent >= 60){
    grade = "B Grade Needs Improvement";
}
 else {
    grade = "Fail Sorry";
}
document.write(grade);



document.write("<h2>Answer 7</h2>");
document.write("<h4>Secret Number</h4>");

let secNumber = 5;
let abc = prompt("Guess The Secret Number");

if (abc == 5){
    document.write("Bingo, Correct Answer");
} else if (abc == 6) {
    document.write("Close Enough");
} else {
    document.write("Try Again");
}


document.write("<h2>Answer 8</h2>");

let number = +prompt("Enter a number to check if it's divisible by 3:");

if (number % 3 === 0) {
     document.write(number + " is divisible by 3.");
} else {
    document.write(number + " is not divisible by 3.");

}

function myFunction2() {
    let yz = document.getElementById("userInput2").value;

    if(yz > 40){
        alert("Its To Hot Outside");
    } else if (yz > 30){
        alert("Today Wheather is Normal");
    } else if (yz > 20){
        alert("Today Is Cold");
    } else if (yz > 10){
        alert("OMG! Wheather is So Cold");
    }
}