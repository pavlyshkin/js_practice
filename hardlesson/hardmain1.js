let lang = 'ru';
if (lang == 'ru') {
   arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
} else if (lang == 'en') {
  arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday' ,'Saturday', 'Sunday'];
}
console.log(arr);

switch (lang) {
  case 'ru':
    arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    break;
  case 'en':
     arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday' ,'Saturday', 'Sunday'];
    break;
}
console.log(arr);

let array = {
  'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday' ,'Saturday', 'Sunday'],
}
console.log(array[lang]);


let namePerson = 'Артем';
namePerson = true ? console.log('Директор') : console.log('Студент');
namePerson = 'Максим' ? console.log('Преподаватель') : console.log('Студент');
namePerson = false ? console.log('Преподаватель') : console.log('Студент');
