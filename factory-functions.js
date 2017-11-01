'use strict';

function createCharacter(name, nickname, race, origin, weapon, attack, defense) {
  return {
    name, nickname, race, origin, weapon, attack, defense,
    describe: function() {
      console.log(`${name} is a ${race} of ${origin} who uses ${weapon}.`);
    },
    evaluateFight: function(character) {
      let x = this.attack - character.defense;
      let y = character.attack - this.defense;
      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage.`;
    },
  };
}

const characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle-Earth', 'a wizard staff', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'the ring', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'a String and Barrow blade', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 'Anduril', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'a bow and arrow', 8, 5)];

// console.log(characters);

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 'Hadhafang', 8, 6));

// console.log(characters);

characters.find(function(character) {
  if (character.nickname === 'aragorn') {
    character.describe();
  }
});

const hobbits = [];

characters.filter(function(character) {
  if (character.race === 'Hobbit') {
    hobbits.push(character);
  }
});

// console.log(hobbits);

const strongChars = [];

characters.filter(function(character) {
  if (character.attack > 5) {
    strongChars.push(character);
  }
});

console.log(strongChars);