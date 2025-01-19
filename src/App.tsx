// REACT ROUTER IMPORTS
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router";

// PAGE & LAYOUT IMPORTS 
import LoginPage from './pages/LoginPage';
import AdminLayout from './layouts/AdminLayout';
import UsersPage from './pages/UsersPage';
import SingleUserPage from './pages/SingleUserPage';

// LOADER FUNCTION IMPORTS
import { single_user_data_loader, user_data_loader } from "./components/UserDataLoader";


// check localStorage for authentication status 
const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";       // User authentication check


// PROJECT ROUTES
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* render the login page or admin page based on authentication status */}
      <Route path='/' element={!isAuthenticated ? <LoginPage /> : <Navigate to="/admin" replace />} />         

      <Route path='admin' element={isAuthenticated ? <AdminLayout /> : <Navigate to="/" replace />}>
        
        {/* redirect ./admin to ./admin/users */}
        <Route index element={<Navigate to="users" />} />
        
        <Route path='users' element={<UsersPage />} loader={user_data_loader}>
          <Route path=':customer_number' element={<SingleUserPage />} loader={single_user_data_loader} />
        </Route>
        
      </Route>
    </>
    
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App