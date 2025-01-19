// REACT IMPORTS
import { useState } from "react";

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

// PAGINATION COMPONENT IMPORT (see Pagination.tsx)
import Pagination from "../components/Pagination";

// FILTER COMPONENT IMPORT (see FilterDropdown.tsx)
import FilterDropdown, { FilterField } from "../components/FilterDropdown";

// USER OPTIONS COMPONENT IMPORT (see UserOptionsDropdown)
import UserOptionsDropdown from "../components/UserOptionsDropdown";




// ARRAY OF TABLE HEADERS WITH FILTER CONFIGURATION
const filterFields: FilterField[] = [
  { header: "Organization", value: "organization", placeholder:"Select", type: "select", options: ["Lendsqr", "Paystack", "Flutterwave", "Kuda", "Irorun"] },
  { header: "Username", value: "username", placeholder:"User", type: "text" },
  { header: "Email", value: "email", placeholder:"Email", type: "text" },
  { header: "Phone Number", value: "phone", placeholder:"Phone Number", type: "text" },
  { header: "Date Joined", value: "dateJoined", placeholder:"Date", type: "date" },
  { header: "Status", value: "status", placeholder:"Select", type: "select", options: ["Active", "Inactive", "Pending", "Blacklisted"] },
];


export default function UsersPage() {

  // currentPath stores the current route we are on
  const { currentPath } = usePathInfo();
  
  // JSON data from loader function is stored with type of UserData
  const users = useLoaderData() as UserData[];

  // State for filters
  const [filters, setFilters] = useState(
    filterFields.reduce((acc, field) => {
      acc[field.value] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  // State for dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // initialize pagination variables. ItemsPerPage= 10, currentPage= 1
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Update filter and pagination states, when new filters are applied
  const handleFiltersChange = (newFilters: Record<string, string>) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  // Reset filters when the reset button is clicked
  const resetFilters = () => {
    const initialFilters = filterFields.reduce((acc, field) => {
      acc[field.value] = "";
      return acc;
    }, {} as Record<string, string>);
    setFilters(initialFilters);
  };


   // Apply filters to the dataset
   const filteredUsers = users.filter((user) => {
      return (
        (filters.organization === "" || user.organization.includes(filters.organization)) &&
        (filters.username === "" || user.personal_information.full_name.includes(filters.username)) &&
        (filters.email === "" || user.personal_information.email_address.includes(filters.email)) &&
        (filters.phone === "" || user.personal_information.phone_number.includes(filters.phone)) &&
        (filters.dateJoined === "" || user.date_joined.includes(filters.dateJoined)) &&
        (filters.status === "" || user.status.includes(filters.status))
      );
    });

  // Calculate the number of items to be displayed
  const totalItems = filteredUsers.length;
  const currentPageData = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


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
              <p>{users.length}</p>
            </div>

            <div className="user-stat-card">
              <ActiveUserCardIcon />
              <h2>ACTIVE USERS</h2>
              <p>{users.filter(user => user.status === "Active").length}</p>
            </div>

            <div className="user-stat-card">
              <LoanUserCardIcon />
              <h2>USERS WITH LOANS</h2>
              <p>335</p>
            </div>

            <div className="user-stat-card">
              <SavingsUserCardIcon />
              <h2>USERS WITH SAVINGS</h2>
              <p>253</p>
            </div>

          </div>


          {/* USER DATA TABLE ----------------------------------------------------- */}
          <div className="user-data-table">
            <table>

              {/* Render the FilterDropdown component */}
              {activeDropdown && (
                <FilterDropdown
                  fields={filterFields}
                  onFilterChange={handleFiltersChange}
                  onResetFilters={resetFilters}
                />
              )}

              <thead>

                <tr>

                  {/* loop through table headers array and attach a filter button to each header */}
                  {filterFields.map((field) => (
                    <th key={field.value}>
                      <div>

                        {field.header}

                        <div className="filter-button"  onClick={() => setActiveDropdown(activeDropdown ? null : field.value)}>
                          <FilterIcon />
                        </div>

                      </div>
                    </th>
                  ))}

                </tr>

              </thead>

              <tbody>
                {/* loop through paginated and filtered users */}
                {currentPageData.map((user) => (
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
                      {/* <button className="options-button">⋮</button> */}
                      <UserOptionsDropdown customerNumber={user.customer_number} />
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* PAGINATION CONTROLS----------------------------------------------------- */}
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
            onItemsPerPageChange={(items) => setItemsPerPage(items)}
          />

        </div>
      )}


      {/* Render nested routes */}
      <Outlet />
    </>
  )
}
  