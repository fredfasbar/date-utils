const { addDays, subtractDays, addMonths, addYears, calculateDateInterval } = require('../src/dateManipulation');

const date = new Date('2023-05-15T12:00:00Z');

const dateAfterAddingDays = addDays(date, 5);
console.log('Date after adding days:', dateAfterAddingDays);

const dateAfterSubtractingDays = subtractDays(date, 3);
console.log('Date after subtracting days:', dateAfterSubtractingDays);

const dateAfterAddingMonths = addMonths(date, 2);
console.log('Date after adding months:', dateAfterAddingMonths);

const dateAfterAddingYears = addYears(date, 1);
console.log('Date after adding years:', dateAfterAddingYears);

const startDate = new Date('2023-05-15T12:00:00Z');
const endDate = new Date('2023-06-15T12:00:00Z');
const interval = calculateDateInterval(startDate, endDate);
console.log('Interval between dates:', interval, 'days');
