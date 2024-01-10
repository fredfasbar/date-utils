const {
    addDays,
    subtractDays,
    addMonths,
    addYears,
    calculateDateInterval
  } = require('../src/dateManipulation');
  
  const startDate = new Date('2023-05-15T12:00:00Z');
  const endDate = new Date('2023-06-15T12:00:00Z');
  
  const newDateAfterAddition = addDays(startDate, 5);
  const newDateAfterSubtraction = subtractDays(startDate, 3);
  
  const newDateAfterMonths = addMonths(startDate, 2);
  const newDateAfterYears = addYears(startDate, 1);
  
  const interval = calculateDateInterval(startDate, endDate);
  
  console.log('Date after adding days:', newDateAfterAddition);
  console.log('Date after subtracting days:', newDateAfterSubtraction);
  console.log('Date after adding months:', newDateAfterMonths);
  console.log('Date after adding years:', newDateAfterYears);
  console.log('Interval between dates:', interval);
  