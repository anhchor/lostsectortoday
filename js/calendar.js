const dropRotationNov = ["Helmet", "Legs", "Arms", "Chest"]
const sectorRotationNov = [
  "The Empty Tank", 
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation",
  "Concealed Void", "Bunker E15", "Perdition",
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion’s Rest"
]

const dropRotationDec = ["Arms", "Chest", "Helmet", "Legs"]
const sectorRotationDec = [
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion’s Rest",
  "The Empty Tank", 
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation",
  "Concealed Void", "Bunker E15", "Perdition",
]

const dropRotationJan = ["Legs", "Arms", "Chest", "Helmet"]
const sectorRotationJan = [
  "Bunker E15", "Perdition",
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion’s Rest",
  "The Empty Tank", 
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation",
  "Concealed Void"
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

function getId(list) {
  let arrayId = 0;
  for (i = 1; i <= currentDay; i++) {
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

function buildDay(month) {
  let day = document.createElement('li');
  day.classList.add('day', 'day--active');
  day.innerHTML = `
    <p class="ls-name"><a href="/sector/${toSlug(todaySector)}">${todaySector}</a></p>
    <p class="ls-drop">${todayDrop}</p>
  `;
  month.appendChild(day);
}

let currentDay;

let dropId = 0; 
let sectorId = 0;

let todayDrop;
let todaySector;

function cycleNov() {
  todayDrop = dropRotationNov[getId(dropRotationNov)];
  todaySector = sectorRotationNov[getId(sectorRotationNov)];
}
function cycleDec() {
  todayDrop = dropRotationDec[getId(dropRotationDec)];
  todaySector = sectorRotationDec[getId(sectorRotationDec)];
}


let calendarNov = document.querySelector('.calendar--nov');
let calendarDec = document.querySelector('.calendar--dec');

let now = Date.now();
let novStart = new Date(Date.UTC(2021, 10, 1, 17, 0, 0));
let novEnd = new Date(Date.UTC(2021, 11, 1, 17, 0, 0));

let decStart = new Date(Date.UTC(2021, 11, 1, 17, 0, 0));
let decEnd = new Date(Date.UTC(2021, 12, 1, 17, 0, 0));



let currentDayOfMonth = now - decStart;
currentDayOfMonth = Math.floor((currentDayOfMonth / 1000 / 60 / 60 / 24) + 1)


function newDayNov() {
  currentDay = 1;

  for (i = 0; i < 1; i++) {
    // 1 greyed out day from october
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendarNov.appendChild(day);
  }

  for (i = 0; i < 32; i++) {
    // november
    cycleNov();
    buildDay(calendarNov);
    currentDay += 1;
  }

  for (i = 0; i < 4; i++) {
    // greyed out days from december
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendarNov.appendChild(day);
  }
}
// newDayNov();


function newDayDec() {
  currentDay = 1;

  for (i = 0; i < 3; i++) {
    // 3 greyed out days from november
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendarDec.appendChild(day);
  }

  for (i = 0; i < 33; i++) {
    // november
    cycleDec();
    buildDay(calendarDec);
    currentDay += 1;
  }

  for (i = 0; i < 1; i++) {
    // greyed out days from jan
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendarDec.appendChild(day);
  }
}
newDayDec();


const today = document.querySelectorAll('.day--active')[currentDayOfMonth - 1]; // -1 for zero-index
today.classList.add('day--today');

