// REACT ROUTER IMPORTS
import { Outlet, useLoaderData, Link } from "react-router";

// ICON IMPORTS
import UserCardIcon from '../assets/icons/userCardIcon.svg?react'
import ActiveUserCardIcon from '../assets/icons/activeUserCardIcon.svg?react'
import LoanUserCardIcon from '../assets/icons/loanUserCardIcon.svg?react'
import SavingsUserCardIcon from '../assets/icons/savingsUserCardIcon.svg?react'
import FilterIcon from '../assets/icons/filterIcon.svg?react'

// PATH-INFO HOOK IMPORT (see PathInfo.tsx)
import usePathInfo from "../components/PathInfo";

// INTERFACE IMPORT FOR LOADER FUNCTION (see UserDataLoader.tsx)
import { UserData } from '../components/UserDataLoader'


// ARRAY OF TABLE HEADERS
const userTableHeaders: string[] = [
  'ORGANIZATION',
  'USERNAME',
  'EMAIL',
  'PHONE NUMBER',
  'DATE JOINED',
  'STATUS',
];


export default function UsersPage() {

  // currentPath stores the current route we are on
  const { currentPath } = usePathInfo();
  
  const users = useLoaderData() as UserData[];


  return (
    <>
      {/* Only render the Users page if the current route is ./admin/users */}
      {currentPath == "users" && (
        <div className="users-page">
          
          <h1>Users</h1>

          {/* USER STATISTICS ---------------------------------------------- */}
          <div className="user-stats-container">

            <div className="user-stat-card">
              <UserCardIcon />
              <h2>USERS</h2>
              <p>2,435</p>
            </div>

            <div className="user-stat-card">
              <ActiveUserCardIcon />
              <h2>ACTIVE USERS</h2>
              <p>2,435</p>
            </div>

            <div className="user-stat-card">
              <LoanUserCardIcon />
              <h2>USERS WITH LOANS</h2>
              <p>2,435</p>
            </div>

            <div className="user-stat-card">
              <SavingsUserCardIcon />
              <h2>USERS WITH SAVINGS</h2>
              <p>2,435</p>
            </div>

          </div>


          {/* USER DATA ----------------------------------------------------- */}
          <div className="user-data-table">
            <table>

              <thead>

                <tr>

                  {/* loop through table headers array and attach a filter button to each header */}
                  {userTableHeaders.map((userTableHeader) => (
                    <th key={userTableHeader}>
                      <div>
                        {userTableHeader}
                        <div className="filter-button"><FilterIcon /></div>
                      </div>
                    </th>
                  ))}

                </tr>

              </thead>

              <tbody>
                {/* loop through all users and add their data to the table */}
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.organization}</td>

                    <td>
                      {/* link to view users details */}
                      <Link to={user.customer_number} className="user-name-link">
                        {user.personal_information.full_name}
                      </Link>
                    </td>

                    <td>{user.personal_information.email_address}</td>
                    <td>{user.personal_information.phone_number}</td>
                    <td>{user.date_joined}</td>

                    <td>
                      {/* display different styles based on the user's status */}
                      <div className={`user-status-${user.status}`}>{user.status}</div>
                    </td>

                    <td>
                      <button className="options-button">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      )}


      {/* Render nested routes */}
      <Outlet />
    </>
  )
}
  