import { DateParser } from '.'

declare module 'index' {
  export class DateParser {
    public format: string;
    constructor(format: string);
    parse(dateString: string): Date;
    formatDate(date: Date): string;
  }

  export interface ParsedDate {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
  }

  export function parseISODate(dateString: string): ParsedDate;

  export class DateFormatter {
    public format: string;
    constructor(format: string);
    formatDate(date: Date): string;
  }

  export interface FormattedDate {
    formattedString: string;
    timezone: string;
  }

  export function formatCustomDate(date: Date, format: string): FormattedDate;

  export class DateCalculator {
    public timezone: string;
    constructor(timezone: string);
    addDays(date: Date, days: number): Date;
    subtractDays(date: Date, days: number): Date;
    addMonths(date: Date, months: number): Date;
    addYears(date: Date, years: number): Date;
    calculateDateInterval(start: Date, end: Date): number;
  }

  export interface DateInterval {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  export function getDateInterval(start: Date, end: Date): DateInterval;

  export class TimezoneManager {
    public timezone: string;
    constructor(timezone: string);
    setTimezone(date: Date): Date;
    getCurrentTimezone(): string;
  }

  export interface TimezoneInfo {
    name: string;
    offset: number;
    abbreviation: string;
  }

  export function getTimezones(): TimezoneInfo[];
}

declare module 'dateUtils' {
  type DateParser = any;
  type ParsedDate = any;
  type DateFormatter = any;
  type FormattedDate = any;
  type DateCalculator = any;
  type DateInterval = any;
  type TimezoneManager = any;
  type TimezoneInfo = any;

  export class DateUtils {
    public parser: DateParser;
    public formatter: DateFormatter;
    public calculator: DateCalculator;
    public timezoneManager: TimezoneManager;
    constructor();
  }

  export {
    DateParser,
    ParsedDate,
    DateFormatter,
    FormattedDate,
    DateCalculator,
    DateInterval,
    TimezoneManager,
    TimezoneInfo,
  };
}
