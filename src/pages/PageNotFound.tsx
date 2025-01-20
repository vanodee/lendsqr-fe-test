// REACT ROUTER IMPORTS
import { Link, useRouteError } from 'react-router';
// IMAGE IMPORTS
import Logo from '../assets/lendsqr_logo.png';
import ErrorImage from '../assets/404_Image.png';


export default function PageNotFound() {

    const error = useRouteError(); // Access the error object

    // Fallback error message if no specific error information is available
    const errorMessage =
        error instanceof Error
        ? error.message // If the error is an instance of Error, use its message
        : "Something went wrong"; // Default error message

  return (
    <div className="error-page-container">
        <img src={Logo} alt="Lendsqr Logo" />
        <img src={ErrorImage} alt="404 Image" />
        <h1>Oops...</h1>
        <p>{errorMessage}</p>

        <Link to='/'>
            <button className='btn-primary-outlined adminFont-base-semibold'>
                Back to Admin Dashboard
            </button>
        </Link>
        
    </div>
  )
}
