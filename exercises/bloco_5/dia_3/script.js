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
createButtonFriday('Sexta-feira');

//Questão 5
function changeFridayDay() {
  let arrayFriday = [4, 11, 18, 25];
  let clickButtonFriday = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  clickButtonFriday.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if(fridays[index].innerText !== 'É sexta!'){
        fridays[index].innerText = 'É sexta!';
      } else {
        fridays[index].innerText = arrayFriday[index]
      }
    }
  })
}
changeFridayDay();

//Questão 6
let days = document.getElementById('days');
function mouseOver() {
  days.addEventListener('mouseover', function(e) {
    e.target.style.fontSize = "40px"
  });
}
function mouseOut(){
  days.addEventListener('mouseout', function(e){
    e.target.style.fontSize = "20px";
  })
}
mouseOver();
mouseOut();

//Questão 7
function addTasks(string) {
  let divTasks = document.querySelector('.my-tasks');
  let textTasks = document.createElement('span');
  textTasks.innerText = string;
  divTasks.appendChild(textTasks);
}
addTasks('exercitar muito!');

//Questão 8
function subtitleColors(cor) {
  let divTasks = document.querySelector('.my-tasks');
  let divColor = document.createElement('div');
  divColor.className = 'task';
  divColor.style.backgroundColor = cor;
  divTasks.appendChild(divColor);
}
subtitleColors("purple");
subtitleColors("green");
subtitleColors("aquamarine");

//Questão 9
function setTaskClass() {
  let listTasks = document.querySelector('.my-tasks');
  listTasks.addEventListener('click', function(event) {
    let myTasks = document.querySelectorAll('.task')  
    let eventTask = event.target;
    for (let index = 0; index < myTasks.length; index += 1) {
      myTasks[index].classList.remove('selected');
      if(eventTask.className === 'task')
        eventTask.classList.add('selected');
    }
  });
};

setTaskClass();

// Questão 10
function addEvent() {
  let days = document.getElementById('days');
  days.addEventListener('click', (e) => {
    let eventTarget1 = e.target;
    let selected = document.querySelector('.selected');
    let listDay = document.getElementsByClassName('day');
    for (let index = 0; index < listDay.length; index += 1) {
      if (listDay[index].classList.contains('day') && eventTarget1.style.color === selected.style.backgroundColor) {
        eventTarget1.style.color = 'rgb(119,119,119)';
      } else {
        eventTarget1.style.color = selected.style.backgroundColor;
      }
    }
  })
}
addEvent()

// Questão Bônus
function addInputTasks() {
  let buttonAdd = document.getElementById('btn-add');
  let inputValue = document.getElementById('task-input');
  buttonAdd.addEventListener('click', a)
  inputValue.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
      a();
    }
  })

  function a () {
    let divTasks = document.querySelector('.my-tasks');
    let inputValue = document.getElementById('task-input');
    if (inputValue.value === ''){
      alert('Digite uma tarefa!');
      inputValue.value = '';
    } else {
      let task = document.createElement('p');
      task.innerText = inputValue.value;
      inputValue.value = '';
      divTasks.appendChild(task);
    }
  }
}
addInputTasks()