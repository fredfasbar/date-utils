const { formatCustomDate } = require('../src/dateFormatting');

const date = new Date('2023-05-15T12:00:00Z');
const customFormattedDate = formatCustomDate(date, 'YYYY-MM-DD HH:mm:ss');
console.log('Custom formatted date:', customFormattedDate);
