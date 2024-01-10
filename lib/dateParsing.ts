export function parseDate(dateString: string): Date {
    return new Date(dateString);
  }
  
  export function getCurrentTimestamp(): number {
    return Date.now();
  }
  
  export function setTimezone(date: Date, timezone: string): Date {
    const dateString = date.toISOString().slice(0, 10);
    const timeString = date.toTimeString().slice(0, 8);
    const offset = (new Date().getTimezoneOffset() / 60) * -1;
    const newDate = new Date(`${dateString}T${timeString}${timezone}`);
    newDate.setHours(newDate.getHours() + offset);
    return newDate;
  }
  