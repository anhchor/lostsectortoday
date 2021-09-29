const dropRotation = ["Chest", "Helmet", "Legs", "Arms"]
const sectorRotation = [
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion’s Rest", 
  "The Empty Tank",
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation",
  "Concealed Void", "Bunker E15", "Perdition"
]

const sectorRotationSep = [
  "Concealed Void", "Bunker E15", "Perdition",
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion’s Rest", 
  "The Empty Tank", 
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation"
]

const dropRotationOct = ["Legs", "Arms", "Chest", "Helmet"]
const sectorRotationOct = [
  "K1 Communion", "K1 Crew Quarters", "K1 Revelation",
  "Concealed Void", "Bunker E15", "Perdition",
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion’s Rest", 
  "The Empty Tank", 
  "K1 Logistics"
]




let currentDay;

let dropId = 0; 
let sectorId = 0;

let todayDrop;
let todaySector;


function toDays(x) {
  x = x / 1000 / 60 / 60 / 24;
  x = Math.floor(x + 1);
  return x;
}

const getId = function(x) {
  let arrayId = 0;
  for (i = 1; i <= currentDay; i++) {
    if (i != arrayId) {
      if (arrayId < x.length) {
        arrayId += 1;
      } else {
        arrayId = 1;
      }
    }
  }
  arrayId -= 1; // get zero-index
  return arrayId;
}


function cycleSep() {
  todayDrop = dropRotation[getId(dropRotation)];
  todaySector = sectorRotationSep[getId(sectorRotationSep)];
}

function cycleOct() {
  todayDrop = dropRotationOct[getId(dropRotationOct)];
  todaySector = sectorRotationOct[getId(sectorRotationOct)];
}


function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g,'-') // replace space with dash
    .replace(/’/g,"'") // replace curly quote with straight quote
    ;
}



let calendarSep = document.querySelector('.calendar--sep');
let calendarOct = document.querySelector('.calendar--oct');

function buildDay(month) {
  let todaySectorSlug = toSlug(todaySector);

  let day = document.createElement('li');
  day.classList.add('day', 'day--active');
  day.innerHTML = `
    <p class="ls-name"><a href="/sector/${todaySectorSlug}">${todaySector}</a></p>
    <p class="ls-drop">${todayDrop}</p>
  `;
  month.appendChild(day);
}


// function newDayAugust() {
//   currentDay = 1;
//   for (i = 0; i < 23; i++) {
//     let day = document.createElement('li');
//     day.classList.add('day', 'day--disabled');
//     calendar.appendChild(day);
//   }
//   for (i = 0; i <= 9; i++) {
//     cycle();

//     buildDay();

//     currentDay += 1;
//   }
// }


let sepStart = new Date(Date.UTC(2021, 8, 1, 17, 0, 0));
let sepEnd = new Date(Date.UTC(2022, 9, 1, 17, 0, 0));

let octStart = new Date(Date.UTC(2021, 9, 1, 17, 0, 0));
let octEnd = new Date(Date.UTC(2021, 10, 1, 17, 0, 0));

let now = Date.now();
let currentDayOfMonth = now - sepStart;

function toDays(x) {
  x = x / 1000 / 60 / 60 / 24;
  x = Math.floor(x + 1);
  return x;
}

currentDayOfMonth = Math.floor((currentDayOfMonth / 1000 / 60 / 60 / 24) + 1)


function newDaySep() {
  currentDay = 1;

  for (i = 0; i < 3; i++) {
    // greyed out days from august
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendarSep.appendChild(day);
  }

  for (i = 0; i < 32; i++) {
    // september
    cycleSep();
    buildDay(calendarSep);
    currentDay += 1;
  }

  for (i = 0; i < 2; i++) {
    // greyed out days from october
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendarSep.appendChild(day);
  }
}

newDaySep();



function newDayOct() {
  currentDay = 1;

  for (i = 0; i < 5; i++) {
    // 5 greyed out days from september
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendarOct.appendChild(day);
  }

  for (i = 0; i < 33; i++) {
    // october
    cycleOct();
    buildDay(calendarOct);
    currentDay += 1;
  }

  for (i = 0; i < 6; i++) {
    // greyed out days from october
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendarOct.appendChild(day);
  }
}

newDayOct();

const today = document.querySelectorAll('.day--active')[currentDayOfMonth - 1]; // -1 for zero-index
today.classList.add('day--today');

