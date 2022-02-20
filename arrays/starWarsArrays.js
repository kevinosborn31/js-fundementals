let starWarsCharacters = ['Darth Sidious', 'Mace Windu', 'Boba Fett', 'Obi Wan Kenobi', 'Darth Vader', 'Darth Maul', 'Luke Skywalker'];

const darkSideCharacters = starWarsCharacters.filter(starWarsCharacter => starWarsCharacter.includes("Darth"));

const darkSideCharactersWithIteration = [];

for (i=0; i < starWarsCharacters.length; i++) {
    if (starWarsCharacters[i].includes("Darth")) {
        darkSideCharactersWithIteration.push(starWarsCharacters[i]);
    }
}

console.log(`Iterative Darkside Characters: ${darkSideCharactersWithIteration}`);

console.log(`Sith characters: ${darkSideCharacters}`);

const firstDarkSideCharacter = starWarsCharacters.find(starWarsCharacter => starWarsCharacter.includes("Darth"));

console.log(`First dark side character: ${firstDarkSideCharacter}`);

function turnToDarkSide(character) {
    if (character.includes("Darth")){
        return character
    }
    let characterArray = character.split(" ");
    let lastName = characterArray.slice(-1);
    return createSithName(lastName)
}

function createSithName(originalName) {
    originalName.unshift("Darth");
    let result = originalName.join(' ');
    return result
}

let darkSide = [];

starWarsCharacters.forEach(character => turnToDarkSide(character));
for (i=0; i < starWarsCharacters.length; i++) {

}
console.log(starWarsCharacters);
