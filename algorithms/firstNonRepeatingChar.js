// Find the first non repeating character in a string.

function firstNonRepeatingCharacter(string) {
    const characterFrequencies = {};

    for (const character of string) {
        if (!(character in characterFrequencies)) characterFrequencies[character] = 0;
        characterFrequencies[character]++;
    }

    for (let i = 0; i < string.length; i++) {
        const character = string[i];
        if (characterFrequencies[character] === 1) return i;
    }

    return -1;
}