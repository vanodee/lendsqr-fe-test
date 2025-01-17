import Avatar from '../assets/avatar.png'
import Dropdown from '../assets/icons/dropdown.svg?react'

export default function Profile() {
    return (
        <div className='profile-container'>

            <img src={Avatar} alt="Avatar" />

            <p className="adminFont-base-medium color-primary-100">Adedeji</p>

            <Dropdown />

        </div>
    )
}
