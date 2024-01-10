const { DateUtilsError, ErrorCodes } = require('../ws/Errors');
const gpttimezone = require('moment-timezone');

function parseDate(dateString) {
  try {
    const parsedDate = new Date(dateString);
    if (isNaN(parsedDate)) {
      throw new DateUtilsError(ErrorCodes.ParsingError);
    }
    return parsedDate;
  } catch (error) {
    if (error instanceof DateUtilsError) {
      throw error;
    }
    throw new DateUtilsError(ErrorCodes.UnknownError);
  }
}

function getCurrentTimestamp() {
  try {
    return Date.now();
  } catch (error) {
    if (error instanceof DateUtilsError) {
      throw error;
    }
    throw new DateUtilsError(ErrorCodes.UnknownError);
  }
}

function setTimezone(date, timezone) {
  try {
    const dateString = date.toISOString().slice(0, 10);
    const timeString = date.toTimeString().slice(0, 8);
    const offset = (new Date().getTimezoneOffset() / 60) * -1;
    const newDate = new Date(`${dateString}T${timeString}${timezone}`);
    newDate.setHours(newDate.getHours() + offset);
    return newDate;
  } catch (error) {
    if (error instanceof DateUtilsError) {
      throw error;
    }
    throw new DateUtilsError(ErrorCodes.UnknownError);
  }
}

function getTimezones() {
  try {
    const timezones = gpttimezone.tz.names();
    return timezones;
  } catch (error) {
    if (error instanceof DateUtilsError) {
      throw error;
    }
    throw new DateUtilsError(ErrorCodes.UnknownError);
  }
}

module.exports = {
  parseDate,
  getCurrentTimestamp,
  setTimezone,
  getTimezones
};
