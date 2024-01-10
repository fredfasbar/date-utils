# Usages
Date Formatting
```js
const { formatCustomDate } = require('date-utils');

const date = new Date('2023-05-15T12:00:00Z');
const customFormattedDate = formatCustomDate(date, 'YYYY-MM-DD HH:mm:ss');
console.log('Custom formatted date:', customFormattedDate);
```

Date Parsing
```js
const { parseDate, getCurrentTimestamp } = require('date-utils');

const dateString = '2023-05-15T12:00:00Z';

const parsedDate = parseDate(dateString);
console.log('Parsed date:', parsedDate);

const timestamp = getCurrentTimestamp();
console.log('Current timestamp:', timestamp);
```

Date Manipulation
```js
const { addDays, subtractDays, addMonths, addYears, calculateDateInterval } = require('date-utils');

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
```

Timezone Utils
```js
const { setTimezone, getCurrentTimezone, getTimezones } = require('date-utils');

const date = new Date('2023-05-15T12:00:00Z');
const timezone = 'Europe/Berlin';

const dateInTimezone = setTimezone(date, timezone);
console.log('Date in specified timezone:', dateInTimezone.toLocaleString('en', { timeZone: timezone }));

const currentTz = getCurrentTimezone();
console.log('Current timezone:', currentTz);

const availableTimezones = getTimezones();
console.log('Available timezones:', availableTimezones);
```
# Advanced Usages
```js
// Import modules for working with dates
const { parseDate, formatDate } = require('date-utils/src/dateParsing');
const { addDays, subtractDays, addMonths, addYears, calculateDateInterval } = require('date-utils/src/dateManipulation');
const { formatCustomDate } = require('date-utils/src/dateFormatting');
const { setTimezone, getCurrentTimezone, getTimezones } = require('date-utils/src/timezoneUtils');

const dateString = '2023-05-15T12:00:00Z';
const parsedDate = parseDate(dateString);
console.log('Parsed date:', parsedDate);

const formattedDate = formatDate(parsedDate);
console.log('Formatted date:', formattedDate);

const modifiedDate = addDays(parsedDate, 5);
console.log('Modified date (added 5 days):', modifiedDate);

const startDate = new Date('2023-05-15T12:00:00Z');
const endDate = new Date('2023-06-15T12:00:00Z');
const interval = calculateDateInterval(startDate, endDate);
console.log('Date interval:', interval);
```