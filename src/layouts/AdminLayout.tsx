import { Outlet } from "react-router";
import Logo from '../assets/lendsqr_logo.png';
import NotificationIcon from "../assets/icons/notification.svg?react";
import Profile from '../components/Profile'
import SearchBar from "../components/SearchBar";


export default function AdminLayout() {
  return (
    <div className="admin-container">
      
      <div className="admin-header">
        <img src={Logo} alt="Lengsqr Logo" />

        <SearchBar />

        <div className="header-info">
          <p className="docs">Docs</p>
          <NotificationIcon />
          <Profile />
        </div>
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
