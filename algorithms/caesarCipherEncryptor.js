// Given a string, shift all letters in the string forward by k places in the alphabet.

function caesarCipherEncryptor(string, key) {
    const newLetters = [];
    const newKey = key % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (const letter of string) {
        newLetters.push(getNewLetter(letter, newKey, alphabet));
    }
    return newLetters.join('');
}

function getNewLetter(letter, key, alphabet) {
    const newLetterCode = alphabet.indexOf(letter) + key;
    return alphabet[newLetterCode % 26];
}