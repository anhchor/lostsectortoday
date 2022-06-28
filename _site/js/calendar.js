const dropList = ["Chest", "Helmet", "Legs", "Arms"]
const sectorList = [
  // Season 17 - Season of the Haunted
  "K1 Crew Quarters", "K1 Logistics", "K1 Revelation", "K1 Communion",
  "The Conflux",
  "Metamorphosis", "Sepulcher", "Extraction",
  "Excavation Site XII", "Skydock IV", "The Quarry"
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



let mayStart = new Date(Date.UTC(2022, 4, 1, 17, 0, 0));
let juneStart = new Date(Date.UTC(2022, 5, 1, 17, 0, 0));
let julyStart = new Date(Date.UTC(2022, 6, 1, 17, 0, 0));

const seasonHauntedStart = new Date(Date.UTC(2022, 4, 24, 17, 0, 0));
const seasonHauntedEnd = new Date(Date.UTC(2022, 7, 23, 17, 0, 0));

let todayDrop;
let todaySector;

function Month(days, before, after, start, end) {
  this.days = days;
  this.before = before;
  this.after = after;
  this.start = start;
  this.end = end;
}

const may = new Month(31, 0, 4, new Date(Date.UTC(2022, 4, 1, 17, 0, 0)), new Date(Date.UTC(2022, 5, 1, 17, 0, 0)));
const june = new Month(30, 3, 2, new Date(Date.UTC(2022, 5, 1, 17, 0, 0)), new Date(Date.UTC(2022, 6, 1, 17, 0, 0)));
const july = new Month(31, 5, 6, new Date(Date.UTC(2022, 6, 1, 17, 0, 0)), new Date(Date.UTC(2022, 7, 1, 17, 0, 0)));

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
  let seasonDay = month.start - seasonHauntedStart;
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



function buildCalendar(month) {
  let monthName = month.start.toLocaleString('default', { month: 'long' });
  let year = month.start.toLocaleString('default', { year: 'numeric' });
  let firstDay = toDays(month.start - seasonHauntedStart);

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


buildCalendar(june);
buildCalendar(july);

let now = Date.now();
let currentDayOfMonth = toDays(now - juneStart);
const today = document.querySelectorAll('.day--active')[currentDayOfMonth - 1]; // -1 for zero-index
today.classList.add('day--today');

