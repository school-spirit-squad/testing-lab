# Automated E2E Testing with Next.js

This project demonstrates end-to-end testing practices using Playwright with a Next.js application. It showcases how to effectively test navigation, form submission, validation, and UI elements.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- npm (or yarn, pnpm, bun) package manager

### Installation

1. Clone the repository or download the project files
2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The app will use TurboPack for faster development builds. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `app/`: Next.js application with App Router
  - `page.tsx`: Home page
  - `about/`: About page
  - `contact/`: Contact form page
  - `services/`: Services page
- `components/`: Reusable UI components
  - `ui/`: UI components (buttons, cards, inputs, etc.)
- `tests/`: Playwright E2E test files
- `playwright.config.ts`: Playwright configuration

## Running E2E Tests

This project uses [Playwright](https://playwright.dev/) for end-to-end testing. The tests are located in the `tests/` directory.

### Run all tests

```bash
npx playwright test
```

### Run tests in UI mode

This opens the Playwright UI, which lets you view, debug, and run tests interactively:

```bash
npx playwright test --ui
```

### Run specific test file

```bash
npx playwright test tests/navigation.spec.ts
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### View test report

After running the tests, you can view the HTML report:

```bash
npx playwright show-report
```

## Test Structure and Strategy

- **Navigation Tests**: Verify routing between pages works correctly
- **Form Tests**:
  - Validate form submissions
  - Verify error handling for invalid inputs
  - Test successful submission flows
- **UI Tests**: Ensure components render correctly and are responsive
- **Service Tests**: Confirm service-related functionality works as expected

### Test Files

- `tests/navigation.spec.ts` - Tests navigation between all pages
- `tests/contact-form.spec.ts` - Tests form submission and validation
- `tests/form-validation.spec.ts` - Tests detailed form field validation
- `tests/ui-elements.spec.ts` - Tests UI component rendering and accessibility
- `tests/services-page.spec.ts` - Tests services page functionality

## Playwright Configuration

The `playwright.config.ts` file contains important settings:

- Tests run in parallel for faster execution
- Screenshots captured only on test failures
- Slow motion delay (1000ms) to better visualize test steps
- Built-in web server that automatically runs the Next.js development server
- Primarily configured for Chromium, but can be extended for other browsers

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
