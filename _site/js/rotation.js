const dropRotation = ["Chest", "Helmet", "Legs", "Arms"]
const sectorRotation = [
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion's Rest", 
  "The Empty Tank",
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation",
  "Concealed Void", "Bunker E15", "Perdition"
]

let today = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
today = today.toLocaleDateString('en-US', options);

// console.log(today);


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

// console.log('Days Since Season Start: ' + toDays(elapsed));
// console.log('Days Left in Season: ' + toDays(timeLeft));

elapsed = toDays(elapsed);


let testElapsed = 4;
let dropRotationNumber = 0; 
let sectorRotationNumber = 0;

let todayDrop;
for (i = 1; i <= elapsed; i++) {
  if (i != dropRotationNumber) {
    if (dropRotationNumber < 4) {
      dropRotationNumber += 1;
    } else {
      dropRotationNumber = 1;
    }
  }
}

for (i = 1; i <= elapsed; i++) {
  if (i != sectorRotationNumber) {
    if (sectorRotationNumber < 5) {
      sectorRotationNumber += 1;
    } else {
      sectorRotationNumber = 1;
    }
  }
}

dropRotationNumberIndexed = dropRotationNumber - 1; // zero-index
sectorRotationNumberIndexed = sectorRotationNumber - 1; // zero-index

todayDrop = dropRotation[dropRotationNumberIndexed];
todaySector = sectorRotation[sectorRotationNumberIndexed];

console.log(`Today is Day ${elapsed} of the season.`);
//console.log(`Today's sector number is ${sectorRotationNumber} and the rotation number is ${dropRotationNumber}`);
console.log(`Today's Legend Lost Sector is ${todaySector} and it drops ${todayDrop}`);


// let dropWrapper = document.querySelector('.ls__drop-item');
// dropWrapper.textContent = todayDrop;



