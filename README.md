# Fullstack Application (Lema Assessment)

This repository contains a fullstack application with a Users and Posts system. It is structured into two main folders:

-   **frontend/**: A Next.js application using the App Router and TypeScript.
-   **backend/**: An Express.js application using SQLite3 and TypeScript.

## Prerequisites

-   Node.js (v16 or higher)
-   Yarn package manager

## Getting Started

### Clone the repository:

```bash
git clone https://github.com/sodiqalase/Lema-Assessment.git
cd <repository_name>
```

## Folder Structure

-   **frontend/**: Contains the Next.js frontend code.
-   **backend/**: Contains the Express.js backend code.

---

# Frontend - Next.js Application

This folder contains the frontend code for the Users and Posts system, built with Next.js App Router and TypeScript.

## Code Structure

-   **app/**: Handles all routing for the application.
-   **components/**: Contains reusable components shared across the application.
-   **hooks/**: Contains reusable React hooks for managing shared logic.
-   **interfaces/**: Stores all TypeScript types and interfaces for the application.
-   **services/**: Includes all API service call logic.
-   **styles/**: Contains global SCSS files, partials, and tailwind setup for application styling.
-   **utils/**: Holds reusable utility functions and shared logic.
-   **views/**: Contains page components organized by functionality,

---

## Setup Instructions

### Prerequisites

-   Node.js `^16.0.0`
-   Yarn `^1.22.0`

### Installation

1. Navigate to the project directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    yarn
    ```

3. Run the development server:

    ```bash
    yarn dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Testing

Run tests using Jest:

```bash
yarn test:watch
```

# Backend - Express.js Application

This is the backend server for the Web Developer Assignment, built with Node.js, TypeScript, Express.js, and SQLite3.

## Prerequisites

-   Node
-   TypeScript
-   Npm
-   SQLite3

## Installation

1. Navigate to the project directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start server on port 3001:

    ```bash
    npm run dev
    ```

## Running the Server

Build the project:

```bash
npm run build
```

This will compile TypeScript files from `src/` into JavaScript in the `dist/` directory.

Start the server in production mode:

```bash
npm start
```

For development mode with hot reloading:

```bash
npm run dev
```

For development mode without hot reloading (required by nodemon):

```bash
npm run dev:once
```

## Project Structure

```
backend/
├── src/           # TypeScript source files
├── dist/          # Compiled JavaScript files (generated after build)
├── config/        # Configuration files
└── ...
```

## Important Notes

-   Make sure the TypeScript files are properly compiled into the `dist/` directory before running the server
-   The production server runs from the compiled files in `dist/`
-   Development mode runs directly with ts-node and nodemon for hot reloading
