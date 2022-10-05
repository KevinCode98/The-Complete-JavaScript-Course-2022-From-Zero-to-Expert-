// let js = "amazing";
// if (js === "amazing") {
//   alert("JavaScript is FUN!");
// }
/*
console.log(40 + 8 + 23 - 10);
console.log("Kevin");
console.log(23);

let firstName = "Roberto";

console.log(firstName);
console.log(firstName);
console.log(firstName);


let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Programer';
let job2 = 'Teacher';

console.log(myFirstJob);


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
console.log("------------------------------------------------");

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Kevin');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(typeof year);

console.log(typeof null);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
console.log("------------------------------------------------");


let age = 30;
age = 31;

const birthYear = 1998;
// ERRORS
// -> birthYear = 1990;
// -> const job;

// Don't use var
var job = 'programer';
job = 'teacher';

let lastName = 'Carrillo';
console.log(lastName);


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
console.log("------------------------------------------------");
let now = 2022;
const ageKevin = now - 1998;
const ageLuis = now - 1990;
console.log(ageKevin, ageLuis);

console.log(ageKevin * 2, ageLuis / 10, 2 ** 3);
// 2 ** 3 ,eams 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Kevin';
const lastName = 'Carrillo';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // 25
x *= 4; // 100
x++; // 101
x--; // 100
x--; // 99
console.log(x);

// Comparison operators
console.log(ageKevin > ageLuis);
console.log(ageLuis >= 18);

const isFullAge = ageKevin >= 18;
console.log(now - 1991 > now - 2018);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
console.log("------------------------------------------------");
let now = 2037;
const ageKevin = now - 1998;
const ageLuis = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageKevin + ageLuis) / 2;
console.log(ageKevin, ageLuis, averageAge);


////////////////////////////////////////////////////////////////
// Coding Challenge #1

  /
  Mark and Jhon are trying to compare their BMI  (Body
    Mass Index), which is calculated using the formula:
    BMI = mass / height ** 2 = mass (height * height).
    (mass in kg and height in meter).

    1. Store Mark's and John's mass and height in variables
    2. Calculateboth their BMI's using the formula (you
      can even implement both versions)
    3. Create a boolean variable 'markHigherBMI'
    containing information about whether Mark has a higher BMI than John

      GOOD LUCK!
    /

const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJhon / (heightJhon * heightJhon);
const markHigherBMI = BMIMark > BMIJhon;

console.log(BMIMark, BMIJhon, markHigherBMI);


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
console.log("------------------------------------------------");

const firstName = "Jonas";
const birthYear = 1998;
let year = 2022;
let job = 'Programer';

const jonas = "I,m " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a  ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);
console.log('String \n\
multiple \n\
lines');


console.log(`String
multiple \n\
lines`);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
console.log("------------------------------------------------");

const age = 15;
if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
console.log("------------------------------------------------");
// Coding Challenge #2

const massMark = 95;
const heightMark = 1.88;
const massJhon = 85;
const heightJhon = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJhon / (heightJhon * heightJhon);

if (BMIMark > BMIJhon) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJhon}) !`);
} else {
  console.log(`John's BMI (${BMIJhon}) is higher than Mark's (${BMIMark}) !`);
}


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
console.log("------------------------------------------------");

// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);

let n = '1' + 1;
n = n - 1;
console.log(n);

*/
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
console.log("------------------------------------------------");

// Truthy and Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
