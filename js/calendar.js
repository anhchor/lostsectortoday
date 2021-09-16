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


function cycle() {
  todayDrop = dropRotation[getId(dropRotation)];
  todaySector = sectorRotationSep[getId(sectorRotationSep)];
}



function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g,'-') // replace space with dash
    .replace(/’/g,"'") // replace curly quote with straight quote
    ;
}



let calendar = document.querySelector('.calendar');


function buildDay() {
  let todaySectorSlug = toSlug(todaySector);

  let day = document.createElement('li');
  day.classList.add('day', 'day--active');
  day.innerHTML = `
    <p class="ls-name"><a href="/sector/${todaySectorSlug}">${todaySector}</a></p>
    <p class="ls-drop">${todayDrop}</p>
  `;
  calendar.appendChild(day);
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
    calendar.appendChild(day);
  }

  for (i = 0; i < 32; i++) {
    // september
    cycle();
    buildDay();
    currentDay += 1;
  }

  for (i = 0; i < 2; i++) {
    // greyed out days from october
    let day = document.createElement('li');
    day.classList.add('day', 'day--disabled');
    calendar.appendChild(day);
  }
}

newDaySep();


const today = document.querySelectorAll('.day--active')[currentDayOfMonth - 1]; // -1 for zero-index
today.classList.add('day--today');

