export function addDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }
  
  export function subtractDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate;
  }
  
  export function addMonths(date: Date, months: number): Date {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
  }
  
  export function addYears(date: Date, years: number): Date {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
  }
  
  export function calculateDateInterval(start: Date, end: Date): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((start.getTime() - end.getTime()) / oneDay));
    return diffDays;
  }
  