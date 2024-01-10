declare module 'dateParsing' {
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
  export function parseDate(dateString: string): Date;
  export function getCurrentTimestamp(): number;
  export function setTimezone(date: Date, timezone: string): Date;
}