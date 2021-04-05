'use strict';

let money = +prompt('Ваш месячный доход?');
console.log(money);
let income = 'Фриланс';
console.log(typeof income);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);
let deposit = confirm('Если ли у вас депозит в банке?');
console.log(deposit);
let mission = 1500000;
let period = 6;


let expense = prompt('Введите первую обязательную статью расходов?');
let expense2 = prompt('Введите вторую обязательную статью расходов?');

let price = +prompt('Во сколько обойдется первая статья расходов?');
let price2 = +prompt('Во сколько обойдется вторая статья расходов?');

let budgetMonth = (money + price + price2) / 30;
console.log('Budget :', budgetMonth );

let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));

let monthMission = mission / budgetMonth;
console.log(Math.ceil(monthMission));

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if ( 600 <= budgetDay <= 1200) {
  console.log('У вас средний уровень дохода');
} else if ( 0 <= budgetDay <= 600) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  budgetDay < 0;
  console.log('Что то пошло не так');2
}


console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split());