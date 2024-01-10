declare module 'dateFormatting' {
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
  export function formatDate(date: Date): string;
  export function formatISODate(date: Date): string;
}