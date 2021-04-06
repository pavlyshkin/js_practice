'use strict';

let money = +prompt('Ваш месячный доход?', '50000');
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);
let deposit = confirm('Если ли у вас депозит в банке?');
let mission = 1500000;
let period = 6;


let showTypeOf = function(data) {
  console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expense = prompt('Введите первую обязательную статью расходов?');
let expense2 = prompt('Введите вторую обязательную статью расходов?');


let price = +prompt('Во сколько обойдется первая статья расходов?');
let price2 = +prompt('Во сколько обойдется вторая статья расходов?');



function getEspensesMonth(a,b) {
  return price + price2;
}
getEspensesMonth();
console.log('Сумма расходов на месяц:', getEspensesMonth());

function  getAccumulatedMonth() {
  return money - (price + price2);
}
getAccumulatedMonth();
console.log('Накопления за месяц составили: ', getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
 return mission / getAccumulatedMonth();
}
getTargetMonth();
console.log('Сколько месяцев понадобиться:', getTargetMonth());


let budgetDay = accumulatedMonth / 30;
console.log(`Бюджет на день : ${Math.floor(budgetDay)}`, Math.floor(budgetDay));

let getStatusIncome = function () {
    if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if ( 600 <= budgetDay <= 1200) {
    return ('У вас средний уровень дохода');
  } else if ( 0 <= budgetDay <= 600) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    budgetDay < 0;
    return('Что то пошло не так');
  }
};
getStatusIncome();
console.log(getStatusIncome());

