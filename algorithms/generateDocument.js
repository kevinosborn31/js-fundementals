// Check if document string can be created using the chraracters passed in


function generateDocument(characters, document) {
    for (const character of document) {
        const documentFrequency = countCharacterFrequency(character, document);
        const charactersFrequency = countCharacterFrequency(character, characters);
        if (documentFrequency > charactersFrequency) return false;
    }
    return true;
}

function countCharacterFrequency(character, target) {
    let frequency = 0;
    for (const char of target) {
        if (char === character) frequency++;
    }
    return frequency;
}