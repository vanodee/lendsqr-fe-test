// REACT ROUTER IMPORTS
import { Link, Outlet } from "react-router";

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
      
      <header className="admin-header">
        <Link to='/'>
          <img src={Logo} alt="Lengsqr Logo" />
        </Link>
        
        <SearchBar />

        <div className="header-info">
          <p className="adminFont-sm-normal">Docs</p>
          <NotificationIcon />
          <Profile />
        </div>
      </header>

      <aside className="admin-nav">
        <NavList />
      </aside>
            
      <main className="admin-contentArea">
        <Outlet />
      </main>

    </div>
  )
}
