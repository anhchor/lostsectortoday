const dropRotation = ["Chest", "Helmet", "Legs", "Arms"]
const sectorRotation = [
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion's Rest", 
  "The Empty Tank", 
  // "Exodus Garden 2A", "Veles Labyrinth",
  // "The Quarry", "Scavenger's Den", "Excavation Site XII",
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation",
  "Concealed Void", "Bunker E15", "Perdition"
]

const sectorRotationSep = [
  "Concealed Void", "Bunker E15", "Perdition",
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion's Rest", 
  "The Empty Tank", 
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation"
]


let today = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
today = today.toLocaleDateString('en-US', options);


// let dateWrapper = document.querySelector('.header__date');
// dateWrapper.textContent = today;

let seasonLostStart = new Date('2021-08-24T10:00:00');
let seasonLostEnd = new Date('2022-02-22T10:00:00');

let now = Date.now();
let elapsed = now - seasonLostStart;
let timeLeft = seasonLostEnd - now;

function toDays(x) {
  x = x / 1000 / 60 / 60 / 24;
  x = Math.floor(x + 1);
  return x;
}

// elapsed = toDays(elapsed);


elapsed = 3;
let currentDay;

let dropId = 0; 
let sectorId = 0;

let todayDrop;
let todaySector;

const getTodayId = function(x) {
  let arrayId = 0;
  for (i = 1; i <= elapsed; i++) {
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


function rotate() {
  todayDrop = dropRotation[getTodayId(dropRotation)];
  todaySector = sectorRotation[getTodayId(sectorRotation)];
}

function cycle() {
  todayDrop = dropRotation[getId(dropRotation)];
  todaySector = sectorRotationSep[getId(sectorRotationSep)];
}

function build() {
  for (i = 0; i < 7; i++) {
    rotate();

    console.log(`Today is Day ${elapsed} of the season.`);
    console.log(`Today's Legend Lost Sector is ${todaySector} and it drops ${todayDrop}.`);
    // elapsed += 1;
    console.log(elapsed);
  }
}


let calendar = document.querySelector('.calendar');


function buildDay() {
  let day = document.createElement('li');
  day.classList.add('day', 'day--active');
  day.innerHTML = `
    <p class="ls-name">${todaySector}</p>
    <p class="ls-drop">${todayDrop}</p>
  `;
  calendar.appendChild(day);
}


function newDayAugust() {
  currentDay = 1;
  for (i = 0; i < 23; i++) {
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendar.appendChild(day);
  }
  for (i = 0; i <= 9; i++) {
    cycle();

    buildDay();

    currentDay += 1;
  }
}

// newDayAugust();

function newDaySep() {
  currentDay = 1;

  for (i = 0; i < 3; i++) {
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendar.appendChild(day);
  }

  for (i = 0; i < 32; i++) {
    cycle();
    buildDay();
    currentDay += 1;
  }

  for (i = 0; i < 2; i++) {
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendar.appendChild(day);
  }
}

newDaySep();