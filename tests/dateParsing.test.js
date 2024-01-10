const { parseDate, getCurrentTimestamp } = require('../src/dateParsing');

describe('Date Parsing', () => {
  test('Parses date string to Date object', () => {
    const dateString = '2023-05-15T12:00:00Z';
    const parsedDate = parseDate(dateString);
    expect(parsedDate instanceof Date).toBe(true);
    expect(parsedDate.toISOString()).toBe(dateString);
  });

  test('Gets current timestamp', () => {
    const timestamp = getCurrentTimestamp();
    const now = new Date().getTime();
    expect(timestamp).toBeGreaterThanOrEqual(now - 1000);
    expect(timestamp).toBeLessThanOrEqual(now + 1000);
  });
});
