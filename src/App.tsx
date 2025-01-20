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
import DemoPage from "./pages/DemoPage";
import PageNotFound from "./pages/PageNotFound";

// LOADER FUNCTION IMPORTS
import { single_user_data_loader, user_data_loader } from "./components/UserDataLoader";



// check localStorage for authentication status 
const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";       // User authentication check

// List of undeveloped pages
const demoPages: string[] = [
  "dashboard",
  "guarantors",
  "loans",
  "decision_models",
  "savings",
  "loan_requests",
  "whitelist",
  "karma",
  "organization",
  "loan_products",
  "savings_products",
  "fees_charges",
  "transactions",
  "services",
  "service_account",
  "settlements",
  "reports",
  "preferences",
  "fees_pricing",
  "audit_logs",
  "system_messages"
]

// PROJECT ROUTES
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* render the login page or admin page based on authentication status */}
      <Route path='/' element={!isAuthenticated ? <LoginPage /> : <Navigate to="/admin" replace />} />         

      <Route path='admin' element={isAuthenticated ? <AdminLayout /> : <Navigate to="/" replace />} errorElement={<PageNotFound />}>
        
        {/* redirect ./admin to ./admin/users */}
        <Route index element={<Navigate to="users" />} />
        
        <Route path='users' element={<UsersPage />} loader={user_data_loader}>
          <Route path=':customer_number' element={<SingleUserPage />} loader={single_user_data_loader} />
        </Route>

        {/* loop through demoPages and create a route for each demoPage */}
        {demoPages.map((demoPage) =>(
          <Route path={demoPage} element={<DemoPage />} key={demoPage}/>
        ))}
        
      </Route>

      {/* Catch-all route for unmatched paths */}
      <Route path="*" element={<PageNotFound />} />
    </>
    
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App