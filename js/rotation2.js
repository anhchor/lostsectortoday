const dropList = ["Chest", "Helmet", "Legs", "Arms"]
const sectorList = [
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion's Rest", 
  "The Empty Tank",
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation",
  "Concealed Void", "Bunker E15", "Perdition"
]



let today = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
today = today.toLocaleDateString('en-US', options);


// let dateWrapper = document.querySelector('.header__date');
// dateWrapper.textContent = today;

let seasonLostStart = new Date(Date.UTC(2021, 7, 24, 17, 0, 0));
let seasonLostEnd = new Date(Date.UTC(2022, 1, 22, 18, 0, 0));


let now = Date.now();
let currentDayOfSeason = now - seasonLostStart;

function toDays(x) {
  x = x / 1000 / 60 / 60 / 24;
  x = Math.floor(x + 1);
  return x;
}

currentDayOfSeason = toDays(currentDayOfSeason);


let todayDrop;
let todaySector;


const getTodayId = function(x) {
  // cycle through the list of drops/lost sectors until you get to today's day
  // example: 
  // today is day 11 of the season
  // cycle to the 11th lost sector and the 11th drop

  let arrayId = 0;
  for (i = 1; i <= currentDayOfSeason; i++) {
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


function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g,'-') // replace space with dash
    .replace(/’/g,"'") // replace curly quote with straight quote
    ;
}



//todayDrop = dropList[getTodayId(dropList)]; // today's drop
// todaySector = lostSectors[getTodayId(sectorList)].name; // name of today's lost sector
//todaySectorId = getTodayId(sectorList); // id of today's lost sector



todayDrop = dropList[getTodayId(dropList)]; // today's drop
todaySectorId = getTodayId(sectorList); // id of today's lost sector

let requestURL = 'js/legend.json';
//let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  lostSectors = request.response;

  todayDrop = dropList[getTodayId(dropList)]; // today's drop
  todaySectorId = getTodayId(sectorList); // id of today's lost sector
  todaySector = lostSectors[getTodayId(sectorList)].name; // name of today's lost sector
  
  fillInfo();
}




function fillInfo() {
  // insert all this info into the html page
  // sorry this is silly 


  let sectorName = document.querySelector('.ls__link');
  let readmore = document.querySelector('.readmore');
  sectorName.textContent = todaySector;
  todaySectorSlug = toSlug(todaySector);
  sectorName.setAttribute("href", `sector/${todaySectorSlug}`);
  readmore.setAttribute("href", `sector/${todaySectorSlug}`);

  let sectorLocation = document.querySelector('.ls__location');
  sectorLocation.textContent = lostSectors[todaySectorId].location;

  let sectorDrop = document.querySelector('.ls__drop-item');
  sectorDrop.textContent = todayDrop;

  let sectorBurn = document.querySelector('.ls__burn');
  sectorBurn.classList.add(`ls__element--${lostSectors[todaySectorId].burn}`);
  sectorBurn.textContent = lostSectors[todaySectorId].burn;

  let championWrapper = document.querySelector('.ls__champion-wrapper');

  for (i = 0; i < lostSectors[todaySectorId].champions.length; i++) {
    let newChampion = document.createElement('span');
    newChampion.classList.add('ls__champion', `ls__champion--${lostSectors[todaySectorId].champions[i].name}`);
    newChampion.textContent = lostSectors[todaySectorId].champions[i].name;
    championWrapper.appendChild(newChampion);
  }

  let shieldWrapper = document.querySelector('.ls__shield-wrapper');
  for (i = 0; i < lostSectors[todaySectorId].shields.length; i++) {
    let newShield = document.createElement('span');
    newShield.classList.add('ls__shield', 'ls__element', `ls__element--${lostSectors[todaySectorId].shields[i].name}`);
    newShield.textContent = lostSectors[todaySectorId].shields[i].name;
    shieldWrapper.appendChild(newShield);
  }

  let modifierName = document.querySelector('.ls__modifier-name');
  let modifierDesc = document.querySelector('.ls__modifier-desc');

  modifierName.textContent = lostSectors[todaySectorId].modifiers[0].name;
  modifierDesc.textContent = lostSectors[todaySectorId].modifiers[0].desc;

}