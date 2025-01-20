//  REACT IMPORTS
import { useState } from "react";

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
import HamburgerIcon from "../assets/icons/hamburger.svg?react";
import CloseIcon from "../assets/icons/close.svg?react";


export default function AdminLayout() {

  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle sidebar visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="admin-container">
      
      <header className="admin-header">

        <div className="logo-and-hamburger">
          <button onClick={toggleNav}>{!isNavOpen ? <HamburgerIcon /> : <CloseIcon />}</button>
          <img src={Logo} alt="Lengsqr Logo" />
        </div>
        
        <SearchBar />

        <div className="header-info">

          <div className="notifications">
            <p className="loginFont-sm-normal">Docs</p>
            <NotificationIcon />
          </div>
          
          <Profile />
        </div>

      </header>

      <aside className={!isNavOpen ? "admin-nav" : "admin-hamburger"}>
        <NavList />
      </aside>
            
      <main className="admin-contentArea">
        <Outlet />
      </main>

    </div>
  )
}
