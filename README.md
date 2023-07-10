# Nextjs-monorepo
Experimenting NextJS application in Monorepo

This repo is just for learning purpose to understand how to setup Monorepo using npm workspaces only for NextJS applications and its share components

## Prerequisites
To run this application, you'll need the following:

- Node.js (v16.3.1 or above)
- npm (v8.1.2 or above)

## Getting Started
Follow the steps below to set up and run the Next.js application:

```bash
git clone https://github.com/your-username/nextjs-app.git
cd next-monorepo
npm install
```

## Development server:
Run on the root project
```bash
npm run dev -w <pkg>
# example: npm run dev -w customer-web
```
or you might want to use available script from root
```bash
npm run dev:<pkg>
# example npm run dev:customer-web
```

## Project Structure
The project structure is organized as follows:

- **customer-web/**: Simulate real case of Next.js application for customer-side.
- **internal-dashboard/**: Simulate real case of Next.js application for internal operational.
- **shared/**: contain shared lib (e.g UI component, theming)

## Available Scripts
In the root project directory, you can run the following scripts:

- **npm run build-css**: Compile sass into css from @shared/ui-component
- **npm run dev:internal-dashboard**: Starts the development server for internal-dashboard project.
- **npm run dev:customer-web**: Starts the development server for customer-web project.
- **npm run lint-packages**: Run linting all packages.

## Deployment
```bash
npm run build-css
npm run build -w <pkg>
# example: npm run build -w customer-web
```
