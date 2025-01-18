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
import { user_data_loader } from "./components/UserDataLoader";


// check localStorage for authentication status 
const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";                                     // User authentication check


// PROJECT ROUTES
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* render the login page or admin page based on authentication status */}
      <Route path='/' element={!isAuthenticated ? <LoginPage /> : <Navigate to="/Admin" replace />} />         

      <Route path='Admin' element={isAuthenticated ? <AdminLayout /> : <Navigate to="/" replace />}>
        
        {/* redirect ./admin to ./admin/users */}
        <Route index element={<Navigate to="Users" replace />} />
        
        <Route path='Users' element={<UsersPage />} loader={user_data_loader}>
          <Route path=':userInfo' element={<SingleUserPage />} />
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