'use strict';

let money = +prompt('Ваш месячный доход?');
console.log(typeof money);
let income = 'Фриланс';
console.log(typeof income);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(typeof addExpenses);
let deposit = confirm('Если ли у вас депозит в банке?');
console.log(typeof deposit);
let mission = 1500000;
let period = 6;


let expense = prompt('Введите первую обязательную статью расходов?');
console.log(typeof expense);
let expense2 = prompt('Введите вторую обязательную статью расходов?');
console.log(typeof expense2);

let price = +prompt('Во сколько обойдется первая статья расходов?');
console.log(typeof price);
let price2 = +prompt('Во сколько обойдется вторая статья расходов?');
console.log(typeof price2);


let budgetMonth = (money + price + price2) / 30;
console.log('Бюджет на месяц :', budgetMonth );

let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay), `Бюджет на день : ${budgetDay} `);

let monthMission = mission / budgetMonth;
console.log(Math.ceil(monthMission), `Цель будет достигнута за ${monthMission} месяцев (-а)`);

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if ( 600 <= budgetDay <= 1200) {
  console.log('У вас средний уровень дохода');
} else if ( 0 <= budgetDay <= 600) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  budgetDay < 0;
  console.log('Что то пошло не так');
}
