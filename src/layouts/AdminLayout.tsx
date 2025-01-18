// REACT ROUTER IMPORTS
import { Outlet } from "react-router";

// IMAGE IMPORTS
import Logo from '../assets/lendsqr_logo.png';

// COMPONENT IMPORTS
import Profile from '../components/Profile'
import SearchBar from "../components/SearchBar";
import NavList from "../components/NavList";

// ICON IMPORTS
import NotificationIcon from "../assets/icons/notification.svg?react";


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
        <NavList />
      </div>
            
      <div className="admin-contentArea">
        <Outlet />
      </div>

    </div>
  )
}
