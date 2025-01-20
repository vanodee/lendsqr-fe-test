// TESTING LIBRARY IMPORTS
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// COMPONENT IMPORT FOR TESTING 
import LoginPage from './LoginPage';


// Define mock data and mock localStorage
const demoLogin = { email: 'adedeji@lendsqr.com', password: '%lendsqr$2025' };

beforeEach(() => {
  // Clear localStorage before each test
  localStorage.clear();
});


// 1. TEST FOR SUCCESSFUL LOGIN CREDENTIALS
test('successful login with correct credentials', async () => {
  render(<LoginPage />);

  // Input correct credentials
  await userEvent.type(screen.getByPlaceholderText('Email'), demoLogin.email);
  await userEvent.type(screen.getByPlaceholderText('Password'), demoLogin.password);

  // Submit form using user-event (trigger a click on the login button)
  await userEvent.click(screen.getByRole('button', { name: /log in/i }));

  // Wait for page reload simulation (checking localStorage and clearing error message)
  await waitFor(() => {
    expect(localStorage.getItem('isAuthenticated')).toBe('true'); // Check if authenticated
    expect(screen.queryByText('Invalid email or password. Please try again.')).toBeNull(); // No error message
  });
});


// 2. TEST THAT THE BUTTON IS DISABLED WHEN SUBMITTING FORM
test('login button is disabled while submitting', async () => {
  render(<LoginPage />);

  // Type correct credentials
  await userEvent.type(screen.getByPlaceholderText('Email'), demoLogin.email);
  await userEvent.type(screen.getByPlaceholderText('Password'), demoLogin.password);

  // Click on the login button and check if it gets disabled
  await userEvent.click(screen.getByRole('button', { name: /log in/i }));

  // Button should be disabled while submitting
  await waitFor(() => {
    expect(screen.getByRole('button', { name: /please wait.../i })).toBeDisabled();
  });
});


// 3. TEST THAT ERROR MESSAGE DISPLAYS WHEN WRONG CREDENTIALS ARE USED
test('invalid email displays error message', async () => {
  render(<LoginPage />);

  // Input invalid email
  await userEvent.type(screen.getByPlaceholderText('Email'), 'wrong@example.com');
  await userEvent.type(screen.getByPlaceholderText('Password'), demoLogin.password);

  // Submit form using user-event (trigger a click on the login button)
  await userEvent.click(screen.getByRole('button', { name: /log in/i }));

  // Wait for error message to appear
  await waitFor(() => {
    expect(screen.getByText('Invalid email or password. Please try again.')).toBeInTheDocument(); // Error message should show
  });
});


// 4. TEST THAT ERROR MESSAGE DISPLAYS WHEN EMAIL FIELD IS EMPTY
test('submit with blank email field', async () => {
  render(<LoginPage />);

  // Leave email empty
  await userEvent.type(screen.getByPlaceholderText('Password'), demoLogin.password);

  // Submit form using user-event (trigger a click on the login button)
  await userEvent.click(screen.getByRole('button', { name: /log in/i }));

  // Wait for error message to appear
  await waitFor(() => {
    expect(screen.getByText('Invalid email or password. Please try again.')).toBeInTheDocument(); // Error message should show
  });
});


// 5. TEST THAT LOCAL STORAGE VALUE IS SET TO TRUE ON SUCCESFUL LOGIN
test('localStorage is set to true on successful login', async () => {
  render(<LoginPage />);

  // Input correct credentials
  await userEvent.type(screen.getByPlaceholderText('Email'), demoLogin.email);
  await userEvent.type(screen.getByPlaceholderText('Password'), demoLogin.password);

  // Submit form using user-event (trigger a click on the login button)
  await userEvent.click(screen.getByRole('button', { name: /log in/i }));

  // Wait for page reload and check if localStorage is updated
  await waitFor(() => {
    expect(localStorage.getItem('isAuthenticated')).toBe('true'); // localStorage should contain "true"
  });
});

