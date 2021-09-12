const dropRotation = ["Chest", "Helmet", "Legs", "Arms"]
const sectorRotation = [
  "Bay of Drowned Wishes", "Chamber of Starlight", "Aphelion's Rest", 
  "The Empty Tank",
  "K1 Logistics", "K1 Communion", "K1 Crew Quarters", "K1 Revelation",
  "Concealed Void", "Bunker E15", "Perdition"
]


const lostSectors = [
  {
    "name": "Bay of Drowned Wishes",
    "location": "The Dreaming City",
    "champions": [
      {
        "name": "Overload",
        "number": 2
      },
      {
        "name": "Unstoppable",
        "number": 3,
        "desc": "Last champion spawns when you get closer to the cave barrier."
      }
    ],
    "burn": "Arc",
    "shields": [
      {
        "name": "Void",
        "frequency": 1,
        "desc": "One Scorn Raider on a far away platform."
      }
    ],
    "modifiers": [
      {
        "name": "Raider Shield",
        "desc": "Scorn Raiders now have Void shields."
      }
    ],
    "notes": "Lots of screebs. Boss room ads seem to spawn infinitely. Ads will jump up onto the platform where you enter.",
    "loadout": [
      {
        "kinetic": "The Time-worn Spire",
        "energy": "Trinity Ghoul",
        "power": "Sleepless",
        "subclass": "Chaos Reach",
        "exotic": "Geomag Stabilizers"
      }
    ]
  },
  {
    "name": "Chamber of Starlight",
    "location": "The Dreaming City",
    "champions": [
      {
        "name": "Overload",
        "number": 1,
        "desc": "On far away platform and can be sniped at."
      },
      {
        "name": "Unstoppable",
        "number": 3
      }
    ],
    "burn": "Solar",
    "shields": [
      {
        "name": "Void",
        "frequency": "many",
        "desc": "Taken Acolytes all have Void shields. Wizard Boss has Void shield."
      },
      {
        "name": "Solar",
        "frequency": "few",
        "desc": "A few Taken Knights."
      }
    ],
    "modifiers": [
      {
        "name": "Epitaph",
        "desc": "Taken combatants generate blight geysers when defeated."
      }
    ],
    "notes": "Lots of Taken Acolytes and Thralls.",
    "loadout": [
      {
        "kinetic": "Ignition Code",
        "energy": "Le Monarque",
        "power": "Corsair's Wrath",
        "subclass": "Top-tree Dawnblade",
        "exotic": "Sunbracers"
      }
    ]
  },
  {
    "name": "Aphelion’s Rest",
    "location": "The Dreaming City",
    "champions": [
      {
        "name": "Overload",
        "number": 2,
        "desc": "Appear on far away platforms, and often move behind cover."
      },
      {
        "name": "Unstoppable",
        "number": 2
      }
    ],
    "burn": "Stasis",
    "burnDesc": "Taken Acolytes and Boss have Stasis weapons that slow and freeze you.",
    "shields": [
      {
        "name": "Void",
        "frequency": "many",
        "desc": "Taken Acolytes all have Void shields."
      }
    ],
    "modifiers": [
      {
        "name": "Epitaph",
        "desc": "Taken combatants generate blight geysers when defeated."
      }
    ],
    "notes": "Taken Psions duplicate frequently and quickly. Lots of Stasis AOE damage in the boss area.",
    "loadout": [
      {
        "kinetic": "Whispering Slab",
        "energy": "Lorentz Driver / Graviton Lance",
        "power": "Threaded Needle",
        "subclass": "Stasis Warlock",
        "exotic": "Eye of Another World"
      }
    ]
  },
  {
    "name": "The Empty Tank",
    "location": "The Tangled Shore",
    "champions": [
      {
        "name": "Overload",
        "number": 2,
        "desc": "Fallen captains. One in LS entrance before the first room; second one spawns in boss room from the left door, after you kill the initial three enemies."
      },
      {
        "name": "Barrier",
        "number": 3,
        "desc": "2 Barrier servitors that shield lots of ads; 1 Barrier Colossus."
      }
    ],
    "burn": "Solar",
    "shields": [
      {
        "name": "Arc",
        "frequency": "1",
        "desc": "Only one Fallen Captain with an Arc shield."
      }
    ],
    "modifiers": [
      {
        "name": "Arach-NO!",
        "desc": "When defeated, Fallen Vandals spawn a web mine at their feet."
      }
    ],
    "notes": "In the spooky hallway between the two rooms, there are thrall and Cabal dogs.",
    "loadout": [
      {
        "kinetic": "Chroma Rush",
        "energy": "Le Monarque",
        "power": "Code Duello",
        "subclass": "Well of Radiance",
        "exotic": "Sunbracers"
      }
    ]
  },
  {
    "name": "K1 Logistics",
    "location": "The Moon",
    "champions": [
      {
        "name": "Overload",
        "number": 2,
        "desc": "Fallen captains."
      },
      {
        "name": "Barrier",
        "number": 3,
        "desc": "Barrier servitors."
      }
    ],
    "burn": "Void",
    "shields": [
      {
        "name": "Solar",
        "frequency": "many",
        "desc": "Shanks have Solar shields."
      },
      {
        "name": "Arc",
        "frequency": "few",
        "desc": "Fallen Captains have Arc shields. There's one in the first area and a few in the boss area."
      }
    ],
    "modifiers": [
      {
        "name": "Hot Knife",
        "desc": "Shanks now have Solar shields."
      }
    ],
    "notes": "Servitor Boss teleports twice at each 3rd of its health, starting from middle → left → right.",
    "loadout": [
      {
        "kinetic": "Scathelocke",
        "energy": "Ticuu's Divination",
        "power": "Bad Omens",
        "subclass": "Top-tree Nova Bomb",
        "exotic": "Contraverse Hold"
      }
    ]
  },
  {
    "name": "K1 Communion",
    "location": "The Moon",
    "champions": [
      {
        "name": "Overload",
        "number": 2,
        "desc": "Fallen captains."
      },
      {
        "name": "Barrier",
        "number": 3,
        "desc": "Barrier Servitors. Final Barrier Servitor doesn't spawn in the boss room if you kill the boss fast enough."
      }
    ],
    "burn": "Solar",
    "shields": [
      {
        "name": "Solar",
        "frequency": 1,
        "desc": "Heavy Shank in boss room."
      },
      {
        "name": "Void",
        "frequency": "few"
      }
    ],
    "modifiers": [
      {
        "name": "Hot Knife",
        "desc": "Shanks now have Solar shields."
      }
    ],
    "notes": "Boss appears after you kill the Heavy Shank. You can prevent the 3rd Barrier Servitor and a wave of exploding shanks from spawning if you kill the boss fast enough.",
    "loadout": [
      {
        "kinetic": "Chroma Rush",
        "energy": "Riskrunner",
        "power": "Code Duello",
        "subclass": "Top-tree Nova Bomb",
        "exotic": "Contraverse Hold"
      }
    ]
  },
  {
    "name": "K1 Crew Quarters",
    "location": "The Moon",
    "champions": [
      {
        "name": "Overload",
        "number": 2,
        "desc": "Fallen Captains."
      },
      {
        "name": "Barrier",
        "number": 3,
        "desc": "Barrier Servitors. Last Barrier Servitor spawns when the boss is at 50% health."
      }
    ],
    "burn": "Arc",
    "shields": [
      {
        "name": "Solar",
        "frequency": "many",
        "desc": "Shanks have solar shields."
      }
    ],
    "modifiers": [
      {
        "name": "Hot Knife",
        "desc": "Shanks now have Solar shields."
      }
    ],
    "notes": "",
    "loadout": [
      {
        "kinetic": "Chroma Rush",
        "energy": "Trinity Ghoul",
        "power": "Sleepless",
        "subclass": "Chaos Reach",
        "exotic": "Geomag Stabilizers"
      }
    ]
  },
  {
    "name": "K1 Revelation",
    "location": "The Moon",
    "champions": [
      {
        "name": "Unstoppable",
        "number": 3,
        "desc": "Ogres that spawn at the three crystals."
      },
      {
        "name": "Barrier",
        "number": 3,
        "desc": "Barrier hobgoblins."
      }
    ],
    "burn": "Void",
    "shields": [
      {
        "name": "Arc",
        "frequency": "few",
        "desc": "Arc knights."
      }
    ],
    "modifiers": [
      {
        "name": "Fire Pit",
        "desc": "When defeated, Acolytes spawn fire pools that cause damage over time."
      }
    ],
    "notes": "Destroy the floating crystals to advance to the boss fight. Many ads still spawn after you defeat the boss, so getting to the chest without killing them is challenging.",
    "loadout": [
      {
        "kinetic": "Chroma Rush",
        "energy": "Lorentz Driver",
        "power": "Bad Omens",
        "subclass": "Top-tree Nova Bomb",
        "exotic": "Contraverse Hold"
      }
    ]
  },
  {
    "name": "Concealed Void",
    "location": "Europa",
    "champions": [
      {
        "name": "Overload",
        "number": 3,
        "desc": "Fallen Captains."
      },
      {
        "name": "Barrier",
        "number": 1,
        "desc": "Barrier Servitor."
      }
    ],
    "burn": "Solar",
    "shields": [
      {
        "name": "Void",
        "frequency": "few",
        "desc": "Void servitors."
      },
      {
        "name": "Solar",
        "frequency": "few",
        "desc": "Solar shanks."
      },
      {
        "name": "Arc",
        "frequency": 1,
        "desc": "Fallen captain."
      }
    ],
    "modifiers": [
      {
        "name": "Arach-NO!",
        "desc": "When defeated, Fallen Vandals spawn a web mine at their feet."
      }
    ],
    "notes": ""
  },
  {
    "name": "Bunker E15",
    "location": "Europa",
    "champions": [
      {
        "name": "Overload",
        "number": 3,
        "desc": "Overload Minotaurs."
      },
      {
        "name": "Barrier",
        "number": 1,
        "desc": "Barrier Hobgoblin."
      }
    ],
    "burn": "Void",
    "shields": [
      {
        "name": "Void",
        "frequency": "few",
        "desc": "Void minotaurs."
      }
    ],
    "modifiers": [
      {
        "name": "Shocker",
        "desc": "When defeated, Goblins spawn Arc pools that cause damage over time."
      }
    ],
    "notes": "Third Overload champion sometimes doesn't spawn in boss room if you kill the boss fast enough. One Wyvern in boss room.",
    "loadout": [
      {
        "kinetic": "Chroma Rush",
        "energy": "Le Monarque",
        "power": "Bad Omens",
        "subclass": "Top-tree Nova Bomb",
        "exotic": "Contraverse Hold"
      }
    ]
  },
  {
    "name": "Perdition",
    "location": "Europa",
    "champions": [
      {
        "name": "Overload",
        "number": 2,
        "desc": "Overload Minotaurs."
      },
      {
        "name": "Barrier",
        "number": 2,
        "desc": "Barrier Hobgoblins."
      }
    ],
    "burn": "Arc",
    "shields": [
      {
        "name": "Void",
        "frequency": 2,
        "desc": "Void minotaurs."
      },
      {
        "name": "Arc",
        "frequency": "many",
        "desc": "Arc harpies."
      }
    ],
    "modifiers": [
      {
        "name": "Shocker",
        "desc": "When defeated, Goblins spawn Arc pools that cause damage over time."
      }
    ],
    "notes": "Two Wyverns in the second room. Mini Hydra spawns in first room and keeps teleporting back; it's helpful to kill it sooner rather than later. Boss can be melted with a super as soon as it spawns.",
    "loadout": [
      {
        "kinetic": "Chroma Rush",
        "energy": "Trinity Ghoul",
        "power": "Sleepless",
        "subclass": "Top-tree Nova Bomb",
        "exotic": "Contraverse Hold"
      }
    ]
  }
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

elapsed = toDays(elapsed);


// elapsed = 3;
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

function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/’/g,"'")
    ;
}

function rotate() {
  todayDrop = dropRotation[getTodayId(dropRotation)];
  todaySector = lostSectors[getTodayId(sectorRotation)].name;
}

// function cycle() {
//   todayDrop = dropRotation[getId(dropRotation)];
//   todaySector = sectorRotationSep[getId(sectorRotationSep)];
// }

function build() {
  for (i = 0; i < 7; i++) {
    rotate();

    //console.log(`Today is Day ${elapsed} of the season.`);
    //console.log(`Today's Legend Lost Sector is ${todaySector} and it drops ${todayDrop}.`);
    // elapsed += 1;
  }
}

build();

todaySectorId = getTodayId(sectorRotation);




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




  


// konami code
// https://gomakethings.com/how-to-create-a-konami-code-easter-egg-with-vanilla-js/
var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;

    // https://github.com/loonywizard/js-confetti
		const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      emojis: ['🍉'],
    })
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);


console.log('type a secret code for a refreshing surprise.');

