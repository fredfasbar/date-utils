const { parseDate, getCurrentTimestamp } = require('../src/dateParsing');

const dateStrings = ['2023-05-15T12:00:00Z', '2024-06-20T08:30:00Z'];

const parsedDates = dateStrings.map(str => parseDate(str));
console.log('Parsed dates:', parsedDates);

const timestamp = getCurrentTimestamp();
console.log('Current timestamp:', timestamp);
