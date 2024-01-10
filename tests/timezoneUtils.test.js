const { setTimezone, getCurrentTimezone, getTimezones } = require('../src/timezoneUtils');

// Примеры тестов
describe('Timezone Utils', () => {
  test('Sets timezone for a date', () => {
    const date = new Date('2023-05-15T12:00:00Z');
    const timezone = 'Europe/Berlin';
    const dateInTimezone = setTimezone(date, timezone);
    expect(dateInTimezone.toLocaleString('en', { timeZone: timezone })).toBe('5/15/2023, 2:00:00 PM');
  });

  test('Gets current timezone', () => {
    const currentTimezone = getCurrentTimezone();
    expect(typeof currentTimezone).toBe('string');
    const timezones = getTimezones().map(tz => tz.name);
    expect(timezones.includes(currentTimezone)).toBe(true);
  });

  test('Gets available timezones', () => {
    const timezones = getTimezones();
    expect(Array.isArray(timezones)).toBe(true);
    expect(timezones.length).toBeGreaterThan(0);
    expect(timezones[0]).toHaveProperty('name');
    expect(timezones[0]).toHaveProperty('offset');
    expect(timezones[0]).toHaveProperty('abbreviation');
  });
});
