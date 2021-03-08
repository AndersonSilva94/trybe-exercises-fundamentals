function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Questão 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfMonth(){
  let daysOfMonth = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let days = document.createElement('li');
    days.innerText = day;
    days.className = 'day';
    if(day === 24 || day === 25 || day === 31) {
      days.className += ' holiday';  
    }
    if(day === 4 || day === 11 || day === 18 || day === 25) {
      days.className += ' friday';
    }
    daysOfMonth.appendChild(days)
  }
}
createDaysOfMonth();

//Questão 2
function createButtonHoliday(string){
  let insertButton = document.querySelector('.buttons-container')
  let buttonHoliday = document.createElement('button');
  buttonHoliday.innerText = string
  buttonHoliday.id = 'btn-holiday';
  insertButton.appendChild(buttonHoliday);
}
createButtonHoliday('Feriados');

//Questão 3
function changeBackgroundColor() {
  let clickButtonHoliday = document.querySelector('#btn-holiday');
  let holidays = document.getElementsByClassName('holiday');
  
  clickButtonHoliday.addEventListener('click', function(){
    for(let index = 0; index < holidays.length; index += 1){
      if(holidays[index].style.backgroundColor === 'white') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holidays[index].style.backgroundColor = 'white';
      }
    }
  })
}
changeBackgroundColor();

//Questão 4
function createButtonFriday(string){
  let insertButton = document.querySelector('.buttons-container')
  let buttonFriday = document.createElement('button');
  buttonFriday.innerText = string
  buttonFriday.id = 'btn-friday';
  insertButton.appendChild(buttonFriday);
}
createButtonHoliday('Sexta-feira');