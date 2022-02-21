// Check if string is a palindrome (written same way forward and backward)

function isPalindrome(string) {
    const reversedChars = [];
    for (let i = string.length - 1; i >= 0; i--) {
        reversedChars.push(string[i]);
    }
    return string === reversedChars.join('');
}