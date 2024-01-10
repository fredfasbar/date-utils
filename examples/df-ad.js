const { formatCustomDate } = require('../src/dateFormatting');

const date = new Date('2023-05-15T12:00:00Z');
const customFormat = 'DD/MM/YYYY HH:mm:ss';

const formattedDate = formatCustomDate(date, customFormat);
console.log('Formatted date:', formattedDate);
