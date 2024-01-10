import * as dateParsing from './dateParsing';
import * as dateFormatting from './dateFormatting';
import * as dateManipulation from './dateManipulation';
import * as timezoneUtils from './timezoneUtils';

type DateUtilsFunction = keyof typeof dateParsing | keyof typeof dateFormatting | keyof typeof dateManipulation | keyof typeof timezoneUtils;

function dateUtils(param: DateUtilsFunction) {
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
    calculateDateInterval: dateManipulation.calculateDateInterval
  }[param];
}

export default dateUtils;
