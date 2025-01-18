// REACT IMPORTS
import { useState } from 'react';

// IMAGE IMPORTS
import Logo from '../assets/lendsqr_logo.png';
import LoginImg from '../assets/login_image.png';


//Demo Login Crecentials
const demoLogin:{email: string, password: string} ={
  email: "adedeji@lendsqr.com",
  password:"%lendsqr$2025",
}


export default function LoginPage() {

  const [isLoading, setIsLoading] = useState<boolean>(false);   // Loading state management
  const [errorMessage, setErrorMessage] = useState<string>(""); // Error message state management


  // Login Form Submission Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;                               // Get the form element
    const formData = new FormData(form);                        // Use FormData to capture form values
    const email = formData.get("email") as string;              // Store form values as strings
    const password = formData.get("password") as string;

    // Timer to simulate waiting for a server response
    setTimeout(() => {

      // Validate Form Login Credentials by comparing to Demo Login Credentials
      if (email === demoLogin.email && password === demoLogin.password) {
        setErrorMessage("");

        // Set authentication status to TRUE & store variable in localStorage
        localStorage.setItem("isAuthenticated", "true");

        // Reload the page so that react-router gets the updated authentication status and redirects accordingly (see App.tsx)
        window.location.reload();                                 
      } 
      else {
        setErrorMessage("Invalid email or password. Please try again.");
      }

      setIsLoading(false);
    }, 1000);
  };



  return (
    <div className="loginPage-container">
      <div className="loginPage-header">
        <img src={Logo} alt="Lendsqr Logo" />
      </div>

      <img src={LoginImg} alt="Login Image" className="loginImage" />

      <div className="loginForm-container">
        <form id='loginForm' onSubmit={handleSubmit} >
          <div>
            <h1>Welcome!</h1>
            <h2>Enter details to login.</h2> 
          </div>
          
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className={errorMessage == "" ? "input" : "errorInput"}       // change input field style if there is an error
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className={errorMessage == "" ? "input" : "errorInput"}       // change input field style if there is an error
          />

          {/* display error message, if there is an error */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p className="loginFont-xs-semibold color-secondary-100">FORGOT PASSWORD ?</p>

          {/* change button style and text while the form is being submitted (isLoading) */}
          <button className="btn-secondary-filled loginFont-base-semibold" disabled={isLoading}>
            {!isLoading ? "LOG IN" : "Please Wait..."}
          </button>

        </form>
      </div>
        
    </div>
  )
}

