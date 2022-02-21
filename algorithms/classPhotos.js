// 2 arrays, people with red shirts and people with blue shirts. Arrange the students into two rows
// Following rules:
// All students waering red shirts need to be in the same row
// All students wearing blue shirts need to be in the same row
// Each student in the back row MUST be taller than the student in front of them

function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
    for (i=0; i < redShirtHeights.length; i++) {
        const redShirtHeight = redShirtHeights[i];
        const blueShirtHeight = blueShirtHeights[i];

        if (shirtColorInFirstRow === 'RED') {
            if (redShirtHeight >= blueShirtHeight) return false;
        } else if 
        (blueShirtHeight >= redShirtHeight) return false;
    }

    return true;
}