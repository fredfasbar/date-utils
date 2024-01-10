const dateParsing = require('./dateParsing');
const dateFormatting = require('./dateFormatting');
const dateManipulation = require('./dateManipulation');
const timezoneUtils = require('./timezoneUtils');

function dateUtils(param) {
  return {
    parseDate: dateParsing.parseDate,
    getCurrentTimestamp: dateParsing.getCurrentTimestamp,
    setTimezone: timezoneUtils.setTimezone,
    formatDate: dateFormatting.formatDate,
    formatISODate: dateFormatting.formatISODate,
    addDays: dateManipulation.addDays,
    subtractDays: dateManipulation.subtractDays,
    addMonths: dateManipulation.addMonths,
    addYears: dateManipulation.addYears,
    calculateDateInterval: dateManipulation.calculateDateInterval,
    formatCustomDate: dateFormatting.formatCustomDate
  }[param];
}

module.exports = dateUtils;
module.exports = {
  dateParsing,
  dateFormatting,
  dateManipulation,
  timezoneUtils
}
