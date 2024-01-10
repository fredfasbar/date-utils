# date-utils

date-utils is a Node.js module that provides convenient methods for date and time manipulation, parsing, formatting, timezone management, and more.

## Package

`ws` - this package created for errorcodes, error messages and more.

## Installation

To install the package, use npm:

```bash
npm install date-utils@latest
```

## Usage

### Parsing Dates

You can parse date strings using the `parseDate` function:

```javascript
const { parseDate } = require('date-utils');

const dateString = '2023-05-15T12:00:00Z';
const parsedDate = parseDate(dateString);
console.log('Parsed date:', parsedDate);
```

### Formatting Dates

Formatting dates into specific formats is achieved using the `formatDate` function:

```javascript
const { formatDate } = require('date-utils');

const currentDate = new Date();
const formattedDate = formatDate(currentDate);
console.log('Formatted date:', formattedDate);
```

### Timezone Management

Managing timezones can be done using the `setTimezone` function:

```javascript
const { setTimezone } = require('date-utils');

const currentDate = new Date();
const timezone = 'America/New_York';
const adjustedDate = setTimezone(currentDate, timezone);
console.log('Date in New York timezone:', adjustedDate);
```

For more detailed information on each function's usage, consult the [API Reference](docs/api-reference.md).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```vbnet
Feel free to tailor this README according to the specifics of your `date-utils` module, including its functionalities and usage instructions.
```