import { isLeapYear } from './leapYear';

    test ("should check if input year is a leap year", () => {
        const year1 = 1998;

        const year2 = 2022;
        
        const nullYear = null;
        
        const year3 = 2024;
        
        expect(isLeapYear(year1)).toBe(false);
        expect(isLeapYear(year2)).toBe(false);
        expect(isLeapYear(nullYear)).toBe(false);
        expect(isLeapYear(year3)).toBe(true);
    });


