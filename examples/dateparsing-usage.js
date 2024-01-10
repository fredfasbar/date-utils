const { parseDate, getCurrentTimestamp } = require('../src/dateParsing');

const dateString = '2023-05-15T12:00:00Z';

const parsedDate = parseDate(dateString);
console.log('Parsed date:', parsedDate);

const timestamp = getCurrentTimestamp();
console.log('Current timestamp:', timestamp);
