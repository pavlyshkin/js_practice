'use strict';


const buttonStart = document.getElementById('start');
const buttonIncomeAdd = document.getElementsByTagName('button')[0];
const buttonExpensesAdd = document.getElementsByTagName('button')[1];
const checkDeposit = document.querySelector('#deposit-check');
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const additionalIncomeItems = document.querySelectorAll('.additional_income-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const budgetDayValue = document.getElementsByClassName('result-total')[1];
const expensesMonthValue = document.getElementsByClassName('result-total')[2];
const additionalIncomeValue = document.getElementsByClassName('result-total')[3];
const additionalExpensesValue = document.getElementsByClassName('result-total')[4];
const incomePeriodValue = document.getElementsByClassName('result-total')[5];
const targetMonthValue = document.getElementsByClassName('result-total')[6];









// const isNumber = function (n){
//     return !isNaN(parseFloat(n)) && isFinite(n);
// };

// const isString = function (str, query) {
//     while (!isNaN(str || str.trim() === '' || str === null)) {
//         str = prompt('Данное значение не яляется допустимым! Введите другое значение! \n' + query);
//     }
//     return str;
// };

// let money,
//     start = function() {
//         do {
//             money = prompt('Ваш месячный доход?');
//         } while (!isNumber(money) || money < 0);

//     };

// start();

// let appData = {
//     income: {},
//     addIncome: [],
//     expenses: {},
//     addExpenses: [],
//     deposit: false,
//     percentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 50000,
//     period: 3,
//     budget: money,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     asking: function() {

//         if(confirm('Если у вас дополнительный источник заработка?')){
//             let itemIncome = prompt('Какой у вас есть допольнительный заработок?');
//             let cashIncome = prompt('Сколько в  месяц вы на этом зарабатываете? ');
//             while (!isNumber(cashIncome) || cashIncome < 0) {
//                 cashIncome = prompt('Сколько Вы на этом зарабатываете?');
//             }
//             appData.income[itemIncome] = +cashIncome;
//         }

//         let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//         appData.addExpenses = addExpenses.toLowerCase().split(', ');
//         appData.deposit = confirm('Есть ли у Вас депозит в банке?');

//         for (let i = 0; i < 2; i++) {
//             let expenseName = prompt('Введите обязательную статью расходов');
//             let expenseValue = prompt('Во сколько эта статья обойдется?');
//             while (!isNumber(expenseValue)) {
//                 expenseValue = prompt('Во сколько эта статья обойдется?');
//             }
//             appData.expenses[expenseName] = +expenseValue;
//         }
//     },
//     getExpensesMonth: function() {
//         let sum = 0;
//         for (const item in appData.expenses) {
//             sum += appData.expenses[item];
//         }
//         appData.expensesMonth = sum;
//     },
//     getBudget: function() {
//         appData.budgetMonth = appData.budget - appData.expensesMonth;
//         appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//     },
//     getTargetMonth: function() {
//         if (appData.budgetMonth <= 0) {
//             console.log('Цель не будет достигнута');
//         } else {
//             let targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
//             console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
//         }
//     },
//     getStatusIncome: function() {
//         if ( appData.budgetDay > 1200 ) {
//             console.log('У Вас высокий уровень дохода');
//         } else if ( appData.budgetDay > 600 && appData.budgetDay <= 1200 ) {
//             console.log('У Вас средний уровень дохода');
//         } else if ( appData.budgetDay > 0 && appData.budgetDay <= 600 ) {
//             console.log('К сожалению, у вас уровень дохода ниже среднего');
//         } else {
//             console.log('Что то пошло не так');
//         }
//     },
//     getInfoDeposit: function () {
//         if(appData.deposit){
//             appData.percentDeposit = prompt('Какой годовой процент?');
//             while (!isNumber(appData.percentDeposit) || appData.percentDeposit < 0) {
//                 appData.percentDeposit = prompt('Какой годовой процент?');
//             }
//             appData.moneyDeposit = prompt('Какая сумма заложена?');
//             while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit < 0) {
//                 appData.moneyDeposit = prompt('Какая сумма заложена?');
//             }
//         }
//     },
//     calcsavedMoney: function () {
//         return appData.budgetMonth * appData.period;
//     }
// };


// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();

// console.log('Расходы на месяц' + appData.expenses);

// appData.getTargetMonth();
// appData.getStatusIncome();
// appData.getInfoDeposit();


// console.log('Наша программа включает в себя данные:');
// for (const item in appData) {
//     console.log('Свойство: ', item, ' Значение: ', appData[item]);
// }
// for (let item in appData.addExpenses) {
//     let newString = '';
//     for (let i = 0; i < appData.addExpenses[item].length; i++) {
//         if (i === 0) {
//             newString += appData.addExpenses[item][i].toUpperCase();
//         } else {
//             newString += appData.addExpenses[item][i];
//         }
//     }
//     appData.addExpenses[item] = newString;
// }

// console.log(appData.addExpenses.join(', '));
