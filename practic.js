let money = prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
let secondQuestion = prompt("Во сколько обойдется?");
let expenses = {
    firstAnswer:firstQuestion,
    secondQuestion: secondQuestion
};
let optionalExpenses = {

};
let anotherMoney = [];


let appData ={
    budget: money,
    timeDate: time,
    anyMoney:firstQuestion,
    savings: false,
    income:anotherMoney

};

console.log('Ваш бюджет на месяц' +' '+ appData.budget / 30)






// let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
// let secondQuestion = prompt("Во сколько обойдется?");
// let expenses = {
//     firstAnswer:firstQuestion,
//     secondQuestion: secondQuestion
// };
