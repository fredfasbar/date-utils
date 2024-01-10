# API Reference

## Date Parsing Functions

### `parseDate(dateString: string): Date`
Parses the input string and returns a Date object.

Example:
```javascript
const parsedDate = parseDate('2023-05-15');
console.log(parsedDate);
```

### `getCurrentTimestamp(): number`
Returns the current timestamp.

Example:
```javascript
const timestamp = getCurrentTimestamp();
console.log(timestamp);
```

## Date Manipulation Functions

### `addDays(date: Date, days: number): Date`
Adds the specified number of days to the given date.

Example:
```javascript
const today = new Date();
const futureDate = addDays(today, 5);
console.log(futureDate);
```


## Date Formatting Functions

### `formatCustomDate(date: Date, format: string): string`
Formats the date according to the specified format.

Example:
```javascript
const currentDate = new Date();
const formattedDate = formatCustomDate(currentDate, 'DD/MM/YYYY');
console.log(formattedDate);
```

## Timezone Utility Functions

### `setTimezone(date: Date, timezone: string): Date`
Sets the timezone for the given date.

Example:
```javascript
const currentDate = new Date();
const timezoneAdjustedDate = setTimezone(currentDate, 'UTC+2');
console.log(timezoneAdjustedDate);
```