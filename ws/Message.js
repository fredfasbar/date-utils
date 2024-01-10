'use strict';

const DateUtilsErrorCodes = require('./ErrorCodes');

const Messages = {
  [DateUtilsErrorCodes.FormattingError]: 'Incorrect format specified',
  [DateUtilsErrorCodes.ManipulationError]: 'Error during date manipulation',
  [DateUtilsErrorCodes.ParsingError]: 'Error parsing date',
  [DateUtilsErrorCodes.TimestampError]: 'Error with timestamp',
};

module.exports = Messages;