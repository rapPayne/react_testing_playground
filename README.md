# React Testing Practice App

A minimal React application designed for practicing testing techniques with Vitest and React Testing Library. This project provides two simple features to apply Test-Driven Development (TDD) principles and learn testing best practices.

## Features

### Todo Page (`/todos`)
- Add new todos with an input field and button
- Mark todos as completed with checkboxes
- Display "No todos yet" message when the list is empty
- State management with React hooks

### Joke Page (`/jokes`)
- Fetch random jokes from the Official Joke API
- Display loading states during API calls
- Handle and display error states
- Show joke setup and punchline

## Tech Stack

- **React 18+** with functional components and hooks
- **TypeScript** for type safety
- **React Router v7** for client-side routing
- **Vite** as the build tool and bundler
- **Vitest** as the test runner
- **React Testing Library** for component testing
- **ES2015 imports** throughout

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Testing

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test -- --watch
```

Run tests with coverage:

```bash
npm run test -- --coverage
```

## Testing Configuration

This project is pre-configured with:

- **Vitest** - Fast unit test framework powered by Vite
- **React Testing Library** - Component testing utilities following best practices
- **jsdom** - Browser-like environment for testing
- **@testing-library/jest-dom** - Custom matchers for DOM assertions
- **@testing-library/user-event** - User interaction simulation

Test setup is located in `src/test/setup.ts`.

## Project Structure

```
src/
├── components/
│   └── Navigation.tsx      # Navigation bar with routing links
├── pages/
│   ├── TodoPage.tsx        # Todo list with add/complete functionality
│   └── JokePage.tsx        # Joke fetcher with async API calls
├── test/
│   └── setup.ts            # Vitest configuration and setup
├── App.tsx                 # Root component with routing
├── main.tsx                # Application entry point
└── index.css               # Global styles
```

## Testing Practice Ideas

This application provides excellent opportunities to practice:

### Unit Testing
- Testing individual component rendering
- Testing state updates and user interactions
- Testing conditional rendering (empty states, loading, errors)
- Testing form inputs and button clicks

### Integration Testing
- Testing navigation between routes
- Testing user workflows (adding/completing todos)
- Testing component composition

### Async Testing
- Testing API calls and loading states
- Testing error handling
- Testing successful data fetching

### TDD Practice
- Write tests first, then implement features
- Refactor with confidence knowing tests pass
- Add new features following the red-green-refactor cycle

## Example Test Cases

Consider writing tests for:

**TodoPage**
- Renders "No todos yet" when the list is empty
- Adds a new todo when the Add button is clicked
- Adds a todo when Enter key is pressed
- Toggles todo completion when checkbox is clicked
- Displays completed todos with strikethrough styling

**JokePage**
- Renders the "Get Joke" button
- Shows loading state when fetching a joke
- Displays joke setup and punchline after successful fetch
- Shows error message when fetch fails
- Disables button while loading

**Navigation**
- Renders links to both pages
- Navigates to correct routes when links are clicked

## API Reference

The joke feature uses the [Official Joke API](https://official-joke-api.appspot.com/):
- Endpoint: `https://official-joke-api.appspot.com/random_joke`
- Returns: `{ setup: string, punchline: string, type: string, id: number }`

## License

This project is open source and available for educational purposes.
