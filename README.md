# Lendsqr Frontend Developer Test

A responsive web application replicating Lendsqr's previous admin dashboard, built with **React**, **TypeScript**, and **SCSS**. The project showcases a Login page, Users page, and User Details page, fully aligned with the provided [Figma design](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend).

## Table of Contents
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Development Process](#development-process)
- [Login Credentials](#login-credentials)
- [Author](#author)

---

## Live Demo
The project is hosted on Vercel and can be accessed at:  
🔗 [Lendsqr FE Test Live Demo](https://stevano-peters-lendsqr-fe-test.vercel.app/)

The GitHub repository is available at:  
🔗 [GitHub Repo](https://github.com/vanodee/lendsqr-fe-test)

---

## Features
### Login Page
- Mock user authentication using hardcoded demo credentials.
- Form validation with visual feedback.
- Authentication state stored in **LocalStorage**.
- Fully responsive design.

### Admin Dashboard
- **Users Page**:
  - Displays user data fetched from a [Mock API](https://www.mocky.io/).
  - Pagination and filtering functionality for easy navigation.
  - Interactive user options dropdown (e.g., view, blacklist, activate).
- **Single User Page**:
  - Dynamically rendered using a unique `customer_number`.
  - Displays user-specific details with a responsive tier system.
- **Side Navigation**:
  - Interactive navigation links styled according to the Figma design.
  - Logout button at the bottom of the navigation bar.

### Additional Features
- Demo pages for other routes in the Figma design.
- 404 Page for handling routing errors.
- Fully mobile responsive layout across all pages.

---

## Tech Stack
- **React** (Frontend Framework)
- **TypeScript** (Static Typing)
- **SCSS** (Styling)
- **React Router** (Client-Side Routing)
- **vite-plugin-svgr** (Import SVGs as React Components)
- **Vite** (Build Tool)

---

## Installation
Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/vanodee/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## Usage
### Mock API
Demo user data was generated using [json-generator.com](https://www.json-generator.com/) and hosted on [mocky.io](https://www.mocky.io/). This data is fetched dynamically using React Router's `loader` functions.

### Navigation
- The `/` route renders the **Login Page**.
- Upon successful login, the app redirects to the **Admin Dashboard** (`/admin`), defaulting to the **Users Page** (`/admin/users`).
- Clicking on a user navigates to their **Details Page** (`/admin/users/:customer_number`).

---

## Development Process
1. **Design Analysis**:  
   - Studied the Figma design for typography, colors, shadows, spacing, and dimensions.
   - Created a mini style guide for consistent implementation.

2. **Setup**:  
   - Initialized the project with **Vite** and configured React, TypeScript, and SCSS.  
   - Installed **React Router** for routing and **vite-plugin-svgr** for SVGs.

3. **Page Development**:  
   - Built the Login Page with mock authentication logic and responsive design.  
   - Developed the Admin Layout, including the header, side navigation, and content area.  
   - Implemented the Users Page with data fetching, pagination, and filtering.  
   - Created the Single User Page with dynamic rendering and a tier display system.

4. **Final Touches**:  
   - Ensured responsiveness using SCSS breakpoint mixins.  
   - Added a 404 Page for unmatched routes.  
   - Deployed the project on **Vercel**.

---

## Login Credentials
Use the following credentials to access the Admin Dashboard:
- **Email**: `adedeji@lendsqr.com`
- **Password**: `%lendsqr$2025`

---

## Author
👤 **Stevano Peters**  
📧 Email: [stevano.peters@gmail.com](mailto:stevano.peters@gmail.com)  
💼 Portfolio: [https://www.stevano.dev/](https://www.stevano.dev/)
