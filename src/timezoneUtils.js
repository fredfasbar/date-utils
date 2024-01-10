function getCurrentTimezone() {
    const offset = new Date().getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(offset / 60));
    const offsetMinutes = Math.abs(offset % 60);
    const offsetSign = offset < 0 ? '+' : '-';
    return `UTC${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`;
  }
  
  function setTimezone(date, timezone) {
    const dateString = date.toISOString().slice(0, 10);
    const timeString = date.toTimeString().slice(0, 8);
    const offset = (new Date().getTimezoneOffset() / 60) * -1;
    const newDate = new Date(`${dateString}T${timeString}${timezone}`);
    newDate.setHours(newDate.getHours() + offset);
    return newDate;
  }
  
  function getTimezones() {
    const timezones = [
      {
        name: 'Europe/London',
        offset: 0,
        abbreviation: 'GMT'
      },
      {
        name: 'Europe/Berlin',
        offset: 1,
        abbreviation: 'CET'
      },
    ];
  
    return timezones;
  }
  
  module.exports = {
    setTimezone,
    getCurrentTimezone,
    getTimezones
  }
  