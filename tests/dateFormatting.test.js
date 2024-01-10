const { formatCustomDate } = require('../src/dateFormatting');

describe('Date Formatting', () => {
  test('Formats date using custom format', () => {
    const date = new Date('2023-05-15T12:00:00Z');
    const formattedDate = formatCustomDate(date, 'DD/MM/YYYY HH:mm:ss');
    expect(formattedDate.formattedString).toBe('15/05/2023 12:00:00');
    expect(formattedDate.timezone).toBe('UTC');
  });

  test('Formats date with different timezone', () => {
    const date = new Date('2023-05-15T12:00:00Z');
    const formattedDate = formatCustomDate(date, 'DD/MM/YYYY HH:mm:ss', 'Europe/Berlin');
    expect(formattedDate.formattedString).toBe('15/05/2023 14:00:00');
    expect(formattedDate.timezone).toBe('Europe/Berlin');
  });
});
