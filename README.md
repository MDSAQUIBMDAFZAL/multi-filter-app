# Multi-Filter App

This project is a React application that displays a table of data with filter options using toggle switches.

## Features

- Display data in a table format.
- Filter data based on multiple criteria using toggle switches.
- Show all data by default and filter based on user selections.

## Project Structure

src
│ App.js
│ index.js
│ styles.css
│
└───components
│ Filter.js
│ Table.js
│ TableRow.js
│
└───data
│ data.json

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<USERNAME>/<REPO>.git
   ```

2. Navigate to the project directory:

   ```bash
   cd <REPO>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Components

### Filter

- **Filter.js**: A component that displays toggle switches for filtering data.

### Table

- **Table.js**: A component that displays the filtered data in a table format.
- **TableRow.js**: A component that represents a row in the table.

## Data

- **data.json**: Contains the sample data displayed in the table.

## Styles

- **styles.css**: Contains the CSS styles for the application.

## Dependencies

- `react-switch`: For toggle switch UI components.

## Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
