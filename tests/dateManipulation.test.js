const {
    addDays,
    subtractDays,
    addMonths,
    addYears,
    calculateDateInterval
  } = require('../src/dateManipulation');
  
  describe('Date Manipulation', () => {
    test('Adds days to a date', () => {
      const date = new Date('2023-05-15T12:00:00Z');
      const modifiedDate = addDays(date, 5);
      expect(modifiedDate.toISOString()).toBe('2023-05-20T12:00:00.000Z');
    });
  
    test('Subtracts days from a date', () => {
      const date = new Date('2023-05-15T12:00:00Z');
      const modifiedDate = subtractDays(date, 3);
      expect(modifiedDate.toISOString()).toBe('2023-05-12T12:00:00.000Z');
    });
  
    test('Adds months to a date', () => {
      const date = new Date('2023-05-15T12:00:00Z');
      const modifiedDate = addMonths(date, 2);
      expect(modifiedDate.toISOString()).toBe('2023-07-15T12:00:00.000Z');
    });
  
    test('Adds years to a date', () => {
      const date = new Date('2023-05-15T12:00:00Z');
      const modifiedDate = addYears(date, 1);
      expect(modifiedDate.toISOString()).toBe('2024-05-15T12:00:00.000Z');
    });
  
    test('Calculates date interval between two dates', () => {
      const startDate = new Date('2023-05-15T12:00:00Z');
      const endDate = new Date('2023-06-15T12:00:00Z');
      const interval = calculateDateInterval(startDate, endDate);
      expect(interval).toBe(31);
    });
  });