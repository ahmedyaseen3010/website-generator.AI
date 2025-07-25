# Website Ideas Frontend

This project is a Next.js application that integrates with a NestJS backend and MongoDB to allow users to submit website ideas and view sections related to those ideas.

## Features

- A form for submitting website ideas.
- Fetching and displaying sections related to the submitted ideas.
- Loading state and error handling for API calls.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd website-ideas-frontend
   ```

3. Install the dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

### Running the Application

To start the development server, run:

```
npm run dev
```

or

```
yarn dev
```

The application will be available at `http://localhost:3000`.

### API Integration

This frontend communicates with a NestJS backend. Ensure that the backend is running and accessible. Update the API endpoint in `src/services/api.ts` if necessary.

### Folder Structure

- `src/components`: Contains reusable components like the form, sections list, and loading spinner.
- `src/pages`: Contains the main entry point and custom app component.
- `src/services`: Contains API call functions.
- `src/styles`: Contains global styles.
- `src/types`: Contains TypeScript types and interfaces.

### Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

### License

This project is licensed under the MIT License.