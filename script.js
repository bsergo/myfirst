'use strict'
/* 
//Типы данных
var number =5;                  // числовое
var string = "Hello!";          // строка
var sym =Symbol();              // символ
var boolean = true;             // логическое
null;                           // то чего не существует
undefined;
var obj ={}; 


console.log(4/0);
console.log('string'*9);
*/

//обьект
// let persone ={
//     name: "John",
//     age: 25,
//     isMarried: false

// };
// console.log(persone.name);     // 1й способ вывести свойства обьекта
// console.log(persone["name"]);  // 2й способ вывести свойства обьекта

// массив
// let arr = ['plum.png','orange.jpg','apple.bmp'];
// console.log(arr[0]) // Номерация начинается с 0

//alert("Hello world!")

//let answer = confirm("Are you here?");
//console.log (answer);

// let answer = prompt("Есть ли вам 18??", "да");
//console.log (typeof(arr));

// console.log("arr" + " -object")


// let incr = 10,
//     decr = 10;

// console.log(incr++);
// console.log(decr--);
// console.log(5%2);
// console.log("2" === 2);
// let isChecked = true;
// let isClose = false;
// console.log(isChecked && isClose); //щператор "И"
// console.log(isChecked || isClose) ; // оператор "или"

// if(2*4==9){
//     console.log("Верное")
// } else {
//     console.log("Неверно")
// }
let num = 50;

if (num < 49){
    console.log("Неверно")
} else if (num >100){
    console.log ("МНого")
} else {
    console.log("Вено")
};
let num = 50;
switch(num){
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log ("МНого");
        break;
    case num > 80:
        console.log ("МНого");
        break;
    case 50:
        console.log("Верно");
        break;
    default:
        console.log("Что то пошло не так");
        break;
}



