const dropList = ["Chest", "Helmet", "Legs", "Arms"]
const sectorList = [
  // Season 17 - Season of the Haunted
  "K1 Crew Quarters", "K1 Logistics", "K1 Revelation", "K1 Communion",
  "The Conflux",
  "Metamorphosis", "Sepulcher", "Extraction",
  "Excavation Site XII", "Skydock IV", "The Quarry"
]


const seasonHauntedStart = new Date(Date.UTC(2022, 4, 24, 17, 0, 0));
const seasonHauntedEnd = new Date(Date.UTC(2022, 7, 23, 17, 0, 0));


let now = Date.now();
let currentDayOfSeason = now - seasonHauntedStart;

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
  
  return arrayId;
}


function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g,'-') // replace space with dash
    .replace(/’/g,"'") // replace curly quote with straight quote
    ;
}


function fill(today) {
  // insert all this info into the html page
  // sorry this is silly 
  todaySectorSlug = toSlug(todaySector);

  document.querySelector('.ls__link').textContent = todaySector;
  document.querySelector('.ls__link').setAttribute("href", `sector/${todaySectorSlug}`)
  document.querySelector('.readmore').setAttribute("href", `sector/${todaySectorSlug}`);

  document.querySelector('.ls__location').textContent = today.location;
  document.querySelector('.ls__drop-item').textContent = todayDrop;

  let sectorBurn = document.querySelector('.ls__burn');
  sectorBurn.classList.add(`ls__element--${today.burn}`);
  sectorBurn.textContent = today.burn;

  let championWrapper = document.querySelector('.ls__champion-wrapper');
  for (i = 0; i < today.champions.length; i++) {
    let newChampion = document.createElement('span');
    newChampion.classList.add('ls__champion', `ls__champion--${today.champions[i].name}`);
    newChampion.textContent = today.champions[i].name;
    championWrapper.appendChild(newChampion);
  }

  let shieldWrapper = document.querySelector('.ls__shield-wrapper');
  for (i = 0; i < today.shields.length; i++) {
    let newShield = document.createElement('span');
    newShield.classList.add('ls__shield', 'ls__element', `ls__element--${today.shields[i].name}`);
    newShield.textContent = today.shields[i].name;
    shieldWrapper.appendChild(newShield);
  }

  document.querySelector('.ls__modifier-name').textContent = today.modifiers[0].name;
  document.querySelector('.ls__modifier-desc').textContent = today.modifiers[0].desc;
}



fetch('/js/sectors.json')
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
        todaySector = sectorList[getTodayId(sectorList)]; // name of today's lost sector

        for (j = 0; j < lostSectors.length; j++) {
          if (todaySector == lostSectors[j].name) {
            let today = lostSectors[j];
            fill(today);
          }
        }
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

