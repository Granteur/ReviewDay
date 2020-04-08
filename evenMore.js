//1 - Write a program that prints 'Hello World' to the screen
console.log('Hello World');

//2 - Write a program that asks the user for their name and greets them with their name.
    /* var username = prompt("What is your name?");
    if (username!=null){
    console.log("Hello" + username);
    } */

//3- Modify the previous program such that only the users Alice and Bob are greeted with their names
var username = prompt("What is your name?");
if ((username !== 'Alice')||(username !== 'Bob')) {
    console.log('Unauthorized User: Please get Alice or Bob');
} else console.log("Hello " + username);

//4 - Write a program that asks the user for a number n & prints the sum of the numbers 1 to n
var n = prompt('Please enter a number');
var total = 0;
    for (var i = 0; i < n; i++){
        total = (total + i);
    } console.log(total);

//5 - Modify the previous program such that only multiples of 3 or 5 are considered in the sum
var n = prompt('Please enter a number');
var total = 0;
for (var i = 0; i < n; i++) {
    if ((i%3==0)||(i%5==0)){
    total = (total + i);
    }
} 
console.log(total);

//6 - Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1, ..., n.
var n = prompt('Please enter a number');
var choice = prompt("Please choose 's' for sum or 'p' for product");
var total = 0;
if (choice == 's'){
    for (var i = 0; i < n; i++){
        total = (total + i);
    }
 } else if (choice == 'p'){
     total = 1;
     for (var i = 1; i <= n; i++){
        total = ((total) * i);
    }
} else{
    console.log("Invalid Choice");
}
console.log(total);

//7 - Write a program that prints a multiplication table for numbers up to 12
for (let i = 0; i <= 12; i++){
    for (let j = 0; j <= 12; j++){
        console.log(i + " x " + j + " = " + (i*j));
    }
}

//