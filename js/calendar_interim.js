const dropList = ["Chest", "Helmet", "Legs", "Arms"]
const sectorList = [
  // Season 16 - Season of the Risen
  "Veles Labyrinth", "Exodus Garden 2A",
  "Aphelion’s Rest", "Bay of Drowned Wishes", "Chamber of Starlight",
  "K1 Revelation", "K1 Crew Quarters", "K1 Logistics",
  "Metamorphosis", "Throne World?", "Throne World?"
]

function toDays(x) {
  x = x / 1000 / 60 / 60 / 24;
  x = Math.floor(x + 1);
  return x;
}

function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g,'-') // replace space with dash
    .replace(/’/g,"'") // replace curly quote with straight quote
    ;
}

function getId(day, list) {
  let arrayId = 0;

  for (i = 1; i <= day; i++) {
    if (i != arrayId) {
      if (arrayId < list.length) {
        arrayId += 1;
      } else {
        arrayId = 1;
      }
    }
  }
  arrayId -= 1; // get zero-index
  return arrayId;
}


let dropId = 0; 
let sectorId = 0;


let febStart = new Date(Date.UTC(2022, 1, 1, 17, 0, 0));

let marStart = new Date(Date.UTC(2022, 2, 1, 17, 0, 0));

const seasonLostStart = new Date(Date.UTC(2021, 7, 24, 17, 0, 0));
const seasonLostEnd = new Date(Date.UTC(2022, 1, 22, 18, 0, 0));


let seasonRisenStart = new Date(Date.UTC(2022, 1, 22, 17, 0, 0));
let seasonRisenEnd = new Date(Date.UTC(2022, 4, 24, 17, 0, 0));


let todayDrop;
let todaySector;


function Month(days, before, after, start, end) {
  this.days = days;
  this.before = before;
  this.after = after;
  this.start = start;
  this.end = end;
}

const feb = new Month(28, 2, 5, new Date(Date.UTC(2022, 1, 1, 17, 0, 0)), new Date(Date.UTC(2022, 2, 1, 17, 0, 0)));
const mar = new Month(31, 2, 2, new Date(Date.UTC(2022, 2, 1, 17, 0, 0)), new Date(Date.UTC(2022, 3, 1, 17, 0, 0)));

const main = document.querySelector('main');

function buildDay(month) {
  let day = document.createElement('li');
  day.classList.add('day', 'day--active');
  day.innerHTML = `
    <p class="ls-name"><a href="/sector/${toSlug(todaySector)}">${todaySector}</a></p>
    <p class="ls-drop">${todayDrop}</p>
  `;
  month.appendChild(day);
}

function getSeasonDay(month) {
  let seasonDay = month.start - seasonRisenStart;
  console.log(seasonDay);
}


function cycleId(id, list) {
  if (id < (list.length - 1)) {
    id += 1;
  } else {
    id = 0;
  }
  return id;
}



function buildInterimCalendar(month) {
  let monthName = month.start.toLocaleString('default', { month: 'long' });
  let year = month.start.toLocaleString('default', { year: 'numeric' });

  let firstDaySectorId = getId(1, sectorList);
  let firstDayDropId = getId(1, dropList);

  let newMonth = document.createElement('section');
  newMonth.classList.add('calendar-wrapper');
  newMonth.innerHTML = `
    <h2 class="month-label">${monthName} ${year}</h2>
    <ol class="calendar calendar--${monthName}">
      <li class="day-label">Sunday</li>
      <li class="day-label">Monday</li>
      <li class="day-label">Tuesday</li>
      <li class="day-label">Wednesday</li>
      <li class="day-label">Thursday</li>
      <li class="day-label">Friday</li>
      <li class="day-label">Saturday</li>
    </ol> 
  `;
  main.appendChild(newMonth);
  let newMonthCalendar = document.querySelector(`.calendar--${monthName}`);

  for (i = 0; i < month.before; i++) {
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    newMonthCalendar.appendChild(day);
  }

  // for last season days
  for (i = 0; i < 21; i++) {
    let newDay = document.createElement('li');
    newDay.classList.add('day', 'day--active', 'day--last');
    newDay.innerHTML = `
      <p class="ls-name"> </p>
      <p class="ls-drop"></p>
    `;
    newMonthCalendar.appendChild(newDay);
  }

  for (i = 0; i < 7; i++) {

    todayDrop = dropList[firstDayDropId];
    todaySector = sectorList[firstDaySectorId];

    let newDay = document.createElement('li');
    newDay.classList.add('day', 'day--active');
    newDay.innerHTML = `
      <p class="ls-name"><a href="/sector/${toSlug(todaySector)}">${todaySector}</a></p>
      <p class="ls-drop">${todayDrop}</p>
    `;
    newMonthCalendar.appendChild(newDay);

    firstDayDropId = cycleId(firstDayDropId, dropList);
    firstDaySectorId = cycleId(firstDaySectorId, sectorList);
  }

  for (i = 0; i < month.after; i++) {
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    newMonthCalendar.appendChild(day);
  }
}

function buildCalendar(month) {
  let monthName = month.start.toLocaleString('default', { month: 'long' });
  let year = month.start.toLocaleString('default', { year: 'numeric' });
  let firstDay = toDays(month.start - seasonRisenStart);

  let firstDaySectorId = getId(firstDay, sectorList);
  let firstDayDropId = getId(firstDay, dropList);

  let newMonth = document.createElement('section');
  newMonth.classList.add('calendar-wrapper');
  newMonth.innerHTML = `
    <h2 class="month-label">${monthName} ${year}</h2>
    <ol class="calendar calendar--${monthName}">
      <li class="day-label">Sunday</li>
      <li class="day-label">Monday</li>
      <li class="day-label">Tuesday</li>
      <li class="day-label">Wednesday</li>
      <li class="day-label">Thursday</li>
      <li class="day-label">Friday</li>
      <li class="day-label">Saturday</li>
    </ol> 
  `;
  main.appendChild(newMonth);
  let newMonthCalendar = document.querySelector(`.calendar--${monthName}`);

  for (i = 0; i < month.before; i++) {
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    newMonthCalendar.appendChild(day);
  }

  for (i = 0; i < month.days; i++) {

    todayDrop = dropList[firstDayDropId];
    todaySector = sectorList[firstDaySectorId];

    let newDay = document.createElement('li');
    newDay.classList.add('day', 'day--active');
    newDay.innerHTML = `
      <p class="ls-name"><a href="/sector/${toSlug(todaySector)}">${todaySector}</a></p>
      <p class="ls-drop">${todayDrop}</p>
    `;
    newMonthCalendar.appendChild(newDay);

    firstDayDropId = cycleId(firstDayDropId, dropList);
    firstDaySectorId = cycleId(firstDaySectorId, sectorList);
  }

  for (i = 0; i < month.after; i++) {
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    newMonthCalendar.appendChild(day);
  }
}


// buildInterimCalendar(feb);
buildCalendar(mar);




let now = Date.now();
let currentDayOfMonth = toDays(now - marStart);
const today = document.querySelectorAll('.day--active')[currentDayOfMonth - 1]; // -1 for zero-index
today.classList.add('day--today');

