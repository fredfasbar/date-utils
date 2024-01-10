declare module 'timezoneUtils' {
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
  export function getCurrentTimezone(): string;
  export function setTimezone(date: Date, timezone: string): Date;
}