import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router";


//PAGES & LAYOUTS ---------------------------------------------------------------
import LoginPage from './pages/LoginPage';
import AdminLayout from './layouts/AdminLayout';
import UsersPage from './pages/UsersPage';
import SingleUserPage from './pages/SingleUserPage';
//-------------------------------------------------------------------------------


// localStorage.setItem("isAuthenticated", "false");
const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={!isAuthenticated ? <LoginPage /> : <Navigate to="/Admin" replace />} />

      <Route path='Admin' element={isAuthenticated ? <AdminLayout /> : <Navigate to="/" replace />}>
        <Route path='Users' element={<UsersPage />}>
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