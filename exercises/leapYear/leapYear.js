function isLeapYear(year) {
    if (typeof year !== integer) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
}