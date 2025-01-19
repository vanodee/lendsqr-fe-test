// REACT IMPORTS
import { useState, useRef, useEffect } from "react";

// REACT ROUTER IMPORTS
import { Link } from "react-router";

// ICON IMPORTS
import ViewIcon from '../assets/icons/viewUser.svg?react'
import BlacklistIcon from '../assets/icons/blacklist.svg?react'
import ActivateIcon from '../assets/icons/activate.svg?react'


interface UserOptionsDropdownProps {
    customerNumber: string;             // Prop for the user.customer_number
}


const UserOptionsDropdown: React.FC<UserOptionsDropdownProps> = ({ customerNumber }) => {

    const [isOpen, setIsOpen] = useState(false);            // Track if the dropdown is open or not
    const dropdownRef = useRef<HTMLDivElement>(null);       // Reference for the dropdown element

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (
        <div className="dropdown-container" ref={dropdownRef}>

            {/* Options Button */}
            <button className="options-button" onClick={toggleDropdown}>
                ⋮
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="dropdown-menu">

                    {/* View option as a Link */}
                    <Link to={customerNumber}>
                        <button className="dropdown-link"> <ViewIcon /> <p>View</p> </button>
                    </Link>
                    <button className="dropdown-link"> <BlacklistIcon /> <p>Blacklist</p> </button>
                    <button className="dropdown-link"> <ActivateIcon /> <p>Activate</p> </button>

                </div>
            )}
        </div>
    );
};

export default UserOptionsDropdown;
