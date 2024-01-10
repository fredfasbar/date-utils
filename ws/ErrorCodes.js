'use strict';

/**
 * @typedef {Object} DateUtilsErrorCodes

 * @property {'ParsingError'} ParsingError
 * @property {'TimestampError'} TimestampError
 * @property {'FormattingError'} FormattingError
 * @property {'ManipulationError'} ManipulationError
 */

const keys = [
    'ParsingError',
    'TimestampError',
    'FormattingError',
    'ManipulationError',
];

// JSDoc for IntelliSense purposes
/**
 * @type {DateUtilsErrorCodes}
 * @ignore
 */
module.exports = Object.fromEntries(keys.map(key => [key, key]));