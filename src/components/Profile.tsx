// IMAGE IMPORTS
import Avatar from '../assets/avatar.png'

// ICON IMPORTS
import DropdownIcon from '../assets/icons/dropdown.svg?react'


export default function Profile() {
    return (
        <div className='profile-container'>

            <img src={Avatar} alt="Avatar" />

            <p className="adminFont-base-medium">Adedeji</p>

            <DropdownIcon className='icon' />

        </div>
    )
}
