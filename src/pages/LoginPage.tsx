import { useState } from 'react';
import Logo from '../assets/lendsqr_logo.png';
import LoginImg from '../assets/login_image.png';


export default function LoginPage() {

    const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="loginPage-container">
      <div className="loginPage-header">
        <img src={Logo} alt="Lendsqr Logo" />
      </div>

      <img src={LoginImg} alt="Login Image" className="loginImage" />

      <div className="loginForm-container">
        <form id='loginForm'>
          <div>
            <h1 className='loginFont-xl-bold color-primary-100'>Welcome!</h1>
            <h2 className='loginFont-md-normal color-accent-100'>Enter details to login.</h2> 
          </div>
          
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <p className="loginFont-xs-semibold color-secondary-100">FORGOT PASSWORD ?</p>

          <button className="loginFont-base-semibold" disabled={isLoading}>
            {!isLoading ? "LOG IN" : "Please Wait..."}
          </button>

        </form>
      </div>
        
    </div>
  )
}
