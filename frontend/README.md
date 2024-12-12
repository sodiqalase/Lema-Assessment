# Roppi NG Web Application

This is the web application for **Roppi NG**, where customers can browse products as guests, sign up, log in, access product catalogs and stores, and do checkouts.  
The project was bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## Code Structure

- **app/**: Handles all routing for the application, functioning similarly to `react-router`.  
  > **Note**: Please avoid creating components within the `app` folder. Use the `views` folder for page components.
  
- **components/**: Contains reusable components used across the application. Any code that is used more than once should be placed here.
  
- **hooks/**: Stores all custom React hooks.
  
- **interfaces/**: All TypeScript types and interfaces are housed in this folder.
  
- **enums/**: Contains all enumerations used in the project.
  
- **layout/**: Holds layout-related components like `Navbar`, `Footer`, `Sidebar`, and `AuthLayout`.
  
- **services/**: Contains all API service calls.
  
- **styles/**: Includes SCSS styles. You can add new styles to the global SCSS file or create dedicated partials as needed.
  
- **utils/**: Contains reusable utility functions and code logic.
  
- **views/**: Holds page components, organized by functionality. For example, `Auth/LoginPage`, `Auth/SignupPage`, `Homepage/*`, `LandingPage/`.
  
- **zustand/**: Manages global state using the Zustand state management library.

---

## File Changes

To facilitate code review, a single Pull Request (PR) should not modify more than **20 files**.  
If your changes are likely to exceed this limit, create a **temporary branch** (e.g., `feature/landing-page`) with the initial 20 file changes, and raise subsequent PRs against that branch. This approach keeps reviews manageable and efficient.

---

## Branch Naming Convention

Follow the naming conventions below to maintain clarity and consistency in the codebase:

- **Features**: `feature/short-description`  
  Example: `feature/login-functionality`
  
- **Bug Fixes**: `bugfix/short-description`  
  Example: `bugfix/fix-cart-issue`
  
- **Hot Fixes**: `hotfix/short-description`  
  Example: `hotfix/critical-login-error`
  
- **Refactoring**: `refactor/short-description`  
  Example: `refactor/clean-up-auth-module`

---

## Raising Pull Requests (PRs)

When raising a PR, please adhere to the following guidelines:

1. **Descriptive Title**:  
   Provide a concise and clear title.  
   Example: `Add Login Module`

2. **Detailed Description**:  
   Provide a brief overview of the changes in bullet points.  
   Example:
   - Scaffold login screen
   - Create reusable input fields
   - Integrate authentication API for sign-up and login
   
3. **Respond to Feedback**:  
   Be prompt in addressing comments and making any necessary changes.

---

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/RoppiDev/roppi-shop.git
    ```

2. Create a new branch:

    ```bash
    git checkout -b feature/[branch-name]
    ```

    > **Note**: Please use only **Yarn** as the package manager.

3. Install dependencies:

    ```bash
    yarn
    ```

4. Prepare husky:

    ```bash
    yarn run postinstall
    ```

5. Run the development server:

    ```bash
    yarn run dev
    ```

6. For production build:

    ```bash
    yarn run build
    ```

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---