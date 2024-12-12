# Lema Frontend Assessment

---

## Code Structure

- **app/**: Handles all routing for the application.
- **components/**: Contains reusable components shared across the application.
- **hooks/**: Contains reusable React hooks for managing shared logic.
- **interfaces/**: Stores all TypeScript types and interfaces for the application.
- **services/**: Includes all API service call logic.
- **styles/**: Contains global SCSS files, partials, and tailwind setup for application styling.
- **utils/**: Holds reusable utility functions and shared logic.
- **views/**: Contains page components organized by functionality, 
 

---

## Setup Instructions

### Prerequisites
- Node.js `^16.0.0`
- Yarn `^1.22.0`

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sodiqalase/Lema-Assessment.git
    ```

2. Navigate to the project directory:

    ```bash
    cd [project-directory]/frontend
    ```

3. Install dependencies:

    ```bash
    yarn
    ```

4. Run the development server:

    ```bash
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Testing

Run tests using Jest:

```bash
yarn test:watch
