import { Outlet } from "react-router";


export default function AdminLayout() {
  return (
    <>
        <div>Header</div>

        <div>
            <div>Sidebar</div>
            
            <div>
                <Outlet />
            </div>
        </div>
        
    </>
  )
}
