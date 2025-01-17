import { Outlet, useLocation } from "react-router";

export default function UsersPage() {

  // useLocation hook checks for routes nested under the Users Page
  const location = useLocation();
  const isOnSingleUser = location.pathname.includes("/Admin/Users/"); 


  return (
    <>
      {/* Render Users content only when not on a nested route */}
      {!isOnSingleUser && (
        <div className="users-page">
          Users
        </div>
      )}

      {/* Render nested routes */}
      <Outlet />
    </>
  )
  }
  