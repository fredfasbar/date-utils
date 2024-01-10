'use strict';

const DateParsing = require('./src/dateParsing');
const DateManipulation = require('./src/dateManipulation');
const DateFormatting = require('./src/dateFormatting');
const TimezoneUtils = require('./src/timezoneUtils');
const DUError = require('./ws/DUError');
const Message = require('./ws/Message');
const ErrorCodes = require('./ws/ErrorCodes');

// Modules, v2
exports.setTimezone = DateParsing.setTimezone;
exports.getCurrentTimestamp = DateParsing.getCurrentTimestamp;
exports.getTimezones = DateParsing.getTimezones;

exports.addDays = DateManipulation.addDays;
exports.subtractDays = DateManipulation.subtractDays;
exports.addMonths = DateManipulation.addMonths;
exports.addYears = DateManipulation.addYears;
exports.calculateDateInterval = DateManipulation.calculateDateInterval;

exports.formatCustomDate = DateFormatting.formatCustomDate;

exports.setTimezoneUtils = TimezoneUtils.setTimezone;
exports.getCurrentTimezoneUtils = TimezoneUtils.getCurrentTimezone;

// Modules 
exports.dateParsing = DateParsing;

exports.dateManipulation = DateManipulation;

exports.dateFormatting = DateFormatting;

exports.timezoneUtils = TimezoneUtils;

// Error Category

exports.DUError = DUError;

exports.Message = Message;

exports.ErrorCodes = ErrorCodes;
