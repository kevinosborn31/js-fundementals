// Run-length encoding is a form of lossless data compression in which runs of data are stored
// as a single data value and count, rather than as the original run"

function runLengthEncoding(string) {
    const sortedString = [];
    let currentRunLength = 1;
    for (i=1; i < string.length; i++){
        const currentCharacter = string[i];
        const previousCharacter = string[i - 1];

        if (currentCharacter !== previousCharacter || currentRunLength === 9) {
            sortedString.push(currentRunLength.toString());
            sortedString.push(previousCharacter);
            currentRunLength = 0;
        }
        currentRunLength++;
    }

    sortedString.push(currentRunLength.toString());
    sortedString.push(string[string.length - 1]);

    return sortedString.join('');
}