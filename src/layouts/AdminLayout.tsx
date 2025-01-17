import { Outlet } from "react-router";


export default function AdminLayout() {
  return (
    <div className="admin-container">
      
      <div className="admin-header">
        Header
      </div>

      <div className="admin-nav">
        Navbar
      </div>
            
      <div className="admin-contentArea">
        <Outlet />
      </div>
    </div>
  )
}
