const dropList = ["Chest", "Helmet", "Legs", "Arms"]
const sectorList = [
  // Season 15 - Season of the Lost
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion’s Rest", 
  "The Empty Tank",
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation",
  "Concealed Void", "Bunker E15", "Perdition"
]



let seasonLostStart = new Date(Date.UTC(2021, 7, 24, 17, 0, 0));
let seasonLostEnd = new Date(Date.UTC(2022, 1, 22, 18, 0, 0));

let now = Date.now();
let currentDayOfSeason = now - seasonLostStart;

function toDays(x) {
  x = x / 1000 / 60 / 60 / 24;
  x = Math.floor(x + 1);
  return x;
}

// currentDayOfSeason = toDays(currentDayOfSeason);
currentDayOfSeason = Math.floor((currentDayOfSeason / 1000 / 60 / 60 / 24) + 1)

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
  
  console.log(arrayId);
  return arrayId;
}


function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g,'-') // replace space with dash
    .replace(/’/g,"'") // replace curly quote with straight quote
    ;
}

function fillInfo() {
  // insert all this info into the html page
  // sorry this is silly 
  todaySectorSlug = toSlug(todaySector);

  document.querySelector('.ls__link').textContent = todaySector;
  document.querySelector('.ls__link').setAttribute("href", `sector/${todaySectorSlug}`)
  document.querySelector('.readmore').setAttribute("href", `sector/${todaySectorSlug}`);

  document.querySelector('.ls__location').textContent = lostSectors[todaySectorId].location;
  document.querySelector('.ls__drop-item').textContent = todayDrop;

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

  document.querySelector('.ls__modifier-name').textContent = lostSectors[todaySectorId].modifiers[0].name;
  document.querySelector('.ls__modifier-desc').textContent = lostSectors[todaySectorId].modifiers[0].desc;
}



fetch('/js/legend.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        lostSectors = data;
        
        todayDrop = dropList[getTodayId(dropList)]; // today's drop
        todaySector = lostSectors[getTodayId(sectorList)].name; // name of today's lost sector
        todaySectorId = getTodayId(sectorList); // id of today's lost sector

        fillInfo();
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

