import { useState } from 'react';
import Logo from '../assets/lendsqr_logo.png';
import LoginImg from '../assets/login_image.png';


//Demo Login Crecentials
const demoLogin ={
  email: "adedeji@lendsqr.com",
  password:"%lendsqr$2025",
}


export default function LoginPage() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");


  // Form Submission Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;                               // Get the form element
    const formData = new FormData(form);                        // Use FormData to capture form values
    const email = formData.get("email") as string;              // Store form values as strings
    const password = formData.get("password") as string;

    // Timer to simulate waiting for a server response
    setTimeout(() => {
      // Validate Login Credentials by comparing to Demo Login Credentials
      if (email === demoLogin.email && password === demoLogin.password) {
        setErrorMessage("");
        localStorage.setItem("isAuthenticated", "true");          // Set authentication status to TRUE
        window.location.reload();                                 // Reload the page, so react-router handles redirecting with new authentication status (see App.tsx)
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
            className={errorMessage == "" ? "input" : "errorInput"}
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className={errorMessage == "" ? "input" : "errorInput"}
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p className="loginFont-xs-semibold color-secondary-100">FORGOT PASSWORD ?</p>

          <button className="btn-secondary-filled loginFont-base-semibold" disabled={isLoading}>
            {!isLoading ? "LOG IN" : "Please Wait..."}
          </button>

        </form>
      </div>
        
    </div>
  )
}

