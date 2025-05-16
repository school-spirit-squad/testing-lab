# Automated E2E Testing with Next.js

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- npm, yarn, pnpm, or bun package manager

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Running E2E Tests

This project uses [Playwright](https://playwright.dev/) for end-to-end testing. The tests can be found in the `tests/` directory.

### Run all tests

```bash
npx playwright test

```

### Run tests in UI mode

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

## Test Structure

- `tests/navigation.spec.ts` - Tests navigation between pages
- `tests/contact-form.spec.ts` - Tests form submission and validation
- `tests/form-validation.spec.ts` - Tests form field validation
- `tests/ui-elements.spec.ts` - Tests UI component rendering and functionality

## Learn More

To learn more about Next.js and Playwright, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
