declare module 'dateManipulation' {
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
  export function addDays(date: Date, days: number): Date;
  export function subtractDays(date: Date, days: number): Date;
  export function addMonths(date: Date, months: number): Date;
  export function addYears(date: Date, years: number): Date;
  export function calculateDateInterval(start: Date, end: Date): number;
}