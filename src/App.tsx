import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";


//PAGES & LAYOUTS ---------------------------------------------------------------
import LoginPage from './pages/LoginPage';
import AdminLayout from './layouts/AdminLayout';
import UsersPage from './pages/UsersPage';
import SingleUserPage from './pages/SingleUserPage';
//-------------------------------------------------------------------------------


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LoginPage />} />

      <Route path='Admin' element={<AdminLayout />}>
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
