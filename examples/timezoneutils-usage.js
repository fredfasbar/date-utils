const { setTimezone, getCurrentTimezone, getTimezones } = require('../src/timezoneUtils');

const date = new Date('2023-05-15T12:00:00Z');
const timezone = 'Europe/Berlin';

const dateInTimezone = setTimezone(date, timezone);
console.log('Date in specified timezone:', dateInTimezone.toLocaleString('en', { timeZone: timezone }));

const currentTz = getCurrentTimezone();
console.log('Current timezone:', currentTz);

const availableTimezones = getTimezones();
console.log('Available timezones:', availableTimezones);
